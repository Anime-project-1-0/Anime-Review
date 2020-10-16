import React from 'react';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
    <div className="feed">
      <ul>
        {this.props.anime.map(ani => 
        <li className="feed-list-item" key={ani._id}>
          <div className="feed-list-item-title" onClick={()=>this.props.handleClick(ani)}>{ani.title}</div>
          <img src={ani.imageUrl} onClick={()=>this.props.handleClick(ani)} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{ani.description.split('.')[0]}</span>
        </li>)}
      </ul>
    </div>
  )}
  }

export default Feed;
