import { ButtonHTMLAtrubutes } from 'react'
type ButtonProps = ButtonHTML

export function Button(props: ButtonProps){
    return (
        <button className="button" {...props}/>
    )
}

<Button type="submit" />