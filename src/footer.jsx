import React from "react"

export default function footer({ passwordLength, updatePasswordLength, customChars, updateCustomChars, removeCustomChar }) {
  return (
    <footer>

      <div className="inputs">

        <span>
          <label htmlFor="length">Password Length {" "}</label>
          <input type="number" id="length" value={passwordLength} max="64" onChange={updatePasswordLength} />
        </span>
        
        <span>
          <label htmlFor="add-char">
            Add characters {" "}
            <i>
              <input type="text" id="add-char" placeholder="One per" onChange={updateCustomChars} value={""} />
              <span></span>
            </i>
          </label>
        </span>

      </div>

      <div id="custom-chars" onClick={event => event.target.type === "button" && removeCustomChar(event.target.parentElement.dataset.char)}>
        
        {[...customChars].map(char => (

          <div key={char} data-char={char}>
            <span>{char}</span>
            <button type="button">❌</button>
          </div>
          
        ))}
      
      </div>
    </footer>
  )
}