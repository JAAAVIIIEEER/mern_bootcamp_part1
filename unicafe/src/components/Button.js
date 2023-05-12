const Button = ({good, neutral, bad}) => {
    return (
        <div>
            <button onClick = {good} > good </button>
            <button onClick = {neutral} > neutral </button>
            <button onClick = {bad} > bad </button>
        </div> 
    )
}

export default Button;

