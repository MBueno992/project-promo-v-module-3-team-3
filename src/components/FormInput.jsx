function FormInput({ type, placeholder, name, id, errorMsg }) {
  const msg = errorMsg.map((text, i) => {
    <span className="autorForm__error" key={i}>
      {text.name}
    </span>;
  });

  return (
    <>
      <input
        className="project__input"
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
      {msg}
    </>
  );
}

export default FormInput;
