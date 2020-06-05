import React, { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getBlogItems } from '../../redux/actions/blogActions';
import PostForm from '../PostForm';
import BlogItemContainer from '../BlogItemContainer';
import Styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const blogItems = useSelector(((state: RootStateOrAny) => state.blogItems));

  useEffect(() => {
    dispatch(getBlogItems());
  }, [dispatch])

  return (
    <React.Fragment>
        <header className={Styles.AppHeader}>
          <h3>React + Redux saga blog</h3>
        </header>
        <div className={Styles.bodyContainer}>
          <PostForm />
          <div className={Styles.blogWrapper}>
              {blogItems.slice(0).reverse().map((item: any, key: number) => (
                <React.Fragment key={key}>
                  <BlogItemContainer item={item}  />
                </React.Fragment>
              ))}
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
