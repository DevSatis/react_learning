import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
// import ArrowFunction from './components/ArrowFunction';
// import ClassComponent from './components/ClassComponent';
// import  StartPoint  from './components/StartPoint.jsx'
//import TestUseState from './components/TestUseState'



function App() {
  return (
    <div className="App">
      {/* <StartPoint />
      <ClassComponent />
      <ArrowFunction />
      <TestUseState /> */}
      <Header />
      <MainContent />
      <Footer />

     
    </div>
  );
}

export default App;
