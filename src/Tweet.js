import React from 'react';

export function Tweet({tweet, isLiked, onClickLike}) {
  return (
    <div className="list-group-item" style={{maxWidth: 500, margin: '0 auto'}}>
      <div className="media">
        <img
          className="mr-3 rounded-circle"
          src={`https://i.pravatar.cc/100?img=13`}
          alt="Avatar"
        />
        <div className="media-body">
          <div className="font-weight-bold">Brad S</div>
          <p>{tweet.content}</p>
                  <ActionIcon
              icon="heart"
              count={tweet.likes}
              highlight={isLiked}
              highlightColor="red"
              onClick={onClickLike.bind(null, tweet.id)}
            />
        </div>
      </div>
    </div>
  );
}

function ActionIcon({icon, count, highlight, highlightColor, ...otherProps}) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 60,
        cursor: 'pointer',
        color: highlight ? highlightColor : undefined,
      }}
      {...otherProps}
    >
      <span className={`pr-2 oi oi-${icon}`} />
      {count > 0 && <span>{count}</span>}
    </span>
  );
}