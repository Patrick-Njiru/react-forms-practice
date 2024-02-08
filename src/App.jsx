import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ComplexForm, DetailedUsers, Home, SideBar, SimpleForm, SimpleUsers } from './pages'

function App() {
  const [users, setUsers] = useState([])
  const [detailedUsers, setDetailedUsers] = useState([])

  return (
    <div className="">
      <SideBar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='/simple_form'
            element={<SimpleForm users={users} setUsers={setUsers} />}
          />
          <Route
            path='/complex_form'
            element={<ComplexForm setDetailedUsers={setDetailedUsers} />}
          />
          <Route
            path='/simple_users'
            element={<SimpleUsers users={users} />}
          />
          <Route
            path='/detailed_users'
            element={<DetailedUsers detailedUsers={detailedUsers} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
