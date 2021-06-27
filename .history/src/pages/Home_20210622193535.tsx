import illustrationImg from '../assets/images/Illustration.svg'
import logoImg from '..assets/images/logo.svg'
import googleIconImg from 'assets/images/google-icon.svg'

export function Home(){
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração representando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    
                </div>
            </main>
        </div>
    )
}