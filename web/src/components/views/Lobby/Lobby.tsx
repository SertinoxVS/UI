import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { playSound, getLanguages } from "../../../utils/misc";
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setLobbyData',
        data: [
            {
                id: "ffa_1",
                name: 'FFA #1',
                players: 13,
                max_players: 32,
                background: "lobby_1",
                logo: "ffa",
                opentime: 0,
                open: true,
                opencloseevery: 1200,
                description: "FFA (Free-For-All) Mode is a game mode in which all players compete against each other, rather than being divided into teams. The objective is usually to be the last player or team remaining, or to reach a certain score or objective before the other players. The mode is commonly found in first-person shooter, battle royale, and multiplayer online games. It is usually a fast-paced and intense game mode, where the players are constantly trying to outwit and outplay each other to be the last one standing.",
            },
            {
                id: "tricks_1",
                name: 'Tricks #1',
                players: 2,
                max_players: 32,
                background: "lobby_3",
                logo: "tricks_1",
                opentime: 0,
                open: true,
                opencloseevery: 1200,
                description: "FFA (Free-For-All) Mode is a game mode in which all players compete against each other, rather than being divided into teams. The objective is usually to be the last player or team remaining, or to reach a certain score or objective before the other players. The mode is commonly found in first-person shooter, battle royale, and multiplayer online games. It is usually a fast-paced and intense game mode, where the players are constantly trying to outwit and outplay each other to be the last one standing.",
            },
            {
                id: "aircraft",
                name: 'Aircraft',
                players: 2,
                max_players: 32,
                background: "lobby_4",
                logo: "aircraft",
                opentime: 0,
                open: true,
                opencloseevery: 1200,
                description: "FFA (Free-For-All) Mode is a game mode in which all players compete against each other, rather than being divided into teams. The objective is usually to be the last player or team remaining, or to reach a certain score or objective before the other players. The mode is commonly found in first-person shooter, battle royale, and multiplayer online games. It is usually a fast-paced and intense game mode, where the players are constantly trying to outwit and outplay each other to be the last one standing.",
            },
            {
                id: "darkzone",
                name: 'Darkzone',
                players: 2,
                max_players: 32,
                background: "lobby_5",
                logo: "global_world",
                opentime: 0,
                open: true,
                opencloseevery: 1200,
                description: "FFA (Free-For-All) Mode is a game mode in which all players compete against each other, rather than being divided into teams. The objective is usually to be the last player or team remaining, or to reach a certain score or objective before the other players. The mode is commonly found in first-person shooter, battle royale, and multiplayer online games. It is usually a fast-paced and intense game mode, where the players are constantly trying to outwit and outplay each other to be the last one standing.",
            },
        ]
    }
])

export default function Lobby() {
    const [lobbyData, setLobbyData] = useState<any>(null)
    useNuiEvent<any>('setLobbyData', (data) => {
        setLobbyData(data)
        setLobbyInfos(data[0])
        setLobbyBackground(data[0].background)
    })

    const languages = getLanguages()

    if (lobbyData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/get_lobbies`, options)
    }

    const[lobbyBackground, setLobbyBackground] = useState<any>('lobby_1')
    const[lobbyInfos, setLobbyInfos] = useState<any>()

    const JoinLobby = (id: string) => {
        playSound('click_loby')
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
            }),
        };
        fetch(`https://YBN/join_lobby`, options)
    }

    const LeaveLobby = () => {
        playSound('click_loby')
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/leave_lobby`, options)
    }


    return (
        <div className={`flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] gap-[10%] bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat`}>
            {
                lobbyInfos ? (
                    <div className='flex flex-col gap-[6%] h-[40%] px-[1%] justify-end'>
                        <h1 className="800:text-[30px] 1024:text-[40px] 1280:text-[60px] 1440:text-[80px] 1600:text-[100px] 1920:text-[120px] 2560:text-[140px] font-Countach leading-none tracking-wider text-[#ffffff]/80 font-semibold">{lobbyInfos.name}</h1>
                        <p className="800:text-[8px] 1024:text-[9px] 1280:text-[10px] 1440:text-[11px] 1600:text-[13px] 1920:text-[15px] 2560:text-[17px] text-left max-w-[35%] font-Countach leading-none tracking-widest text-[#ffffff]/60">{lobbyInfos.description}</p>
                    </div>
                ) : null
            }

            <div className='w-full h-[55%] flex flex-col px-[1%] gap-[2%]'>
                <div className='flex flex-row gap-[1%] w-full h-auto'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-light font-Countach bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>What's hot</h1>
                    <h1
                    onClick={() => LeaveLobby()} 
                    className='text-[#fbeee9] cursor-pointer uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-light font-Countach bg-[#ec4444] px-[0.5%] pb-1 rounded-sm'>{languages["leave_area"]}</h1>
                </div>

                <div className='w-full h-full grid grid-cols-4 grid-rows-2 gap-[1%]'>
                    {/* <div className={`flex flex-col drop-shadow overflow-hidden border-y-4 cursor-pointer grayscale hover:grayscale-0 border-dark-grey hover:border-[#79c370] items-center justify-center group rounded`}
                    onMouseEnter={() => {
                        playSound('hover')
                        setLobbyBackground("lobby_0")
                        setLobbyInfos({
                            name: languages["global_world"],
                            description: "Welcome to Global World, a thrilling and dangerous place where players must navigate through a vast open world filled with intense player versus player (PVP) battles and hordes of flesh-eating zombies. This world is a test of survival and skill as players must fend off other players who seek to claim their resources and territory, while also avoiding being overrun by the relentless zombie that roam the land. Whether you choose to team up with other players to create powerful alliances or go it alone, the stakes are high and the rewards are great in this unforgiving world. Are you ready to take on the challenges of Global World?",
                        })
                    }}
                    onClick={() => LeaveLobby()}
                    >
                        <div className={`w-full h-full flex flex-col items-center justify-start group-hover:scale-105 transition-all duration-300 bg-lobby_0 bg-cover bg-center bg-no-repeat p-[2%]`}>
                            <div className='h-[15%] w-full'>
                            </div>
                            <div className={`h-[55%] w-full bg-global_world bg-contain bg-center bg-no-repeat`}></div>
                            <h1 className='text-[#e7e7e7] font-Countach text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[40px] 2560:text-[45px] leading-none'>{languages["global_world"]}</h1>
                            <p className='text-[#bdbdbd] font-Countach text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] leading-none'>{languages["global_world_desc"]}</p>
                        </div>
                    </div> */}


                    {
                        lobbyData ? (
                            lobbyData.map((lobby: any) => {
                                return (
                                    <div className={`flex flex-col drop-shadow overflow-hidden 
                                    ${lobbyInfos && lobbyInfos.id === lobby.id ? 'border-dark-blue grayscale-0' : 'border-dark-grey'}
                                    border-y-4 cursor-pointer grayscale ${lobby.open ? 'hover:grayscale-0 group' : ''} border-dark-grey hover:border-dark-blue rounded`}
                                    onMouseEnter={() => {
                                        if (lobby.open) {
                                            playSound('hover')
                                            setLobbyBackground(lobby.background)
                                            setLobbyInfos(lobby)
                                        }
                                    }}
                                    onClick={() => {
                                        if (lobby.open) {
                                            JoinLobby(lobby.id)
                                        }
                                    }}>
                                        <div className={`w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-300 bg-[#120d09]/70 p-[2%]`}>
                                            {/* <div className='h-[15%] w-full'>
                                                <div className={`bg-lock bg-left bg-no-repeat bg-contain h-full w-full ${lobby.open ? 'hidden' : 'block'}`}></div>
                                            </div> */}
                                            <div className={`h-[45%] w-full bg-${lobby.logo} bg-contain bg-center bg-no-repeat`}></div>
                                            <h1 className='text-[#effff4] font-Countach text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[40px] 2560:text-[45px] leading-none'>{lobby.name}</h1>
                                            <p className={`text-[#9da6a0] font-Countach text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] leading-none ${lobby.open ? 'block' : 'hidden'}`}>{lobby.players}/{lobby.max_players}</p>
                                            {
                                                lobby.id === 'darkzone' ? (
                                                    <h1 className='text-[#ec4444] font-Countach text-[8px] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>Open at 5pm, 9pm (Paris Time)</h1>
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>
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
            </div>
        </div>
    )
}