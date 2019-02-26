import React, { Component } from 'react';
import '../css/list.css';

class Todo extends Component {
  
// Constructor --------------------------
constructor(props){
    super(props)
    this.state={
        list:[]
    }      
}

// Event --------------------------------
handleKey = (e) => {
    let list = this.state.list;
    let result = (e.key === 'Enter' && e.target.value !== '') ? () =>{
        this.addList({name: e.target.value, id: (list.length === 0) ? 1 : list[list.length-1].id + 1, checked: false})
        e.target.value = ''
    }
    : () => null;

    return result()
}
  // 
  handleClick = (id, e) => {
    // console.log('deleted:' + this.state.list[id-1].id)
    this.setState({
      list: this.removeList(id)
    });
  }
  //   
  handleCheck = (id, e) => {
    // console.log('deleted:' + this.state.list[id-1].id)
    this.setState({
      list: this.toggle(id)
    });
  }

  // List Properties ------------------------
  addList(item){
    let list = [...this.state.list, item];
    this.setState({
      list: list
    })
    console.log( 'Sucessful Adding :' + list[list.length-1].id); 
  }
  // 
  removeList = (id) => {
    return this.state.list.filter(item => {
      return item.id === id ? false : true;
    })
  }
  //
  toggle = (id) => {
    return this.state.list.map(item => {
        return item.id === id ? item.checked = !item.checked : null;
    })
  }   
  // className={item.checked? 'check': ''}
  getList(list){
    return list.map( item => {
      return (
        <li onClick={this.handleClick.bind(this, item.id)} key={item.id} >
            <p>{item.name}</p>
        </li>
      );
    })
  }

// Rendering ---------------------------------
    render(){
        return(
            <React.Fragment>
                {/* TODO */}
                <div className="todo" >
                    {/* Input */}   
                    <input type="text" onKeyPress={this.handleKey} placeholder={'Write your task'} />
                    {/*List*/}
                    <ul className="list" >
                        { this.getList(this.state.list) }
                    </ul>
                </div>      
            </React.Fragment>
        )
    }

}

export default Todo;