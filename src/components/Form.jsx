import '../scss/layout/Form.scss';
import CreateCard from './CreateCard';
import GetAvatar from './GetAvatar';

function Form({
  handleChange,
  validation,
  handleCreateCard,
  urlCard,
  errorMsg,
  data,
}) {
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
          defaultValue={data.name}
        />
        <input
          className="project__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          defaultValue={data.slogan}
        />
        <span className="autorForm__error">{errorMsg.slogan}</span>
        <div className="demo">
          <input
            className="project__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
            defaultValue={data.repo}
          />
          <input
            className="project__input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
            defaultValue={data.demo}
          />
        </div>
        <span className="autorForm__error">{errorMsg.repo}</span>
        <span className="autorForm__error">{errorMsg.demo}</span>
        <input
          className="project__input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          defaultValue={data.technologies}
        />{' '}
        <span className="autorForm__error">{errorMsg.technologies}</span>
        <textarea
          className="project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          defaultValue={data.desc}
        ></textarea>{' '}
        <span className="autorForm__error">{errorMsg.desc}</span>
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
          defaultValue={data.autor}
        />
        <span className="autorForm__error">{errorMsg.autor}</span>
        <input
          className="autorForm__input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          defaultValue={data.job}
        />{' '}
        <span className="autorForm__error">{errorMsg.job}</span>
      </fieldset>
      {/* <CreateCard urlCard={urlCard} validation={validation} /> */}

      <section className="buttons-img">
        <GetAvatar
          updateAvatar={handleChange}
          text="Subir foto de proyecto"
          id="photo"
        />
        <GetAvatar
          updateAvatar={handleChange}
          text="Subir foto de autora"
          id="image"
        />
        <span className="autorForm__error">{errorMsg.image}</span>
        <span className="autorForm__error">{errorMsg.photo}</span>
      </section>
      <section className="buttons-img">
        <button
          className="buttons-img__btn-large"
          type="submit"
          onClick={handleCreateCard}
        >
          Crear Tarjeta
        </button>
      </section>

      <CreateCard urlCard={urlCard} validation={validation} />
    </section>
  );
}

export default Form;
