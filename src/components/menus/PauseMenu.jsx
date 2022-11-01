import Options_Button from "../buttons/Options_Button"
import Quit_Button from '../buttons/Quit_Button'

export default function PauseMenu({ setPause, pause, quit, reset }) {
    return (
        //code
        <div id="pause-menu">
            <div className="pause-container heading-lg">
                <h1>PAUSE</h1>
                <Options_Button options='CONTINUE GAME' size='btn-m' operation={setPause} current={pause} />
                <Options_Button options='RESTART' size='btn-m' operation={reset} />
                <Quit_Button quit={quit} />
            </div>
        </div>
    )
}