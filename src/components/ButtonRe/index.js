import './Button.css'

const ButtonRe = (props) => {
    return (<button className="button-style">
        {props.children}
    </button>)
}

export default ButtonRe