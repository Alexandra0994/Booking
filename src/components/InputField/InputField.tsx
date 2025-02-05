import { FC } from "react";
import styles from "./styles.module.scss";

interface InputFieldProps {
    type: string;
    label: string;
    icon: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const InputField: FC<InputFieldProps> = ({
    type,
    label,
    icon,
    value,
    onChange,
    placeholder,
    className = "",
}) => (
    <div className={`${styles.inputField} ${className}`}>
        <i className={`${icon} ${styles.icon}`} aria-hidden="true"></i>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
        <label>{label}</label>
    </div>
);

export default InputField;
