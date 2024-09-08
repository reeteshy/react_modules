import React from 'react'
import ReactDOM from 'react-dom'

function ReactPortal() {
  return ReactDOM.createPortal( <div>ReactPortal</div> , document.getElementById('portal-root'))
}

export default ReactPortal