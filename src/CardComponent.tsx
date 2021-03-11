/* eslint-disable react/no-array-index-key */
import React from 'react';

export const CardComponent: React.FC = () => {
  const branches = [
    { id: 'master', sha: '35gh600y7' },
    { id: 'origin', sha: '56yhg564f' },
  ];

  return branches.map((branch, index) => {
    return (
      <div className="card-box" key={index}>
        <div className="title-text">
          <h3>{branch.id}</h3>
          <h3 style={{ marginLeft: '8px' }}>{branch.sha}</h3>
          <button type="button" style={{ marginLeft: '8px' }}>
            Deploy
          </button>
        </div>
      </div>
    );
  });
};

export default CardComponent;
