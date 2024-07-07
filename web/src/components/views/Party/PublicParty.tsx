import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import '../Settings/Checkbox.scss'

debugData([
    {
        action: 'setAllPartyData',
        data: [
            {
                logo: "https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp",
                name: "Sertinox Party",
                id: 1,
                members: 4
            },
        ],
    }
])

export default function PublicParty() {
    const [allPartyData, setAllPartyData] = useState<any>(null)
    useNuiEvent<any>('setAllPartyData', (data) => {
        setAllPartyData(data)
    })

    const languages = getLanguages()

    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }
    
    if (allPartyData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Party:ReloadPublicList`, options)
    }

    const joinParty = (id: number) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id
            }),
        };
        fetch(`https://YBN/YBN.Party:JoinParties`, options)
    }

    return (
        <div className='h-screen max-h-screen w-screen max-w-screen select-none px-[8%] py-[6%] bg-black/30'>

            <div className='w-full h-full flex flex-row justify-between rounded border-2 border-[#414141] bg-gradient-to-b from-[#131212] to-[#2b2b2b] p-[1%]'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col 800:gap-1 800:w-[300px] 1024:gap-2 1024:w-[350px] 1280:gap-2 1280:w-[400px] 1440:gap-3 1440:w-[450px] 1600:gap-3 1600:w-[500px] 1920:gap-3 1920:w-[550px] 2560:gap-3 2560:w-[600px] drop-shadow-md'>
                        <div className='w-[75%] flex flex-row gap-[5%]'>
                            <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-light-grey/30 hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue' onClick={() => {
                                changePage("party")
                            }}>
                                <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                    {languages["party"]}
                                </h1>
                            </div>

                            <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] w-full justify-center rounded bg-gradient-to-b from-dark-blue to-[#537d86] items-center gap-3 border border-light-blue text-light-blue'>
                                <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                    {languages["party_public"]}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-full flex flex-col gap-[2%] p-[3%]'>
                        <h1 className='text-[#6b716b] font-StratumMedium 800:text-[12px] 1024:text-[15px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] leading-none'>
                            {languages["party_public"]}
                        </h1>

                        <div className='grid grid-cols-1 grid-flow-row auto-rows-max gap-[1%] scroll-auto touch-auto overflow-auto h-full max-h-full'>
                            {allPartyData && allPartyData.map((party: any, index: number) => {
                                return (
                                    <div className='bg-gradient-to-t from-[#2e2f2e]/50 to-[#3b3b3a]/50 px-[0.5%] h-[30px] 800:h-[40px] 1024:h-[50px] 1280:h-[55px] 1600:h-[65px] 1920:h-[70px] 2560:h-[75px] w-full rounded-sm border-y-2 border-[#393937] overflow-hidden hover:border-[#b0c5ce] flex flex-row'
                                        key={index}
                                    >
                                        <div className='w-full h-full flex flex-row justify-between items-center'>
                                            <div className='2560:h-[65px] 2560:w-[65px] 1920:h-[55px] 1920:w-[55px] 1600:h-[60px] 1600:w-[60px] 1280:h-[45px] 1280:w-[45px] 1024:h-[35px] 1024:w-[35px] 800:h-[30px] 800:w-[30px] bg-no-repeat bg-cover bg-center rounded-full border-2 border-light-black' style={{backgroundImage: `url(${party.logo})`}}></div>
                                            <h1 className='text-[#b1b1af] font-StratumRegular 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1440:text-[23px] 1600:text-[25px] 1920:text-[27px] 2560:text-[29px]'>{party.name}</h1>
                                            <h1 className='text-[#b1b1af] font-StratumMedium 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1440:text-[23px] 1600:text-[25px] 1920:text-[27px] 2560:text-[29px]'>{party.members}/4</h1>
                                            
                                            {
                                                party.members < 4 ? (
                                                    <div className='flex flex-row 2560:h-[56px] 1920:h-[50px] 1920:w-[150px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 cursor-pointer border border-dark-grey hover:border-light-blue hover:from-dark-blue hover:to-dark-blue text-[#9aa39a] hover:text-light-blue' onClick={() => {
                                                        joinParty(party.id)
                                                    }}>
                                                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                            {languages["join"]}
                                                        </h1>
                                                    </div>
                                                ) : (
                                                    <div className='flex flex-row opacity-30 2560:h-[56px] 1920:h-[50px] 1920:w-[150px] 1600:h-[42px] 1280:h-[34px] 1024:h-[30px] 800:h-[24px] justify-center rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center gap-3 border border-dark-grey text-[#9aa39a]'>
                                                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[12px] 1024:text-[13px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px]'>
                                                            {languages["join"]}
                                                        </h1>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <h1 className='text-[#6b716b] font-StratumMedium 800:text-[12px] 1024:text-[15px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] leading-none'>{languages["parties_refresh"]}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}