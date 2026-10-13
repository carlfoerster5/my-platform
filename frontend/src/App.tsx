import './App.css'
import snowboardPic from './assets/snowboard.png'

function App() {
  return (
    <main>
      <h1>Carl Foerster</h1>

      <h2>Computer Science student at Grove City College</h2>

      <p>
        This site will present my software projects, engineering decisions,
        and production systems.
      </p>

      <img className = 'snowboard' src={snowboardPic}/>



    </main>
  )
}

export default App
