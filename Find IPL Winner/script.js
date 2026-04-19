
const images = [
    { pic: "LOGO/CSK.png", bodyColor: "#F7B500", boxColor: "#FFF3C1" },
    { pic: "LOGO/DD.png",  bodyColor: "#1E6CF2", boxColor: "#A9C7FF" },
    { pic: "LOGO/GT.png",  bodyColor: "#0A2737", boxColor: "#214A63" },
    { pic: "LOGO/KKR.png", bodyColor: "#4B0082", boxColor: "#7A3CAD" },
    { pic: "LOGO/LSG.png", bodyColor: "#009CDE", boxColor: "#75D1FF" },
    { pic: "LOGO/MI.png",  bodyColor: "#004BA0", boxColor: "#6D9CFF" },
    { pic: "LOGO/RCB.png", bodyColor: "#D8202A", boxColor: "#FFB4B4" },
    { pic: "LOGO/SRH.png", bodyColor: "#F4521E", boxColor: "#FFB595" }
];


let btn = document.querySelector('button')
let main = document.querySelector('main');

btn.addEventListener("click", function() {
    const i = Math.floor(Math.random() * images.length);
    const box = document.querySelector(".data");

  // Image
    box.style.backgroundImage = `url(${images[i].pic})`;
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "center";

    box.style.backgroundColor = images[i].boxColor;

    main.style.backgroundImage = "none";
    main.style.backgroundColor = images[i].bodyColor;
});