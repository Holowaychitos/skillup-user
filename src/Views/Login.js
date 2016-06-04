const React = require('react')

const Login = React.createClass({
  contextTypes: {
    update: React.PropTypes.func
  },

  getInitialState() {
    return {
      companyName: 'Joaquín',
      companyEmail: 'escusado@gmail.com'
    };
  },

  onLogin() {
    var {history} = this.props

    console.log('\nON LOGIN', this.state)

    this.context.update({
      access: {
        name: this.state.companyName,
        email: this.state.companyEmail
      }
    })
    this.props.history.push('/job');
  },

  onChange(val, res) {
    this.setState({
      [val]: res.target.value
    })
  },

  render() {
    return <div className='aprende-login flex flex-direction-column flex-justify-center flex-align-center'>
      <div className='padding-2 txt-center'>
        <h1>SkillUP</h1>
      </div>

      <div className='padding-1 form-container'>
        <input
          className='text-input margin-bottom-1'
          type='text'
          placeholder='Name'
          value={this.state.companyName}
          onChange={this.onChange.bind(this, 'companyName')} />

        <input
          className='text-input margin-bottom-2'
          type='text'
          placeholder='Email'
          value={this.state.companyEmail}
          onChange={this.onChange.bind(this, 'companyEmail')} />

        <a className='button' onClick={this.onLogin}>
          ¡Fierro pariente!
        </a>

        <div className='padding-bottom-2' />
        <div className='padding-bottom-2' />
      </div>
    </div>
  }
})

module.exports = Login
