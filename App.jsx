import React from 'react'
import Homecrud from './components/Homecrud'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUsers from './components/CreateUsers'
import Users from './components/Users'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Homecrud/>
        <Routes>
            <Route path="/createusers" element={<CreateUsers/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App