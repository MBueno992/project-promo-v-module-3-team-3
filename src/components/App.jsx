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

  const [urlCard, setUrlCard] = useState("");

 const handleCreateCard = () => {

  if (data.name === "" && data.slogan === "" && data.repo === "" && data.demo === "" && data.technologies === "" && data.desc === "" && data.autor === "" && data.job === "" && data.image === "" && data.photo === "" ) {
    setValidation("Revisa los campos")
  } else {
  
    fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setUrlCard(result);
    })
    .catch((error) => console.log(error));
    setValidation("La tarjeta ha sido creada")
}
 }
  


  return (
    <div className="container">
      <Header />
      <Main data={data} handleChange={dataForm} validation={validation} urlCard={urlCard} handleCreateCard={handleCreateCard}/>
      {/*enviamos nombre de la función a través de prop */}
      <Footer />
    </div>
  );
}

export default App;
