//var,let,const>>types

var age = 17;
if (age >= 18) {
  console.log("Allow to vote");
} else if (age >= 13) {
  console.log("Not allow to vote");
} else {
  console.log("You are Children");
}

//nested if-else
//let age = 17;
let withAdult = true;
if (age >= 15) {
  console.log("Allowed to market");
  if (withAdult) {
    console.log("You entered horror home");
  } else {
    console.log("NOt entered horror home");
  }
} else {
  console.log("Not allowed to market");
}

//const type

const salary = 25000;
const isBCS = true;
const height = 61;

// if(salary>20000 && height>66){
//     console.log('su----patro');
// }
// else{
//     console.log('onno patro khuji');
// }

if (salary > 25000 || height > 72) {
  console.log("bolo baba kobul");
} else {
  console.log("vaag toi mokbul");
}
