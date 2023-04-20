//if truthy print true//
//if flasy print.....
//false="The boolean value false is falsy"//
//null="The null value is falsy"//
//undefined="undefined is falsy"//
//0="The number 0 is falsy (the only falsy number)"//
//"_"="The empty string is falsy (the only falsy string)"//

//inputValues//
//"I am a string"//
const iV1 = "I am a string";
//false//
const iV2 = false;
//null//
const iV3 = null;
//undefined//
const iV4 = undefined;
//0//
const iV5 = 0;
//""//
const iV6 = "";

//base conditonal expression//
//if (condition) {
//  console.log("true");
//} else {
//  console.log();
//}

//iV1//
if (iV1) {
  console.log("true");
} else {
  console.log("you done messed up somewhere");
}
//iV2//
if (iV2) {
  console.log("true");
} else {
  console.log("The boolean value false is falsy");
}
//iV3//
if (iV3) {
  console.log("true");
} else {
  console.log("The null value is falsy");
}
//iV4//
if (iV4) {
  console.log("true");
} else {
  console.log("undefined is falsy");
}
//iV5//
if (iV5) {
  console.log("true");
} else {
  console.log("The number 0 is falsy (the only falsy number)");
}
//iV6//
if (iV6) {
  console.log("true");
} else {
  console.log("The empty string is falsy (the only falsy string)");
}
