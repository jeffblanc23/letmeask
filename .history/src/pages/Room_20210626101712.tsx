import logoImg from '../assets/images/logo.svg'

export function Room(){
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>codigo</div>
                </div>
            </header>

            <main className="content">
                <div className="content">
                    <h1>Sala React</h1>
                    
                </div>
            </main>
        </div>
        
    );
}