import "./App.css";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import {  createBrowserRouter  } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
