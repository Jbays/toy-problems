// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:
//
// the returned string should only contain lowercase letters

function kebabize(str) {
  str = str.replace(/[^a-zA-Z]/g,"");
  let output = "";

  for ( let i = 0; i < str.length; i ++ ) {
    if ( /[a-z]/.test(str[i]) ) {
      output+= str[i];
    } else if ( str[i] === str[i].toUpperCase() ) {
      if ( i === 0 ) {
        output += str[i].toLowerCase();
      } else {
        output += "-"+str[i].toLowerCase();
      }
    }
  }
  return output;
}

console.log("codaqbpykrca-tgvi",kebabize("codaqbp70ykrcaT6gvi"))
// tof8A0apOk5ut0529
// Expected: 'tof-aap-okut', instead got: 'tof-a-0ap-okut-0'
// plgjp1x7y7wkpkL0udi
// Expected: 'plgjpxywkpk-ludi', instead got: 'plgjpxywkpk-l-0udi'
// j4moIxGViuuyb40lik9
// Expected: 'jmo-ix-g-viuuyblik', instead got: 'jmo-ix-g-viuuyb-0lik'

// console.log("znhqzbscgslcj-tt",kebabize("ZnhqzbscgslcjTt"))
// console.log("camels-have-humps >>>>>>>",kebabize('camelsHave3Humps'));
// console.log("camels-have-three-humps >",kebabize('camelsHaveThreeHumps'));
