import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setLeaderboardZombiesCrew',
        data: [
            {
                "kills": 15,
                "crew_tag": "DVM",
                "name": "Ahhhhh",
                "logoUrl": "https://cdn.discordapp.com/avatars/271355722820747264/0945d9b03e6fbcf5e59e4b26408186c3.png",
                "maxPlayers": 12,
                "deaths": 15,
                "zombies": 453,
                "members": [
                    {
                        "source": null,
                        "identifier": "1839533",
                        "pseudo": "Loris",
                        "isOwner": false,
                        "isOnline": false,
                        "avatar": "https://i.imgur.com/8Z0QZ0u.png",
                        "role": 0,
                    },
                ],
            },
        ]
    }
])

export default function Leaderboard_CrewZombies() {
    const [zombiesCrew, setZombiesCrew] = useState<any>(null)
    useNuiEvent<any>('setLeaderboardZombiesCrew', (data) => {
        setZombiesCrew(data)
    })

    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }

    const languages = getLanguages()

    const [hoveredTeam, setHoveredTeam] = useState<any>(null)

    if (zombiesCrew === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Leaderboard:ReloadZombiesCrew`, options)
    }

    const getCounUsers = () => {
        if (hoveredTeam === null) {
            return 0
        } else {
            return hoveredTeam.members.length
        }
    }

    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[4%] bg-black bg-opacity-50 bg-top bg-cover gap-[3.5%]'>
           
           <div className='flex flex-col justify-between gap-2 800:w-[550px] 1024:w-[650px] 1280:w-[675px] 1440:w-[700px] 1600:w-[725px] 1920:w-[775px] 2560:w-[800px] h-auto drop-shadow-md'>
                <h1 className='text-light-blue pb-[2%] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayMedium drop-shadow'>
                    <span className='border-l-2 p-[1%] px-[4%] border-light-blue bg-dark-blue'>Crew Top Zombies</span>
                </h1>
                <div className='w-[90vw] h-auto flex flex-row justify-start items-start gap-2'>
                <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_kills')}>Top Kills</div>
                    <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_points')}>Top Points</div>
                    <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_zombies')}>Top Zombies</div>
                    <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_darkzone')}>Top Darkzone</div>
                    <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_crewkills')}>Crew Top Kills</div>
                    <div className='bg-[#b6b5b1]/30 hover:bg-dark-blue hover:text-light-blue border border-light-grey/10 hover:border-light-blue h-full rounded px-3 py-1 text-[10px] 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_crewzombies')}>Crew Top Zombies</div>
                </div>
            </div>

            <div className='flex justify-start h-[85%] w-full flex-row gap-[5%]'>
                <div className='h-full w-[65%] flex flex-col gap-[2%]'>
                    <div className='flex flex-row'>
                        <h1 className='text-[#d9d7d7] 800:text-[11px] 1024:text-[13px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[19px] 2560:text-[20px] font-StratumRegular w-[25%] pl-[1%] uppercase'>
                            {languages["leaderboard_rank"]}
                        </h1>
                        <h1 className='text-[#d9d7d7] 800:text-[11px] 1024:text-[13px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[19px] 2560:text-[20px] font-StratumRegular w-[65%] uppercase'>
                            {languages["crew2"]}
                        </h1>
                        <h1 className='text-[#d9d7d7] 800:text-[11px] 1024:text-[13px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[19px] 2560:text-[20px] font-StratumRegular w-[9%] uppercase text-right'>
                            Zombies
                        </h1>
                    </div>

                    <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1%] scroll-auto touch-auto overflow-auto h-full'>
                        {zombiesCrew && zombiesCrew.map((player: any, index: number) => {
                            player.rank = index + 1;
                            return (
                                <div className='bg-[#191916]/70 h-[30px] 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[65px] 1920:h-[70px] 2560:h-[75px] w-full rounded-sm border-y-2 border-[#393937] overflow-hidden hover:border-light-blue flex flex-row'
                                    key={index}
                                    onMouseEnter={() => setHoveredTeam(player)}
                                >
                                    <div className='w-full h-full flex flex-row justify-start items-center pl-[1.3%]'>
                                        <h1 className='text-[#b1b1af] font-StratumMedium 800:text-[18px] 1024:text-[22px] 1280:text-[25px] 1440:text-[27px] 1600:text-[30px] 1920:text-[33px] 2560:text-[35px] w-[24%]'>{index + 1}</h1>
                                        <h1 className='text-[#b1b1af] font-StratumRegular 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1440:text-[23px] 1600:text-[25px] 1920:text-[27px] 2560:text-[29px] w-[63.75%]'>{player.name}</h1>
                                        <h1 className='text-[#b1b1af] font-StratumMedium 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1440:text-[23px] 1600:text-[25px] 1920:text-[27px] 2560:text-[29px] w-[11%] text-right'>{priceToPriceWithCommase(player.zombies)}</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {
                    hoveredTeam && (
                        <div className='h-auto w-[30%] flex justify-start items-center'>
                            <div className='800:w-[100px] 1024:w-[125px] 1280:w-[150px] 1440:w-[175px] 1600:w-[200px] 1920:w-[225px] 2560:w-[250px] border-light-blue border-2 flex flex-col rounded-xl drop-shadow-leaderboard_player overflow-hidden'>
                                <div className='bg-[#000300] pb-[20%] border-light-blue border-b items-center flex flex-col'>
                                    <h1 className='text-white font-StratumRegular 800:text-[10px] 1024:text-[12px] 1280:text-[16px] 1440:text-[18px] 1600:text-[22px] 1920:text-[24px] 2560:text-[26px] pt-[2%] pb-[10%] w-full text-center'>{hoveredTeam.name}</h1>
                                    <div className='2560:h-[120px] 2560:w-[120px] 1920:h-[110px] 1920:w-[110px] 1600:h-[100px] 1600:w-[100px] 1440:h-[90px] 1440:w-[90px] 1280:h-[80px] 1280:w-[80px] 1024:h-[70px] 1024:w-[70px] 800:h-[60px] 800:w-[60px] mb-[10%] bg-no-repeat bg-cover bg-center rounded-full border border-light-black'
                                        style={
                                            {
                                                backgroundImage: `url(${hoveredTeam.logoUrl})`,
                                            }
                                        }>
                                    </div>
                                    <h1 className='text-white font-StratumMedium 800:text-[18px] 1024:text-[20px] 1280:text-[22px] 1440:text-[24px] 1600:text-[26px] 1920:text-[28px] 2560:text-[30px] w-full text-center leading-none uppercase'>{languages["leaderboard_rank"]}</h1>
                                    <h1 className='text-white font-StratumMedium 800:text-[50px] 1024:text-[55px] 1280:text-[60px] 1440:text-[65px] 1600:text-[70px] 1920:text-[75px] 2560:text-[80px] w-full text-center leading-none pb-[10%]'>{hoveredTeam.rank}</h1>

                                    <h1 className='text-[#b1b1af] font-StratumRegular 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] w-full text-center'>Members: <span className='text-white'>{getCounUsers()}/{hoveredTeam.maxPlayers}</span></h1>
                                    <h1 className='text-[#b1b1af] font-StratumRegular 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] w-full text-center'>K/D: <span className='text-white'>{Math.round((hoveredTeam.kills / hoveredTeam.deaths) * 100) / 100}</span></h1>
                                    <h1 className='text-[#b1b1af] font-StratumRegular 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1440:text-[15px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] w-full text-center'>Kills: <span className='text-white'>{priceToPriceWithCommase(hoveredTeam.kills)}</span></h1>
                                </div>
                                <div className='bg-[#242424]/20 py-[15%] flex flex-col gap-1'>
                                    <h1 className='text-light-blue font-StratumMedium 800:text-[22px] 1024:text-[27px] 1280:text-[30px] 1440:text-[33px] 1600:text-[35px] 1920:text-[37px] 2560:text-[40px] w-full text-center leading-none'>TOP 50</h1>
                                    <h1 className='text-white font-StratumRegular 800:text-[12px] 1024:text-[15px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] w-full text-center leading-none'>{hoveredTeam.crew_tag}</h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <h1 className='text-[#6b716b] font-StratumMedium 800:text-[12px] 1024:text-[15px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] leading-none'>{languages["leaderboard_refresh"]}</h1>
        </div>
    )
}