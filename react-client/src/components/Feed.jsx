import React from 'react';

const Feed = (props) => (
  <div className="feed">
    <ul>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>NARUTO</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="https://wallpaperaccess.com/full/1346635.jpg" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>Demon Slayer</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="https://i.ytimg.com/vi/tfjKXZUcOBo/maxresdefault.jpg" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="https://images.wallpapersden.com/image/download/one-piece-world-seeker_64227_1280x720.jpg" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="https://www.whats-on-netflix.com/wp-content/uploads/2020/01/The-Seven-Deadly-Sins-Season-4-Netflix.jpg" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
    </ul>
  </div>
);

export default Feed;
