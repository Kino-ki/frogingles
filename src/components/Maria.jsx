import { useState } from "react";
import music from "../assets/all-i-want-for-christmas-is-you.mp3";

//

function Maria() {
  const [iced, setIced] = useState(0);
  let audioActive = iced;

  const handleClick = () => {
    setIced((counter) => counter + 1);
  };

  return (
    <>
      <button onClick={handleClick}>ERROR INCREMENT</button>
      {audioActive === 3 ? (
        <>
          <audio autoPlay src={music} />
          <h1>GET MARIA CAREY&apos;D</h1>
        </>
      ) : (
        <>
          <h1>MARIA IS STILL CONTAINED</h1>
        </>
      )}
    </>
  );
}

export default Maria;
