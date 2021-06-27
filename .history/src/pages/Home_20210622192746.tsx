import illustrationImg from '../assets/images/Illustration.svg'

export function Home(){
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração representando perguntas e respostas" />
                <strong>Crie salas de E</strong>
            </aside>
        </div>
    )
}