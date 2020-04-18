import React from 'react';
import { Link } from 'react-router-dom';
import BadgeItemList from './BadgeItemList';
import PageLoading from './PageLoading';
import Loader from './Loader';
import api from 'utils';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null,
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

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return (
        <div className="Badges-not-found-data">
          <h3><span role="img" aria-label="emoji error">❌</span> There is an error, please try again later <strong>{this.state.error}</strong> 😱</h3>
        </div>
      );
    }

    if (this.state.data.length === 0) {
      return (
        <div className="Badges-not-found-data">
          <h3>Badges were not found!</h3>
          <Link to="/badges/new" className="btn btn-primary">Create the first Badge</Link>
        </div>
      );
    }

    return (
      <div className="Badges-list-container">
        <div className="Badges-buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>

        <div className="Badges-list-data mb-4">
          <div className="Badges-list-data-container">
            {this.state.data.map((itemBadge) => {
              return (
                <Link key={itemBadge.id} to={`/badges/${itemBadge.id}/edit`} className="link-unstyled">
                  <BadgeItemList {...itemBadge} />
                </Link>
              )
            })}
          </div>
          {this.state.loading && <Loader className="Loader-small" />}
        </div>
      </div>
    );
  }
}

export default BadgesList
