export function Car(props) {
  // 1ère méthode
  function onClick() {
    return props.onCarClick(2);
  }

  // 2ème méthode
  // const onClick = ()=> {
  //   props.onCarClick(2);
  // };

  return (
    <div>
      Je suis une {"<Car />"}
      <button
        onClick={onClick}
      >
        Click
      </button>
    </div>
  );
}
