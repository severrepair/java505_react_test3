//ConfirmButton.jsx

import React,{useState} from "react";

function ConfirmButton(prop){
    const[isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () =>{
        setIsConfirmed((previsConfirmed) => !isConfirmed);
        setTimeout(()=>{
            setIsConfirmed(false);
        }, 2000);
    };

    return(
        <div>
            <button type={"button"} className={"btn btn-primary"} onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인 완료": "확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButton;
