const Form = () => {

  return (
    <>
      <form>
        <input onChange={(event) => event.target.value}></input>
        <button onClick={handleTodos}>Enviar</button>
      </form>
    </>
  );
};

export default Form;