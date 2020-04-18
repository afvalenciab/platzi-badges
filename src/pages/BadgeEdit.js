import React from 'react';
import md5 from 'md5';
import Hero from 'components/Hero';
import Badge from 'components/Badge';
import BadgeForm from 'components/BadgeForm';
import platziConfLogo from 'assets/images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';
import api from 'utils';

class BadgeEdit extends React.Component {
  badgeId = this.props.match.params.badgeId;

  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const badgeData = await api.badges.read(this.badgeId);
      this.setState({
        loading: false,
        form: badgeData
      })
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      ...this.state.form,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`,
    };

    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.badgeId, form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const { form } = this.state;

    if (this.state.loading) {
      return (
        <PageLoading />
      );
    }

    return (
      <>
        <Hero logo={platziConfLogo} />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...form} />
            </div>

            <div className="col-6 mb-3">
              <BadgeForm
                title="Edit Attendant"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit
