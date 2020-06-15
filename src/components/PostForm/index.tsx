import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Styles from "./postForm.module.scss";
import { InewBlogItem } from "../../interfaces/blogInterfaces";

const PostForm = () => {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState<InewBlogItem>({
    userId: 999,
    postTitle: "",
    postBody: "",
  });

  const changeItem = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: "POST_BLOGITEM", payload: newPost });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={Styles.postFormContainer}
    >
      <input
        className={Styles.postFormContainerInput}
        type="text"
        placeholder="Insert post title"
        name="postTitle"
        onChange={(e) => changeItem(e)}
      />
      <textarea
        className={Styles.postFormContainerTextarea}
        placeholder="Insert post body"
        name="postBody"
        onChange={(e) => changeItem(e)}
      />
      <button className={Styles.postFormContainerButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
