let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")

function generate() {
    pass1.textContent = ""
    pass2.textContent = ""
    for (let i = 0; i < 15; i++) {
        index1 = Math.floor(Math.random() * characters.length)
        index2 = Math.floor(Math.random() * characters.length)
        pass1.textContent += characters[index1]
        pass2.textContent += characters[index2]
    }    
}

function copy1() {
    var copyText1 = document.getElementById("password1");
    copyText1.select();
    copyText1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText1.value);
}

function copy2() {
    var text2 = document.getElementById("password2");
    var copyText2 = text2.textContent()
    copyText2.select();
    copyText2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText2.value);
}