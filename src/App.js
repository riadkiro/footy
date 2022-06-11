import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <h1>Hello World !</h1>
    </div>
  );
}

export default App;
