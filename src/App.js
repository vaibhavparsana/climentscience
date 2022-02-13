import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className='hold'>
          <h2 className="title">Which of the below statements about electricity is not true?</h2>

          <div className="answers cont q1" >
            <label className="radioArea" htmlFor="option_1">Eletricity is measured in units called watts
              <input className="inputRadio" type="radio" id="option_1" name="op_1" value="Eletricity is measured in units called watts"></input>
              <span className="options"></span>
            </label>
          </div>
          <div className="answers cont q2">
            <label className="radioArea" htmlFor="option_2">Eletricity flows at the speed of light
              <input className="inputRadio" type="radio" id="option_2" name="op_1" value="Eletricity flows at the speed of light"></input>
              <span className="options"></span>
            </label>
          </div>
          <div className="answers cont q3">
            <label className="radioArea" htmlFor="option_3">Eletricity is primary energy source
              <input className="inputRadio " type="radio" id="option_3" name="op_1" value="Eletricity is primary energy source"></input>
              <span className="options autoCorrect"></span>
            </label>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
