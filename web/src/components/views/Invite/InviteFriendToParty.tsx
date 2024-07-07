import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setFriendsInvite',
        data: [
            {
                pseudo: "Loris",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965056",
            },
            {
                pseudo: "Nalli",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965534",
            },
            {
                pseudo: "Loris",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965056",
            },
            {
                pseudo: "Nalli",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965534",
            },
            {
                pseudo: "Loris",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965056",
            },
            {
                pseudo: "Nalli",
                avatar: "https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png",
                identifier: "5965534",
            },
        ]
    }
])

export default function InviteFriendToParty() {        
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }
    
    const [friends, setFriends] = useState<any>(null)
    useNuiEvent<any>('setFriendsInvite', (data) => {
        setFriends(data)
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
        fetch(`https://YBN/YBN.Friends:ReloadInvite`, options)
    }

    const [playersSelected, setPlayersSelected] = useState<string[]>([])
    const addFriend = (identifier: string) => {

        if (playersSelected.includes(identifier)) {
            setPlayersSelected(playersSelected.filter((player) => player !== identifier))

            var element = document.getElementById(identifier.toString());
            if (element) {
                element.classList.remove('bg-[#79c370]');
                element.classList.remove('border-[#79c370]');
                element.classList.add('bg-[#1f1e1e]');
                element.classList.add('border-[#393937]');
            }
        } else {
            setPlayersSelected([...playersSelected, identifier])
            
            var element = document.getElementById(identifier.toString());
            if (element) {
                element.classList.remove('bg-[#1f1e1e]');
                element.classList.remove('border-[#393937]');
                element.classList.add('bg-[#79c370]');
                element.classList.add('border-[#79c370]');
            }
        }
    }
    
    const getNumberOfPlayersSelected = () => {
        return playersSelected.length
    }

    const getNumberOfFriends = () => {
        return friends.length
    }

    const inviteParty = () => {
        if (playersSelected.length > 0) {
            const options = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    players: playersSelected,
                }),
            };
            fetch(`https://YBN/YBN.Party:Invite`, options)
        } else {
            console.log('No players selected')
        }
    }

    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[17%] pt-[5%] pb-[7%] bg-black bg-opacity-50 bg-top bg-cover items-center drop-shadow'>
            <h1 className='text-[#d8d7d7] font-SFProDisplaySemibold 800:text-[15px] 1024:text-[20px] 1280:text-[30px] 1600:text-[40px] 1920:text-[50px] 2560:text-[60px] drop-shadow'>INVITE TO PARTY</h1>
            <h6 className='text-[#acaba8] font-SFProDisplayMedium 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] drop-shadow'>Select players to invite to your party.</h6>
            
            <h1 className='text-[#303030] uppercase text-[6px] 800:text-[8px] 1024:text-[10px] 1280:text-[11px] 1440:text-[13px] 1600:text-[15px] 1920:text-[16px] 2560:text-[20px] font-SFProDisplayMedium mt-[2%]'>
                <span className='bg-[#ffffff] rounded-sm p-[1%] px-[4%]'>{languages["friends"]}</span>
            </h1>

            <div className='flex flex-row justify-between w-full h-full mt-[5%]'>
                {
                    friends && friends.length > 0 ? (
                        <div className='flex flex-col gap-[5%] w-[40%] h-[70%]'>
                            <h1 className='text-[#9aa39a] uppercase px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[11px] 1440:text-[13px] 1600:text-[15px] 1920:text-[16px] 2560:text-[20px] rounded font-SFProDisplayMedium 800:w-[100px] 1024:w-[128px] 1280:w-[147px] 1600:w-[165px] 1920:w-[175px] 2560:w-[210px] bg-[#1a1919] mt-[2%]'>Online friends ({getNumberOfFriends()})</h1>
                            <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-2 scroll-auto touch-auto overflow-auto h-full max-h-full'>
                                {
                                    friends.map((friend: any) => {
                                        return (
                                            <div className='bg-[#1f1e1e] 800:h-[55px] 1024:h-[70px] 1280:h-[80px] 1600:h-[100px] 1920:h-[110px] 2560:h-[120px] rounded-md border border-[#393937] pl-[6%] overflow-hidden hover:bg-light-blue hover:border-light-blue cursor-pointer'
                                                onClick={() => 
                                                    addFriend(friend.identifier)
                                                } id={friend.identifier}>
                                                <div className='bg-gradient-to-b from-[#141313] to-[#1c1b1b] w-full h-full flex items-center justify-between p-[4%]'>
                                                    <div className='flex items-center gap-1 1024:gap-2 1600:gap-3'>
                                                        <div className='2560:h-[80px] 2560:w-[80px] 1920:h-[70px] 1920:w-[70px] 1600:h-[60px] 1600:w-[60px] 1280:h-[50px] 1280:w-[50px] 1024:h-[40px] 1024:w-[40px] 800:h-[35px] 800:w-[35px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${friend.avatar})`}}></div>
                                                        <div className='flex flex-col text-left h-full w-auto'>
                                                            <h1 className='text-white 2560:text-[20px] 1920:text-[18px] 1600:text-[16px] 1280:text-[14px] 1024:text-[12px] 800:text-[10px] font-SFProDisplayRegular'>{friend.pseudo}</h1>
                                                            <h1 className='text-[#9aa39a] 2560:text-[16px] 1920:text-[14px] 1600:text-[12px] 1280:text-[11px] 1024:text-[10px] 800:text-[8px] font-SFProDisplayRegularItalic'>At the main menu</h1>
                                                        </div>
                                                    </div>
                                                    <div className='2560:h-[30px] 2560:w-[30px] 1920:h-[25px] 1920:w-[25px] 1600:h-[22px] 1600:w-[22px] 1280:h-[19px] 1280:w-[19px] 1024:h-[16px] 1024:w-[16px] 800:h-[14px] 800:w-[14px] bg-goto bg-contain bg-center bg-no-repeat'></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className='flex w-[40%]'>
                            <div className='flex items-center justify-center h-[52%]'>
                                <div className='bg-black/20 text-[#bdbdbd] 800:text-[5px] 1024:text-[7px] 1280:text-[8px] 1600:text-[10px] 1920:text-[14px] 2560:text-[16px] text-center p-2 rounded font-SFProDisplayRegular drop-shadow'>
                                    Sorry, it looks like none of your friends are online or available to play at the moment.<br></br> Please try again later or invite some new friends to join you.
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className='flex flex-col gap-1 1600:gap-2 w-[40%] items-center drop-shadow'>
                    <h1 className='text-[#989187] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] drop-shadow mt-[2%]'>Selected players</h1>
                    <div className='2560:w-[430px] 2560:h-[380px] 1920:w-[380px] 1920:h-[330px] 1600:w-[330px] 1600:h-[270px] 1280:w-[270px] 1280:h-[220px] 1024:w-[220px] 1024:h-[180px] 800:w-[180px] 800:h-[140px] border border-[#989187] flex justify-center items-center'>
                        <h1 className='2560:text-[96px] 1920:text-[86px] 1600:text-[76px] 1280:text-[66px] 1024:text-[56px] 800:text-[43px] text-[#989187] font-SFProDisplayRegular'>{getNumberOfPlayersSelected()}</h1>
                    </div>
                    <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] 2560:w-[430px] 1920:w-[380px] 1600:w-[330px] 1280:w-[270px] 1024:w-[220px] 800:w-[180px] justify-center rounded bg-gradient-to-b from-[#212427] to-[#1a1c1f] items-center gap-3 cursor-pointer border-2 border-[#272a2d] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue text-[#9aa39a] hover:text-light-blue' onClick={() => inviteParty()}>
                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                            {languages["invite"]}
                        </h1>
                    </div>
                    <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] 2560:w-[430px] 1920:w-[380px] 1600:w-[330px] 1280:w-[270px] 1024:w-[220px] 800:w-[180px] justify-center rounded bg-gradient-to-b from-[#e14f4e] to-[#e14f4e] items-center gap-3 cursor-pointer border-2 border-[#da7575] hover:from-[#df6363] hover:to-[#df6363] text-[#e2caca]' onClick={() => goBack()}>
                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                            {languages["cancel"]}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}