import Landing from "./pages/Landing"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true,    
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Landing/>
    </div>
  )
}

export default App
