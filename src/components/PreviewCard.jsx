import project from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import '../scss/layout/PreviewCard.scss';

function PreviewCard({ main }) {

  const { name, slogan, technologies, repo, demo, desc, authorName, authorJob } = main;

  return (
    <section className="preview">
      <img className="preview__image" src={project} alt="" />

      <section className="author">
        <section className="author__project">
          <p className="author__project--subtitle">Personal Project Card</p>
          <hr className="author__project--line" />
          <h2 className="author__project--title"> {name || "Elegant Workspace"}</h2>
          <p className="author__project--slogan">{slogan || "Diseños Exclusivos"}</p>
          <p className="author__project--description">Product Description</p>
          <p className="author__project--desc">
            {desc || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,  delectus Voluptates at hic aliquam porro ad suscipit"}
          </p>
          <section className="author__technologies">
            <p className="author__technologies--text"> {technologies || "React JS - MongoDB"}</p>
            <a href={demo || ""} ><i className="fa-solid fa-globe"></i></a>
            <a href={repo || ""} ><i className="fa-brands fa-github"></i></a>
          </section>
        </section>

        <section className="author__info">
          <img className="author__info--image" src={user} alt="" />
          <p className="author__info--job">{authorJob || "Full Stack Developer"}</p>
          <p className="author__info--name">{authorName || "Emmelie Björklund"}</p>
        </section>
      </section>
    </section>
  );
}

export default PreviewCard;
