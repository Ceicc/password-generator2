import React from "react"
import ReactDOM from "react-dom"

import Header from "./header.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";

const QWERTY123 = [..."qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789-_"]

function App() {

  
  function shuffle() {
    const charsArray = [...QWERTY123, ...customChars]
  
    for (let i = charsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charsArray[i], charsArray[j]] = [charsArray[j], charsArray[i]];
    }

    setPassword(charsArray.slice(0, passwordLength).join(""))
  }

  function copy() {
    const prevPassword = password
    navigator.clipboard.writeText(password)
    setPassword('Copied')
    setTimeout(setPassword, 1500, prevPassword);
  }

  function updatePasswordLength({ target: { value } }) {
    if (value < 65 && value > 7) {
      localStorage.passwordLength = value
      setPasswordLength(value)
    }
  }

  function updateCustomChars({ target: { value } }) {
    let arr = []
    Array.from(value, v => v.trim()).forEach(v => v.length > 0 && !QWERTY123.includes(v) && !customChars.includes(v) ? arr.push(v) : null)

    if (arr.length > 0) {
      localStorage.setItem("customChars", [...customChars, ...arr].join(""))
      setCustomChars([...customChars, ...arr])
    }
  }
  
  function removeCustomChar(char) {
    let arr = customChars.filter(c => c !== char)
    localStorage.setItem("customChars", [...arr].join(""))
    setCustomChars(arr)
  }

  const [password, setPassword] = React.useState("Click Generate")
  
  const [passwordLength, setPasswordLength] = React.useState(Number(localStorage.passwordLength) || 12)
  
  const [customChars, setCustomChars] = React.useState([...(localStorage.customChars || "")])
  
  const [showFooter, setShowFooter] = React.useState(false)

  return (
    <>
      <Header />
      <Main password={password} generate={shuffle} copy={copy}/>
      <button id="show-more" className={showFooter ? "visible" : null} onClick={() => setShowFooter(!showFooter)}>
        {showFooter ? "Hide options " : "Advanced options "}
      </button>
      <Footer passwordLength={passwordLength} updatePasswordLength={updatePasswordLength} customChars={customChars} updateCustomChars={updateCustomChars} removeCustomChar={removeCustomChar}/>
    </>
  )
}


ReactDOM.render(<App />, document.querySelector("#react-root"))