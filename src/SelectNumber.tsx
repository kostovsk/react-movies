export default function SelectNumber(props: selectNumberProps){
    const arr = Array(props.maxValue).fill(0);

    return (
        <select onChange={(e) => {
            console.log(e.currentTarget.value);
        }}>
            {arr.map((_, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
        </select>
    )
}

interface selectNumberProps{
    maxValue: number;
}