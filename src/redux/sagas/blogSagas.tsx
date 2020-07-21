import { all, put, takeLatest } from 'redux-saga/effects';
import { InewBlogItem } from '../../interfaces/blogInterfaces';

const Api = 'http://localhost:3001/api';

interface IPostAction {
  type: 'POST_BLOGITEM';
  payload: InewBlogItem;
}

interface IEditAction {
  type: 'EDIT_BLOGITEM';
  payload: InewBlogItem;
}

interface IDeleteAction {
  type: 'DELETE_BLOGITEM';
  blogItemId: number
}

// Used to be JSONplaceholder fetch. Mocked with mocky to better test https://jsonplaceholder.typicode.com/posts
function* fetchBlogItems() {
  const json = yield fetch(
    `${Api}/blog`,
  ).then((response) => response.json());
  yield put({ type: 'BLOGITEMS_RECEIVED', json });
}

function* createPostBlogItem(
  action: IPostAction,
) {
  yield fetch(`${Api}/blog`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: action.payload.postTitle,
      body: action.payload.postBody,
      userId: 999,
    }),
  })
    .then((response) => response.json());
  yield put({ type: 'POST_BLOGITEM_RECEIVED' });
  yield fetchBlogItems();
}

function* editBlogItem(action: IEditAction) {
  yield fetch(
    `${Api}/blog/${action.payload.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: action.payload.postTitle,
        body: action.payload.postBody,
        userId: action.payload.userId,
      }),
    },
  ).then((response) => response.json());
  yield fetch(`${Api}/blog/${action.payload.id}`);
  yield put({ type: 'EDIT_BLOGITEM_SUCCESSFUL', payload: action.payload });
  yield fetchBlogItems();
}

function* deleteBlogItem(action: IDeleteAction) {
  yield fetch(`${Api}/blog/${action.blogItemId}`, {
    method: 'DELETE',
  });
  yield put({ type: 'DELETE_BLOGITEM_SUCCESSFUL', payload: action.blogItemId });
  yield fetchBlogItems();
}

function* postBlogItemWatcher() {
  yield takeLatest('POST_BLOGITEM', createPostBlogItem);
}

function* editBlogItemWatcher() {
  yield takeLatest('EDIT_BLOGITEM', editBlogItem);
}

function* deleteBlogItemWatcher() {
  yield takeLatest('DELETE_BLOGITEM', deleteBlogItem);
}

export default function* blogSagas():Generator {
  yield all([
    fetchBlogItems(),
    deleteBlogItemWatcher(),
    postBlogItemWatcher(),
    editBlogItemWatcher(),
  ]);
}
