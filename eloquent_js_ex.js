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

// Ex 2.5 rewrite 2.3 using a for loop
var line = "";
for (var counter = 0; counter < 10; counter += 1) {
  line = line + "#";
  console.log(line);
};
  