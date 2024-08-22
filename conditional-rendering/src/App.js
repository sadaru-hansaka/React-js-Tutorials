
import './App.css';
import Condition from './Condition';

function App() {
  let val = prompt('Anything but a 0')
  return (
    <Condition val={val} />
  );
}

export default App;
