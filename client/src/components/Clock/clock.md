<div className={style.container}>
      <div className={style.reloj} id="reloj">
        {" "}
        00 : 00 : 00
</div>


function actual() {
    let fecha = new Date(); //Actualizar fecha.
    let hora = fecha.getHours(); //hora actual
    let minuto = fecha.getMinutes(); //minuto actual
    let segundo = fecha.getSeconds(); //segundo actual
    if (hora < 10) {
      //dos cifras para la hora
      hora = "0" + hora;
    }
    if (minuto < 10) {
      //dos cifras para el minuto
      minuto = "0" + minuto;
    }
    if (segundo < 10) {
      //dos cifras para el segundo
      segundo = "0" + segundo;
    }
    //devolver los datos:
    let mireloj = hora + " : " + minuto + " : " + segundo;
    return mireloj;
  }
  function actualizar() {
    //función del temporizador
    let mihora = actual(); //recoger hora actual
    let mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
  }
  setInterval(actualizar, 1000); //iniciar temporizador