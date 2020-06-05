import { all, put, takeLatest } from 'redux-saga/effects';
interface InewPost {
    userId: number,
    postTitle: string,
    postBody: string
};

interface IPostAction {
    type: 'POST_BLOGITEM',
    payload: InewPost
};

function* fetchBlogItems() {
    // Used to be JSONplaceholder fetch. Mocked with mocky to better test https://jsonplaceholder.typicode.com/posts
    const json = yield fetch('http://localhost:3001/api/blog')
        .then((response: any) => response.json());
    yield put({ type: "BLOGITEMS_RECEIVED", json, });
}

// Fix any type error
function* createPostBlogItem(action: IPostAction):any {
    const json = yield fetch('http://localhost:3001/api/blog', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: action.payload.postTitle,
            body: action.payload.postBody,
            userId: 999
        }),
    })
      .then(response => response.json())
    const [newItem] = yield fetch(`http://localhost:3001/api/blog/${json.insertId}`)
      .then(response => response.json())
    yield put({ type: "POST_BLOGITEM_RECEIVED", payload:newItem })
};

function* deleteBlogItem({payload}: any) {
    const deleteItem = yield fetch(`http://localhost:3001/api/blog/${payload}`, {
        method: 'DELETE'
    })
    yield put({type: "DELETE_BLOGITEM_SUCCESSFUL", deleteItem})
}

function* postBlogItemWatcher() {
    yield takeLatest('POST_BLOGITEM', createPostBlogItem);
}

function* deleteBlogItemWatcher() {
    yield takeLatest('DELETE_BLOGITEM', deleteBlogItem)
}

export default function* rootSaga() {
   yield all([
   fetchBlogItems(),
   deleteBlogItemWatcher(),
   postBlogItemWatcher(),
   ]);
}