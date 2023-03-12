import React, {useEffect, useState} from "react";
import './Note.css';
import {ReactComponent as DeleteButton} from "./../../Assets/deleteButton.svg";
import ContentEditable from "react-contenteditable";
import ControlButton from "./ControlButton/ControlButton";
import CustomSelect from "../CustomSelect/CustomSelect";
import sanitizeHtml from 'sanitize-html';

const Note = (props) => {
    const updateNoteF = props.updateNote;
    const updateFontF = props.updateFont;
    const updateFontSizeF = props.updateFontSize;
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text)
    const [font, setFont] = useState(props.fontFamily);
    const [fontSize, setFontSize] = useState(props.fontSize);
    useEffect(() => {
        updateNoteF(props.id, title, text);
    }, [props.id, title, text, updateNoteF]);

    useEffect(() => {
        updateFontF(props.id, font)
    }, [props.id, font, updateFontF]);

    useEffect(() => {
        updateFontSizeF(props.id, fontSize)
    }, [props.id, fontSize, updateFontSizeF]);

    return (
        <div className={'Note'} style={{transform: `translateX(-` + 100 * props.index + `%)`}}>
            <ContentEditable className={'Note__title'} html={title}
                             onChange={e => setTitle(sanitizeHtml(e.target.value))}/>
            <button className={'Note__delete'} onClick={() => props.deleteNote(props.id)}><DeleteButton/></button>
            <div className={'Note__control'}>{props.textStyles.map(style => <ControlButton key={style.type}
                                                                                           icon={style.icon}
                                                                                           type={style.type}
                                                                                           style={style.style}
            />)}
                <div className={'Note__custom-select'} style={{zIndex: 2}}><CustomSelect value={props.fontSize} options={props.fontSizeTypes} update={setFontSize}/></div>
                <div className={'Note__custom-select'} style={{zIndex: 1}}><CustomSelect value={props.fontFamily} options={props.fontFamilyTypes} update={setFont}/></div>
            </div>
            <ContentEditable className={'Note__text'} style={{fontFamily: props.fontFamily,fontSize:props.fontSize}}
                             html={text} onChange={e => setText(sanitizeHtml(e.target.value))}/>
            <p className={'Note__last-update'}>{props.lastUpdate}</p>
        </div>
    );
}
export default Note;