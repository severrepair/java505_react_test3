//WarningBanner.jsx
import React from "react";

//컴포넌트 랜더링 막기
//리엑트에서 렌더링을 하고 싶지 않을 경우 null을 사용
function WarningBanner({warning}) {
    if (!warning) {
        return null;
    }

    return <div>경고!!</div>
}

export default WarningBanner;