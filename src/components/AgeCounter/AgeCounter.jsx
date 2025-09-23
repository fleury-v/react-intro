import { useState } from "react";
import { AgeDisplay } from "../AgeDisplay/AgeDisplay";

export function AgeCounter(props) {  
  const[age, setAge] = useState(30);
// age = content la valeur
// setAge = fonction pemettant de modifier l'âge
// useState(30) = useState est un 'HOOK' de React contenant comme paramètre la valeur initiale de 'age'(30) 

  function increaseAge() {
    setAge(age+1);
  }

  return(
    <>
      <button onClick={increaseAge}> Increase age </button>
      <AgeDisplay age={age} />
    </>
  )
}