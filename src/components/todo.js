import React, {Component} from 'react';

// TODO ============================================
class Todo extends Component {
    
  static classname = 'todo'
  static nextclass = 'progress'


  constructor(props){
      super(props)
      
      // Binding ------------------------
      this.handleKey = this.handleKey.bind(this)
  }

  // Events --------------------------------
  handleKey(e){
      const task = {}
      const tasks = this.props.tasks;
      if(e.key === 'Enter' && e.target.value !== '' ){
          task['id'] = tasks.slice(-1)[0].id + 1 ;
          task['name'] = e.target.value;
          task['checked'] = false;
          task['status'] = Todo.classname 
      }else{
          return null
      }
      this.props.onTasksKey(task)
  }
  // 
  handleClick(id) {
      const status = Todo.nextclass
      this.props.onTasksClick(id, status)
  }

  // Rebdering ----------------------------------
  render(){
      const tasks = this.props.tasks.filter( (task) => {
          return task.status === Todo.classname
      })
      
      console.log(this.classname);

      const list = tasks.map( (task) => {
          return (
              <li onClick={this.handleClick.bind(this, task.id)} key={task.id} >
                  {task.name}
              </li>
          )
      })

      return(
          <div className="list">
              <h2>Todo List</h2>
              <input placeholder="Add to list..." onKeyPress={this.handleKey} />
              <ul>
                  {list}
              </ul>
          </div>
      )
  }
}

export default Todo;
