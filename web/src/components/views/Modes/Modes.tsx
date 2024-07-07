import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { playSound, getLanguages } from "../../../utils/misc";
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setModesData',
        data: [
            {
                id: 1,
                name: 'Darkzone',
                players: 13,
                max_players: 100,
                background: "lobby_5",
                logo: "global_world",
                open_at: "00:43",
                open: true,
            },
            {
                id: 2,
                name: 'Redzones',
                background: "lobby_1",
                logo: "redzones",
                open_at: "00:43",
                open: true,
                zones: [
                    {
                        id: "redzone_1",
                        name: "Redzone 1",
                        img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104148289726722168/image.png",
                    },
                    {
                        id: "redzone_2",
                        name: "Redzone 2",
                        img: "https://cdn.discordapp.com/attachments/1063178117277024316/1104149123223007322/image.png",
                    }
                ]
            },
        ]
    }
])

debugData([
    {
        action: 'setDropOpenAt',
        data: "00:43"
    }
])

export default function Modes() {
    const [modesData, setModesData] = useState<any>(null)
    useNuiEvent<any>('setModesData', (data) => {
        setModesData(data)
    })

    const [dropOpenAt, setDropOpenAt] = useState<any>(null)
    useNuiEvent<any>('setDropOpenAt', (data) => {
        setDropOpenAt(data)
    })

    const languages = getLanguages()

    if (modesData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/get_modes`, options)
    }

    const[lobbyInfos, setLobbyInfos] = useState<any>()

    const JoinLobby = (id: number) => {
        var newId = ""
        if (id === 1) {
            newId = "darkzone"
        } else {
            newId = id.toString()
        }
        playSound('click_loby')
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: newId,
            }),
        };
        fetch(`https://YBN/join_lobby`, options)
    }

    const teleportToZone = (id: string) => {
        playSound('click_loby')
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                zone: id,
            }),
        };
        fetch(`https://YBN/teleport_to_zone`, options)
    }

    return (
        <div className={`flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[4%] gap-[10%] bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat`}>
            <div className='flex flex-row items-left'>
                <div className='bg-main_logo_modes bg-no-repeat bg-contain bg-center 800:w-[50px] 1024:w-[70px] 1280:w-[85px] 1440:w-[100px] 1600:w-[125px] 1920:w-[150px] 2560:w-[175px] scale-150' />
                <div className='flex flex-col items-left'>
                    <h6 className='text-[#cac5a9] leading-none font-Countach tracking-widest font-light 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px] drop-shadow'>{languages["modes_desc"]}</h6>
                    <h1 className='text-[#f8f2f0] font-StratumBold 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font-normal uppercase drop-shadow'>{languages["modes"]}</h1>
                </div>
            </div>

            <div className='w-full h-full flex flex-col px-[1%] gap-[2%]'>

                <div className='w-full h-[90%] grid grid-cols-2 grid-rows-1 gap-[1%]'>
                    {
                        modesData ? (
                            modesData.map((lobby: any) => {
                                return (
                                    <div className={`flex flex-col drop-shadow overflow-hidden 
                                    ${lobbyInfos && lobbyInfos.id === lobby.id ? 'border-light-blue grayscale-0' : 'border-dark-grey'}
                                    border-y-4 cursor-pointer grayscale ${lobby.open ? 'hover:grayscale-0 group' : ''} border-dark-grey hover:border-light-blue rounded`}
                                    onMouseEnter={() => {
                                        if (lobby.open) {
                                            playSound('hover')
                                            setLobbyInfos(lobby)
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (lobby.open) {
                                            setLobbyInfos(null)
                                        }
                                    }}
                                    onClick={() => {
                                        if (lobby.open && !lobby.zones) {
                                            JoinLobby(lobby.id)
                                        }

                                        if (lobby.zones && lobby.zones.length > 0) {
                                            var idElement = document.getElementById("lobby_" + lobby.id)
                                            var idElement2 = document.getElementById("lobby_" + lobby.id + "_2")

                                            if (idElement && idElement2) {
                                                if (idElement.classList.contains('hidden')) {
                                                    idElement.classList.remove('hidden')
                                                    idElement2.classList.add('hidden')
                                                } else {
                                                    idElement.classList.add('hidden')
                                                    idElement2.classList.remove('hidden')
                                                }
                                            }
                                        }
                                    }}>
                                        <>
                                            <div className={`w-full h-full flex flex-col items-center justify-start bg-${lobby.background} ${lobby.open ? ' grayscale-0' : 'grayscale'} bg-center bg-cover bg-no-repeat p-[2%]`} id={`lobby_${lobby.id}`}>
                                                <div className='h-[5%] w-full'>
                                                    <div className={`bg-lock bg-left bg-no-repeat bg-contain h-full w-full ${lobby.open ? 'hidden' : 'block'}`}></div>
                                                </div>
                                                <div className={`h-[60%] w-full bg-${lobby.logo} group-hover:scale-105 transition-all duration-100 bg-contain bg-center bg-no-repeat`}></div>
                                                <h1 className='text-[#effff4] font-Countach text-[10px] 800:text-[30px] 1024:text-[35px] 1280:text-[40px] 1440:text-[45px] 1600:text-[50px] 1920:text-[55px] 2560:text-[60px] mt-[10%] leading-none'>{lobby.name}</h1>
                                                {
                                                    lobby.max_players ? (
                                                        <p className={`text-[#9da6a0] font-Countach text-[10px] 800:text-[18px] 1024:text-[21px] 1280:text-[24px] 1440:text-[27px] 1600:text-[30px] 1920:text-[35px] 2560:text-[40px] leading-none ${lobby.open ? 'block' : 'hidden'}`}>{lobby.players}/{lobby.max_players}</p>
                                                    ) : null
                                                }
                                                {
                                                    lobby.open === true && lobby.map ? (
                                                        <h1 className='text-[#ec4444] font-Countach text-[8px] 800:text-[12px] 1024:text-[14px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[25px] 2560:text-[30px]'>
                                                            {languages["map"]} {lobby.map}
                                                        </h1>
                                                    ) : null
                                                }
                                                {
                                                    lobby.open === false && lobby.open_at ? (
                                                        <h1 className='text-[#ec4444] font-Countach text-[8px] 800:text-[12px] 1024:text-[14px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[25px] 2560:text-[30px]'>
                                                            {languages["opening_at"]} {lobby.open_at}
                                                        </h1>
                                                    ) : null
                                                }
                                            </div>

                                            {
                                                lobby.zones ? (
                                                    <div className={`w-full max-h-full h-full gap-[1%] scroll-auto touch-auto overflow-auto grid grid-cols-2 grid-flow-row auto-rows-max py-[1%] bg-${lobby.background} ${lobby.open ? ' grayscale-0' : 'grayscale'} bg-center bg-cover bg-no-repeat 800:gap-1 1024:gap-2 1440:gap-5 p-[2%] hidden`} id={`lobby_${lobby.id}_2`}>
                                                        {
                                                            lobby.zones ? (
                                                                lobby.zones.map((zone: any) => {
                                                                    return (
                                                                        <div className={`pb-[5%] bg-cover bg-center bg-no-repeat 800:h-[115px] 1024:h-[150px] 1280:h-[175px] 1440:h-[215px] 1600:h-[250px] 1920:h-[300px] 2560:h-[325px] flex flex-col justify-between border border-[#393937] hover:border-[#79c370] rounded cursor-pointer`}
                                                                        onMouseEnter={() => playSound('hover')}
                                                                        onClick={() => {
                                                                            teleportToZone(zone.id)
                                                                        }}
                                                                        style={{backgroundImage: `url(${zone.img})`}}
                                                                        >
                                                                        <div></div>
                                                                        <div className='w-full bg-gradient-to-r from-transparent to-[#416d3c]/80 flex flex-row items-center justify-end p-[1%] drop-shadow'>
                                                                            <h1 className='text-white leading-none uppercase font-StratumMedium 800:text-[16px] 1024:text-[19px] 1280:text-[22px] 1440:text-[25px] 1600:text-[28px] 1920:text-[32px] 2560:text-[35px] drop-shadow'>{zone.name}</h1>
                                                                        </div>
                                                                    </div>
                                                                    )
                                                                })
                                                            ) : null
                                                        }
                                                    </div>
                                                ) : null
                                            }
                                        </>
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>

                {
                    dropOpenAt ? (
                        <h1 className='text-light-blue 800:text-[18px] 1024:text-[21px] 1280:text-[24px] 1440:text-[27px] 1600:text-[30px] 1920:text-[35px] 2560:text-[40px] font-SFProDisplayMedium drop-shadow'>
                            <span className='border-l-2 p-1 1440:p-2 px-[1%] 1440:px-[1%] border-light-blue bg-dark-blue'>{languages["next_drop"]} {dropOpenAt}</span>
                        </h1>
                    ) : null
                }
            </div>

            <div className='hidden'>
                <div className='bg-lobby_0'></div>
                <div className='bg-lobby_1'></div>
                <div className='bg-lobby_2'></div>
                <div className='bg-lobby_3'></div>
                <div className='bg-lobby_4'></div>
                <div className='bg-lobby_5'></div>
                <div className='bg-ffa'></div>
                <div className='bg-tricks'></div>
                <div className='bg-aircraft'></div>
                <div className='bg-global_world'></div>
                <div className='bg-redzones'></div>
            </div>
        </div>
    )
}