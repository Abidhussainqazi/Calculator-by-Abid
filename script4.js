let buttons = document.getElementById("buttons");
let li = buttons.querySelectorAll("li");
let result = document.getElementById("result");


for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            result.innerHTML = eval(result.innerHTML);
        } else {
            if (this.innerHTML == "/") {
                result.innerHTML += "/";
            } else if (this.innerHTML == "x") {
                result.innerHTML += "*";
            } else if (this.innerHTML == 'Clear') {
                result.innerHTML = "";
            } else {
                result.innerHTML += this.innerHTML;
            }
        }
    });
}