        <div>
            <div>
                <h1>Create your activity</h1>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div>
                        <label>Name:</label>
                        <input
                            type='name'
                            value={activity.name}
                            name='name'
                            onChange={(e) =>handleChange(e)}
                        />
                        {
                            errors.name && (
                                <p>{errors.name}</p>
                            )
                        }
                    </div>
                    <div>
                        <label>Difficulty: </label>
                            <input type='number' value={setActivity.dificulty} name='dificulty'
                            onChange={e => handleChange(e)}>
                            </input>
                            {errors.dificulty && (<p >{errors.dificulty}</p>)}
                    </div>
                    <div >
                        <label>Duration (hh:mm:ss): </label>
                        <input
                            type='text'
                            value={activity.duration}
                            name='duration'
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.duration && (
                            <p className='error'>{errors.duration}</p>)
                        }
                    </div>
                    <div>
                    <label >Temporada del año:</label>
                        <select name="season" value={activity.season} onChange={e => handleChange(e)}>
                            <option value="temporada">Temporada</option>
                            <option value="summer">Verano</option>
                            <option value="winter">Invierno</option>
                            <option value="spring">Primavera</option>
                            <option value="fall">Otoño</option>
                        </select>
                    {errors.season && (<p >{errors.season}</p>)}
                </div>

                    <div>
                        <label>Select Country: </label>
                        <select onChange= {(e) => handleChange(e)}>
                            <option value=''>Country...</option>
                            {countries.map((c) => (
                                <option value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type='submit'>Add Activity</button>
                </form>
                {idCountry.map( c => 
                    <div>
                        <p>{c}</p>
                        <button onClick={() => handleDelete(c)}>X</button>
                    </div>
                )}
            </div>
        </div>