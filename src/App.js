
import './App.css';

function App() {
  return (
<div className="form">
<form>
  <h1 className="title">Alfred & Nestor</h1>
  <div className="divEmail">
    <input placeholder="Email : Alfred&Nestor@gmail.com" className="email" type="email" ></input>
  </div>
  <div>
    <input className="password" placeholder="Mot de passe" type="password"></input>
  </div>
  <h5 className="passwordForget">MOT DE PASSE OUBLIÉ ?</h5>
  <div className="checkBox">
  <input type="checkBox" id="Rester connecté" name="Rester connecté"></input>
  <label className="labelCheckbox" for="Rester connecté">Rester connecté</label>
  </div>
  <button class="button" expand="block">Connexion</button>
</form>
</div>
  );
}

export default App;
