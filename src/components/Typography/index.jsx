import "./index.css"

export function Typography(props) {
    const {textSize = "md", children} = props;

    const classname = `typo--${textSize}`  
    return <p className={classname}>{children}</p>
}
