const React = require('react')
const {Link} = require('react-router')

const Job = React.createClass({
  contextTypes: {
    access: React.PropTypes.object
  },

  componentDidMount() {
    const {access} = this.context

    if (!access.name || !access.email) {
      this.props.history.push('/');
    }
  },

  render() {
    const {access} = this.context
    const imageUrl = 'https://www.gravatar.com/avatar/' + window.md5(access.email) + '?s=200'

    return <div className='aprende-home flex'>
      <div className='sidebar txt-center flex flex-align-stretch flex-direction-column'>
        <div className='padding-2'>
          <img className='avatar' src={imageUrl} />
          Bienvenido, <b>{access.name}</b>.
        </div>

        <div className='navigation'>
          <Link to='/job' activeClassName='active' className='navigation-item'>
            Buscar opciones
          </Link>
          <Link to='/myprofile' activeClassName='active' className='navigation-item'>
            Mi Perfil
          </Link>
        </div>

        <div className='flex-1' />

        <div className='padding-2'>
          Gracias
        </div>
      </div>
      {this.props.children}
    </div>
  }
})

module.exports = Job
