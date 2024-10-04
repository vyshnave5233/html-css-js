//-------------------- Java Script --------------------//
let container = document.querySelector(".container");

for (let i = 0; i < 48; i++) {
    container.innerHTML += `
    <div class="color">
            <span class="hex-code">#1324df</span>
        </div>
    `
}

let colors = document.querySelectorAll(".color");

colors.forEach((color)=>{
    function ranRed(){
        return Math.floor(Math.random() * 255);
    }
    function ranGreen(){
        return Math.floor(Math.random() * 255);
    }
    function ranblue(){
        return Math.floor(Math.random() * 255);
    }
    function rgbToHex(r, g, b) {
        var hexR = r.toString(16).padStart(2, "0");
        var hexG = g.toString(16).padStart(2, "0");
        var hexB = b.toString(16).padStart(2, "0");

        return "#" + hexR + hexG + hexB;
    }

    let hexColor = rgbToHex(ranRed(), ranGreen(),ranblue());
    // console.log(hexColor);
    color.style.backgroundColor = hexColor;
    let hexCode = color.querySelector(".hex-code");
    hexCode.textContent = hexColor;



    // copy code function 
    color.addEventListener("click", (box)=>{
        box.target.style.opacity = 0.8;
        setTimeout(()=>{
            box.target.style.opacity = 1;
        }, 100);
        let hexCode = box.target.querySelector(".hex-code");
        
        if(hexCode.textContent != "copied"){
            let code = hexCode.textContent;
            hexCode.textContent = "copied";
            setTimeout(()=>{
                hexCode.textContent = code;
            }, 1000);
            copyCode(code);
        }

        
    })
});


function copyCode(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}