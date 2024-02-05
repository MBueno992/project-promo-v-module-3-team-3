import PreviewCard from './PreviewCard';
import Form from './Form';

function Main({ data, handleChange, validation }) {
  return (
    <main className="main">
      <PreviewCard data={data} />
      <Form handleChange={handleChange} validation={validation} />
      {/*enviamos nombre de la prop */}
    </main>
  );
}
export default Main;
