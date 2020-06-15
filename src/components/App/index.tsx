import React, { useEffect } from 'react';
import { Istate } from '../../interfaces/globalInterfaces';
import { IBlogItemsState } from '../../interfaces/blogInterfaces';
import PostForm from '../PostForm';
import BlogItemContainer from '../BlogItemContainer';
import Styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogItems } from '../../redux/actions/blogActions';


const App = () => {
  const blogItems = useSelector(((state: Istate) => state.blogState.blogItems));
  const popupState = useSelector(((state: Istate) => state.popupState));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogItems());
  }, [dispatch])

  return (
    <div className={`${popupState.isOpen ? Styles.popupContainer : ''}`}>
        <header className={Styles.AppHeader}>
          <h3>React + Redux saga blog</h3>
        </header>
        <div className={Styles.bodyContainer}>
          <PostForm />
          <div className={Styles.blogWrapper}>
              {blogItems ? blogItems.slice(0).reverse().map((item:IBlogItemsState, key: number) => (
                <React.Fragment key={key}>
                  <BlogItemContainer item={item}  />
                </React.Fragment>
              )): <React.Fragment />}
          </div>
        </div>
    </div>
  );
}

export default App;
