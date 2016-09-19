var title = document.getElementsByClassName("required")[0];
var description = document.getElementsByClassName("required")[1];
var checkbox = document.getElementsByClassName("required")[2];

function load() {
    document.getElementById("mainForm").onsubmit = function (event) {

        if (title.value == "" || title.value == null) {
            title.style.backgroundColor = "red";
            event.preventDefault();
            alert("You must fill in the Title.");
        }
        if (description.value == "" || description.value == null) {
            description.style.backgroundColor = "red";
            event.preventDefault();
            alert("You must fill in the description.");
        }
        if (checkbox.check === false) {
            checkbox.style.backgroundColor = "red";
            event.preventDefault();
            alert("You must accept to continue.")
        }
    }

    title.addEventListener("keydown", function () {
        title.style.backgroundColor = "white";
    });

    description.addEventListener("keydown", function () {
        description.style.backgroundColor = "white";
    });
}

load();
