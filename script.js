(function () {
  let id_num = document.querySelector(".api_number");
  let advice_text = document.querySelector(".api_content");
  let btn = document.querySelector("button");
  let dado = document.querySelector(".dado");
  let adviceNumber = 9;
  let maxNumber = 254;
  

  getAdvice();

  function getAdvice(){
    fetch(`https://api.adviceslip.com/advice/${adviceNumber}`)
    .then(respuesta => respuesta.json())
    .then(datos => advice_text.innerHTML = datos.slip.advice)
    .catch( error => advice_text = 'Error en la carga de recursos')
    id_num.innerHTML = adviceNumber;
  };


    btn.addEventListener('click', () => {
      dado.classList.add('rotate');
       adviceNumber = Math.floor(Math.random() * maxNumber);
       getAdvice();
       id_num.innerHTML = adviceNumber;
       setTimeout(() => {
        dado.classList.remove('rotate');
       }, 1700)
    })
})();
