import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--tut', 'btn--upload', 'btn--editor'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (buttonStyle === 'btn--upload'){
        return(
            <button
            className={`btn ${'btn--outline'} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        );
    }

    else if (buttonStyle === 'btn--editor'){
        return(
            <Link to='/editor' className='btn-mobile'>
                <button
                className={`btn ${'btn--outline'} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        );
    }


    else if (buttonStyle === 'btn--tut'){
        return(
            <Link to='/about' className='btn-mobile'>
                <button
                className={`btn ${'btn--primary'} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <Link to='/contact-us' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};
