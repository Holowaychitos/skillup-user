const React = require('react');
const _ = require('lodash');

const JobItem = React.createClass({
  contextTypes: {
    jobs: React.PropTypes.array
  },

  getInitialState() {
    return {
      applied: false
    }
  },

  onApply() {
    this.setState({
      applied: true
    })
  },

  render() {
    var {applied} = this.state
    var {params} = this.props
    var job = _.get(this.context, ['jobs', params.id])

    if (!job) {
      return <div className='padding-2 txt-center'>Loading...</div>
    }

    return <div className='padding-1 flex-1'>
      <div className='padding-1'>
        <div className='jobitem-header background-image' style={{
          backgroundImage: `url(${job.img})`
        }} />
      </div>
      <div className='padding-1'>
        <h3>{job.name}.</h3>
        <div>
          <span className='upper-title'>Description:</span>
          {job.description}
        </div>
      </div>

      <div className='padding-1'>
        {applied ? (
          <b>
            ¡Gracias! Nos contataremos contigo en cuanto la empresa responda a tu request ;)
          </b>
        ) : (
          <a className='button -inline' onClick={this.onApply}>
            ¡Estoy listo! Quiero aplicar
          </a>
        )}
      </div>

    </div>
  }
});

module.exports = JobItem;
