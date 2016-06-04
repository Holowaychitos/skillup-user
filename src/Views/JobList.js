const React = require('react')
const _ = require('lodash')

const JobList = React.createClass({

  contextTypes: {
    jobs: React.PropTypes.array
  },

  onOpen(idx) {
    this.props.history.push('/job/' + idx);
  },

  render() {
    const {jobs} = this.context

    if (!jobs || !jobs.length) {
      return <div className='padding-2 txt-center'>Loading...</div>
    }

    return <div className='flex-1'>
      <div className='padding-2'>
        <h3 className='-light'>Oportunidades para desarrollarte:</h3>
      </div>

      <div className='padding-1 job-list'>
        {_.map(jobs, job => {
          return <div className='job-list-item-container' key={job.id} onClick={this.onOpen.bind(null, job.id)}>
            <div className='job-list-item background-image' style={{
              backgroundImage: `url(${job.img})`
            }}>
              <div className='job-list-item-cat'>
                {job.cat}
              </div>
              <div className='job-list-item-name'>
                {job.name}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  }
})

module.exports = JobList
