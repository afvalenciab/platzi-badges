import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <Navbar />
        <Hero />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...form} />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew
