// This file is: ./script.js
// This file have the browser's js code is here

fetch("./static/partials/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

fetch("./static/partials/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });