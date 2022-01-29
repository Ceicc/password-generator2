import React from "react"

export default function Main({password, generate, copy}) {
  return (
    <main>
      <textarea rows={1} readOnly value={password} onClick={copy}></textarea>
      <div>
        <button id="generate" type="button" onClick={generate}>Generate!!</button>
        <button id="copy" type="button" onClick={copy}>Copy</button>
      </div>
    </main>
  )
}