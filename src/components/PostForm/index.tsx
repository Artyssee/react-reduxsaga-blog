import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

interface InewPost {
    userId: number,
    postTitle: string,
    postBody: string
}

const PostForm = () => {
    const dispatch = useDispatch();
    const [newPost, setNewPost] = useState<InewPost>({ userId:999, postTitle: '', postBody: '' });

    const changeItem = (e:any) => {
        setNewPost({...newPost, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch({ type: 'POST_BLOGITEM', payload: newPost })
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} style={{display: 'flex', flexDirection: 'column'}}>
            <input type='text' placeholder='post-title' name='postTitle' onChange={(e) => changeItem(e)} />
            <textarea placeholder='post-body' name='postBody' onChange={(e) => changeItem(e)} />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default PostForm;
