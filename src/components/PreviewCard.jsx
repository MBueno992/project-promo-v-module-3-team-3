import project from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import '../scss/layout/PreviewCard.scss';

function PreviewCard() {
  return (
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
            delectus? Voluptates at hic aliquam porro ad suscipit
          </p>
          <section className="author__technologies">
            <p className="author__technologies--text">React JS - MongoDB</p>
          </section>
        </section>

        <section className="author__info">
          <img className="author__info--image" src={user} alt="" />
          <p className="author__info--job">Full Stack Developer</p>
          <p className="author__info--name">Emmelie Björklund</p>
        </section>
      </section>
    </section>
  );
}

export default PreviewCard;
