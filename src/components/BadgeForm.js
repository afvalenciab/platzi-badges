import React from 'react';

class BadgeForm extends React.Component {

  handleChange = (e) => {
    this.props.onChange(e);
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" className="form-control" onChange={this.handleChange} value={this.props.formValues.firstName} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="form-control" onChange={this.handleChange} value={this.props.formValues.lastName} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" onChange={this.handleChange} value={this.props.formValues.email} />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" className="form-control" onChange={this.handleChange} value={this.props.formValues.jobTitle} />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" name="twitter" className="form-control" onChange={this.handleChange} value={this.props.formValues.twitter} />
          </div>

          <button type="submit" className="btn btn-primary">Save</button>

          {this.props.error && <p style={{ color: 'red' }}>{this.props.error.message}</p>}
        </form>
      </>
    );
  }
}

export default BadgeForm
