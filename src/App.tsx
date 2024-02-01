import { useState } from 'react';
import './App.css';
import Buttons from "./components/Buttons/Buttons";
import TabButtons from "./components/Buttons/TabButtons";
import './scss/main.scss'


function App() {
    const [name, setName] = useState("python");
  function handleSelect(selectedButton: string) {
    console.log(selectedButton)
    setName(selectedButton);
  };

  return (
    <div>
      <h1>helloWorld</h1>
      <Buttons>Okej</Buttons>
      <TabButtons onSelect={()=> handleSelect("java")}>java</TabButtons>
      <TabButtons onSelect={()=> handleSelect("c++")}>c++</TabButtons>
      <TabButtons onSelect={()=> handleSelect("C#")}>C#</TabButtons>
      <TabButtons onSelect={()=> handleSelect("javascript")}>javascript</TabButtons>
     
     <main>
      {name}
     </main>
    </div>

  );

};

export default App;
