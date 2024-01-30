import '../scss/layout/Form.scss';

function Form() {
  return (
    <section className="form">
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
        />
        <input
          className="project__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="demo">
          <input
            className="project__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
          />
          <input
            className="project__input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
          />
        </div>
        <input
          className="project__input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
        />
        <textarea
          className="project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
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
        />
        <input
          className="autorForm__input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
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
