const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const weightInput = e.target.querySelector('#weight_id');
  const heightInput = e.target.querySelector('#height_id');
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  if (!weight){
    setResult('Peso inválido!', false);
    return;
  }

  if (!height){
    setResult('Altura inválido!', false);
    return;
  }

  const bmi = getBMI(weight, height);
  const bmiLevel = getBmiLevel(bmi);
  const msg = `Seu IMC é ${bmi} (${bmiLevel}).`;
  setResult(msg, true);
});

function getBmiLevel(bmi){
  const level = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (bmi >= 39.9) return level[5];
  if (bmi >= 34.9) return level[4];
  if (bmi >= 29.9) return level[3];
  if (bmi >= 24.9) return level[2];
  if (bmi >= 18.5) return level[1];
  if (bmi < 18.5) return level[0];
}

function getBMI(weight, height){
  return (weight / height ** 2).toFixed(2);
}

function createPar(){
  return document.createElement('p');
}

function setResult(msg, isValid){
  const result = document.querySelector('.result');
  result.innerHTML = '';
  const par = createPar();
  par.classList.add(isValid ? 'par-success' : 'par-error')
  par.innerHTML = msg;
  result.appendChild(par);
}