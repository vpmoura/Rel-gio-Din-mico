const loading = () => {
  let msg = window.document.getElementById("msg");
  let image = window.document.getElementById("image");
  let date = new Date();
  let hours = date.getHours();
  msg.innerHTML = `Agora são ${hours} horas.`;

  const morning = hours >= 6 && hours < 12;
  const afternoon = hours >= 12 && hours < 18;
  const night = hours >= 18 && hours < 0;
  const dawn = hours >= 0 && hours < 6;

  if (morning) {
    //Bom dia
    image.src = "images/morning-edited.png";
  } else if (afternoon) {
    //Bom corujão
    image.src = "images/afternoon-edited.png";
  } else if (night) {
    //Boa tarde
    image.src = "images/night-edited.png";
  } else if (dawn) {
    //Boa noite
    image.src = "images/night-edited.png";
  } else {
    //Inválido
  }
};
