import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Contact from './components/Contact';
import Stars from './components/Stars';
import Feedbacks from './components/Stars';

const App = () => {
   return ( 
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact />
          <Stars /> 
        </div>
        </div>
     </BrowserRouter>
  );
}
export default App;