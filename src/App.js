import './App.css';
import NewTask from './components/NewTask';

function App() {
  console.log('App.js re-rendered.')
  return (
    <div className="container">
      <NewTask />
    </div>
  );
}

export default App;
