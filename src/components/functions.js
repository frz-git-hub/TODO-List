import  React from 'react';

// Composition =============================
export function LsGen(props) {
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
