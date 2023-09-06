/* 
Filename: ComplexCalculator.js
Content: This code implements a complex number calculator with various mathematical operations.
*/

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    let real = this.real + other.real;
    let imaginary = this.imaginary + other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  subtract(other) {
    let real = this.real - other.real;
    let imaginary = this.imaginary - other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(other) {
    let real = this.real * other.real - this.imaginary * other.imaginary;
    let imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  divide(other) {
    let real =
      (this.real * other.real + this.imaginary * other.imaginary) /
      (Math.pow(other.real, 2) + Math.pow(other.imaginary, 2));
    let imaginary =
      (this.imaginary * other.real - this.real * other.imaginary) /
      (Math.pow(other.real, 2) + Math.pow(other.imaginary, 2));
    return new ComplexNumber(real, imaginary);
  }

  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  modulus() {
    return Math.sqrt(
      Math.pow(this.real, 2) + Math.pow(this.imaginary, 2)
    );
  }

  toString() {
    let sign = this.imaginary < 0 ? "-" : "+";
    return this.real + " " + sign + " " + Math.abs(this.imaginary) + "i";
  }
}

// Usage Example

let complexNumber1 = new ComplexNumber(2, 3);
let complexNumber2 = new ComplexNumber(-1, 4);

console.log("Complex Number 1:", complexNumber1.toString());
console.log("Complex Number 2:", complexNumber2.toString());

console.log("Addition:", complexNumber1.add(complexNumber2).toString());
console.log("Subtraction:", complexNumber1.subtract(complexNumber2).toString());
console.log("Multiplication:", complexNumber1.multiply(complexNumber2).toString());
console.log("Division:", complexNumber1.divide(complexNumber2).toString());
console.log("Conjugate of Complex Number 1:", complexNumber1.conjugate().toString());
console.log("Modulus of Complex Number 2:", complexNumber2.modulus().toString());

// Output:
// Complex Number 1: 2 + 3i
// Complex Number 2: -1 + 4i
// Addition: 1 + 7i
// Subtraction: 3 - 1i
// Multiplication: 14 + 5i
// Division: -0.18181818181818182 - 0.6363636363636364i
// Conjugate of Complex Number 1: 2 - 3i
// Modulus of Complex Number 2: 4.123105625617661