import React from 'react';

const BlogItemContainer = ({item}:any) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
};

export default BlogItemContainer;
