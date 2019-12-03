// 여기서 state 는 애플리케이션의 state 가 아닙니다!!!
// 뭐 그러니까 ~~ appstate.thiscomponentstate 로서 받아질수도 있다는겁니당~
// 상위에서 받아온 state 값을 리듀서로 흘러보내주는 역할이라고 할 수 있습니다.
// 단지 형태만 조금 다르게 흘러보내주는 것이지요~ 예를들면 state 를 가공하던가? 이러느낌?
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    // 아무것도 선택되지 않았다면 state 를 그대로 반환합니다.
    // 지금 리듀서는 undefined 를 리턴흔ㄴ데 리덕스는 리듀서가 undefined 를 반환하는것을 허락하지 않습니다.
    // 다라서 state 도 null 로 초기화할 필요가 있습니다.
    return state;
}