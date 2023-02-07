import './App.css';
import Navbar from './componenets/Navbar';
import Textarea from './componenets/Textarea';

function App() {
  return (
    <>
  <Navbar title = "txt.io"/>
  <div className="container">
  <Textarea/>
  </div>
    </>
  );
}

export default App;