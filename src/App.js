import Navbar from "./component/navbar";
import Intro from "./component/intro";
import About from "./component/about";
import Service from "./component/service";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
