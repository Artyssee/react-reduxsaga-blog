import { all, put, takeLatest } from 'redux-saga/effects';

function* fetchBlogItems() {
    // Used to be JSONplaceholder fetch. Mocked with mocky to better test https://jsonplaceholder.typicode.com/posts
    const json = yield fetch('http://localhost:3001/posts')
        .then((response: any) => response.json());
    yield put({ type: "BLOGITEMS_RECEIVED", json, });
}

function* createPostBlogItem(payload:any) {
    const json = yield fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: payload.newPost.postTitle,
            body: payload.newPost.postTitle,
            userId: 999
        }),
    })
      .then(response => response.json())
    yield put({ type: "POST_BLOGITEM_RECEIVED", json })
};

function* actionWatcher() {
    yield takeLatest('POST_BLOGITEM', createPostBlogItem);
}

export default function* rootSaga() {
   yield all([
   fetchBlogItems(),
   actionWatcher(),
   ]);
}