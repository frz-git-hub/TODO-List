import React, { Component } from 'react';
import Todo from './todo.js';
import Progress from './progress.js';
import Done from './done.js';

// Content ======================================
class Content extends Component {

  // Construtor ---------------------
  constructor(props){
      super(props)
      this.state = {
          tasks:[
              {id: 1, name: 'todo', status:'todo', checked: false},
              {id: 2, name: 'progress', status:'progress', checked: false},
              {id: 3, name: 'done', status:'done', checked: false},
          ]
      }
      // Binding --------------------
      this.handleTasksKey = this.handleTasksKey.bind(this)
      this.handleTasksClick = this.handleTasksClick.bind(this)
  }


  // Events ------------------------------------
  handleTasksKey(task){
      const tasks = [...this.state.tasks, task];
      this.setState({
          tasks
      })   
  }
  // 
  handleTasksClick(id, status){
      const tasks = this.state.tasks;
      tasks.map( (task) => {
          return task.id === id ? task.status = status : null
      })
      this.setState({
          tasks
      })   
  }

  // Rendering ----------------------
  render(){
      return(
          <div className="container">      
             
              {/* Todo List */}
              <Todo tasks={this.state.tasks} 
                  onTasksKey={this.handleTasksKey} 
                  onTasksClick={this.handleTasksClick}  />
              
              {/* Progress List */}
              <Progress tasks={this.state.tasks} 
                  onTasksKey={this.handleTasksKey} 
                  onTasksClick={this.handleTasksClick}  />

              {/* Done List */}
              <Done tasks={this.state.tasks} 
                  onTasksKey={this.handleTasksKey} 
                  onTasksClick={this.handleTasksClick}  />
              
          </div>
      )
  }
}

export default Content;