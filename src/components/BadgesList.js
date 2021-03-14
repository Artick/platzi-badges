import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';

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
              <div className="card">
                <img src={badge.avatarUrl} alt="Avatar" />
                <div className="card__info">
                  <p className="font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="text-info">@{badge.twitter}</p>
                  <p className="font-italic">
                    {badge.jobTitle}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
