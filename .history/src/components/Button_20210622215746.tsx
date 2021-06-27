import { ButtonHTMLAtrubutes, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButton>;

export function Button(props: ButtonProps){
    return (
        <button className="button" {...props}/>
    )
}

<Button type="submit" />