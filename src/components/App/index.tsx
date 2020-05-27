import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getBlogItems } from '../../redux/actions/blogActions';
import PostForm from '../PostForm';
import BlogItemContainer from '../BlogItemContainer';

const App = () => {
  const dispatch = useDispatch();
  const blogItems = useSelector(((state: RootStateOrAny) => state.blogItems));
  const blogItem = useSelector(((state: RootStateOrAny) => state.blogItem));

  useEffect(() => {
    dispatch(getBlogItems());
  }, [dispatch])

  const newBlogItems = (blogItem:any) => (
    <div key={blogItem.id}>
      <h1>{blogItem.title}</h1>
      <p>{blogItem.body}</p>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          App overview window
        </h3>
        <PostForm />
        {newBlogItems(blogItem)}
        {blogItems.map((item: any, key: number) => (
          <React.Fragment key={key}>
            <BlogItemContainer item={item}  />
          </React.Fragment>
        ))}
      </header>
    </div>
  );
}

export default App;
