import type React from "react"

interface ButtonWIdgetProps{
    _buttonName: string,
    _onClick: () => void,
}

const ButtonWidget: React.FC<ButtonWIdgetProps> = ({_buttonName, _onClick}) => {
    return(
        <div>
            <button onClick={_onClick} className="w-full bg-teal-800 rounded-md focus:bg-teal-200 text-white">{_buttonName}</button>
        </div>
    )
}

export default ButtonWidget