/* eslint-disable react/no-array-index-key */
import React from 'react';

interface Props {
  current: string;
  deployed: string;
}

export const CardComponent: React.FC<Props> = ({ current, deployed }) => {
  const branches = [
    { id: 'master', dev: '35gh600y7', live: '98jfdkddj' },
    { id: 'origin', dev: '56yhg564f', live: 'klbk238dd' },
  ];

  const head = [{ id: 'prod', dev: current || '', live: deployed || '' }];
  const all = [...head, ...branches];
  return all.map((branch, index) => {
    return (
      <div className="card-box" key={index}>
        <div className="title-text">
          <h3>{branch.id}</h3>
          <h3 style={{ marginLeft: '8px', marginRight: '8px' }}>
            {branch.dev}
          </h3>
          <h3 style={{ marginLeft: '8px', marginRight: '8px' }}>
            {branch.live}
          </h3>
          <button type="button" style={{ marginLeft: '8px' }}>
            Deploy
          </button>
        </div>
      </div>
    );
  });
};

export default CardComponent;
