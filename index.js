function img1Hover() {
    document.getElementById("img1").style.width = '34%';
    document.getElementById("img2").style.width = '28%';
    document.getElementById("img3").style.width = '28%';

    document.getElementById("nome").innerHTML = 'DÉBORA CAVALCANTE'
    document.getElementById("cargo").innerHTML = 'DESENVOLVEDORA WEB'
}
function img2Hover() {
    document.getElementById("img1").style.width = '28%';
    document.getElementById("img2").style.width = '34%';
    document.getElementById("img3").style.width = '28%';
    
    document.getElementById("nome").innerHTML = 'JOÃO PAULO NASCIMENTO'
    document.getElementById("cargo").innerHTML = 'DESENVOLVEDOR UNITY'
}
function img3Hover() {
    document.getElementById("img1").style.width = '28%';
    document.getElementById("img2").style.width = '28%';
    document.getElementById("img3").style.width = '34%';
    
    document.getElementById("nome").innerHTML = 'ALEXANDRE SOUSA'
    document.getElementById("cargo").innerHTML = 'DESIGNER'
}

function mouseout() {
    document.getElementById("img1").style.width = '30%';
    document.getElementById("img2").style.width = '30%';
    document.getElementById("img3").style.width = '30%';
    
    document.getElementById("nome").innerHTML = 'JUNGLECRAFT'
    document.getElementById("cargo").innerHTML = 'GAMES'
}