import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from './blogItemContainer.module.scss';
import { useDispatch } from 'react-redux';

const BlogItemContainer = ({item}:any) => {
    const dispatch = useDispatch();

    const iconOnClick = (item: any) => {
        dispatch({ type: 'DELETE_BLOGITEM', payload:item.id })
    };

    return (
        <div className={Styles.blogItemContainer}>
            <div className={Styles.blogItemHeaderContainer}>
                <h4 className={Styles.blogItemHeaderContainerHeader}>{item.title}</h4>
                <FontAwesomeIcon className={Styles.blogItemHeaderContainerBody} icon={faTimes} onClick={() => iconOnClick(item)} />
            </div>
            <p className={Styles.blogItemContainerText}>{item.body}</p>
        </div>
    );
};

export default BlogItemContainer;
