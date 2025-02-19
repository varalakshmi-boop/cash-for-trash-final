document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            sections.forEach(sec => sec.style.display = "none");
            document.querySelector(this.getAttribute("href")).style.display = "block";
        });
    });
});

function showWaste(type) {
    const content = {
        "e-waste": "<h3>E-Waste</h3><p>Recycle your old electronics.</p>",
        "paper-waste": "<h3>Paper Waste</h3><p>Sell your old newspapers and books.</p>",
        "old-clothes": "<h3>Old Clothes</h3><p>Donate or sell used clothes.</p>"
    };
    document.getElementById("waste-content").innerHTML = content[type];
}