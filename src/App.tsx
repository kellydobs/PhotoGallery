import React from 'react'
import './App.css'
import CategoryList from './CategoryList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Photo Gallery</h1>
          <p>look at all those pictures!</p>
        </header>
        <Router>
<Routes>
  <Route path="/" element={<CategoryList />} />
</Routes>

        </Router>
       
      </div>
    </Router>
  )
}
