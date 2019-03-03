import React, {Component} from 'react';
import '../css/list.css';

class Todo extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      todolist: [
        { name: 'todo', id: 1, checked: false },
      ]
    }

  }

  // lifeCycle -----------------------------



  // Event ----------------------------------
  // 
  handleKey = (e) => {
    console.log('Event');
    
    let list = this.state.todolist;
    let result = (e.key === 'Enter' && e.target.value !== '') ? () => {
      this.addList({ name: e.target.value, id: (list.length === 0) ? 1 
        : list.slice(-1)[0].id + 1, checked: false })
      e.target.value = ''
    }
    : () => null;

    return result()
  }
  // 
  handleClick = (item) => {
    console.log('Click : ', item);
    this.props.addToProgress(item);
    this.setState({
      todolist: this.removeList(item.id)
    });
  }
  // List Properties --------------------------- 
  // Remove from List
  removeList = (id) => {
    console.log('Remove', id);
    
    return this.state.todolist.filter(item => {
      // item.id === id ? false : true; 
      return item.id !== id;
    })
  }
  // Add to List
  addList = (item) => {
    console.log('Add : ', item);
    var todolist = [...this.state.todolist, item]
    this.setState({
      todolist
    })
  }

  // Rendering ---------------------------------
  render(){

    // Show Elements on UI ------------------------
    const showList = this.state.todolist.map(item => {
      return (
        <li onClick={this.handleClick.bind(this, item)} key={item.id} >
          <p>{item.name}</p>
        </li>
      );
    }) 

    return (
      <React.Fragment>
        {/* Todo */}
        <div className="todo" >
          {/* Input */}
          <input type="text" onKeyPress={this.handleKey} placeholder={'Write your task'} />
          {/*List*/}
          <ul className="list" >
            {showList}
          </ul>
        </div>
      </React.Fragment>
    )
  }
  
}

export default Todo;
