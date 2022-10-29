const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", function(event) {
    const x = event.pageX - btnE1.offsetLeft;
    const y = event.pageY - btnE1.offsetTop;
    console.log(event.pageX);
    console.log(btnE1.offsetLeft);

    btnE1.style.setProperty("--xPosition", x + "px");
    btnE1.style.setProperty("--yPosition", y + "px");
});