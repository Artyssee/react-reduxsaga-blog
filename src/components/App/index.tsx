import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogItems } from '../../redux/actions/blogActions';
import PostForm from '../PostForm';
import BlogItemContainer from '../BlogItemContainer';
import Styles from './App.module.scss';
import { Istate } from '../../interfaces/globalInterfaces';

const App = () => {
  const dispatch = useDispatch();
  const blogItems = useSelector(((state: Istate) => state.blogState.blogItems));
  const popupState = useSelector(((state: Istate) => state.popupState));

  console.log(blogItems);

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
              {blogItems.slice(0).reverse().map((item, key: number) => (
                <React.Fragment key={key}>
                  <BlogItemContainer item={item}  />
                </React.Fragment>
              ))}
          </div>
        </div>
    </div>
  );
}

export default App;
