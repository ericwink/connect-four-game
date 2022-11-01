import PVP_Button from "../buttons/PVP_Button"
import Options_Button from "../buttons/Options_Button"
import logo from '../../images/logo.svg'
import GameRules from "./GameRules"
import { useState } from "react"

export default function MainMenu({ setGameStart }) {
    const [showRules, setShowRules] = useState(false)

    return (

        <div id="main-menu">
            {!showRules ?
                <div className="menu-container">
                    <img className="menu-logo" src={logo} alt='connect four logo' />
                    <PVP_Button setGameStart={setGameStart} />
                    <Options_Button options='GAME RULES' operation={setShowRules} />
                </div>
                :
                <GameRules setShowRules={setShowRules} />}



        </div>



    )
}