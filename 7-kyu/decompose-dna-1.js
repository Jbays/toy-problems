// In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.
//
// Input
// In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:
//
// AGGTGACACCGCAAGCCTTATATTAGC
// Output
// For the output we are going to take the combinations and show them in the following manner:
//
// Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
// Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
// Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
// For frame 1 split all of them in groups of three starting by the first base (letter).
//
// For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.
//
// For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.
//
// Series
// Decompose single strand DNA into 3 reading frames
//
// Decompose double strand DNA into 6 reading frames
//
// Translate DNA to protein in 6 frames

function decomposeSingleStrand(singleStrand){
  let frame1 = "";
  let frame2 = "";
  let frame3 = "";
  for ( let i = 0; i < singleStrand.length; i++ ) {
    frame1 += singleStrand[i];
    frame2 += singleStrand[i];
    frame3 += singleStrand[i];
    if ( i % 3 === 0 ) {
      frame2+= " ";
    }
    if ( (i+1) % 3 === 0 ) {
      frame1+= " ";
    }
    if ( (i+2) % 3 === 0 ) {
      frame3+= " ";
    }

  }
  return ("Frame 1: "+frame1+ "\n"+
          "Frame 2: "+frame2+ "\n"+
          "Frame 3: "+frame3)
}

console.log(decomposeSingleStrand("AGGTGACACCGCAAGCCTTATATTAGC"));
