import React from "react";
import './Notes.css';
import {connect} from "react-redux";
import {ReactComponent as ClearAll} from "./../../Assets/clearAll.svg";
import {ReactComponent as AddButton} from "./../../Assets/addButton.svg";
import Note from "../Note/Note";
import {
    addNoteAC,
    deleteAllAC,
    deleteNoteAC,
    updateFontAC, updateFontSizeAC,
    updateNoteAC
} from "../../Store/notesReducer";

let Notes = (props) => {
    return (
        <main className={'Notes__wrapper'}>
            <header className={'Notes__header'}>
                <p className={'Notes__total-count'}>Заметок: {props.notes.length}</p>
                <button type={'button'} className={'Notes__clear-all'} title={'Очистить заметки'}
                        onClick={() => props.deleteAll()}><ClearAll/></button>
            </header>
            <div className={'Notes__container'}>
                {props.notes.map((note, i) => <Note index={i}
                                                    key={note.id}
                                                    id={note.id}
                                                    title={note.title}
                                                    text={note.text}
                                                    fontFamily={note.fontFamily}
                                                    fontSize = {note.fontSize}
                                                    lastUpdate={note.lastUpdate}
                                                    deleteNote={props.deleteNote}
                                                    updateNote={props.updateNote}
                                                    updateFont={props.updateFont}
                                                    updateFontSize={props.updateFontSize}
                                                    textStyles={props.textStyles}
                                                    fontFamilyTypes={props.fontFamilyTypes}
                                                    fontSizeTypes={props.fontSizeTypes}/>)}
                <div className={'Notes__add'}>
                    <button className={'Notes__add-button'} type={'button'} onClick={() => props.addNote()}><AddButton/>
                    </button>
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes,
        textStyles: state.notes.textStyles,
        fontFamilyTypes: state.notes.fontFamilyTypes,
        fontSizeTypes: state.notes.fontSizeTypes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNote() {
            dispatch(addNoteAC())
        },
        deleteNote(id) {
            dispatch(deleteNoteAC(id))
        },
        updateNote(id, title, text) {
            dispatch(updateNoteAC(id, title, text));
        },
        updateFont(id, fontFamily) {
            dispatch(updateFontAC(id, fontFamily));
        },
        updateFontSize(id, fontSize) {
            dispatch(updateFontSizeAC(id, fontSize));
        },
        deleteAll() {
            dispatch(deleteAllAC());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);