const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({

  childContextTypes: {
    jobs: React.PropTypes.array
  },

  getInitialState() {
    return {
      jobs: [{
        id: 0,
        name: 'Drone Inspector',
        description: 'tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe',
        cat: 'Skycatch',
        img: 'http://urbantoronto.ca/sites/default/files/imagecache/display-slideshow/images/articles/2015/06/16468/16468-55075.jpg'
      }, {
        id: 1,
        name: 'Drone Loco',
        description: 'tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe',
        cat: 'WizeLine',
        img: 'http://1tsbfbs53i21zwlkm18klyc1.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/skycatch.jpg'
      }, {
        id: 2,
        name: 'Drone Repair',
        description: 'tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe',
        cat: 'Centro Fox',
        img: 'http://www.dronedoctor.com/assets/images/PHANTOM-3-REPAIR.jpg'
      }, {
        id: 3,
        name: 'Geo Spacial Soldier',
        description: 'tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe tehehe',
        cat: 'City Drive',
        img: 'https://www.army.mil/e2/c/images/2011/10/11/222722/size0.jpg'
      }]
    }
  },

  getChildContext() {
    return {
      jobs: this.state.jobs
    }
  },

  componentDidMount() {
    fetch('http://dbug.mx/api/v0.1/post')
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.warn({body})
      })
    console.warn('ukelele')
  },

  render() {
    return <div>
      {this.props.children}
    </div>
  }
})

module.exports = App
