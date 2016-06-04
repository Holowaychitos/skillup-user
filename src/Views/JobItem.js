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
    var job = _.find(this.context.jobs, {_id: params.id})

    if (!job) {
      return <div className='padding-2 txt-center'>Loading...</div>
    }

    return <div className='padding-1 flex-1 view'>
      <div className='padding-1'>
        <div className='jobitem-header background-image' style={{
          backgroundImage: `url(${job.cover})`
        }} />
      </div>
      <div className='padding-1'>
        <h3>{job.title}.</h3>
        <div>
          <span className='upper-title'>Description:</span>
          {job.description}
        </div>
      </div>
      {_.map(job.options, option => {
        return <div className='padding-1' key={option._id}>
          <h4 className='job-title'>
            {option.title}
          </h4>
          <div className='job-description'>
            {option.desc}
          </div>
          <div className='padding-top-1'>
            <iframe
              width='560'
              height='315'
              src={option.link.replace('watch?v=', 'embed/')}
              frameBorder='0'
              allowFullscreen />
          </div>
          <a href={option.link} className='padding-top-1 padding-bottom-1'>
            Link to youtube
          </a>
        </div>
      })}

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
