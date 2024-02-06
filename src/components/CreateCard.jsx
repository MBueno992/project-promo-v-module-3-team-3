function CreateCard({urlCard, validation}) {
  return (
    <section className="card">
      <span className=""> {validation} </span>
      <a href={urlCard} className="" target="_blank" rel="noreferrer"></a>
    </section>
  );
}

export default CreateCard;
