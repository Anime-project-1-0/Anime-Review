import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

render() {

return (
  <div className="post">
    <h1 className="post-title">{this.props.anime.title}</h1>
    <img className='postImg' src={this.props.anime.imageUrl}/>
    <br></br>
    <i className="fa fa-thumbs-up">  </i>{this.props.anime.like} <i className="fa fa-thumbs-down"></i>  {this.props.anime.dislike}
    <br></br><br></br>
    <div className='postText' >{this.props.anime.description}</div>
  </div>
)
}
}

export default Post;
