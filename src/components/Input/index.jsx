
import React, { useState } from "react";
import "./index.css";

export function Input({
    type = "text",
    placeholder = "",
    value,
    defaultValue,
    onChange,
    disabled = false,
    label,
    danger = false,
}) {
    const [inputValue, setInputValue] = useState(defaultValue || ""); // Инициализация состояния с defaultValue

    // Обработка изменения значения
    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue); // Проверяем, если onChange передан
        }
    };

    // Если value передано, используем его для контролируемого компонента
    const inputValueToUse = value !== undefined ? value : inputValue;

    return (
        <div className="input-wrapper">
            {label && <label className={`input-label ${danger ? "danger" : ""}`}>{label}</label>}
            <input
                type={type}
                className={`input-field ${danger ? "danger" : ""}`}
                placeholder={placeholder}
                value={inputValueToUse}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    );
}