import {combineReducers} from 'redux';
import BooksReducer from './reducers-books';
import ActiveBook from './reducer-active-book';

// 리듀서 객체들을 종합하여 애플리케이션 스테이트를 만들어주고 있습니다.
// 원래는 단순히 제이슨객체인데 말이죠~
// 신기신기~
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;