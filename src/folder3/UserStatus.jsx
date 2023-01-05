//UserStatus.jsx
import React from "react";

//문제 1) 아래의 소스에서 삼항 연산자를 사용한 부분을 if~else문을 사용하여 조건부 렌더링으로 수정하세요
function UserStatus(props) {

    //선생님한거
    const flag = props.isLoggedIn;

    if (flag){
        return <p>이 사용자는 현재<b>로그인</b>상태입니다.</p>
    }
    else {
        return <p>이 사용자는 현재<b>로그인하지 않은</b>상태입니다.</p>
    }
    //삼항연산자 사용시
    // return(
    //     <div>
    //         이 사용자는 현재<b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
    //     </div>
    // );

    //내가 한거
    // return
    // if (props.isLoggedIn) {
    //     <b>로그인 상태입니다.</b>
    // } else {
    //     <b>로그인하지 않은 상태입니다.</b>
    // }

}

export default UserStatus;