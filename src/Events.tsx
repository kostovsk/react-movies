import React from "react";

export default function Events(){ 
    let canSee = false;

    function handleCheckboxChange(){
        // alert('my value was changed');
        canSee = !canSee;
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
    }

    return (
        <>
            <h1>Events Example</h1>
            <div>
                <input type="checkbox" onChange={handleCheckboxChange} />
            </div>
            <div>
                <button onClick={() => {
                    alert('I have been clicked');
                }}>Click me</button>
            </div>
            <div>
                <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            </div>


            {canSee ? <div>You can see</div> :
             <div>You can't see</div>}
        </>
    );
}