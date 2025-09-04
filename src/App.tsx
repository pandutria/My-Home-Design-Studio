import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Router from "./router/Router";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true,    
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Router/>
    </div>
  )
}

export default App
