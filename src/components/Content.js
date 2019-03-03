import React, { Component } from 'react';
import Todo from './todo.js';
import Progress from './progress.js';
import Done from './done.js';

class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {}
    }
  } 

  addToProgress = (progress_item) => {
    console.log('Content : ', progress_item);   
    // var progresslist = [...this.state.progresslist, progress_item]
    this.setState( {
      item: progress_item
    }); 
  }

  // Rendering -------------------------------
  render(){
    // console.log(this.state.item)
    // this.addToProgress()
    return (
      <div className='content'>

        {/* TODO List*/}
        <Todo addToProgress={this.addToProgress} /> 
        
        {/* Progress List*/}
        <Progress getItem={this.state.item} />

        {/* Done List*/}
        <Done />
        
      </div>
    );
  }
}

export default Content;