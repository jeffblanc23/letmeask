import copyImg from '../assets/images/copy.svg'

import '../styles/'

export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code " />
            </div>
            <span>Sala #1238123767123</span>
        </button>
    )
}