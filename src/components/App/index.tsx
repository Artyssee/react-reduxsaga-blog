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
    <div className={Styles.App}>
      <header className={Styles.AppHeader}>
        <h3>
          App overview window
        </h3>
        <PostForm />
        <div className={Styles.blogWrapper}>
          {blogItems.slice(0).reverse().map((item: any, key: number) => (
            <React.Fragment key={key}>
              <BlogItemContainer item={item}  />
            </React.Fragment>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
