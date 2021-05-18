import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import TextTree from "../../components/textTree"

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>

    <TextTree />

  </div>
  
)
export default App