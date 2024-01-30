// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [projectName, setProjectName] = useState('');
  const [projectSlogan, setProjectSlogan] = useState('');
  const [projectTechnologies, setProjectTechnologies] = useState('');
  const [projectRepo, setProjectRepo] = useState('');
  const [projectDemo, setProjectDemo] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorJob, setAuthorJob] = useState('');
  /*  const [authorPhoto, setAuthorPhoto] = useState(""); */
  /*   const [image, setImage] = useState(""); */
  const mainData = {
    name: projectName,
    slogan: projectSlogan,
    technologies: projectTechnologies,
    repo: projectRepo,
    demo: projectDemo,
    desc: projectDesc,
    authorName: authorName,
    authorJob: authorJob,
  };
  // const dataProject = (event) => {
  //   const inputId = event.target.id;
  //   const inputText = event.target.value;
  //   if (inputId === 'name') {
  //     setProjectName(inputText);
  //   } else if (inputId === 'slogan') {
  //     setProjectSlogan(inputText);
  //   } else if (inputId === 'technologies') {
  //     setProjectTechnologies(inputText);
  //   } else if (inputId === 'demo') {
  //     setProjectDemo(inputText);
  //   } else if (inputId === 'desc') {
  //     setProjectDesc(inputText);
  //   }
  // };

  // const dataAuthor = () => {
  //   const inputId = event.target.id;
  //   const inputText = event.target.value;
  //   if (inputId === 'autor') {
  //     setAuthorName(inputText);
  //   } else if (inputId === 'job') {
  //     setAuthorJob(inputText);
  //   }
  // };

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
