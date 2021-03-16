import React from 'react';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render () {
    return (
      <div className="card">
        <Gravatar
          className="Badge_avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />
        <div className="card__info">
          <p className="font-weight-bold">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p className="text-info">@{this.props.badge.twitter}</p>
          <p className="font-italic">
            {this.props.badge.jobTitle}
          </p>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render () {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map (badge => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
