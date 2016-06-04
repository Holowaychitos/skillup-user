var React = require('react');

var MyProfile = React.createClass({
  contextTypes: {
    access: React.PropTypes.object
  },

  render() {
    const {access} = this.context
    const imageUrl = 'https://www.gravatar.com/avatar/' + window.md5(access.email) + '?s=200'

    return <div className='padding-2'>
      <div className='padding-2 txt-center'>
        <img className='avatar' src={imageUrl} />
        <b>{access.name}</b>.
      </div>
    </div>
  }

});

module.exports = MyProfile;
