
function Button({ text, callBack, disable=false}) {
  return (
    <button disabled={disable} onClick={callBack} className="btn btn-primary">
      {text}
    </button>
  );
}

export default Button;