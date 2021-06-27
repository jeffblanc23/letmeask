import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?: boolean
};

export function Button({ isOutLined, .. }: ButtonProps){
    return (
        <button className="button" {...props}/>
    )
}