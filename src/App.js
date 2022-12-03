import { useState } from "react";

import ImageContext from "./context/ImageContext";

import Image from "./components/Image";

export default function App() {
  const [imageURL, setImageURL] = useState("https://rickandmortyapi.com/api/character/avatar/321.jpe")

  return (
    <>
      <ImageContext.Provider value={imageURL}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Image
          alt="Hola mundo"
        />
      </div>
    </ImageContext.Provider>
    <button
      onClick={() => {
        setImageURL("https://rickandmortyapi.com/api/character/avatar/321.jpeg");
      }}
      >
      Recargar Imagen
    </button>
    </>
  );
};
