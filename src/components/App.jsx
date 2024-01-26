// Fichero src/components/App.jsx
import '../scss/App.scss';
import project from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import logoAdalab from '../images/logo-adalab.png'


function App() {
  return (
 
    <div className="container">
      <header className="header">
        <nav className='header__nav'>
          <div className='header__nav--div'>
            {/* icono proyecto */}
            <p className="text">Proyectos Molones</p>
          </div>
          <a href="https://www.adalab.es/" className='header__nav--logo'><img src={logoAdalab} alt="adalab" /></a>
        </nav>
        <div className='header__title'>
          <h1>Proyectos molones</h1>
          <h2>Escaparate en línea para recoger ideas a través de la tecnología</h2>
          <button className='header__title--btn'>Ver proyectos</button>
        </div>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={project} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />
              <h2 className="title">Elegant Workspace</h2>
              <p className="slogan">Diseños Exclusivos</p>
              <p className='description'>Product Description</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <section className="technologies">
                <p className="text">React JS, MongoDB</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">Full Stack Developer</p>
              <p className="name">Emmelie Björklund</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section className="ask-info">
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
            {/* <button className="btn-large" onClick="{handleClickCreateCard}"> */}
            <button className="btn-large">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>

  );
}

export default App;
