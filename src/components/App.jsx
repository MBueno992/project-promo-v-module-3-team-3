// Fichero src/components/App.jsx
import '../scss/App.scss';
import project from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';

function App() {
  
  const [projectName, setProjectName] = useState("");
  const [projectSlogan, setProjectSlogan] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState("");
  const [projectRepo, setProjectRepo] = useState("");
  const [projectDemo, setProjectDemo] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorJob, setAuthorJob] = useState("");
 /*  const [authorPhoto, setAuthorPhoto] = useState(""); */
/*   const [image, setImage] = useState(""); */








  return (
    <div className="container">
      <header className="header">
        <nav className="header__nav">
          <div className="header__nav--div">
            <i className="fa-solid fa-laptop-code"></i>
            <p className="text">Proyectos Molones</p>
          </div>
          <a href="https://www.adalab.es/" className="header__nav--logo">
            <img src={logoAdalab} alt="adalab" />
          </a>
        </nav>

        <div className="header__title">
          <h1>Proyectos molones</h1>
          <h2>
            Escaparate en línea para recoger ideas a través de la tecnología
          </h2>
          <button className="header__title--btn">Nuevo proyecto</button>
        </div>
      </header>

      <main className="main">
        <section className="preview">
          <img className="preview__image" src={project} alt="" />
        
        <section className="author">
          <section className="author__project">
            <p className="author__project--subtitle">Personal Project Card</p>
            <hr className="author__project--line" />
            <h2 className="author__project--title">Elegant Workspace</h2>
            <p className="author__project--slogan">Diseños Exclusivos</p>
            <p className="author__project--description">Product Description</p>
            <p className="author__project--desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              delectus?
            </p>
            <section className="author__technologies">
              <p className="author__technologies--text">React JS - MongoDB </p>
            </section>
          </section>

          <section className="author__info">
            <img className="author__info--image" src={user} alt="" />
            <p className="author__info--job">Full Stack Developer</p>
            <p className="author__info--name">Emmelie Björklund</p>
          </section>
        </section>
        </section>

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

          {/* <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}"> }
            <button className="btn-large">Crear Tarjeta</button>
          </section> */}

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>

      <footer className="footer">
        <a href="https://www.adalab.es/" className="header__nav--logo">
          <img src={logoAdalab} alt="adalab" />
        </a>
      </footer>
    </div>
  );
}

export default App;
