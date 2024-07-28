function proximo(){
    if(document.getElementById("dolar").value === "" || document.getElementById("euro").value === "" || document.getElementById("yuan").value === ""){
        alert("Preencha todos os campos!")
    } else {
        localStorage.setItem('dolar', document.getElementById("dolar").value);
        localStorage.setItem('euro', document.getElementById("euro").value);
        localStorage.setItem('yuan', document.getElementById("yuan").value);

        document.getElementById("valores").style.display = "none";
        document.getElementById("conversor").style.display = "flex"
    }
}

function converte(){
    var dolarValor = localStorage.getItem('dolar');
    var euroValor = localStorage.getItem('euro');
    var yuanValor = localStorage.getItem('yuan');
    var realValor = document.getElementById("valorReal").value;

    document.getElementById("dolarConvertido").innerHTML = "US$ " + (realValor / dolarValor).toFixed(2);
    document.getElementById("euroConvertido").innerHTML = "€ " + (realValor / euroValor).toFixed(2);
    document.getElementById("yuanConvertido").innerHTML = "¥ " + (realValor / yuanValor).toFixed(2);
}

//0.78 6.13 5.64