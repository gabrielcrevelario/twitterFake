import React from 'react';

export default (props) => (
    <div className="listItems">
    <div className="containerList">
        <ul>
            <li><div className="item">
                <span className="material-icons">
                    local_post_office
                    </span>
                <span className="spanItem"> Posts</span>
            </div></li>
            <li><div className="item">
                <span className="material-icons">
                    notifications
                    </span>
                <span className="spanItem"> Notifications</span>
            </div></li>
            <li><div className="item">
                <span className="material-icons">
                    save
                    </span>
               <span className="spanItem">Saved Items</span></div></li>
        </ul>
    </div>
</div>    
)