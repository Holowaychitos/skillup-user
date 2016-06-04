const React = require('react')
const {Link} = require('react-router')

const Job = React.createClass({
  render() {
    return <div className='aprende-home flex'>
      <div className='sidebar txt-center flex flex-align-stretch flex-direction-column'>
        <div className='padding-2'>
          <img className='avatar' src='https://pbs.twimg.com/profile_images/536497683892940800/4XJCbl0-.jpeg' />
          Bienvenido, <b>Javier</b>.
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
