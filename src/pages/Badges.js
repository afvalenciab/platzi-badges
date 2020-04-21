import React from 'react';
import { Link } from 'react-router-dom';
import Hero from 'components/Hero';
import BadgesList from 'components/BadgesList';
import PageLoading from 'components/PageLoading';
import PageError from 'components/PageError';
import Loader from 'components/Loader';
import SearchFilter from 'components/SearchFilter';
import badgeHeader from 'assets/images/badge-header.svg';
import api from 'utils';

class Badges extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null,
    filterBadge: '',
  };

  componentDidMount() {
    this.fetchData();

    this.internalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.internalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  }

  setFilterBadge = (event) => {
    this.setState({
      filterBadge: event.target.value,
    });
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <>
        <Hero logo={badgeHeader} className='Badges__list'>
          <SearchFilter onChange={this.setFilterBadge} filterBadge={this.state.filterBadge} />
        </Hero>
        <h1>{this.state.data[0].firstName} {this.state.data[0].lastName}</h1>
        <BadgesList data={this.state.data} filterBadge={this.state.filterBadge} />
        {this.state.loading && <Loader className="Loader-small" />}
      </>
    );
  }
}

export default Badges
