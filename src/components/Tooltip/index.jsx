import "./index.css";

export function Tooltip(props) {
    const { text, position = "top", children } = props;


    const tooltipClass = `tooltip tooltip--${position}`;

    return (
        <div className="tooltip-container">
            {children}
            <div className={tooltipClass}>{text}</div>
        </div>
    );
}
