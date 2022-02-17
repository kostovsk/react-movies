// import './CSSExamples.css'; // you are not only importing this for this component
import css from './CSSExamples.module.css';

export default function CSSExamples(){

    const square = {
        backgroundColor: 'green',
        height: '50px',
        width: '50px',
        marginLeft: '1rem'
    };

    return (
        <>
            <h1 className="red">CSS Examples</h1>
            <h2 style={{color: 'blue', fontSize: '25px'}}>Subtext</h2>
            <div style={square}></div>
            <br />
            <div style={square}></div>
            <br />
            <h2 className={css['primary-color']}>This is a text style from a module</h2>
            <h2 className="primary-color">This is not a text style from a module</h2>
        </>
    )
}