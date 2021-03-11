/* eslint-disable react/no-array-index-key */
import React from 'react';

interface Props {
  pullRequests?: any;
}

export const CardListComponent: React.FC<Props> = (props) => {
  const { pullRequests } = props;

  return (
    pullRequests &&
    pullRequests.map((pr, index) => {
      return (
        <div className="card-list" key={index}>
          <div className="list-title-text">
            <a href={pr.url} target="_blank" rel="noreferrer">
              <h2 className="pr-title">{pr.title}</h2>
            </a>
            <div className="sub-text">
              <div
                className="text"
                style={{ marginRight: '5px' }}
              >{`PR# : ${pr.number}`}</div>
              <div
                className="text"
                style={{ marginRight: '5px' }}
              >{`opened at ${new Date(pr.created_at).toDateString()}`}</div>
              <div className="text">{`by ${pr.user.login}`}</div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default CardListComponent;
