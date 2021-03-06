import React from 'react';

const Sidebar = ({reset}) => {
    return (
        <div id='sidebar'>
        <img src='juke.svg' id='logo' />
        <section>
            <h4>
                <a onClick = {() => {reset()}}>ALBUMS</a>
            </h4>
        </section>
        </div>
    )
}

export default Sidebar;