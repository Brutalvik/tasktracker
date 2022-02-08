import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Tasks } from './components/tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tasks/>
      <Footer/>
    </div>
  );
}

export default App;
