import React from 'react';


class Admin extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		title: '',
    		imageUrl: '',
    		description: ''	
      }
  this.handleChangeTitle = this.handleChangeTitle.bind(this);
  this.handleChangeImage = this.handleChangeImage.bind(this);
  this.handleChangeDescription = this.handleChangeDescription.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeTitle(event) {
  this.setState({title: event.target.value});
}

handleChangeImage(event) {
  this.setState({imageUrl: event.target.value});
}

handleChangeDescription(event) {
  this.setState({description: event.target.value});
}

handleSubmit(event) {
  var obj = {
    title: this.state.title,
    imageUrl: this.state.imageUrl,
    description: this.state.description
  }
  this.props.addFanPost(obj);
    event.preventDefault();
 }


render (){
  return (
<div className="create">
  <div className="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input className="create-input" type="text"  placeholder="Anime Title" onChange={this.handleChangeTitle}></input>
      <input className="create-input" type="text"  placeholder="Image URL" onChange={this.handleChangeImage} ></input>
      <textarea className="create-body-textarea"  placeholder="Description" onChange={this.handleChangeDescription}></textarea>
      <button className="create-submit-button" type="submit" onClick={this.handleSubmit}>Save post</button>
    </form>
  </div>
  <div className="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
)
  }
}

export default Admin;