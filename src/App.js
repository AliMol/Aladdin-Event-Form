import Header from './components/layout/Header';
import './styles/layout/App.css';
import AddNewEvent from './components/AddNewEvent'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddNewEvent></AddNewEvent>
    </div>
  );
}

export default App;
