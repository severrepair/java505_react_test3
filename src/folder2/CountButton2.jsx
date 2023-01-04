//useState() 훅을 사용하기 위해서 미리 import
import React,{useState, useEffect} from "react";

//hooks:기존의 존재하는 기능을 추가로 함께 사용하도록 하는 것,state와 리액트 생명주기 기능을 원하는 시점에 실행할 수 있도록 하는 기능
//useState : state 객체를 함수 컴포넌트에서 사용할 수 있도록 하는 기능 
//useEffect : useState()와 함께 가장 많이 사용되는 훅, 리액트 생명주기 함수인 componentDidMount, componentdidUpdate, componentWillUnmount의 기능을 하나로 합한 기능
//useMemo:재 랜더링 시 연산량이 높은 작업을 반복하는 것을 피할 수 있게 하는 기능
//useCallback:useMemo와 비슷한 기능, 값이 아닌 함수를 반환함
//useRef : 지정한 컴포넌트에 접근할 수 있는 객체

//훅을 사용 시 미리 해당 함수를 import 해서 사용해야 함
//useState : 클래스 컴포넌트에 존재하는 state 객체를 함수 컴포넌트에서 사용할 수 있도록 함
//사용법:
//const [변수명, set함수명] = useState(초기값);
//변수명:state로 지정할 지역변수 명
//set함수명:state로 지정된 변수명에 접두사set을 붙여서 사용, 카멜명명법 사용
//useState(초기값) : 확장표현식을 통해서 지정한 변수를 state 객체로 설정함, 초기값은 state로 설정된 변수의 초기값을 말함
//state로 지정할 변수가 여러개일 경우 useSate()를 변수 수 만큼 실행해야 함


//useEffect : 클래스 컴포넌트에 존재하는 생명주기 함수를 사용할 수 있도록 함
//사용법 :
//useEffect(이펙트함수, 의존성 배열);
//의존성 배열:콜백 함수인 이펙트 함수가 의존하고 있는 배열, 해당 의존성 배열안에 있는 변수 중 하나라도 값이 변경되면 실행
//이펙트함수는 기본적으로 컴포넌트가 처음 레더링된 후 데이터 업데이트에 의한 재랜더링 시 실행
//이펙트 함수를 마운트, 언마운트 시 각각 1번씩만 실행하고자 할 경우 의존성 배열에 빈배열을 사용(componentDidMount, componentWillUnmount 기능 수행)
//의존성 배열이 없을 경우 화면이 제 렌더링 된 이후에 실행(componentDidUpdate 기능 수행)

//훅의 규칙:
//1. 훅은 무조건 최상의 레벨에서만 호출
//  if,for문 내부에서 훅을 호출하면 안됨
//2. 훅은 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출되어야 함
//3. 함수 컴포넌트에서만 훅을 사용할 수 있음
//      일반적인 자바스크립트 함수에서 훅을 호출하면 안됨

//커스텀 훅
//리엑트에서 제공하는 훅이 아닌 사용자가 필요에 의해서 생성하여 사용하는 훅
//이름에 접두사로 use를 사용하고 함수 내부에서 다른 훅을 호출하는 단순 자바스크립트 함수
//파라미터 및 반환값을 사용자가 직접 지정할 수 있음
//중복되는 로직을 커스텀 훅으로 설정하여 재사용하기 위함
//이름의 접두사로 use를 사용하지 않을 경우 함수 내부에서 훅을 사용하는지 판단할 수 없음


//함수 컴포넌트 사용
function CountButton2(props){
    //지역변수
    // let count = 0;
    
    //useState를 통해서 state객체에 추가함
    const [count, setCount] = useState(0);

    //useEffect를 사용하여 componentDidMount, componentDidUpdate를 구현함
    useEffect(()=>{
        document.title = `총 ${count}회 클릭했습니다.`
    });
    
    
    //함수 선언
    const countUp = () =>{
        // count++;
        // setCount(count +1);
        setCount(()=>{
            return count +1;
        })
        console.log(`count : ${count}`);
    }

    const countDown = () =>{
        // count--;
        setCount(count - 1);
        console.log(`count : ${count}`);
    }

    return(
        <div>
            <label className={"form-label"}>count : {count}</label><br />
            <button className={"btn btn-primary"} onClick={countUp}> + </button>
            <button className={"btn btn-success"} onClick={countDown}> - </button>
        </div>
    );
}

export default CountButton2;

