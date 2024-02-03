// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  // const [projectName, setProjectName] = useState('');
  // const [projectSlogan, setProjectSlogan] = useState('');
  // const [projectTechnologies, setProjectTechnologies] = useState('');
  // const [projectRepo, setProjectRepo] = useState('');
  // const [projectDemo, setProjectDemo] = useState('');
  // const [projectDesc, setProjectDesc] = useState('');
  // const [authorName, setAuthorName] = useState('');
  // const [authorJob, setAuthorJob] = useState('');
  /*  const [authorPhoto, setAuthorPhoto] = useState(""); */
  /*   const [image, setImage] = useState(""); */
  const [data, setData] = useState({});

  const objectData = {
    name: data.name,
    slogan: data.slogan,
    technologies: data.technologies,
    repo: data.repo,
    demo: data.demo,
    desc: data.desc,
    authorName: data.autor,
    authorJob: data.job,
  };
  const dataForm = (event) => {
    setData({ ...data, [event.key]: event.value });
    // const inputId = event.target.id;
    // const inputText = event.target.value;

    // if (inputId === 'name') {
    //   setData(inputText);
    // } else if (inputId === 'slogan') {
    //   setProjectSlogan(inputText);
    // } else if (inputId === 'technologies') {
    //   setProjectTechnologies(inputText);
    // } else if (inputId === 'repo') {
    //   setProjectRepo(inputText);
    // } else if (inputId === 'demo') {
    //   setProjectDemo(inputText);
    // } else if (inputId === 'desc') {
    //   setProjectDesc(inputText);
    // }
    // if (inputId === 'autor') {
    //   setAuthorName(inputText);
    // } else if (inputId === 'job') {
    //   setAuthorJob(inputText);
    // }
  };

  return (
    <div className="container">
      <Header />
      <Main main={objectData} handleChange={dataForm} />{' '}
      {/*enviamos nombre de la función a través de prop */}
      <Footer />
    </div>
  );
}

export default App;
