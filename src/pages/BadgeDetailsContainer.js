import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../utils';


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, error: null, data });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  }

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  }

  handleDeleteBadge = async () => {
    this.setState({ modalIsOpen: false, loading: true, error: null });

    try {
      await api.badges.remove(this.state.data.id);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <BadgeDetails
        data={this.state.data}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge} />
    );
  }
}

export default BadgeDetailsContainer;
