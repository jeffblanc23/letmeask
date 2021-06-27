import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';

export function Home(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração representando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Logo da Google" />
                        <div>ou entre em uma sala</div>
                        <form>
                            <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            />
                            <button type="submit">
                                Entrar na sala
                            </button>
                        </form>
                    </button>
                </div>
            </main>
        </div>
    )
}