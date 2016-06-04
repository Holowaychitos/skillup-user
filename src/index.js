const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./App.js');
const Job = require('./Views/Job.js');
const JobList = require('./Views/JobList.js');
const JobItem = require('./Views/JobItem.js');
const MyProfile = require('./Views/MyProfile.js');
const Login = require('./Views/Login.js');
const NoMatch = require('./Views/NoMatch.js');

import {Router, Route, Link, browserHistory} from 'react-router'

var Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Login} />
        <Route component={Job}>
          <Route path="/job" component={JobList} />
          <Route path="/job/:id" component={JobItem} />
          <Route path="/myprofile" component={MyProfile} />
        </Route>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  }
})

ReactDOM.render(<Routes />, document.getElementById('root'));
