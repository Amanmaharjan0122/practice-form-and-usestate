import React from 'react'
import './App.css'
import HomePage from './components/homepagecomponents/index'
import Loginpage from './loginpage/index'

function App() {
  const [showRedDiv, setShowRedDiv] = React.useState(true)
  const [showBlueDiv, setShowBlueDiv] = React.useState(false)
  const [showYellowDiv, setShowYellowDiv] = React.useState(false)
  const [showGreyDiv, setShowGreyDiv] = React.useState(false)
  const [showDarkblueDiv, setShowDarkblueDiv] = React.useState(false)
  // const [showLoginpge, setshowLoginpage] = React.useState(false)

  // const [showRedDiv, setShowRedDiv] = React.useState(false)

  const handleRedClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(true)
  }
  const handleBlueClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(true)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }
  const handleYellowClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(true)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }
  const handleGreyClick = () => {
    setShowDarkblueDiv(false)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(true)
    setShowRedDiv(false)
  }
  const handleDarkblueClick = () => {
    setShowDarkblueDiv(true)
    setShowBlueDiv(false)
    setShowYellowDiv(false)
    setShowGreyDiv(false)
    setShowRedDiv(false)
  }

  return (
    <>
      {' '}
      <div className="main">
        <div className="left">
          <button className="red leftdiv" onClick={handleRedClick}>
            home
          </button>
          <button className="blue leftdiv" onClick={handleBlueClick}>
            about
          </button>
          <button className="yellow leftdiv" onClick={handleYellowClick}>
            resume
          </button>
          <button className="grey leftdiv" onClick={handleGreyClick}>
            work
          </button>
          <button className="darkblue leftdiv" onClick={handleDarkblueClick}>
            login
          </button>
        </div>
        <div className="right">
          {showRedDiv && <HomePage />}

          {showBlueDiv && <div className="container2">about</div>}

          {showYellowDiv && <div className="container3">resume</div>}

          {showGreyDiv && <div className="container4">work</div>}

          {showDarkblueDiv && <Loginpage />}
        </div>
      </div>
    </>
  )
}

export default App
