// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import githubLogo from './assets/github.svg'
// import linkedinLogo from './assets/linkedin.svg'
import './App.css'

// import Footer from './Footer/Footer'
// import Employment from './Employment/Employment'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="content">
          <h1>Julius Reade 👋</h1>
          <h2>I build things for the web.</h2>
        </div>

        <div className="gif__shadow"></div>

        <div className="bottom">
          <div>
            <a href="https://www.linkedin.com/in/juliusreade/"><h3>Employment</h3></a>
          </div>
          <div>
            <a href="https://github.com/dottjt"><h3>Side Projects</h3></a>
          </div>
        </div>

    </>
  )

}

export default App
