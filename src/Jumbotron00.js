import React from 'react';

const Jumbotron00 = (prop) => {
  return (
    <div className="jumbotron00 jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{prop.title}</h1>
        <p className="lead">{prop.description}</p>
        {prop.children}
      </div>
    </div>
    );
}
export default Jumbotron00