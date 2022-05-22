import './App.css';
import ArrowFunction from './components/ArrowFunction';
import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import  StartPoint  from './components/StartPoint.jsx'


function App() {
  return (
    <div className="App">
      <StartPoint />
      <ClassComponent />
      <ArrowFunction />
      <Counter />
     
    </div>
  );
}

export default App;
