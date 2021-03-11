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
              <h3>{pr.title}</h3>
            </a>
            <div className="sub-text">
              <h4 className="text">{`PR# : ${pr.number}`}</h4>
              <h4 className="text">{`opened at ${new Date(
                pr.created_at
              ).toDateString()}`}</h4>
              <h4 className="text">{`by ${pr.user.login}`}</h4>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default CardListComponent;
