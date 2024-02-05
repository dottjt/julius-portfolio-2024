import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// function changeGif() {
//   let myIndex = 0;
//   carousel();
//   function carousel() {
//       let i;
//       let x = document.getElementsByClassName("slides");
//       for (i = 0; i < x.length; i++) {
//          x[i].style.display = "none";
//       }
//       myIndex++;
//       if (myIndex > x.length) {myIndex = 1}
//       x[myIndex-1].style.display = "block";
//       setTimeout(carousel, 3000);
//   }
// }

// changeGif()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
