/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../actions/actions.js";
import style from "../Activity/createActivity.module.css";
import Clock from "../Clock/Clock.jsx";

function CreateActivity() {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountry);

  const [errors, setErrors] = useState({});

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: [],
  });

  useEffect(() => {
    dispatch(getCountries());
    validate(activity);
  }, [dispatch]);

  function validate(activity) {
    let newErrors = {};
  
    if (!activity.idCountry || !activity.idCountry.length)
      newErrors.idCountry = "Country must be completed";
    if (!activity.name) newErrors.name = "Requiere Name";
    if (!activity.difficulty) newErrors.difficulty = "Requiere Difficulty";
    if (!activity.difficulty) newErrors.difficulty = "Requiere Difficulty";
    if (!activity.duration) newErrors.duration = "Requiere Duration";
    if (!activity.season) newErrors.season = "Requiere Season";
  
    setErrors(newErrors);
  }

  function handleCountry(e) {
    const country = e.target.value;
    const newActivity = {
      ...activity,
      idCountry: [...activity.idCountry, country]
    };

    validate(newActivity);

    setActivity(newActivity);
  }

  function handleDifficulty(e) {
    const difficulty = e.target.value;
    const newActivity = {
      ...activity,
      difficulty
    };
    validate(newActivity);
    setActivity(newActivity);
  }

  function handleDuration(e) {
    const duration = e.target.value;
    const newActivity = {
      ...activity,
      duration
    };
    validate(newActivity);
    setActivity(newActivity);
  }

  function handleSeason(e) {
    const season = e.target.value;
    const newActivity = {
      ...activity,
      season
    };
    validate(newActivity);
    setActivity(newActivity);
  }
  function handleName(e) {
    const name = e.target.value;
    const newActivity = {
      ...activity,
      name
    };
    validate(newActivity);
    setActivity(newActivity);
  }

  function handleDelete(countryId) {
    const newActivity = {
        ...activity,
        idCountry: activity.idCountry.filter((occ) => occ !== countryId),
    }
    validate(newActivity);
    setActivity(newActivity);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createActivity(activity));
    alert("Activity Create");
    setActivity({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      idCountry: [],
    });
    history.push("/home");
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1>Crea la actividad turistica</h1>
        <Link to="/home">
          <button className={style.button}>VOLVER A HOME</button>
        </Link>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <select multiple onChange={handleCountry} name="Select Country" value={activity.idCountry}>
                {countries &&
                  countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
            </select>
          </div>
          {errors.idCountry && <p>{errors.idCountry}</p>}
          <div className={style.select}>
            <select value={activity.difficulty} name="difficulty" onChange={handleDifficulty}>
              <option value="">Difficulty...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {errors.difficulty && <p>{errors.difficulty}</p>}
            <div className={style.select}>
            <select
              name="duration"
              value={activity.duration}
              onChange={handleDuration}
            >
              <option value="">Duration...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {errors.duration && <p>{errors.duration}</p>}

          <div className={style.select}>
            <select
              name="season"
              value={activity.season}
              onChange={handleSeason}
            >
              <option value="temporada">Temporada</option>
              <option value="Summer">Verano</option>
              <option value="Winter">Invierno</option>
              <option value="Spring">Primavera</option>
              <option value="Fall">Otoño</option>
            </select>
          </div>
          {errors.season && <p>{errors.season}</p>}

          <div>
            <input
              className={style.input}
              type="text"
              value={activity.name}
              name="name"
              placeholder="Insert name activity"
              onChange={handleName}
            ></input>
          </div>
          {errors.name && <p>{errors.name}</p>}

          {errors.length ? (
            <button disabled className={style.button} type="submit">
              Crear Actividad
            </button>
          ) : (
            <button className={style.button} type="submit">
              Crear Actividad
            </button>
          )}
        </form>
        {activity.idCountry.map((e, i) => (
          <div key={i}>
            <p>{e}</p>
            <button onClick={() => handleDelete(e)}>X</button>
          </div>
        ))}
      </div>
      <div className={style.navClock}>
        <nav className={style.reloj}>
          <Clock />
        </nav>
      </div>
    </div>
  );
}

export default CreateActivity;
