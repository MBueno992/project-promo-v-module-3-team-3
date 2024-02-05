// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [data, setData] = useState({});
  const [validation, setValidation] = useState('');

  const dataForm = (key, value) => {
    setData({ ...data, [key]: value });
  };

  // const handleSubmit = () => {};

  return (
    <div className="container">
      <Header />
      <Main data={data} handleChange={dataForm} validation={validation} />
      {/*enviamos nombre de la función a través de prop */}
      <Footer />
    </div>
  );
}

export default App;
