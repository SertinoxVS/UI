import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";
import { getLanguages } from "../../../utils/misc";

debugData([
    {
        action: 'setFriends',
        data: [
            {
                "connected": true,
                "pseudo": "Loris",
                "avatar": "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                "identifier": "5965056",
            },
            {
                "connected": false,
                "pseudo": "Nalli",
                "avatar": "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                "identifier": "5965534",
            },
        ]
    }
])

export default function Friends() {
    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }

    const [friends, setFriends] = useState<any>(null)
    useNuiEvent<any>('setFriends', (data) => {
        setFriends(data)
    })
    
    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    const languages = getLanguages()

    if (friends === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Friends:Reload`, options)
    }

    const addFriend = () => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Friends:Add`, options)
    }

    const kickFriend = (identifier: string) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({identifier: identifier}),
        };
        fetch(`https://YBN/YBN.Friends:Remove`, options)
    }

    return (
        <div className='flex flex-row h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 bg-top bg-cover justify-between'>
            
            <div className='flex flex-col gap-[3%] 800:w-[240px] 1024:w-[280px] 1280:w-[320px] 1440:w-[360px] 1600:w-[390px] 1920:w-[420px] 2560:w-[540px]'>
                <h1 className='text-[#7f6a70] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayMedium drop-shadow'>
                    <span className='border-l-2 p-[1%] px-[4%] border-[#7f6a70] bg-[#492c30]'>{languages["friends"]}</span>
                </h1>
                {
                    userData === null || userData.length === 0 ? (
                        <>
                        </>
                    ) : (
                        <>
                            <div className='flex flex-col gap-[3%]'>
                                <h1 className='text-white 800:text-[16px] 1024:text-[20px] 1280:text-[24px] 1440:text-[28px] 1600:text-[32px] 1920:text-[38px] 2560:text-[48px] leading-snug font-SFProDisplayMedium w-full border-b border-gray-400/30 drop-shadow'>{userData.pseudo}</h1>
                                <div className='flex flex-row w-full h-auto gap-[4%] drop-shadow items-center mt-[2%]'>
                                    <div className='2560:h-[96px] 2560:w-[96px] 1920:h-[86px] 1920:w-[86px] 1600:h-[76px] 1600:w-[76px] 1440:h-[66px] 1440:w-[66px] 1280:h-[56px] 1280:w-[56px] 1024:h-[46px] 1024:w-[46px] 800:h-[36px] 800:w-[36px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black'
                                    style={
                                        {
                                            backgroundImage: `url(${userData.avatar})`,
                                        }
                                    }></div>
                                    <div className={`2560:h-[110px] 1920:h-[95px] 1600:h-[87px] 1440:h-[75px] 1280:h-[66px] 1024:h-[56px] 800:h-[46px] w-[76%] bg-no-repeat bg-cover bg-center bg-${userData.banner} rounded`}></div>
                                </div>
                            </div>

                            <div className='flex flex-row 800:h-[25px] 800:w-[120px] 1024:h-[30px] 1024:w-[140px] 1280:h-[35px] 1280:w-[170px] 1600:h-[46px] 1600:w-[200px] 1920:h-[50px] 1920:w-[230px] 2560:h-[56px] 2560:w-[250px] rounded bg-dark-grey items-center pl-[5%] gap-[3%] mt-[5%] cursor-pointer border-2 border-dark-grey hover:border-light-blue hover:bg-dark-blue' onClick={() => {addFriend()}}>
                                <div className='2560:h-[36px] 2560:w-[36px] 1920:h-[30px] 1920:w-[30px] 1600:h-[26px] 1600:w-[26px] 1280:h-[22px] 1280:w-[22px] 1024:h-[18px] 1024:w-[18px] 800:h-[14px] 800:w-[14px] bg-addfriend bg-cover bg-no-repeat bg-center'></div>
                                <h1 className='uppercase font-SFProDisplayRegular 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-light-blue'>
                                    {languages["add_friend"]}
                                </h1>
                            </div>

                            <div className='flex flex-row gap-[5%]'>
                                <div className='flex flex-col gap-3 h-auto w-auto drop-shadow-md mt-[2%]'>
                                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[13px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-SFProDisplayRegularItalic'>
                                        <span className='rounded bg-[#9aa39a] p-[1%] px-[4%]'>{languages["crew"]}</span>
                                    </h1>

                                    <div className='bg-invitefriend bg-cover bg-no-repeat bg-center 2560:h-[260px] 2560:w-[400px] 1920:h-[160px] 1920:w-[270px] 1600:h-[140px] 1600:w-[250px] 1280:h-[120px] 1280:w-[220px] 1024:h-[100px] 1024:w-[180px] 800:h-[80px] 800:w-[140px] rounded border-y-4 border-[#393937] flex items-end p-[2%] pl-[4%] hover:border-light-blue cursor-pointer' onClick={() => {changePage('invite_friend_to_team')}}>
                                        <h1 className='text-[#757575] text-[8px] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-SFProDisplayLight uppercase'>
                                            {languages["invite_friends"]}
                                        </h1>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 h-auto w-auto drop-shadow-md mt-[2%]'>
                                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[13px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-SFProDisplayRegularItalic'>
                                        <span className='rounded bg-[#9aa39a] p-[1%] px-[4%]'>{languages["party"]}</span>
                                    </h1>

                                    <div className='bg-invitefriend2 bg-cover bg-no-repeat bg-center 2560:h-[260px] 2560:w-[400px] 1920:h-[160px] 1920:w-[270px] 1600:h-[140px] 1600:w-[250px] 1280:h-[120px] 1280:w-[220px] 1024:h-[100px] 1024:w-[180px] 800:h-[80px] 800:w-[140px] rounded-md border-y-4 border-[#393937] flex items-end p-[2%] pl-[4%] hover:border-light-blue cursor-pointer' onClick={() => {changePage('invite_friend_to_party')}}>
                                        <h1 className='text-[#757575] text-[8px] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-SFProDisplayLight uppercase'>
                                            {languages["invite_friends"]}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            
            <div className='flex flex-col h-full 800:w-[220px] 1024:w-[280px] 1280:w-[300px] 1440:w-[350px] 1600:w-[390px] 1920:w-[460px] 2560:w-[530px] drop-shadow-md rounded border-2 border-[#414141] bg-gradient-to-b from-[#131212] to-[#2b2b2b]'>

                {
                    friends !== null && friends.length > 0 ? (
                        <div className='max-h-full h-full'>
                            <div className='border-b border-[#414141] 800:h-[20px] 1024:h-[25px] 1280:h-[30px] 1600:h-[50px] 1920:h-[60px] 2560:h-[80px] text-[#848484] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1600:text-[21px] 1920:text-[25px] 2560:text-[30px] uppercase items-center flex pl-[6%] font-SFProDisplayMedium'>
                                {languages["friends_list"]}
                            </div>
                            <div className='w-full h-[90%] flex flex-col gap-[1%] p-[7%] pt-[3.5%]'>
                                
                                <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1.5%] scroll-auto touch-auto overflow-auto h-full mt-[5%]'>
                                    {friends.map((friend: any) => {
                                        return (
                                            <div className='bg-[#1f1e1e] 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] rounded-md border border-[#393937] pl-[7%] overflow-hidden hover:bg-light-blue hover:border-light-blue'>
                                                <div className='bg-gradient-to-b from-[#141313] to-[#1c1b1b] w-full h-full flex items-center justify-between'>
                                                    <div className='flex items-center gap-1 1600:gap-3 pl-[5.5%]'>
                                                        <div className='2560:h-[80px] 2560:w-[80px] 1920:h-[70px] 1920:w-[70px] 1600:h-[60px] 1600:w-[60px] 1280:h-[45px] 1280:w-[45px] 1024:h-[35px] 1024:w-[35px] 800:h-[30px] 800:w-[30px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${friend.avatar})`}}></div>
                                                        <div className='flex flex-col text-left h-full w-auto'>
                                                            <h1 className='text-white 2560:text-[20px] 1920:text-[18px] 1600:text-[16px] 1280:text-[14px] 1024:text-[12px] 800:text-[10px] font-SFProDisplayRegular'>{friend.pseudo}</h1>
                                                            <h1 className='text-[#9aa39a] 2560:text-[16px] 1920:text-[14px] 1600:text-[12px] 1280:text-[11px] 1024:text-[10px] 800:text-[8px] font-SFProDisplayRegularItalic'>{friend.connected ? languages["online"] : languages["offline"]}</h1>
                                                        </div>
                                                    </div>

                                                    <div className='flex h-full justify-end items-end 2560:w-[112px] 1920:w-[102px] 1600:w-[92px] 1280:w-[82px] 1024:w-[72px] 800:w-[62px]'>
                                                        <h1 className='text-[#1a1919] font-SFProDisplayBold bg-[#868e86] p-[4%] py-0 rounded-tl 2560:text-[18px] 1920:text-[16px] 1600:text-[14px] 1280:text-[12px] 1024:text-[10px] 800:text-[8px] uppercase cursor-pointer' onClick={
                                                            () => {
                                                                kickFriend(friend.identifier)
                                                            }
                                                        }>
                                                            {languages["remove"]}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-[4%] items-center justify-center h-full w-full p-[5%]'>
                            <h1 className='text-light-blue 800:text-[9px] 1024:text-[12px] 1280:text-[13px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] uppercase font-SFProDisplayMedium'>{languages["invite_friends_desc"]}</h1>
                            <div className='flex flex-row justify-center 800:h-[32px] w-full 1024:h-[36px] 1280:h-[42px] 1600:h-[50px] 1920:h-[55px] 2560:h-[60px] rounded bg-dark-grey items-center pl-[5%] gap-[3%] cursor-pointer border-2 border-dark-grey hover:border-light-blue hover:bg-dark-blue' onClick={() => {addFriend()}}>
                                <div className='2560:h-[36px] 2560:w-[36px] 1920:h-[30px] 1920:w-[30px] 1600:h-[26px] 1600:w-[26px] 1280:h-[22px] 1280:w-[22px] 1024:h-[18px] 1024:w-[18px] 800:h-[14px] 800:w-[14px] bg-addfriend bg-cover bg-no-repeat bg-center'></div>
                                <h1 className='uppercase font-SFProDisplayRegular 800:text-[12px] 1024:text-[15px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] text-light-blue'>
                                    {languages["add_friend"]}
                                </h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}