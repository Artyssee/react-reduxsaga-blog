import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from './blogItemContainer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IBlogItemsState } from '../../interfaces/blogInterfaces';
import { Istate } from '../../interfaces/globalInterfaces';
import { openPopup } from '../../redux/actions/popupActions';
import { deleteBlogItem } from '../../redux/actions/blogActions';
import BlogItemPopup from './BlogItemPopup';
import { truncateString } from '../../js/functions';

interface Props {
    item: IBlogItemsState,
};

const BlogItemContainer = ({item}:Props) => {
    const popupState = useSelector(((state: Istate) => state.popupState));
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {
                popupState.isOpen && item.id === popupState.currentPopup.id ? 
                <BlogItemPopup currentItem={popupState.currentPopup} /> : 
                null
            }
            <div className={Styles.blogItemContainer}>
                <div className={Styles.blogItemHeaderContainer}>
                    <div className={Styles.blogItemHeaderText}>
                        <h4 className={Styles.blogItemHeaderTextTitle}>{item.title}</h4>
                        <span className={Styles.blogItemHeaderTextSeperator}>|</span>
                        <p className={Styles.blogItemHeaderTextBlogNumber}>Issue {item.id}</p>
                    </div>
                    <div className={Styles.blogItemIconContainer}>
                        <FontAwesomeIcon 
                            className={`${Styles.blogItemIconContainerIcon} ${Styles.blogItemIconContainerIconEdit}`}
                            icon={faPencilAlt}
                            onClick={() => dispatch(openPopup(item))}
                        />
                        <FontAwesomeIcon 
                            className={`${Styles.blogItemIconContainerIcon} ${Styles.blogItemIconContainerIconDelete}`}
                            icon={faTimes}
                            onClick={() => dispatch(deleteBlogItem(item.id))}
                        />
                    </div>
                </div>
                <p className={Styles.blogItemContainerText}>{item.body !== undefined ? truncateString(item.body, 100) : item.body}</p>
            </div>
        </React.Fragment>
    );
};

export default BlogItemContainer;
