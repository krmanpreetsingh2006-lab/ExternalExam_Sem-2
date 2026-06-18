function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);

    if (num < 0) {
        document.getElementById("result").innerHTML =
            "Factorial is not defined for negative numbers.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML =
        `Factorial of ${num} is ${factorial}`;
}