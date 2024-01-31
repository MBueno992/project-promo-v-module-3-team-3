import PreviewCard from './PreviewCard';
import Form from './Form';

function Main({ main, handleChange }) {
  return (
    <main className="main">
      <PreviewCard main={main} />
      <Form handleChange={handleChange} /> {/*enviamos nombre de la prop */}
    </main>
  );
}
export default Main;
