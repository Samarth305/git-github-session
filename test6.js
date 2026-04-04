String.prototype.reverseWords = function () {
    return this.split(" ").reverse().join(" ");
};

Array.prototype.getEven = function () {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.getOdd = function () {
    return this.filter(num => num % 2 !== 0);
};

let sentence = "Hello World from JavaScript";
console.log("Original Sentence:", sentence);
console.log("Reversed Words:", sentence.reverseWords());

let numbers = [1, 2, 3, 4, 5, 6];
console.log("Original Numbers:", numbers);
console.log("Even Numbers:", numbers.getEven());
console.log("Odd Numbers:", numbers.getOdd());
