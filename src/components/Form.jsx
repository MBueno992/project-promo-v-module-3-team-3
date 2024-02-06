import '../scss/layout/Form.scss';
import CreateCard from './CreateCard';
import GetAvatar from './GetAvatar';

function Form({ handleChange, validation, handleCreateCard, urlCard }) {
  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    handleChange(inputId, inputValue);
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
        <GetAvatar
          updateAvatar={handleChange}
          text="Subir foto de proyecto"
          id="image"
        />
        <GetAvatar
          updateAvatar={handleChange}
          text="Subir foto de autora"
          id="photo"
        />
      </section>
      <section className="buttons-img">
        {/* <button className="btn-large" onClick="{handleClickCreateCard}"> */}
        <button className="buttons-img__btn-large" type="submit" onClick={handleCreateCard}>
          Crear Tarjeta
        </button>
      </section>

      <CreateCard urlCard={urlCard} validation={validation}/>
    </section>
  );
}

export default Form;
