const acc = document.getElementsByClassName ("accordion-content");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}


//Footer
const currentDate = new Date();
let year = currentDate.getFullYear();
            document.getElementById("year").outerHTML = year;