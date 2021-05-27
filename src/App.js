import "./App.css";
import Formum from "./components/Formum";
import Listele from "./components/Listele";
import React, { useState } from "react";

function App() {
  const kayitli = [
    {
      id: 5361,
      ad: "melih",
      mail: "melih@mail.com",
    },
    {
      id: 7878,
      ad: "mehmet",
      mail: "mehmet@mail.com",
    },
    {
      id: 1912,
      ad: "veli",
      mail: "veli@mail.com",
    },
  ];
  const yeniKayitli = [
    {
      id: 91,
      ad: "deneme1",
      mail: "@deneme1",
    },
    {
      id: 92,
      ad: "deneme2",
      mail: "@deneme2",
    },
    {
      id: 93,
      ad: "deneme3",
      mail: "@deneme3",
    },
  ];

  const [kul, setKul] = useState(kayitli);

  const sil = (adam) => {
    const newEleman = kul.filter((a) => {
      return a.id !== adam.id;
    });

    setKul(newEleman);
    console.log(kul);
  };

  const test = () => {
    console.log(kul);
  };

  return (
    <div className="App">
      <div className="container">
        <Formum kul={kul} setKul={setKul} />
        <Listele kul={kul} setKul={setKul} sil={sil} />
        <button onClick={test}>TEST</button>
      </div>
    </div>
  );
}

export default App;
