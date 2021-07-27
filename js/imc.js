
 const calcular = document.getElementById('calcular'); // variavel global


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso /(altura * altura)). toFixed(2);
        let classificacao = "";

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso '
        }else if(valorIMC < 25){
            classificacao = 'Com peso ideal parabéns!!!';
        }else if(valorIMC < 30){
            classificacao = 'Um pouco acima do peso';
        }else if(valorIMC < 35){
            classificacao = ' Com obesidade grau I';
        }else if(valorIMC < 40 ){
            classificacao ='Com obesidade grau II';
        }else {
            classificacao = 'Com obesidade grau III cuidado';
        }

        resultado.textContent = ` ${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
       resultado.textContent = 'Preencha todos os campos!!'
    }
}

calcular.addEventListener('click', imc);


