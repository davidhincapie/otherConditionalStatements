//short circuit evaluation. Will run only if all is true
function isAdult(age) {
  if (age && age >= 18) {
    return true;
  } else {
    return false;
  }
}

//OR using short circuiting
function isAdult(age) {
  return age && age >= 18;
}
console.log(isAdult(19));

//Example 2
function countToFive(start) {
  for (let i = start; i <= 5; i++) {
    console.log(i);
  }
}
countToFive(3);

//OR
function countToFive(start) {
  start = start || 1;
  for (let i = start; i <= 5; i++) {
    console.log(i);
  }
}
countToFive();

function greet(name) {
  name && console.log(`Hi ${name}!`);
}
greet('David');