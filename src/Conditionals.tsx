export default function Conditionals() {
    const canSee = true;
    return (
        <>
            <h1>Conditionals Example</h1>
            {canSee ? <div>You can see</div> 
            : <span>You can't see</span>}
        </>
    )
}