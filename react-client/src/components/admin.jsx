import React from 'react';


const Admin = (props) => (
<div className="create">
  <div className="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input className="create-input" type="text"  placeholder="Post Title"></input>
      <input className="create-input" type="text"  placeholder="Author"></input>
      <input className="create-input" type="text"  placeholder="Image URL"></input>
      <textarea className="create-body-textarea"  placeholder="Post Body"></textarea>
      <button className="create-submit-button" type="submit">Save post</button>
    </form>
  </div>
  <div className="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
)

export default Admin;