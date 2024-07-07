import React, {useState} from 'react';
import { render } from 'react-dom'
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'notify',
        data: {
            "text": "Dans ce code, la classe 'fixed' permet de fixer la position de la div par rapport à l'écran, la classe 'top-0' la place en haut de l'écran",
            "color": "#9aa39a",
            "time": 5000
        },
    }
])

export default function Navbar() {

    const [notify, setNotify] = useState<any>(0)
    const getNumberNotify = () => {
        var notify = document.getElementById('notify')
        var notifyChild = notify?.children
        var notifyChildLength = notifyChild?.length
        setNotify(notifyChildLength)
        return Number(notifyChildLength)
    }

    useNuiEvent<any>('notify', (data) => {
        var notify = document.getElementById('notify')
        var div = document.createElement('div')

        div.className = `h-auto text-left bg-dark-grey border border-r-0 border-dark-grey 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] overflow-hidden w-auto flex flex-row items-center drop-shadow rounded-l-sm font-SFProDisplayRegular p-1`
        div.style.color = "#" + data.color
        div.innerHTML = `${data.text}`
        
        notify?.appendChild(div)

        if (getNumberNotify() > 5) {
            notify?.firstChild?.remove()
        }

        setTimeout(() => {
            div.classList.add('animate-pulse')

            setTimeout(() => {
                if (div.parentNode) {
                    div.parentNode.removeChild(div)
                }
            }, 1000)
        }, data.time)
    })
    
    return (
        <div className='h-auto w-full absolute select-none'>
            <div className='fixed top-0 right-0 mt-[6vh] flex flex-col gap-[1vh] 800:max-w-[10%] 1024:max-w-[15%] 1280:max-w-[20%] 1440:max-w-[22%] 1600:max-w-[22%] 1920:max-w-[25%] 2560:max-w-[30%]' id='notify'>
                {/* <div className='h-auto text-left bg-dark-grey border border-r-0 border-[#79c370] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] overflow-hidden w-auto flex flex-row items-center drop-shadow rounded-l-sm text-[#9aa39a] font-SFProDisplayRegular p-1'>
                    Dans ce code, la classe "fixed" permet de fixer la position de la div par rapport à l'écran, la classe "top-0" la place en haut de l'écran, et la classe "right-0" la place à droite de l'écran. La classe "p-4" ajoute une marge intérieure de 4 unités à la div pour créer de l'espace autour de son contenu.
                </div> */}
            </div>
        </div>
    )
}