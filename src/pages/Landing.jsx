import './Landing.css';

function Landing() {

  function handleMusic() {
    console.log("helloe");``
  }

  return (
    <div>
      <h1> Landing </h1>
      <p>Welcome to my website.</p>
      <a href='/about'>Enter the Ocean</a>
      <button onClick={handleMusic}>play music</button>
    </div>
  );
}

export default Landing;