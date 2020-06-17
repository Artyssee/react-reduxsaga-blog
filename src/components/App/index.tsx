import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Istate } from '../../interfaces/globalInterfaces';
import { IBlogItemsState } from '../../interfaces/blogInterfaces';
import PostForm from '../PostForm';
import BlogItemContainer from '../BlogItemContainer';
import Styles from './App.module.scss';
import { getBlogItems } from '../../redux/actions/blogActions';
import store from '../../redux/store';

const App: React.FC = () => {
  const blogItems = useSelector(((state: Istate) => state.blogState.blogItems));
  const popupState = useSelector(((state: Istate) => state.popupState));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogItems());
  }, [dispatch]);

  useEffect(() => {
    if (popupState.isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [popupState.isOpen]);

  return (
    <Provider store={store}>
      <header className={Styles.AppHeader}>
        <h3>React + Redux saga blog</h3>
      </header>
      <div className={Styles.bodyContainer}>
        <PostForm />
        <div className={Styles.blogWrapper}>
          {blogItems ? blogItems.slice(0).reverse().map((item:IBlogItemsState) => (
            <React.Fragment key={item.id}>
              <BlogItemContainer item={item} />
            </React.Fragment>
          )) : <></>}
        </div>
      </div>
    </Provider>
  );
};

export default App;
