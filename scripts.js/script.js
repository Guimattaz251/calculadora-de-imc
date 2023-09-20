const form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5){
        description = 'Olha, você tá abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'É brother, você tá no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc > 25 && imc <= 30) {
        description = 'Olha, você tá com sobrepeso!';
    } else if (imc > 30 && imc <= 35) {
        description = 'Rapaz... tu tá com obesidade moderada';
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado, alerta de obesidade severa';
    } else {
        description = 'Cuidado! Obesidade nível 3';
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;



});