import { useState } from "react";
import Simple from "./Simple";

export default function ConditionalsIf() {
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
            <select onChange={(e) => {
                console.log(e.currentTarget.value);
                setSelectedRate(parseInt(e.currentTarget.value, 10));
            }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>

            <div>
                {displayResult()}
            </div>
        </>
    )
}