// In a double strand DNA you find 3 more Reading frames
//than the single strand DNA reading frames base
//on the reverse complement-strand.
//
// Input
// Given a DNA sequence like the following
//
// AGGTGACACCGCAAGCCTTATATTAGC
// Processing
// In the reverse complement the following transformations are made
//
// A-->T
// G-->C
// T-->A
// C-->G
// Due to the splicing of DNA strands and
//the fixed reading direction of a nucleotide strand,
//the reverse complement gets read from right to left.
//
// DNA                     AGGTGACACCGCAAGCCTTATATTAGC
// Reverse complement:     TCCACTGTGGCGTTCGGAATATAATCG
// reversed reverse frame: GCTAATATAAGGCTTGCGGTGTCACCT
// Output
// You'll have to output:
//
// Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
// Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
// Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
//
// Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
// Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
// Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T
// Instructions on how to output the first 3 frames
//are on a previous simpler kata Decompose single strand DNA
//into 3 reading frames
//
// Series
// Decompose single strand DNA into 3 reading frames
//
// Decompose double strand DNA into 6 reading frames
//
// Translate DNA to protein in 6 frames

function decomposeDoubleStrand(singleStrand) {
  const reverseCompl = {
      "A":"T",
      "G":"C",
      "T":"A",
      "C":"G"
    }
  let reverseFrame = singleStrand.split('').reverse().map((dnaLetter)=>{
    return reverseCompl[dnaLetter]
  }).join('');
  return [
    `Frame 1: ${singleStrand.match(/.../g).join(' ')}`,
    `Frame 2: ${singleStrand.match(/^.|...|..$/g).join(' ')}`,
    `Frame 3: ${singleStrand.match(/^..|...|.$/g).join(' ')}`,
    `\nReverse Frame 1: ${reverseFrame.match(/.../g).join(' ')}`,
    `Reverse Frame 2: ${reverseFrame.match(/^.|...|..$/g).join(' ')}`,
    `Reverse Frame 3: ${reverseFrame.match(/^..|...|.$/g).join(' ')}`
  ].join('\n');
}

// Expected: Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC\n
// instead : Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC\n
// Expected: Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC\n
// instead : Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC\n
// instead : Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C\n
// Expected: Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C\n\n
// Expected: Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT\n
// instead : Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT\n
// Expected: Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT\n
// instead : Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT\n
// Expected: Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T',
// instead : Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T'


console.log(decomposeDoubleStrand("AGGTGACACCGCAAGCCTTATATTAGC"));
