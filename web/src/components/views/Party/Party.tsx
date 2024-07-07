import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { getLanguages, stringUpperToFirst } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import '../Settings/Checkbox.scss'

debugData([
    {
        action: 'setPartyData',
        data: {
            private: true,
            members: [
                {
                    identifier: '111111',
                    pseudo: 'Sertinox',
                    avatar: 'https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp',
                },
                {
                    identifier: '111111',
                    pseudo: 'Sertinox',
                    avatar: 'https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp',
                },
                {
                    identifier: '111111',
                    pseudo: 'Sertinox',
                    avatar: 'https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp',
                },
                {
                    identifier: '111111',
                    pseudo: 'Sertinox',
                    avatar: 'https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp',
                },
            ],
        }
    }
])

export default function Party() {
    const [partyData, setPartyData] = useState<any>(null)
    useNuiEvent<any>('setPartyData', (data) => {
        setPartyData(data)

        var party_private_chkbx = document.getElementById('party_private_chkbx') as HTMLInputElement;
        if (party_private_chkbx) {
            party_private_chkbx.checked = data.private ? false : true
        }
    })

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    const languages = getLanguages()

    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }
    
    if (partyData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Party:Reload`, options)
    }

    const leaveParty = () => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Party:Leave`, options)
    }

    const kickMember = (identifier: string) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({identifier: identifier}),
        };
        fetch(`https://YBN/YBN.Party:Kick`, options)
    }

    const invitePlayer = () => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Party:InvitePlayer`, options)
    }

    const getCounUsers = () => {
        if (partyData === null) {
            return 0
        } else {
            if (partyData.members) {
                return partyData.members.length
            } else {
                return 0
            }
        }
    }

    return (
        <div className='h-screen max-h-screen w-screen max-w-screen select-none px-[8%] py-[6%] bg-black/30'>

            <div className='w-full h-full flex flex-row justify-between rounded border-2 border-[#414141] bg-gradient-to-b from-[#131212] to-[#2b2b2b] p-[1%]'>
                <div className='flex flex-col w-auto'>
                    <div className='flex flex-col 800:gap-1 800:w-[300px] 1024:gap-2 1024:w-[350px] 1280:gap-2 1280:w-[400px] 1440:gap-3 1440:w-[450px] 1600:gap-3 1600:w-[500px] 1920:gap-3 1920:w-[550px] 2560:gap-3 2560:w-[600px]  drop-shadow-md'>
                        {/* <h1 className='text-[#8a7a68] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayMedium drop-shadow'>
                            <span className='border-l-2 p-[1%] px-[4%] border-[#8a7a68] bg-[#5f4632]'>{languages["party"]}</span>
                        </h1> */}
                        <div className='w-[75%] flex flex-row gap-[5%]'>
                            <div className={`flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px]
                            ${partyData === null || partyData.length === 0 || (partyData && !partyData.members) ? 'w-full' : 'w-[50%]'}
                            justify-center rounded bg-gradient-to-b from-dark-blue to-[#537d86] items-center gap-3 border border-light-blue text-light-blue`}>
                                <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                    {languages["party"]}
                                </h1>
                            </div>

                            {
                                partyData === null || partyData.length === 0 || (partyData && !partyData.members) ? (
                                    <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-light-grey/30 hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue' onClick={() => {
                                        changePage("publicparty")
                                    }}>
                                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                            {languages["party_public"]}
                                        </h1>
                                    </div>
                                ) : (
                                    <div>
                                    </div>
                                )
                            }
                        </div>

                        {
                            userData === null || userData.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <>
                                    <h1 className='text-white border-b border-gray-400/30 uppercase 800:text-[16px] 1024:text-[20px] 1280:text-[24px] 1440:text-[28px] 1600:text-[32px] 1920:text-[38px] 2560:text-[48px] leading-snug font-SFProDisplayMedium w-full drop-shadow'>{languages["party"]} ({getCounUsers()}/4)</h1>

                                    <div className='flex flex-row w-full h-[7rem] gap-4 drop-shadow items-center'>
                                        <div className='2560:h-[96px] 2560:w-[96px] 1920:h-[86px] 1920:w-[86px] 1600:h-[76px] 1600:w-[76px] 1440:h-[66px] 1440:w-[66px] 1280:h-[56px] 1280:w-[56px] 1024:h-[46px] 1024:w-[46px] 800:h-[36px] 800:w-[36px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black'
                                        style={
                                            {
                                                backgroundImage: `url(${userData.avatar})`,
                                            }
                                        }></div>
                                        <div className={`2560:h-[110px] 1920:h-[95px] 1600:h-[87px] 1440:h-[75px] 1280:h-[66px] 1024:h-[56px] 800:h-[46px] w-[76%] bg-no-repeat bg-cover bg-center bg-${userData.banner} rounded`}></div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>

                <div className='flex flex-col h-full 800:w-[220px] 1024:w-[280px] 1280:w-[300px] 1600:w-[390px] 1920:w-[460px] 2560:w-[530px] drop-shadow-md rounded border-2 border-[#414141] bg-gradient-to-b from-[#131212] to-[#2b2b2b]'>

                    {
                        partyData === null || partyData.length === 0 || (partyData && !partyData.members) ? (
                            <div className='h-full'>
                                <div className='flex flex-row w-full items-center border-b border-[#414141] opacity-20 justify-between px-[6%] '>
                                    <div className='800:h-[20px] 1024:h-[25px] 1280:h-[30px] 1600:h-[50px] 1920:h-[60px] 2560:h-[80px] text-[#848484] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1600:text-[21px] 1920:text-[25px] 2560:text-[30px] uppercase items-center flex font-SFProDisplayMedium'>
                                        {languages["players_list"]} [{getCounUsers()}/4]
                                    </div>
                                </div>

                                <div className='w-full h-[90%] flex flex-col gap-[1%] p-[7%] pt-[3.5%]'>
                                    <div className={`w-full text-white font-SFProDisplayMedium opacity-20 flex flex-row justify-between 2560:h-[40px] 1920:h-[35px] 1600:h-[30px] 1024:h-[22px] 800:h-[18px] 1280:h-[25px] px-[2%] py-[0.5%] bg-gradient-to-r to-transparent border-y border-[#368947]/60 from-[#368947]/20 uppercase items-center`}>
                                        <h1 className={`pr-[2%] text-[#368947]
                                        800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]`}>{languages["joinable"]}</h1>
                                    
                                        <label className="chkbx h-full w-[30%] flex justify-end items-center">
                                            <input disabled type="checkbox" id='party_private_chkbx' className="party_private_chkbx"/>
                                            <span className="x"></span>
                                        </label>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-[50%]'>
                                        <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {invitePlayer()}}>
                                            <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                {languages["party_invite_id"]}
                                            </h1>
                                        </div>
                                        <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {changePage("invite_friend_to_party")}}>
                                            <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                {stringUpperToFirst(languages["party_invite"])}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='h-full'>
                                <div className='flex flex-row w-full items-center border-b border-[#414141] justify-between px-[6%] '>
                                    <div className='800:h-[20px] 1024:h-[25px] 1280:h-[30px] 1600:h-[50px] 1920:h-[60px] 2560:h-[80px] text-[#848484] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1600:text-[21px] 1920:text-[25px] 2560:text-[30px] uppercase items-center flex font-SFProDisplayMedium'>
                                        {languages["players_list"]} [{getCounUsers()}/4]
                                    </div>

                                    <div className='flex flex-row 2560:h-[56px] 1920:h-[30px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-[20%] justify-center rounded bg-[#e14f4e] hover:bg-[#df6363] items-center cursor-pointer gap-3 border border-[#da7575] text-[#e2caca]' onClick={() => {leaveParty()}}>
                                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[16px] 2560:text-[20px]'>
                                            {languages["leave"]}
                                        </h1>
                                    </div>
                                </div>
                                <div className='w-full h-[90%] flex flex-col gap-[1%] p-[7%] pt-[3.5%]'>
                                    <div className={`w-full text-white font-SFProDisplayMedium flex flex-row justify-between 2560:h-[40px] 1920:h-[35px] 1600:h-[30px] 1024:h-[22px] 800:h-[18px] 1280:h-[25px] px-[2%] py-[0.5%] bg-gradient-to-r to-transparent border-y ${partyData.private ? 'border-[#e14f4e]/60 from-[#e14f4e]/20' : 'border-[#368947]/60 from-[#368947]/20'} uppercase items-center`}>
                                        <h1 className="pr-[2%] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]"
                                        style={
                                            {
                                                color: partyData.private ? '#e14f4e' : '#368947',
                                            }
                                        }
                                        >{languages["joinable"]}</h1>
                                    
                                        <label className="chkbx h-full w-[30%] flex justify-end items-center">
                                            <input type="checkbox" id='party_private_chkbx' className="party_private_chkbx"
                                            onClick={
                                                () => {
                                                    var element = document.getElementById('party_private_chkbx') as HTMLInputElement;

                                                    const options = {
                                                        method: 'post',
                                                        headers: {
                                                            'Content-Type': 'application/json; charset=UTF-8',
                                                        },
                                                        body: JSON.stringify({
                                                            value: element.checked ? false : true,
                                                        }),
                                                    };
                                                    fetch(`https://YBN/YBN.Party:SetPrivate`, options)
                                                }
                                            }
                                            />
                                            <span className="x"></span>
                                        </label>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-[3.5%]'>
                                        <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {leaveParty()}}>
                                            <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                {languages["party_invite_id"]}
                                            </h1>
                                        </div>
                                        <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {changePage("invite_friend_to_party")}}>
                                            <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                {stringUpperToFirst(languages["party_invite"])}
                                            </h1>
                                        </div>
                                    </div>
                                    
                                    <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1.5%] scroll-auto touch-auto overflow-auto h-full mt-[5%]'>

                                        {partyData.members.map((member: any, index: number) => {
                                            return (
                                                <div className='bg-[#1f1e1e] 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] rounded-md border border-[#393937] pl-[7%] overflow-hidden hover:bg-[#79c370] hover:border-[#79c370]'>
                                                    <div className='bg-gradient-to-b from-[#141313] to-[#1c1b1b] w-full h-full flex items-center justify-between'>
                                                        <div className='flex items-center gap-1 1600:gap-3 pl-[5.5%]'>
                                                            <div className='2560:h-[80px] 2560:w-[80px] 1920:h-[65px] 1920:w-[65px] 1600:h-[60px] 1600:w-[60px] 1280:h-[45px] 1280:w-[45px] 1024:h-[35px] 1024:w-[35px] 800:h-[30px] 800:w-[30px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${member.avatar})`}}></div>
                                                            <div className='flex flex-col text-left h-full w-auto'>
                                                                <h1 className='text-white 2560:text-[20px] 1920:text-[18px] 1600:text-[16px] 1280:text-[14px] 1024:text-[12px] 800:text-[10px] font-SFProDisplayRegular'>{member.pseudo}</h1>
                                                                <h1 className='text-[#9aa39a] 2560:text-[16px] 1920:text-[14px] 1600:text-[12px] 1280:text-[11px] 1024:text-[10px] 800:text-[8px] font-SFProDisplayRegularItalic'>{languages["online"]}</h1>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='flex h-full justify-end items-end 2560:w-[112px] 1920:w-[102px] 1600:w-[92px] 1280:w-[82px] 1024:w-[72px] 800:w-[62px]'>
                                                            <h1 className='text-[#1a1919] font-SFProDisplayBold bg-[#868e86] p-[4%] py-0 rounded-tl 2560:text-[16px] 1920:text-[14px] 1600:text-[14px] 1280:text-[12px] 1024:text-[10px] 800:text-[8px] uppercase cursor-pointer' onClick={
                                                                () => {
                                                                    kickMember(member.identifier)
                                                                }
                                                            }>
                                                                {languages["kick"]}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}