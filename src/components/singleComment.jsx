import React from "react";

export default ({ title, body }) => {

    return <div className="singleComment">
        <div className="commentTitle">
            {title}
        </div>
        <div className="commentBody">
            {body}
        </div>
    </div>;

}