// Ex 2.2 - 2 to the 10th power
var counter = 1;
var total = 1;
while (counter <= 10) {
  total = total * 2;
  console.log("2 to the power of: " + counter + " is: " + total);
  counter = counter + 1;
}

// Ex 2.3 - draw a triangle in 10 lines using "#"
var line = "";
var counter = 1;
while (counter <= 10) {
  line = line + "#";
  console.log(line);
  counter += 1;
}

// Ex 2.4 rewrite 2.2 using a for loop
var total = 1;
for (var counter = 0; counter < 10; counter += 1)
  total = total * 2;
console.log(total);

// Ex 2.4 rewrite 2.3 using a for loop
var line = "";
for (var counter = 0; counter < 10; counter += 1) {
  line = line + "#";
  console.log(line);
};

// Ex 2.5 prompt user to answer what is 2 + 2
var answer = Number(prompt("What is 2 + 2 = "));
if (answer == 4)
  alert("You are a math GOD!");
else if (answer == 3 || answer == 5)
  alert("So close!!!");
else
  alert("Did you sleep through math??");

// Ex 2.6 repeat 2 + 2 until user gives the right answer
var answer;
while (true) {
  answer = Number(prompt("what is 2 + 2 = "));
  if (answer == 4) {
    alert("You are a genius");
    break;
  }
  else if (answer == 3 || answer == 5)
    alert("You are so close!")
  else
    alert("Why do I even know you?");
}
  