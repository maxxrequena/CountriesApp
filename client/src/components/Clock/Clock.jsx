import React, { useState, useEffect } from "react";
import style from "../Clock/clock.module.css";

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

  return (
    <div className={style.container}>
      <div className={style.date}>
        <p>
          {dia + "-"}
          {mes + "-"}
          {anio}
        </p>
      </div>
    </div>
  );
}
