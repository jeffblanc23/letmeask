import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(){
    function copyRoomCodeToClippboard(){
        navigator.clipboard.writeText('-Md51CcRokysOrpCAoc6')
    }

    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code " />
            </div>
            <span>Sala {}</span>
        </button>
    )
}