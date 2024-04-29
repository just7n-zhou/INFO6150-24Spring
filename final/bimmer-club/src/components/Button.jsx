function Button({ id, className, text, type, onClick, visual, ariaExpanded, ariaControls}) {
    return (
        <button 
            id={id} 
            className={className} 
            type={type} 
            onClick={onClick} 
            visual={visual} 
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
        >
            {text}
        </button>
    )
}

export default Button;