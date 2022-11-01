import PVP_Button from "../buttons/PVP_Button"
import Options_Button from "../buttons/Options_Button"
import logo from '../../images/logo.svg'
import GameRules from "./GameRules"
import { useState } from "react"
import { flashTop } from "../../utilities/animations"

export default function MainMenu({ setGameStart }) {
    const [showRules, setShowRules] = useState(false)

    function startGame() {
        setGameStart(true)
        setTimeout(() => {
            flashTop()
        }, 300)
    }

    return (

        <div id="main-menu">
            {!showRules ?
                <div className="menu-container">
                    <img className="menu-logo" src={logo} alt='connect four logo' />
                    <PVP_Button startGame={startGame} />
                    <Options_Button options='GAME RULES' operation={setShowRules} size='btn-lg' />
                </div>
                :
                <GameRules setShowRules={setShowRules} />}



        </div>



    )
}