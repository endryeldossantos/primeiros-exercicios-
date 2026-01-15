function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    // console log(typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2
}

function SUBITRAÇÂO(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostaSub")
    resp.textContent = numero3 - numero4
}

function MULTIPLICAÇÂO(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respostaMUL")
    resp.textContent = numero5 * numero6
}

function DIVISÂO(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    if(numero8 !== 0){
        document.getElementById("respostaDIV").innerHTML = (numero7 / numero8).toFixed(2)
    }else{
        document.getElementById("respostaDIV").innerHTML = "Não há divisão por 0, digite outro número!!!"
        // alert("Não há divisão por 0, digite outro número!!!")
    
    }
}