import React, { Component } from 'react';
import '../css/list.css';

class Progress extends Component {

  // Constructor ----------------------------
  constructor(props) {
    super(props)
    console.log('hey:', this.props.state);
    
    this.state = {
      progresslist: [
        { name: 'progress', id: 1, checked: false },
      ]
    };

  }

  // LifeCycle Update -----------------------
  shouldComponentUpdate = (nextProps, nextState) => {
    // Content item without change
    var item = this.props.getItem;
    console.log('next: ',nextProps);
    // item unequal to next item that is correct item
    if(item !== nextProps.getItem){
      // item change to correct item
      item = nextProps.getItem
      // add to item's id for preventing from warning key
      item.id = this.state.progresslist.slice(-1)[0].id + 1;
      console.log('Component did update : ', item)
      // setState -----
      var progresslist = [...this.state.progresslist, item];
      this.setState({
        progresslist
      });
      return true
    }
    // if item is correct
    console.log('Updated');
    return false
    
  }

  // Event ----------------------------------
  // Key
  handleKey = (e) => {
    console.log('Event');

    let list = this.state.progresslist;
    // To do if click on Enter key and exist value in input
    let result = (e.key === 'Enter' && e.target.value !== '') ? () => {
      // add to list and clear input
      this.addList({
        name: e.target.value, id: (list.length === 0) ? 1
          : list.slice(-1)[0].id + 1, checked: false
      })
      e.target.value = ''
    }
    : () => null;

    return result()
  }
  // Click
  handleClick = (item) => {
    console.log('Click : ', item);

    this.setState({
      progresslist: this.removeList(item.id)
    });
  }
  // List Properties --------------------------- 
  // Remove from List
  removeList = (id) => {
    console.log('Remove');

    return this.state.progresslist.filter(item => {
      // item.id === id ? false : true;
      return item.id !== id;
    })
  }
  // Add to List
  addList = (item) => {
    console.log('Add : ', item);
    // this.state.progresslist.push(item);
    var progresslist = [...this.state.progresslist, item]
    console.log('out', progresslist)
    this.setState({
      progresslist
    })
  }

  // Rendering ---------------------------------
  render() {

    // Show Elements on UI ------------------------
    const showList = this.state.progresslist.map(item => {
      return (
        <li onClick={this.handleClick.bind(this, item)} key={item.id} >
          <p>{item.name}</p>
        </li>
      );
    });

    return (
      <React.Fragment>
        {/* Progress */}
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

// {showList}
export default Progress;
