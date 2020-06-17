import React, {
  useState,
  FormEvent,
  ReactElement,
} from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IcurrentPopup } from '../../../interfaces/popupInterfaces';
import Styles from './blogItemPopup.module.scss';
import { IeditBlogItem } from '../../../interfaces/blogInterfaces';
import { editBlogItem } from '../../../redux/actions/blogActions';
import { closePopup } from '../../../redux/actions/popupActions';

interface Props {
  currentItem: IcurrentPopup;
}

const BlogItemPopup = ({ currentItem }: Props):ReactElement => {
  const [newPostState, setNewPostState] = useState<IeditBlogItem>({
    id: currentItem.id,
    userId: currentItem.userId,
    postTitle: currentItem.title,
    postBody: currentItem.body,
  });
  const dispatch = useDispatch();

  const changeValue = (e:
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewPostState({ ...newPostState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(closePopup());
    dispatch(editBlogItem(newPostState));
  };

  const resetData = ():void => {
    setNewPostState({
      ...newPostState,
      postTitle: currentItem.title,
      postBody: currentItem.body,
    });
  };

  return (
    <div className={Styles.blogModal}>
      <div className={Styles.blogModalContent}>
        <FontAwesomeIcon
          className={`${Styles.blogModalContentClose}`}
          icon={faTimes}
          onClick={() => dispatch(closePopup())}
        />
        <h1 className={Styles.blogModalContentHeading}>
          {`Editing Issue ${currentItem.id} | ${currentItem.title}`}
        </h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className={Styles.postFormContainer}
        >
          <input
            className={Styles.postFormContainerInput}
            type="text"
            value={newPostState.postTitle}
            onChange={(e) => changeValue(e)}
            placeholder="Insert post title"
            name="postTitle"
          />
          <textarea
            className={Styles.postFormContainerTextarea}
            value={newPostState.postBody}
            onChange={(e) => changeValue(e)}
            placeholder="Insert post body"
            name="postBody"
          />
          <div className={Styles.postFormButtonContainer}>
            <button
              className={`${Styles.postFormButtonContainerButton} ${Styles.postFormButtonContainerButtonSubmit}`}
              type="submit"
            >
              Submit
            </button>
            <button
              className={`${Styles.postFormButtonContainerButton} ${Styles.postFormButtonContainerButtonReset}`}
              onClick={resetData}
              type="button"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogItemPopup;
