import { useState, useEffect } from 'react'
// import githubLogo from './assets/github.svg';
// import linkedinLogo from './assets/linkedin.png';

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const imageList = [
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGUzZDRwbDRva2NyaDZ2eXMwdWJ6MHpsamp2ZG8yYzRidmcxNzVxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XrnJ3ofl5DCtG/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NkdW9uMm9iOW44eDluMWxzbWxwcW9nOGJ3eXFtbWpjbnRobHhkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6p26sp0YT2LAI/giphy.gif',
    'https://media0.giphy.com/media/xT4uQ6HaStH5UX7EBO/200w.webp?cid=ecf05e47tpema637uqbg08udk6dpj6dv9cl791va9bm63z0e&ep=v1_gifs_related&rid=200w.webp&ct=g',
    'https://media3.giphy.com/media/uOQqRWeWE9QUE/giphy.webp?cid=ecf05e4754u6y6xg9sg6d6dmwsyqp3999nt6ovzqzlsqj2mg&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    'https://media1.giphy.com/media/3o7abuu2eawwSGmbvy/200w.webp?cid=ecf05e47qt5c6i2bci9ekpeav84fmesapnu23rbefw3hxu7h&ep=v1_gifs_related&rid=200w.webp&ct=g',
    'https://media2.giphy.com/media/jIXnBKxNtk6HK/giphy.webp?cid=ecf05e476zjti8ipxw7o4imsra51ybbp2at3i8o5mglxtpmw&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    'https://media1.giphy.com/media/3o7TKJ31nPPCIm4uQM/200w.webp?cid=ecf05e47d0zd1mfdq1urrrx3w7rnc7wc5poca2xu5hxtsm9f&ep=v1_gifs_related&rid=200w.webp&ct=g',

  ]

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (imageList.length === counter + 1) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [imageList.length, counter]);

  return (
    <>
      <div className="content">
        <h1>Julius Reade 👋</h1>
        <h2>I ____ __ build _____ for ___ _______ web ❤️.</h2>
      </div>

      <img className="gif__shadow" src={imageList[counter]} alt="Logo" />

      <div className="bottom">
        {/* <p>links</p> */}
        <div className='link'>
          <a href="https://www.linkedin.com/in/juliusreade/">
            <h3>Employment (click me!)</h3>
            {/* <img className='logo' src={githubLogo} /> */}
          </a>
        </div>
        <div className='link'>
          <a href="https://github.com/dottjt">
            <h3>Side Projects (let's go!)</h3>
            {/* <img className='logo' src={linkedinLogo} /> */}
          </a>
        </div>
      </div>
    </>
  )

}

export default App


