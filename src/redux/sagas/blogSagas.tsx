import { all, put, takeLatest } from "redux-saga/effects";
import { InewPost } from "../../interfaces/blogInterfaces";

interface IPostAction {
  type: "POST_BLOGITEM";
  payload: InewPost;
}

function* fetchBlogItems() {
  // Used to be JSONplaceholder fetch. Mocked with mocky to better test https://jsonplaceholder.typicode.com/posts
  const json = yield fetch(
    "http://localhost:3001/api/blog"
  ).then((response: any) => response.json());
  yield put({ type: "BLOGITEMS_RECEIVED", json });
}

function* createPostBlogItem(action: IPostAction): object {
  const json = yield fetch("http://localhost:3001/api/blog", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: action.payload.postTitle,
      body: action.payload.postBody,
      userId: 999,
    }),
  }).then((response) => response.json());
  const [newItem] = yield fetch(
    `http://localhost:3001/api/blog/${json.insertId}`
  ).then((response) => response.json());
  yield put({ type: "POST_BLOGITEM_RECEIVED", payload: newItem });
}

function* editBlogItem(action: IPostAction): object {
  yield fetch(
    `http://localhost:3001/api/blog/${action.payload.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: action.payload.postTitle,
        body: action.payload.postBody,
        userId: action.payload.userId,
      }),
    }
  ).then((response) => response.json())
  yield fetch(`http://localhost:3001/api/blog/${action.payload.id}`);
  yield put({ type: "EDIT_BLOGITEM_SUCCESSFUL", payload: action.payload });
  yield fetchBlogItems();
}

function* deleteBlogItem({ payload }: any) {
  yield fetch(`http://localhost:3001/api/blog/${payload}`, {
    method: "DELETE",
  });
  yield put({ type: "DELETE_BLOGITEM_SUCCESSFUL", payload });
}

function* postBlogItemWatcher() {
  yield takeLatest("POST_BLOGITEM", createPostBlogItem);
}

function* editBlogItemWatcher() {
  yield takeLatest("EDIT_BLOGITEM", editBlogItem);
}

function* deleteBlogItemWatcher() {
  yield takeLatest("DELETE_BLOGITEM", deleteBlogItem);
}

export default function* blogSagas() {
  yield all([
    fetchBlogItems(),
    deleteBlogItemWatcher(),
    postBlogItemWatcher(),
    editBlogItemWatcher(),
  ]);
}
