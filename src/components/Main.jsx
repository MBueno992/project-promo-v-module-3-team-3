import PreviewCard from './PreviewCard';
import Form from './Form';

function Main({
  data,
  handleChange,
  validation,
  urlCard,
  handleCreateCard,
  errorMsg,
}) {
  return (
    <main className="main">
      <PreviewCard data={data} />
      <Form
        handleChange={handleChange}
        validation={validation}
        urlCard={urlCard}
        handleCreateCard={handleCreateCard}
        errorMsg={errorMsg}
      />
      {/*enviamos nombre de la prop */}
    </main>
  );
}
export default Main;
