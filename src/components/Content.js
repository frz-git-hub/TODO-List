import React, { Component } from 'react';
import '../css/list.css';

// TODO: Drag and Drop (DnD) - Change task position 

// Composition =============================
function LsGen(props) {
    return (
        <div className="list">
            <h2>{props.title}</h2>
            {props.children}
            <ul>
                {props.list}
            </ul>
        </div>
    )
}

// Content ======================================
class Content extends Component {

    // Construtor --------------------------------
    constructor(props) {
        super(props)
        // Source Of Truth
        this.state = {
            todo: [],
            progress: [],
            done: []
        }
        // Binding --------------------
        this.handleTasksKey = this.handleTasksKey.bind(this)
    }

    // Events Handling ------------------------------------
    // Key Handling
    handleTasksKey(e) {
        // Data Event
        const name = e.target.name
        const value = e.target.value
        const key = e.key
        const list = this.state[name]
        // Condition of Validation
        if (key === 'Enter' && value !== '') {

            // Prepare Task
            const task = {}
            task['id'] = (list.length > 0) ? (list.slice(-1)[0].id + 1) : 1
            task['task'] = value
            task['checked'] = false

            // Set State
            const tasks = [...list, task]
            this.setState({
                [name]: tasks
            })

            // Empty Input after Enter
            e.target.value = ''
        }
    }

    // ContextMenu Handler
    handleContextMenu(task, e) {
        e.preventDefault()
        console.log(task);
    }

    // Click Handling
    handleTasksClick(task, nextname, e) {
        if (nextname === 'finished') {
            // Task Finally
            const tasks = this.listRemoveItem(this.state.done, task)
            // 
            this.setState({
                done: tasks
            })
        } else {
            // Task in Progress
            if (task.checked) return null;
            const list = this.state[nextname]
            const lastID = (list.length > 0) ? (list.slice(-1)[0].id) : 0
            const clone = Object.assign({}, task)
            task['checked'] = true
            clone['id'] = lastID + 1
            const tasks = this.listAdder(list, clone)
            // 
            this.setState({
                [nextname]: tasks
            })
        }
    }


    // list Manager ---------------------------------
    // list Adder 
    listAdder(list, task) {
        const ls = [...list]
        ls.push(task)
        return ls
    }

    // list Item Remover
    listRemoveItem(list, task) {
        return list.filter((el) => {
            return el.id !== task.id
        })
    }

    // list Generator
    listMaker(list, nextname) {
        return list.length > 0 ? list.map((el) => {
            return <li
                className={el.checked ? 'checked' : null}
                onClick={this.handleTasksClick.bind(this, el, nextname)}
                onContextMenu={this.handleContextMenu.bind(this, el)}
                key={el.id}
            >
                {el.task}
            </li>
        }) : null
    }

    // Rendering ---------------------------------------
    render() {

        //  You can control INPUT element as modularity :)
        return (
            <div className="container">

                <input name='todo' placeholder="Add to list..." onKeyPress={this.handleTasksKey} />
                {/***********************Todo**********************/}
                <LsGen
                    // Specialization
                    title="Todo List"
                    list={this.listMaker(this.state.todo, 'progress')}
                >
                    {/*Containment*/}
                    {/*<input name='todo' placeholder="Add to list..." onKeyPress={this.handleTasksKey} />*/}
                </LsGen>

                {/*********************Progress********************/}
                <LsGen
                    // Specialization
                    title="Progress List"
                    list={this.listMaker(this.state.progress, 'done')}
                >
                    {/*Containment*/}
                    {/*<input name='progress' placeholder="Add to list..." onKeyPress={this.handleTasksKey} />*/}
                </LsGen>

                {/***********************Done***********************/}
                <LsGen
                    // Specialization
                    title="Done List"
                    list={this.listMaker(this.state.done, 'finished')}
                >
                    {/*Containment*/}
                    {/*<input name='done' placeholder="Add to list..." onKeyPress={this.handleTasksKey} />*/}
                </LsGen>

            </div>
        )
    }
}

export default Content;