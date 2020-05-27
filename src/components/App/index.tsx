import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getBlogItems } from '../../redux/actions/blogActions';
import PostForm from '../PostForm';

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
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PostForm />
        {newBlogItems(blogItem)}
        {blogItems.map((item: any, key: number) => (
          <div key={key}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
