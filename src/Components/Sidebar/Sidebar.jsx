import React from 'react';
import './Sidebar.scss'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <div className="sidebar_banding">FOOTY</div>
                <hr />
            </div>
            <div className='sidebar_content'>
                <ul className='sidebar_items'>
                    <li className='sidebar_item' >Home</li>
                    <li className='sidebar_item' >Teams</li>
                    <li className='sidebar_item' >Players</li>
                    <li className='sidebar_item' >Competitions</li>
                </ul>
            </div>
            <div className='sidebar_bottom'></div>
        </div>
    );
};

export default Sidebar;