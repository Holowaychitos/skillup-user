var NProgress = require('nprogress')

const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

  childContextTypes: {
    jobs: React.PropTypes.array,
    access: React.PropTypes.object,
    update: React.PropTypes.func
  },

  getInitialState() {
    return {
      jobs: [],
      access: {
        company: null,
        email: null
      }
    }
  },

  getChildContext() {
    return {
      jobs: this.state.jobs,
      access: this.state.access,
      update: this.onUpdate
    }
  },

  onUpdate(newStatePartial) {
    this.setState(newStatePartial)
  },

  componentDidMount() {
    NProgress.start();
    fetch('http://dbug.mx/api/v0.1/post')
      .then(response => {
        return response.json()
      }).then(body => {
        console.log('\nUPDATE DATA', body)
        this.setState({
          jobs: body.reverse()
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
