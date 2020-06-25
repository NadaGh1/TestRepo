import React from 'react'
//import Navbar from './components/Navbar'
//import MainContent from './components/MainContent'
//import Footer from './components/Footer'
//import Joke from './components/Joke'

/*function App(){
  return (
    <div>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  )
}*/

/*function App(){
  return (
    <div>
      <input type="checkbox"/>
      <p>put text here</p>

      <input type="checkbox"/>
      <p>put text here</p>

      <input type="checkbox"/>
      <p>put text here</p>

      <input type="checkbox"/>
      <p>put text here</p>
    </div>
  )
}*/

/*
function App(){
  return (
    <div>
    <Joke
    question="What is this?" punchLine="I don't know"/>
    <Joke
    question="What is this?" punchLine="I don't know"/>
    <Joke
    question="What is this?" punchLine="I don't know"/>
    <Joke
    question="What is this?" punchLine="I don't know"/>
    <Joke
    question="What is this?" punchLine="I don't know"/>
    </div>
  )
}*/

class App extends React.Component(){

  constructor(){
    super()
    this.state= {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return{
        isLoggedIn: !prevState.isLoggedIn
    }

    } 
      )
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}


export default App