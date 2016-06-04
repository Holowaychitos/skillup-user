var NProgress = require('nprogress')

const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

  childContextTypes: {
    jobs: React.PropTypes.array
  },

  getInitialState() {
    return {
      jobs: []
    }
  },

  getChildContext() {
    return {
      jobs: this.state.jobs
    }
  },

  componentDidMount() {
    NProgress.start();
    fetch('http://dbug.mx/api/v0.1/post')
      .then(response => {
        return response.json()
      }).then(body => {
        console.warn(body)
        this.setState({
          jobs: body
        })
        NProgress.done();
      })
  },

  render() {
    return <div>
      {this.props.children}
    </div>
  }
})

module.exports = App
