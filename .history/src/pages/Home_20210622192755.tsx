import illustrationImg from '../assets/images/Illustration.svg'

export function Home(){
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração representando perguntas e respostas" />
                <strong>Crie salas de Q&A</strong>
            </aside>
        </div>
    )
}