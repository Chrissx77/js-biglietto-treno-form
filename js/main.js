var userName = document.getElementById("userName");
var userKm = document.getElementById("km");
var userAge = document.getElementById("eta");


const buttonCreate = document.getElementById("create");
buttonCreate.addEventListener("click",
    function () {
        userName = document.getElementById("userName");
        userKm = parseInt(document.getElementById("km").value);
        userAge = parseInt(document.getElementById("eta").value);

        document.getElementById("user").innerHTML = userName.value;

        let total;
        let price = (userKm * 0.21).toFixed(2);
        if (userAge >= 65) {
            let discount = ((price * 40) / 100).toFixed(2);
            total = (price - discount).toFixed(2);
            document.getElementById("ticket").innerHTML = "Biglietto Sconto Over 65";
        } else if (userAge < 18) {
            let discount = ((price * 20) / 100).toFixed(2);
            total = (price - discount).toFixed(2);
            document.getElementById("ticket").innerHTML = "Biglietto Sconto under 18";
        } else {
            total = price;
            console.log(total);
            document.getElementById("ticket").innerHTML = "Biglietto standard";
        }

        document.getElementById("price").innerHTML = total;
        document.querySelector(".ticket-table").classList.add("active");

    }
)

const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click",
    function () {
        document.querySelector(".ticket-table").classList.remove("active");

        userName.value = "";

        // DEBUG
        console.log(userKm);
        console.log(userAge);
    }
)
