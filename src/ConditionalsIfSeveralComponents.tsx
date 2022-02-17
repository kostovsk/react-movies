import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import Simple from "./Simple";
import ProjectContent from "./ProjectContent";

export default function ConditionalsIfSeveralComponents(){
    const[selectedRate, setSelectedRate] = useState(1);

    function displayResult(){
        if(selectedRate === 1){
            return <span>One</span>
        } else if (selectedRate === 2){
            return (
                <>
                <span>This is only two</span>
                    <input type="text" />
                </>
            )
        } else if (selectedRate === 3) {
            return <>
                <Simple />
            </>
        } else {
            return <span>Good score!</span>
        }
    }

    return (
        <>
            <h1>Conditionals If example</h1>

            <div>Rate this website</div>
            <SelectNumber 
            selectContent={(value) => `Select ${value}`}
            onSelected={setSelectedRate} />

            {/* <div>
                {displayResult()}
            </div> */}
            <div>
                <ProjectContent bottomPart={<><span>This is the end</span></>}>
                    <>
                        <Simple />
                        <button onClick={() => console.log("Button click")}>My button</button>
                    </>
                </ProjectContent>
            </div>
        </>
    )
}