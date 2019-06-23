import React from 'react';

function NotFound({ location }) {
  return (
    <div>
      <img
        src="https://media.giphy.com/media/tvGOBZKNEX0ac/giphy.gif"
        alt="Not found."
      />
      <h1>
        Oops! <code>{location.pathname}</code> not found! 😱
      </h1>
      <p>Please check if the URL is correct.</p>
    </div>
  );
}

export default NotFound;
