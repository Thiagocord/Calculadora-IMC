const frm = document.getElementById("formula");

frm.addEventListener("submit", (e) => {
    const resp = document.querySelector(".resposta");
    const nome = frm.innome.value;
    const altura = Number(frm.inaltura.value);
    const peso = Number(frm.inpeso.value);

    const IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está abaixo do peso`
    } else if (IMC < 25) {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está com peso normal`
    } else if (IMC < 30) {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está sobrepeso`
    } else if (IMC < 35) {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está com Obesidade Grau I`
    } else if (IMC < 40) {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está com Obesidade Grau II`
    } else {
        resp.innerText = `${nome} seu IMC é ${IMC.toFixed(1)} e você está com Obesidade Grau III`
    }

    e.preventDefault();
});