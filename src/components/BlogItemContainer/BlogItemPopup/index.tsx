import React, { useState, FormEvent } from 'react';
import { IcurrentPopup } from '../../../interfaces/popupInterfaces';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from './blogItemPopup.module.scss';
import { IeditPost } from '../../../interfaces/blogInterfaces';

interface Props {
    currentItem: IcurrentPopup
};

const BlogItemPopup = ({currentItem}:Props) => {
    const [newPostState, setNewPostState] = useState<IeditPost>({ userId: currentItem.userId, id: currentItem.id, postTitle: currentItem.title, postBody: currentItem.body });
    const dispatch = useDispatch();

    const changeValue = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setNewPostState({...newPostState, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e:FormEvent): void => {
        e.preventDefault();
        dispatch({ type: 'CLOSE_POPUP' });
    }

    const clearData = () => {
        console.log('weenee');
    }

    return (
        <div className={Styles.blogModal}>
            <div className={Styles.blogModalContent}>
                <FontAwesomeIcon 
                    className={`${Styles.blogModalContentClose}`}
                    icon={faTimes}
                    onClick={() => dispatch({ type: 'CLOSE_POPUP' })}
                />
                <h1>Editing Issue {currentItem.id} | {currentItem.title}</h1>

                <form onSubmit={(e) => handleSubmit(e)} className={Styles.postFormContainer}>
                    <input className={Styles.postFormContainerInput} type='text' defaultValue={newPostState.postTitle} onChange={(e) => changeValue(e)} placeholder='Insert post title' name='postTitle' />
                    <textarea className={Styles.postFormContainerTextarea} defaultValue={newPostState.postBody} onChange={(e) => changeValue(e)} placeholder='Insert post body' name='postBody' />
                    <div className={Styles.postFormButtonContainer}>
                        <button className={`${Styles.postFormButtonContainerButton} ${Styles.postFormButtonContainerButtonSubmit}`} type='submit'>Submit</button>
                        <button className={`${Styles.postFormButtonContainerButton} ${Styles.postFormButtonContainerButtonReset}`} onClick={() => clearData()} type='button'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BlogItemPopup;
