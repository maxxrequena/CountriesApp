import React, { useState, useEffect } from "react";
import style from '../Clock/clock.module.css'


export default function Titulo() {
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [anio, setAnio] = useState();

  useEffect(() => {
        const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    let fecha = new Date();
    let hoy = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    setDia(hoy);
    setMes(mes);
    setAnio(anio);
  }, []);

  function actual() {
   
    let fecha=new Date(); //Actualizar fecha.
    let hora=fecha.getHours(); //hora actual
    let minuto=fecha.getMinutes(); //minuto actual
    let segundo=fecha.getSeconds(); //segundo actual
    if (hora<10) { //dos cifras para la hora
        hora="0"+hora;
        }
    if (minuto<10) { //dos cifras para el minuto
        minuto="0"+minuto;
        }
    if (segundo<10) { //dos cifras para el segundo
        segundo="0"+segundo;
        }
    //devolver los datos:
    let  mireloj = hora+" : "+minuto+" : "+segundo;	
    return mireloj; 
    }
    function actualizar() { //función del temporizador
       let mihora=actual(); //recoger hora actual
       let  mireloj=document.getElementById("reloj"); //buscar elemento reloj
        mireloj.innerHTML=mihora; //incluir hora en elemento
    }setInterval(actualizar,1000); //iniciar temporizador

  return (
    <div className={style.container}>
        <div className={style.reloj} id="reloj" > 00 : 00 : 00</div>
        <div className={style.date}>
            <p>
                {dia + "-"}
                {mes+ "-"}
                {anio}
            </p>
      </div>
    </div>
  );
}