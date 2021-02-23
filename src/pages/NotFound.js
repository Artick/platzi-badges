import React from 'react';

import Found404 from '../images/404.svg';

function NotFound () {
  return (
    <div className="d-flex justify-content-center">
      <img className="w-25" src={Found404} alt="Página no encontrada" />
    </div>
  );
}

export default NotFound;
