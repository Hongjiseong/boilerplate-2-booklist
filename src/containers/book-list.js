// 리덕스를 사용할때는 컨테이너를 사용할 것입니다.
// 컨테이너라는것은 리덕스와 리액트를 연결하는 브릿지 역할입니다.
// 리액트 컴포넌트에 리덕스의 상태데이터를 연결해주는 것이 컨테이너입니다.
// 컴포넌트와 컨테이너는 엄연히 다르구요~~~ 그래서 컨테이너 폴더를 따로 만듭니다.

// 컨테이너는 리덕스에서 만든 스테이트에 직접 접근하는 컴포넌트입니다.
// 리액드와 리덕스는 독립된 라이브러리 입니다.
// 이를 연결하려면 세번째 라이브러리인 react-redux 가 필요합니다.
// App : 오직 렌더링 (리덕스 컨테이너와 불필요)
// BookList : 북 리스트를 관리
// Book : 선택된 책 데이터를 관리
// 원래라면 다 프롭스주고~  난리나는뎅 .. ㅠㅜ
// 컨테이너만이! 리덕스스테이트와 연결되어야합니다.
// 하위에 있는 컴포넌트는 연결될 필요가 없습니다.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => {this.props.selectBook(book)}}
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        console.log(this.props.aaa) // 123

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// 애플리케이션 스테이트를 전부 가져오는거에요 ... 믿기힘들죠?
// 이 상태값으로 프롭스에 넘겨주면 다 해결되는거에요!!! 대다나당~
// 리턴해서 넘겨버리면 이게 곧 프롭스에요~!!!
// 굿이죵?

// # Application State -> this.props
function mapStateToProps(state) {
    return {
        books: state.books
    };
}


function mapDispatchToProps(dispatch) {
    // selectBook 이 실행될 때마다 리듀서로 결과가 전달되어야합니다.
    // 단순히 액션 크리에이터에서 전달받은 데이터를 리듀서로 흘러가도록 도와주는 작업
    
    // this.selectBook 호출시 
    // 1. selectBook() 액션을 실행
    // 2. selectBook() 액션을 실행한 후 반환값을 루트 리듀서로 넘겨서 필터링
    // 3. 해당하는 액션타입을 처리하고 있는 리듀서에게 작업을 넘김
    // 4. 리듀서가 전달받은 컴포넌트의 스테이트의 값을 이용하여 원하는 로직을 실행
    // 5. 로직을 실행한 후 나온 결과값을 state 에 Object.assign 을 사용하여 결합한 값을 복사한 후 스테이트에 반영
    //

    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);