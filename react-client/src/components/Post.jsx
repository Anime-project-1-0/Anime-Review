import React from 'react';
import {useRef} from 'react';
import $ from 'jquery';


class Post extends React.Component {
  constructor(props) {
    super(props)
this.state = {
  like : this.props.anime.like,
  dislike : this.props.anime.dislike
}
this.updateLike = this.updateLike.bind(this)
    this.updateDisLike = this.updateDisLike.bind(this);
  }


  updateLike(e) {
    var that = this;
    $.ajax({
      url : `/api/anime/${this.props.anime._id}`,
      method : 'PATCH',
      contentType : 'application/json',
      data : JSON.stringify({ id: this.props.anime._id, like: this.props.anime.like}),
      success : function(data){
        console.log(data)
  that.setState({ like : data.like})
      }
  });
  e.preventDefault();
  }

updateDisLike(e) {
  var that = this;
  $.ajax({
    url : `/api/anime/${this.props.anime._id}`,
    method : 'POST',
    contentType : 'application/json',
    data : JSON.stringify({ id: this.props.anime._id, dislike: this.props.anime.dislike}),
    success : function(data){
      console.log(data)
that.setState({ dislike : data.dislike})
    }
});
e.preventDefault();
}

render() {
return (
  <div className="post">
    <h1 className="post-title">{this.props.anime.title}</h1>
    <button><i className="fa fa-thumbs-up" onClick={this.updateLike}></i ></button> {this.state.like} <button><i className="fa fa-thumbs-down" onClick={this.updateDisLike}></i></button>  {this.state.dislike}
    <br></br>
    <img className="postImg" src={this.props.anime.imageUrl}/>
    <div className='post Text'>{this.props.anime.description}</div>
  </div>
)
}
}

export default Post;
