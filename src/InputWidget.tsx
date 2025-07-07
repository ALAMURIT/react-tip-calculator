
interface InputWidgetProps {
    _label: string;
    _value: string;
    _onChange: () => void;
}

const InputWidget: React.FC<InputWidgetProps> = ({_label, _value, _onChange}) => {
    return(
        <div>
            <p>{_label}</p>
            <input type="text" value={_value} onChange={_onChange}></input>
        </div>
    )
}

export default InputWidget;
// import { ChangeEvent, FC } from 'react'

// interface InputProps {
//   type: 'text' | 'number' | 'email' | 'password'
//   label: string
//   value: string | number
//   name: string
//   placeholder: string
//   error: boolean
//   disabled?: boolean
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void
// }

// const Input: FC<InputProps> = ({
//   type,
//   label,
//   value,
//   name,
//   placeholder,
//   error,
//   disabled,
//   onChange,
// }) => {
//   return (
//     <div className="input-wrapper">
//       <label htmlFor={label}>{label}</label>
//       <input
//         type={type}
//         id={label}
//         value={value}
//         name={name}
//         placeholder={placeholder}
//         onChange={onChange}
//         disabled={disabled}
//       />
//       {error && <p className="error">Input filed can't be empty!</p>}
//     </div>
//   )
// }

// export default Input