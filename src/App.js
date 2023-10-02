import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
  <Navbar title="Home" about="About"/>
  <TextForm heading="Enter your text below to analyze it"/>
  </>
  );
}

export default App;
