import "./index.css"

export function Heading(props) {
    const {level = "1", children} = props;

    const classname = `head--${level}`  
    return <p className={classname}>{children}</p>
}
