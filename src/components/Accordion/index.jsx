import "./index.css"
import React, { useState } from "react";

export function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3 className="accordion-title">{title}</h3>
                <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? "-" : "+"}
                </span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}