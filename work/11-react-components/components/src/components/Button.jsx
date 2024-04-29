function Button({ className, text, type, handleClick, visual}) {
    return (
        <button className={className} type={type} onClick={handleClick} visual={visual}>
            {text}
        </button>
    )
}

export default Button;