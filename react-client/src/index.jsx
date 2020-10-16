import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Admin from './components/admin.jsx';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'feed',
      Data : [],
      title :''
    }
    this.RetrieveData();
    this.filter = this.filter.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.RetrieveData = this.RetrieveData.bind(this)
    this.changeView = this.changeView.bind(this);
    this.addFanPost = this.addFanPost.bind(this)
  }

  RetrieveData(){
    var that = this;
    $.get('/api/anime', function(data){
    // console.log(data)
    that.setState({Data : data})
    })
    }

  addFanPost(obj){
    var that = this;
    console.log('Add fan post Function',obj)
    $.ajax({
     url: '/api/anime',
     method: 'POST',
     data: obj
   })
   .done (function (data) {
     console.log('Data sent');
     that.RetrieveData();
   })
   .fail(function( jqXHR, textStatus ) {
     alert( "Request failed: " + textStatus );
   });
  }

  filter(e) {    
    var Arr = this.state.Data
    console.log(Arr.length)
    var filtered = [];
    for(var i = 0 ; i < Arr.length ; i++) {
      if (Arr[i].title === this.state.title) {
        filtered.push(Arr[i])
      }
    }
    this.setState({
      Data: filtered
   });
   e.preventDefault();
  }

handleSearch(e){
  this.setState({ title: e.target.value });
  
}


  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {   
    const {view} = this.state;

    if (view === 'feed') {
      return <Feed handleClick={this.changeView}  anime={this.state.Data}/> 
             
    }     else if(view === 'admin') {
      return <Admin addFanPost={this.addFanPost} /> 
    }  
    else {
      return <Post anime={this.state.view}/>
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <img className='icon' src='https://i.pinimg.com/236x/22/3b/e1/223be10eddf56372c1762931f69051a6.jpg'></img>
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            Black-Ben
          </span>
          <form>
      <input
        type='text' onChange={this.handleSearch}
      />
       <input type="submit" value="search" onClick={this.filter}></input>
      </form>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('feed')}>
            Feed
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('admin')}>
            Admin
          </span>
        </div>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
