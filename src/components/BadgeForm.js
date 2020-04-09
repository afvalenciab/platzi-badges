import React from 'react';

class BadgeForm extends React.Component {

  handleChange = (e) => {
    this.props.onChange(e);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Button CLick");
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form>
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

          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm
