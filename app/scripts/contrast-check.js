function hexToRgb(hex){
  hex = hex.replace('#','');
  if(hex.length===3){
    hex = hex.split('').map(h=>h+h).join('')
  }
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  return [r,g,b];
}

function srgbToLinear(c){
  c = c/255;
  return (c <= 0.03928)? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
}

function luminance(hex){
  const [r,g,b] = hexToRgb(hex);
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126*R + 0.7152*G + 0.0722*B;
}

function contrast(hex1, hex2){
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const L1 = Math.max(l1,l2);
  const L2 = Math.min(l1,l2);
  return (L1 + 0.05) / (L2 + 0.05);
}

const pairs = [
  ['#C04E19', '#FFFFFF'], // primary on white (updated for contrast)
  ['#C04E19', '#000000'], // primary on black
  ['#0d47a1', '#FFFFFF'], // primary-custom on white
  ['#0E7A35', '#FFFFFF'], // whatsapp green on white (updated)
  ['#0E7A35', '#000000'],
  ['#333333', '#FFFFFF'],
  ['#617589', '#FFFFFF'],
  ['#9ca3af', '#111827'],
  ['#f5f5f5', '#333333']
];

console.log('WCAG contraste para pares importantes\n');
for(const [a,b] of pairs){
  console.log(`${a} vs ${b} => ${contrast(a,b).toFixed(2)}:1`);
}

// helper to check pass/fail
function check(hexA, hexB){
  const ratio = contrast(hexA, hexB);
  return {
    ratio: ratio,
    aa: ratio>=4.5,
    aaLarge: ratio>=3,
    aaa: ratio>=7
  }
}

console.log('\nChecks:');
[['primary','#C04E19','#FFFFFF'], ['primary-dark','#0d47a1','#FFFFFF'], ['whatsapp','#0E7A35','#FFFFFF']].forEach(([name,a,b])=>{
  const r = check(a,b);
  console.log(`${name}: ${a} on ${b} => ${r.ratio.toFixed(2)}:1; AA:${r.aa} AA-large:${r.aaLarge} AAA:${r.aaa}`);
});
