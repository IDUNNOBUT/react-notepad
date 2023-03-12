import {v4 as uuid} from 'uuid';

const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const UPDATE_FONT = 'UPDATE_FONT';
const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

let initialState = {
    notes: JSON.parse(localStorage.getItem('notes')) || [
        {
            id: uuid(),
            title: 'Добро пожаловать',
            text: 'Это <b>приложение</b> - полный аналог <i>привычных</i> заметок',
            lastUpdate: new Date().toDateString(),
            fontFamily: 'Fira Sans',
            fontSize: '12pt',
        }
    ],
    textStyles: [
        {icon: 'B', type: 'bold', style: {fontWeight: 'bold'}},
        {icon: 'I', type: 'italic', style: {fontStyle: 'italic'}}
    ],
    fontFamilyTypes: ['Montserrat', 'Fira Sans','PT Sans','Arial','Times New Roman'],
    fontSizeTypes: ['12pt','18pt','24pt']
};

export const addNoteAC = () => ({type: ADD_NOTE});
export const deleteNoteAC = (id) => ({type: DELETE_NOTE, id});
export const updateNoteAC = (id, title, text) => ({type: UPDATE_NOTE, id, title, text});
export const updateFontAC = (id, fontFamily) => ({type: UPDATE_FONT, id, fontFamily});
export const updateFontSizeAC = (id, fontSize) => ({type: UPDATE_FONT_SIZE, id, fontSize});
export const deleteAllAC = () => ({type: DELETE_ALL_NOTES});

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            let newState = {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: uuid(),
                        title: '',
                        text: '',
                        lastUpdate: new Date().toDateString(),
                        fontFamily: 'Fira Sans',
                        fontSize: '12pt'
                    }]
            }
            localStorage.setItem('notes', JSON.stringify(newState.notes))
            return newState;
        }
        case DELETE_NOTE: {
            let newState = {...state, notes: state.notes.filter(note => note.id !== action.id)};
            localStorage.setItem('notes', JSON.stringify(newState.notes));
            return newState;
        }
        case UPDATE_NOTE: {
            let newState = {...state,
                notes: state.notes.map(note => note.id === action.id ? {
                    ...note,
                    title: action.title,
                    text: action.text,
                    lastUpdate: new Date().toDateString()
                } : note)
            }
            localStorage.setItem('notes', JSON.stringify(newState.notes));
            return newState;
        }

        case UPDATE_FONT: {
            let newState = {...state,
                notes: state.notes.map(note => note.id === action.id ? {
                    ...note,
                    lastUpdate: new Date().toDateString(),
                    fontFamily: action.fontFamily
                } : note)
            }
            localStorage.setItem('notes', JSON.stringify(newState.notes));
            return newState;
        }

        case UPDATE_FONT_SIZE: {
            let newState = {...state,
                notes: state.notes.map(note => note.id === action.id ? {
                    ...note,
                    lastUpdate: new Date().toDateString(),
                    fontSize: action.fontSize,
                } : note)
            }
            localStorage.setItem('notes', JSON.stringify(newState.notes));
            return newState;
        }

        case DELETE_ALL_NOTES: {
            let newState = {...state, notes: []}
            localStorage.setItem('notes', JSON.stringify(newState.notes));
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default notesReducer;