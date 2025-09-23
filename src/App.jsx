import { Car } from "./components/Car/Car";
// import { Greetings } from "./components/Greetings/Greetings";
import "./style.css";

export function App(number) {

  function hello() {
    alert("Hello de <App /> " + number)
  }
  return (
    <>
      <div>
        Je suis LA {"<App />"}
        <Car onCarClick={hello} />
      </div>
    </>
  );
}