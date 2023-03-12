import React from "react";
import {changeThemeAC} from "../../Store/themeReducer";
import {connect} from "react-redux";
import './Header.css';
import {ReactComponent as LightMode} from './../../Assets/lightMode.svg';
import {ReactComponent as DarkMode} from './../../Assets/darkMode.svg';
import {ReactComponent as LogoNote} from './../../Assets/logoNote.svg';

const Header = (props) => {
    return (
        <header className={'Header__container'}>
            <div className={'Header__content'}><div className={'Header__logo'}><LogoNote/><p>Заметки</p></div>
                <button type={'button'} className={'Header__theme'} title={'Сменить тему'}>
                    {props.theme === 'dark' ?
                        <LightMode onClick={() => props.changeTheme('light')}/> :
                        <DarkMode onClick={() => props.changeTheme('dark')}/>}
                </button>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {theme: state.theme.theme}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme(theme) {
            dispatch(changeThemeAC(theme))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);