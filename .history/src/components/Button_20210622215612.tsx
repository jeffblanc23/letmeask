import { ButtonHTMLAtrubutes }
type ButtonProps = {
    type: string;
}

export function Button(props: ButtonProps){
    return (
        <button className="button" {...props}/>
    )
}

<Button type="submit" />