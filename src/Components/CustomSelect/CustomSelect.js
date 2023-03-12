import React, {useEffect} from "react";
import './CustomSelect.css'
import {ReactComponent as Caret} from './../../Assets/caret.svg'

const CustomSelect = (props) => {
    const [showOption, setOption] = React.useState(false)
    const customSelect = React.createRef();
    const handleClickOutside = (e) => {
        if (!customSelect.current.contains(e.target)){
            setOption(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);
        return ()=> document.removeEventListener('mousedown',handleClickOutside);
    })

    return (
        <div ref={customSelect} className={'Custom-select'}>
            <div className={['Custom-select__value',showOption ? ' Custom-select__value_active' : ''].join(' ')} onClick={() => setOption(!showOption)}>
                <div className={'Custom-select__icon'}>{props.value} <Caret className={showOption? 'Custom-select__icon_showed' : 'Custom-select__icon_closed'}/></div></div>
            {showOption ? <div className={'Custom-select__options'}>
                {props.options.map((option)=><div key={option} className={'Custom-select__option'} onClick={()=>{props.update(option);setOption(false)}}>{option}</div>)}
            </div> : undefined}
        </div>
    )
}

export default CustomSelect

