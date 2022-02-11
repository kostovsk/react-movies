export default function Expressions(){
    const subtext = 'This is my subtext';
    const reactLogoUrl = 'https://reactjs.org/logo-og.png';

    const duplicate = (value: number) => value * 2;
    
    return (
        <>
            <h1>Expressions example</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h3>The double of 3 is equal to {duplicate(3)}</h3>
            <img src={reactLogoUrl} alt="react logo" />
        </>
    )
}