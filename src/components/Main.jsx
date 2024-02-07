import PreviewCard from './PreviewCard';
import Form from './Form';
import Button from './Button';
import '../scss/layout/Main.scss';

function Main({
  data,
  handleChange,
  validation,
  urlCard,
  handleCreateCard,
  errorMsg,
}) {
  return (
    <main className="mainBtn">
      <Button url="/" text="Ver proyectos" style="header__title--see-btn" />
      <div className="mainSection">
        <PreviewCard data={data} />
        <Form
          handleChange={handleChange}
          validation={validation}
          urlCard={urlCard}
          handleCreateCard={handleCreateCard}
          errorMsg={errorMsg}
          data={data}
        />
      </div>
      {/*enviamos nombre de la prop */}
    </main>
  );
}
export default Main;
