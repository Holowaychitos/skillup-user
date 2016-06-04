




const React = require('react')

// routes
const Login = require('./Views/Login.js');

const App = React.createClass({
  render() {
    return <div className='aprende-home flex flex-direction-column flex-justify-center flex-align-center'>
      <Login />
    </div>
  }
})

module.exports = App
