import '../scss/layout/Form.scss';

function Form({ handleChange }) {
  const handleInput = (ev) => {
    const object = {
      key: ev.target.id,
      value: ev.target.value,
    };
    handleChange(object);
  };
  {
    /*hemos mandado por parámetro el nombre de las prop */
  }

  return (
    <section className="form" onChange={handleInput}>
      <h2 className="form__title">Información</h2>

      <section className="ask-info">
        <p className="ask-info__subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="ask-info__line" />
      </section>

      <fieldset className="project">
        <input
          className="project__input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          required
        />
        <input
          className="project__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          required
        />
        <div className="demo">
          <input
            className="project__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
            required
          />
          <input
            className="project__input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
            required
          />
        </div>
        <input
          className="project__input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          required
        />
        <textarea
          className="project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          required
        ></textarea>
      </fieldset>

      <section className="ask-info">
        <p className="ask-info__subtitle">Cuéntanos sobre la autora</p>
        <hr className="ask-info__line" />
      </section>

      <fieldset className="autorForm">
        <input
          className="autorForm__input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          required
        />
        <input
          className="autorForm__input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          required
        />
      </fieldset>

      <section className="buttons-img">
        <button className="buttons-img__btn">Subir foto de proyecto</button>
        <button className="buttons-img__btn">Subir foto de autora</button>
      </section>
      <section className="buttons-img">
        {/* <button className="btn-large" onClick="{handleClickCreateCard}"> */}
        <button className="buttons-img__btn-large">Crear Tarjeta</button>
      </section>

      <section className="card">
        <span className=""> La tarjeta ha sido creada: </span>
        <a href="" className="" target="_blank" rel="noreferrer">
          {' '}
        </a>
      </section>
    </section>
  );
}

export default Form;
