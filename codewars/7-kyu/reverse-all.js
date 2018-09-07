// https://www.codewars.com/kata/ttt-number-8-reverse-all/train/javascript

function reverseAll(arr){
  console.log("arr>>>",arr);
  let output = []

  output = arr.reverse().map((element)=>{
    console.log("this is element",element);
    // console.log("this is element.split",element.split("\n"))

    // return element.split("\n").reverse().join("\n")

    reverseStringByType(element.split("\n"));

  })

  // console.log("this is output>>>",output);
  return output;
}

function reverseStringByType(input){
  console.log("input>>>",input);


  let lastCharType = null;
  for ( let i = 0; i < input.length; i++ ) {
    if ( lastCharType === null ) {

    }
  }

  let strStr = "";
  let strNum = "";
  let strChar = "";

}

console.log(reverseAll(["abc123!@#\n314159","987bbc\n#$%\nxyz886"]),["zyx688\n%$#\n789cbb","951413\ncba321#@!"])
// Test.assertSimilar(reverseAll(["JOVmG$&&?@\nJcE91632PXFhMAsRli\n30620DOXPZoO149\n5513??%-&@YUpyCmRUAO","_@!?#^15915736199076984"]),
// ["^#?!@_48967099163751951","3155@&-%??OAURmCypUY\n02603OoZPXOD941\nEcJ23619ilRsAMhFXP\nGmVOJ@?&&$"])
