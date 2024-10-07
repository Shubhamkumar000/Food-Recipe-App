
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage from './Components/MainPage'
import MealInfo from './Components/MealInfo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
    </Routes>
  )
    
}

export default App
