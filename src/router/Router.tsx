import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import DetailPortfolio from '../pages/DetailPortfolio'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/detail/:name' element={<DetailPortfolio/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
