import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { getLanguages, priceToPriceWithCommase, stringUpperToFirst } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import ProgressBar from "@ramonak/react-progress-bar";
import '../../../assets/css/profile.css'

debugData([
    {
        action: 'setProfileData',
        data: {
            discordName: "YBN Loris#1111",
            discordAvatar: "https://cdn.discordapp.com/avatars/271355722820747264/0945d9b03e6fbcf5e59e4b26408186c3.png",
            banner: "calling_card_28",
            discordNickname: "Test",
            kills: 5,
            deaths: 3,
            zombies: 2,
            timePlayed: 120,
            pass: [
                {
                    name: "Pass 1",
                    level: 1,
                },
                {
                    name: "Pass 2",
                    level: 2,
                },
            ],
            pseudo: "Loris",
            identifier: "5965056",
            points: 14050,
            xpLevel: 1,
            prestige: 1,
            crew: "NVM",
            currentXp: 100,
            xpNextLevel: 2,
            redzonePoints: 0,
            coins: 250,
            badge: "prestige_1",
            badges: [
                "newbie",
                "prestige_1",
                "prestige_2",
            ],
            all_badges: [
                "newbie",
                "prestige_1",
                "prestige_2",
                "prestige_3",
                "prestige_4",
                "prestige_5",
                "prestige_6",
                "prestige_7",
                "prestige_8",
                "prestige_9",
            ]
        }
    }
])

export default function Profile() {
    const [dataProfile, setDataProfile] = useState<any>(null)
    useNuiEvent<any>('setProfileData', (data) => {
        setDataProfile(data)
    })

    const languages = getLanguages()

    if (dataProfile === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Profile:Reload`, options)
    }

    const timePlayedSeconds = dataProfile !== null ? dataProfile.timePlayed : 0
    const timePlayedHours = Math.floor(timePlayedSeconds / 3600)

    const getKD = (kills: number, deaths: number) => {
        if (deaths === 0) {
            return kills
        }
        return (kills / deaths).toFixed(2)
    }

    return (
        <div className='flex flex-row h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pb-[3%] bg-black bg-opacity-50 bg-top bg-cover justify-between'>
            {
                dataProfile !== null ? (
                    <>
                        <div className='flex flex-col gap-5 h-full 800:gap-1 800:w-[300px] 1024:gap-2 1024:w-[350px] 1280:gap-2 1280:w-[400px] 1440:gap-3 1440:w-[450px] 1600:gap-3 1600:w-[500px] 1920:gap-3 1920:w-[550px] 2560:gap-3 2560:w-[600px] drop-shadow-md'>
                            <h1 className='text-[#709e8d] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayMedium drop-shadow'>
                                <span className='border-l-2 p-[1%] px-[4%] border-[#709e8d] bg-[#283d36]'>{languages["profile"]}</span>
                            </h1>
                            <h1 className='text-white 800:text-[16px] 1024:text-[20px] 1280:text-[24px] 1440:text-[28px] 1600:text-[32px] 1920:text-[38px] 2560:text-[48px] font-SFProDisplayMedium w-full leading-snug border-b border-gray-400/30 drop-shadow'>{dataProfile.pseudo}</h1>
                            <div className='flex flex-row w-full h-[7rem] gap-4 drop-shadow items-center'>
                                <div className='2560:h-[96px] 2560:w-[96px] 1920:h-[86px] 1920:w-[86px] 1600:h-[76px] 1600:w-[76px] 1440:h-[66px] 1440:w-[66px] 1280:h-[56px] 1280:w-[56px] 1024:h-[46px] 1024:w-[46px] 800:h-[36px] 800:w-[36px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black'
                                style={
                                    {
                                        backgroundImage: `url(${dataProfile.discordAvatar})`,
                                    }
                                }></div>
                                <div className={`2560:h-[110px] 1920:h-[95px] 1600:h-[87px] 1440:h-[75px] 1280:h-[66px] 1024:h-[56px] 800:h-[46px] w-[76%] bg-no-repeat bg-cover bg-center bg-${dataProfile.banner} rounded`}></div>
                            </div>
                            <div className='w-full text-white 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px] font-SFProDisplayRegular flex flex-row gap-[2%] h-[5%] p-[2%] bg-gradient-to-r from-transparent via-white/30 to-transparent border-y border-[#2f2e2d] uppercase items-center'>
                                <h1 className='border-r-2 border-[#535452] pr-2'>JOINABLE</h1>
                                <h1 className=''>Online</h1>
                            </div>
                            <div className='scroll-auto touch-auto overflow-auto grid grid-cols-5 grid-flow-row auto-rows-max h-[500px] 800:w-[400px] 800:gap-1 1024:gap-2 1024:w-[500px] 1280:gap-2 1280:w-[600px] 1440:gap-3 1440:w-[700px] 1600:gap-3 1600:w-[800px] 1920:gap-3 1920:w-[850px] 2560:gap-3 2560:w-[900px]'>
                                {dataProfile.all_badges.map((badge: any, index: number) => {
                                    return (
                                        <div className={`800:h-[65px] 1024:h-[75px] 1280:h-[100px] 1440:h-[110px] 1600:h-[125px] 1920:h-[135px] 2560:h-[150px] ${dataProfile.badge == badge ? "border-[#f1a754] border" : "border-2"} ${dataProfile.badges.includes(badge) ? "hover:border-y-4 hover:border-y-primary bg-gradient-to-t from-transparent to-white/20 cursor-pointer" : "opacity-50"} rounded-sm 1440:rounded border-[#2f2e2d] p-[10%]`}
                                        onClick={() => {

                                            if (dataProfile.badges.includes(badge)) {
                                                const options = {
                                                    method: 'post',
                                                    headers: {
                                                        'Content-Type': 'application/json; charset=UTF-8',
                                                    },
                                                    body: JSON.stringify({
                                                        badge: badge
                                                    }),
                                                };
                                                fetch(`https://YBN/YBN.Profile:SetBadge`, options)
                                            } else {
                                                console.log("You don't have this badge")
                                            }
                                        }}
                                        >
                                            <div className={`bg-${badge} bg-contain bg-center bg-no-repeat h-full w-full`}></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div className='flex flex-col h-full 800:w-[220px] 1024:w-[280px] 1280:w-[300px] 1600:w-[390px] 1920:w-[460px] 2560:w-[530px] drop-shadow-md'>
                            <div className='flex flex-row bg-gradient-to-t from-[#373736]/70 to-[#595959]/70 w-full rounded-t-md 800:h-[50px] 1024:h-[65px] 1280:h-[80px] 1440:h-[90px] 1600:h-[120px] 1920:h-[160px] 2560:h-[200px]'>
                                <div className='h-full w-[40%] p-[2%] text-center'>
                                    <div className={`bg-${dataProfile.badge} bg-contain bg-no-repeat bg-center h-full w-full`}></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#777c77] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px] uppercase'>
                                        {dataProfile.pseudo}
                                    </h1>
                                    <h1 className='text-[#979d96] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[28px] uppercase'>{languages["level"]} {dataProfile.xpLevel}</h1>
                                    <h1 className='text-[#919991] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[22px]'>Coins {priceToPriceWithCommase(dataProfile.coins)}</h1>
                                </div>
                            </div>
                            {/* <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-tag_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>RevoltTag</h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.pseudo}</h1>
                                </div> *
                            </div> */}
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-tag_id bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>Glint ID</h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.identifier}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-points_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        {stringUpperToFirst(languages["points2"])}
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{priceToPriceWithCommase(dataProfile.points)}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-kills_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        {stringUpperToFirst(languages["leaderboard_kills"])}
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.kills}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-death_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        {stringUpperToFirst(languages["leaderboard_deaths"])}
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.deaths}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70 rounded-b-md'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-kd_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>K/D</h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{getKD(dataProfile.kills, dataProfile.deaths)}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-time_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>Time Played</h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{timePlayedHours} Hours</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-crew_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        {stringUpperToFirst(languages["crew2"])}
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.crew}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-redzone_points_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        Redzone {stringUpperToFirst(languages["points"])}
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{priceToPriceWithCommase(dataProfile.redzonePoints)}</h1>
                                </div>
                            </div>
                            <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-zombies_profile bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>Zombies Killed</h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{dataProfile.zombies}</h1>
                                </div>
                            </div>
                            {/* <div className='flex flex-row bg-[#020201]/90 w-full 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] border-x-2 border-b-2 border-[#373736]/70'>
                                <div className='h-full w-[20%] p-[4%]'>
                                    <div className='bg-points bg-contain bg-no-repeat bg-center h-full w-full'></div>
                                </div>
                                <div className='flex flex-col justify-center h-full w-[60%] leading-tight'>
                                    <h1 className='text-[#7c837b] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[21px] 1920:text-[22px] 2560:text-[24px]'>
                                        Coins
                                    </h1>
                                    <h1 className='text-[#b9b9b9] font-SFProDisplayMedium 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[20px] 1920:text-[21px] 2560:text-[22px]'>{priceToPriceWithCommase(dataProfile.coins)}</h1>
                                </div>
                            </div> */}
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )
            }

            <div className='hidden'>
                <div className='bg-newbie'></div>
                <div className='bg-prestige_1'></div>
                <div className='bg-prestige_2'></div>
                <div className='bg-prestige_3'></div>
                <div className='bg-prestige_4'></div>
                <div className='bg-prestige_5'></div>
                <div className='bg-prestige_6'></div>
                <div className='bg-prestige_7'></div>
                <div className='bg-prestige_8'></div>
                <div className='bg-prestige_9'></div>
                <div className='bg-top3kills'></div>
                <div className='bg-top3zombies'></div>
                <div className='bg-top10kills'></div>
                <div className='bg-top10zombies'></div>
                <div className='bg-nuke'></div>
                <div className='bg-top3darkzone'></div>
                <div className='bg-top10darkzone'></div>
            </div>
        </div>
    )

    // return (
    //     <div className="flex flex-col items-center justify-center h-screen max-h-screen w-screen max-w-screen select-none">
    //         <div className="flex flex-col items-center justify-center w-full h-full p-2 800:p-2 1024:p-4 1280:p-6 1440:p-8">
    //             <div className='h-full w-full justify-start flex flex-col'>
    //                 {
    //                     dataProfile !== null ? (
    //                         <>
    //                         <div className='bg-[#07090c] w-full rounded-xl h-[95%] flex flex-col gap-10 border border-[#C3073F]/80 p-5'>
    //                             <div className='flex flex-row gap-10 items-center'>
    //                                 <div className='h-[150px] w-[150px] bg-no-repeat bg-cover bg-center rounded-full border-4 border-[#434350]' style={{backgroundImage: `url(${dataProfile.discordAvatar})`}}></div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Discord:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.discordName}</h1>
    //                                 </div>
    //                             </div>
    //                             <h1 className='text-white font-SFProDisplayRegularItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[28px]'>Player:</h1>
    //                             <div className='grid grid-cols-5 items-center'>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Pseudo:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.pseudo}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Identifier:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.identifier}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Time Played:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'><a className='font-Bitter'>{timePlayedHours}</a> Hours</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Prestige:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.prestige}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Crew:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.crew}</h1>
    //                                 </div>
    //                             </div>
    //                             <h1 className='text-white font-SFProDisplayRegularItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[28px]'>Stats:</h1>
    //                             <div className='grid grid-cols-5 items-center'>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Zombies:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.zombies}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Kills:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.kills}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Deaths:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.deaths}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>Points:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.points}</h1>
    //                                 </div>
    //                                 <div className='flex flex-col text-center'>
    //                                     <h1 className='text-[#434350] font-SFProDisplayLightItalic tracking-widest text-xl'>K/D:</h1>
    //                                     <h1 className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{getKD(dataProfile.kills, dataProfile.deaths)}</h1>
    //                                 </div>
    //                             </div>
    //                             <h1 className='text-white font-SFProDisplayRegularItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[28px]'>XP:</h1>
    //                             <div className='flex flex-row justify-around w-full'>
    //                                 <a className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.xpLevel}</a>
    //                                 <div className='w-[80%]'>
    //                                     <div className="progressbar-wrapper mt-3">
    //                                         <div title="downloaded" className="progressbarXp progressbarXpValue h-2"></div>
    //                                     </div>
    //                                 </div>
    //                                 <a className='text-[#C3073F]/80 font-SFProDisplayLightItalic tracking-widest 800:text-[13px] 1024:text-[16px] 1280:text-[17px] 1600:text-[22px] 1920:text-[23px] 2560:text-[24px]'>{dataProfile.xpLevel + 1}</a>
    //                             </div>
    //                         </div>
    //                         </>
    //                     ) : (
    //                         <h1>Loading...</h1>
    //                     )
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // )
}