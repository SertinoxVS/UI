// import React, {useState} from 'react';
// import { render } from 'react-dom'
// import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
// import {useNuiEvent} from "../../../hooks/useNuiEvent";
// import { getLanguages } from "../../../utils/misc";
// import {debugData} from "../../../utils/debugData";

// export default function Squad() {
//     const [teamData, setTeamData] = useState<any>(null)
//     useNuiEvent<any>('setTeamData', (data) => {
//         setTeamData(data)
//     })

//     let history = useHistory()
//     const changePage = (page: string) => {
//         history.push("/" + page)
//     }

//     const languages = getLanguages()
    
//     if (teamData === null) {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Team:Reload`, options)
//     }

//     const createSquad = () => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Team:Create`, options)
        
//         debugData([
//             {
//                 action: 'setTeamData',
//                 data: {
//                     "name": "YBN",
//                     "owner": true,
//                     "maxPlayers": 16,
//                     "isPrivate": true,
//                     "logoUrl": "https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp",
//                     "members": [
//                         {
//                             "pseudo": "Loris",
//                             "isOwner": true,
//                             "isOnline": true,
//                             "avatar": "https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp",
//                             "role": 1,
//                             "identifier": "steam:11000010e3b0b8e",
//                         },
//                         {
//                             "pseudo": "Loris",
//                             "isOwner": false,
//                             "isOnline": true,
//                             "avatar": "https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp",
//                             "role": 0,
//                             "identifier": "steam:11000010e3b0b8e",
//                         },
//                     ]       
//                 }
//             }
//         ])
//     }

//     const leaveSquad = () => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Team:Leave`, options)
//     }

//     const kickMember = (identifier: string) => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({identifier: identifier}),
//         };
//         fetch(`https://YBN/YBN.Team:KickMember`, options)
//     }

//     const setPrivate = (isPrivate: boolean) => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({isPrivate: isPrivate}),
//         };
//         fetch(`https://YBN/YBN.Team:SetPrivate`, options)
//     }

//     const deleteSquad = () => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Team:Delete`, options)
//     }

//     const inviteFriend = () => {
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({}),
//         };
//         fetch(`https://YBN/YBN.Team:InviteFriend`, options)
//     }

//     const getCounUsers = () => {
//         if (teamData === null) {
//             return 0
//         } else {
//             return teamData.members.length
//         }
//     }

//     const changeRole = (identifier: string, role: string) => {
//         console.log(identifier, role)
//         const options = {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify({identifier: identifier, role: role}),
//         };
//         fetch(`https://YBN/YBN.Team:ChangeRole`, options)
//     }

//     return (
//         <div className='flex flex-row h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 bg-top bg-cover justify-between'>

//             <div className='flex flex-col w-auto'>
//                 <div className='flex flex-col 800:gap-1 800:h-[100px] 800:w-[240px] 1024:gap-2 1024:h-[130px] 1024:w-[280px] 1280:gap-2 1280:h-[160px] 1280:w-[320px] 1440:gap-3 1440:h-[190px] 1440:w-[360px] 1600:gap-3 1600:h-[220px] 1600:w-[390px] 1920:gap-3 1920:h-[250px] 1920:w-[420px] 2560:gap-3 2560:h-[270px] 2560:w-[440px] drop-shadow-md'>
//                     <h1 className='text-[#75957a] uppercase 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayMedium drop-shadow'>
//                         <span className='border-l-2 p-[1%] px-[4%] border-[#75957a] bg-[#132c17]'>{languages["crew"]}</span>
//                     </h1>

//                     {
//                         teamData === null || teamData.length === 0 ? (
//                             <>
//                             </>
//                         ) : (
//                             <>
//                                 <h1 className='text-white uppercase 800:text-[16px] 1024:text-[20px] 1280:text-[24px] 1440:text-[28px] 1600:text-[32px] 1920:text-[38px] 2560:text-[48px] leading-snug font-SFProDisplayMedium w-full border-b border-gray-400/30 drop-shadow'>{teamData.name} ({getCounUsers()}/{teamData.maxPlayers})</h1>
//                                 <div className='2560:h-[96px] 2560:w-[96px] 1920:h-[86px] 1920:w-[86px] 1600:h-[76px] 1600:w-[76px] 1440:h-[66px] 1440:w-[66px] 1280:h-[56px] 1280:w-[56px] 1024:h-[46px] 1024:w-[46px] 800:h-[36px] 800:w-[36px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${teamData.logoUrl})`}}></div>
//                             </>
//                         )
//                     }
//                 </div>
//                 {
//                     teamData === null || teamData.length === 0 ? (
//                         <>
//                         </>
//                     ) : (
//                         <div className='flex flex-row'>
//                             <div className='flex flex-row 2560:h-[64px] 2560:w-[256px] 1920:h-[54px] 1920:w-[236px] 1600:h-[44px] 1600:w-[216px] 1440:h-[34px] 1440:w-[196px] 1280:h-[30px] 1280:w-[176px] 1024:h-[28px] 1024:w-[146px] 800:h-[26px] 800:w-[126px] justify-center rounded bg-gradient-to-t from-[#e14f4e] to-[#e14f4e] items-center cursor-pointer border border-[#da7575] hover:from-[#df6363] hover:to-[#df6363] text-[#e2caca] mt-[2%]' onClick={() => {deleteSquad()}}>
//                                 <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[14px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px]'>
//                                     {languages["crew_delete"]}
//                                 </h1>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>

//             <div className='flex flex-col h-full 800:w-[220px] 1024:w-[280px] 1280:w-[300px] 1600:w-[390px] 1920:w-[460px] 2560:w-[530px] drop-shadow-md rounded border-2 border-[#414141] bg-gradient-to-b from-[#131212] to-[#2b2b2b]'>

//                 {
//                     teamData === null || teamData.length === 0 ? (
//                         <div className='flex flex-col gap-[4%] items-center justify-center h-full w-full p-[5%]'>
//                             <h1 className='text-[#656565] 800:text-[12px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] uppercase font-SFProDisplayMedium'>{languages["invite_crew"]}</h1>
//                             <div className='flex flex-row 800:h-[25px] 1024:h-[30px] 1280:h-[34px] 1600:h-[40px] 1920:h-[46px] 2560:h-[56px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => createSquad()}>
//                                 <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[14px] 1280:text-[15px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px]'>{languages["create_crew"]}</h1>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className='h-full'>
//                             <div className='flex flex-row w-full items-center border-b border-[#414141] justify-between px-[6%]'>
//                                 <div className='800:h-[20px] 1024:h-[25px] 1280:h-[30px] 1600:h-[50px] 1920:h-[60px] 2560:h-[80px] text-[#848484] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1600:text-[21px] 1920:text-[25px] 2560:text-[30px] uppercase items-center flex font-SFProDisplayMedium'>
//                                     {languages["players_list"]} [{getCounUsers()}/{teamData.maxPlayers}]
//                                 </div>

//                                 <div className='flex flex-row 2560:h-[56px] 1920:h-[30px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-[40%] justify-center rounded bg-[#e14f4e] hover:bg-[#df6363] items-center cursor-pointer gap-3 border border-[#da7575] text-[#e2caca]' onClick={() => {leaveSquad()}}>
//                                     <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[16px] 2560:text-[20px]'>
//                                         {languages["crew_leave"]}
//                                     </h1>
//                                 </div>
//                             </div>
//                             <div className='w-full h-[90%] flex flex-col gap-[1%] p-[7%] pt-[3.5%]'>
//                                 {/* <h1 className='text-white 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-SFProDisplayLight'>In a team</h1> */}
//                                 <div className={`w-full text-white font-SFProDisplayMedium opacity-20 flex flex-row justify-between 2560:h-[40px] 1920:h-[35px] 1600:h-[30px] 1024:h-[22px] 800:h-[18px] 1280:h-[25px] px-[2%] py-[0.5%] bg-gradient-to-r to-transparent border-y border-[#368947]/60 from-[#368947]/20 uppercase items-center`}>
//                                     <h1 className={`pr-[2%] text-[#368947] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]`}>{languages["joinable"]}</h1>
                                    
//                                     <label className="chkbx h-full w-[30%] flex justify-end items-center">
//                                         <input disabled type="checkbox" id='party_private_chkbx' className="party_private_chkbx"/>
//                                         <span className="x"></span>
//                                     </label>
//                                 </div>

//                                 <div className='flex flex-col gap-1 mt-[3.5%]'>
//                                     <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {leaveSquad()}}>
//                                         <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
//                                             {languages["party_invite_id"]}
//                                         </h1>
//                                     </div>
//                                     <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue mt-[2%]' onClick={() => {inviteFriend()}}>
//                                         <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
//                                             {languages["party_invite"]}
//                                         </h1>
//                                     </div>
//                                 </div>
                                
//                                 <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1.5%] scroll-auto touch-auto overflow-auto h-full mt-[5%]'>

//                                     {teamData.members.map((member: any, index: number) => {
//                                         return (
//                                             <div className='bg-[#1f1e1e] 800:h-[40px] 1024:h-[50px] 1280:h-[65px] 1600:h-[70px] 1920:h-[84px] 2560:h-[104px] rounded border border-[#393937] pl-[7%] overflow-hidden hover:bg-dark-blue hover:border-light-blue'>
//                                                 <div className='bg-gradient-to-b from-[#141313] to-[#1c1b1b] w-full h-full flex items-center justify-between'>
//                                                     <div className='flex items-center gap-1 1600:gap-3 pl-[5.5%]'>
//                                                         <div className='2560:h-[80px] 2560:w-[80px] 1920:h-[70px] 1920:w-[70px] 1600:h-[60px] 1600:w-[60px] 1280:h-[45px] 1280:w-[45px] 1024:h-[35px] 1024:w-[35px] 800:h-[30px] 800:w-[30px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${member.avatar})`}}></div>
//                                                         <div className='flex flex-col text-left h-full w-auto leading-3 1024:leading-3 1280:leading-4 1920:leading-5'>
//                                                             <h1 className='text-white 2560:text-[20px] 1920:text-[18px] 1600:text-[16px] 1280:text-[14px] 1024:text-[10px] 800:text-[10px] font-SFProDisplayRegular'>{member.pseudo}</h1>
//                                                             <h1 className='text-[#9aa39a] 2560:text-[16px] 1920:text-[14px] 1600:text-[12px] 1280:text-[11px] 1024:text-[8px] 800:text-[8px] font-SFProDisplayRegularItalic'>
//                                                                 {
//                                                                     member.isOnline ? languages["online"] : languages["offline"]
//                                                                 }
//                                                             </h1>
//                                                         </div>
//                                                     </div>
                                                    
//                                                     <div className='flex h-full justify-end gap-[5%] items-end 2560:w-[112px] 1920:w-[102px] 1600:w-[92px] 1280:w-[82px] 1024:w-[72px] 800:w-[62px]'>
//                                                         <select 
//                                                         className='bg-[#868e86] 2560:h-[27px] 1920:h-[23px] 1600:h-[20px] 1280:h-[18px] 1024:h-[15px] 800:h-[8px] outline-none text-[#1a1919] 2560:text-[16px] 1920:text-[14px] 1600:text-[12px] 1280:text-[11px] 1024:text-[10px] 800:text-[8px] font-SFProDisplayRegular w-auto rounded-t cursor-pointer' 
//                                                         onChange={(e) => {changeRole(member.identifier, e.target.value)}}
//                                                         >
//                                                             <option value="0" selected={member.role == 0}>{languages["crew_member"]}</option>
//                                                             <option value="1" selected={member.role == 1}>{languages["crew_admin"]}</option>
//                                                         </select>
//                                                         <h1 className='text-[#1a1919] font-SFProDisplayBold bg-[#868e86] p-[4%] py-0 rounded-tl 2560:text-[18px] 1920:text-[16px] 1600:text-[14px] 1280:text-[12px] 1024:text-[10px] 800:text-[8px] uppercase cursor-pointer' onClick={
//                                                             () => {
//                                                                 kickMember(member.identifier)
//                                                             }
//                                                         }>
//                                                             {languages["kick"]}
//                                                         </h1>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}

//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
            
//             <div className='hidden'>
//                 <div className='bg-newbie'></div>
//                 <div className='bg-prestige_1'></div>
//                 <div className='bg-prestige_2'></div>
//                 <div className='bg-prestige_3'></div>
//                 <div className='bg-prestige_4'></div>
//                 <div className='bg-prestige_5'></div>
//             </div>
//         </div>
//     )
// }