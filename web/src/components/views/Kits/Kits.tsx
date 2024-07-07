import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {debugData} from "../../../utils/debugData";
import { playSound, getLanguages } from "../../../utils/misc";
import {useNuiEvent} from "../../../hooks/useNuiEvent";

debugData([
    {
        action: "setKits",
        data: [
            {
                id: 1,
                name: "Starter Kit",
                take: false,
                acces: true,
                condition: "You need to be level 1 to use this kit.",
                logo: "starter",
                weapons: [
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                ],
                misc: [
                    {
                        label: "Camo Crystal",
                        item: "crystal_camo",
                        count: 1,
                        description: "The zombies won't see you coming.",
                        background: "crystal_camo",
                    },
                ]
            },
            {
                id: 2,
                name: "Gold Kit",
                take: false,
                acces: true,
                condition: "You need to be Gold to use this kit.",
                logo: "gold",
                weapons: [
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                ],
                misc: [
                    {
                        label: "Camo Crystal",
                        item: "crystal_camo",
                        count: 1,
                        description: "The zombies won't see you coming.",
                        background: "crystal_camo",
                    },
                ]
            },
            {
                id: 3,
                name: "Diamond Kit",
                take: true,
                acces: true,
                condition: "You need to be Diamond to use this kit.",
                logo: "diamond",
                weapons: [
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                    {
                        label: "Service Carbine",
                        item: "weapon_tacticalrifle",
                        count: 1,
                        description: "",
                        background: "weapon_tacticalrifle",
                    },
                ],
                misc: [
                    {
                        label: "Camo Crystal",
                        item: "crystal_camo",
                        count: 1,
                        description: "The zombies won't see you coming.",
                        background: "crystal_camo",
                    },
                ]
            },
        ],
    },
]);

export default function Kits() {
    const [kits, setKits] = useState<any>(null);
    useNuiEvent<any>('setKits', (data) => {
        setKits(data)
        setCurrentKit(data[0])
    })

    const languages = getLanguages()

    const[currentKit, setCurrentKit] = useState<any>(null);

    if (kits === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Kits:Reload`, options)
    }

    const takeKit = (id: number) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({id: id}),
        };
        fetch(`https://YBN/YBN.Kits:TakeKit`, options)
    }

    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover p-[4%]'>
            <h1 className='text-[#acaca9] border-b-2 border-[#acaca9]/20 font-Countach 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[40px] 1600:text-[45px] 1920:text-[40px] 2560:text-[45px] tracking-wider uppercase drop-shadow'>Kits</h1>
            {
                currentKit !== null ? (
                    <div className='flex flex-row p-[2%] h-[45%] w-full justify-between'>
                        <div className='flex flex-col border-l-2 w-[45%] border-[#acaca9]/20'>
                            <h1 className='text-[#c0c1a5] uppercase 1920:text-[20px] 2560:text-[23px] font-Countach tracking-widest leading-tight font-light'><span className='bg-[#c0c1a5]/20 px-5 pb-1'>{languages["killstreak"]}</span></h1>
                            <div className='flex flex-row justify-between w-full h-full px-[2%] p-[2%]'>
                                <div className='flex flex-col h-full w-[45%] gap-[3%]'>
                                    <h1 className='text-[#ffffe9] font-Countach 1920:text-[45px] 2560:text-[60px] uppercase leading-none tracking-widest'>{currentKit["misc"][0].label}</h1>
                                    <p className='text-[#a2a58b] font-Countach 1920:text-[16ox] 2560:text-[18px] leading-none tracking-widest font-light'>{currentKit["misc"][0].description}</p>
                                </div>
                                <div className='w-[55%] p-[2%] grayscale'>
                                    <div className={`w-full h-full bg-${currentKit["misc"][0].background} bg-center bg-contain bg-no-repeat`}></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border-l-2 w-[45%] border-[#acaca9]/20'>
                            <h1 className='text-[#c0c1a5] uppercase 1920:text-[20px] 2560:text-[23px] font-Countach tracking-widest leading-tight font-light'><span className='bg-[#c0c1a5]/20 px-5 pb-1'>{languages["weapon"]}</span></h1>
                            <div className='flex flex-row justify-between w-full h-full px-[2%] p-[2%]'>
                                <div className='flex flex-col h-full w-[45%] gap-[3%]'>
                                    <h1 className='text-[#ffffe9] font-Countach 1920:text-[45px] 2560:text-[60px] uppercase leading-none tracking-widest'>{currentKit["weapons"][0].label}</h1>
                                    <p className='text-[#a2a58b] font-Countach 1920:text-[16ox] 2560:text-[18px] leading-none tracking-widest font-light'>{currentKit["weapons"][0].description}</p>
                                </div>
                                <div className='w-[55%] p-[2%] grayscale'>
                                <div className={`w-full h-full bg-${currentKit["weapons"][0].background} bg-center bg-contain bg-no-repeat`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-row p-[2%] h-[45%] w-full justify-between'></div>
                )
            }

            {
                currentKit !== null ? (
                    <div className={`h-auto w-full flex justify-center ${currentKit.take ? 'drop-shadow-kit_take' : 'drop-shadow-kit_see'} items-center bg-gradient-to-r from-[#2a2924]/30 ${currentKit.take ? 'via-dark-blue/80' : 'via-[#151613]'} to-[#2a2924]/30 rounded 1920:p-[15px] border-b-2 ${currentKit.take ? 'border-light-blue' : 'border-[#929291]'}`}>
                        <h1 className={`${currentKit.take ? 'text-light-blue' : 'text-[#9a9893]'} uppercase font-Countach tracking-widest leading-none 1920:text-[25px] 2560:text-[30px]`}>{!currentKit.take ? currentKit.condition : "Kit Achieved"}</h1>
                    </div>
                ) : (
                    <div className='h-auto w-full flex justify-center items-center bg-gradient-to-r from-[#2a2924]/30 via-[#151613] to-[#2a2924]/30 rounded 1920:p-[15px] border-b-2 border-[#929291]'></div>
                )
            }

            <div className='snap-x scroll-auto touch-auto overflow-auto flex flex-row gap-[1%] w-full pt-[1.5%] pb-[1%] h-[43%]'>
                {
                    kits !== null ? (
                        kits.map((kit: any, index: number) => {
                            return (
                                <div key={index} className={`shrink-0 h-full w-[15%] group bg-[#0f0f0d] hover:bg-gradient-to-b ${kit.take ? 'hover:border-light-blue hover:from-[#0f0f0d] hover:to-dark-blue/60': 'hover:border-[#9aa39a] hover:from-[#0f0f0d] hover:to-[#3b3b3b]'} from-[#0f0f0d] to-[#464646]' rounded hover:border-y-4 cursor-pointer border border-[#444641] pl-[1%]`} 
                                    onMouseEnter={() => {
                                        setCurrentKit(kit)
                                        playSound('hover')
                                    }}
                                    onClick={() => {
                                        takeKit(kit.id)
                                        playSound('click_navbar')
                                    }}
                                    >
                                    <div className={`w-full h-full bg-[#1d1d1b] hover:bg-gradient-to-b ${kit.take ? 'from-[#232320] to-dark-blue': 'from-[#232320] to-[#575757]'} flex flex-col justify-between items-center p-[3%] gap-[3%]`}>
                                        <div className='flex flex-row justify-around h-auto w-full'>
                                            <div className=''></div>
                                            <h1 className={`${kit.take ? 'text-light-blue': 'text-[#4b4d48]'} ${kit.take ? '': 'group-hover:text-[#9aa39a]'} uppercase font-Countach leading-none tracking-widest 1920:text-[25px] 2560:text-[30px]`}>{kit.name}</h1>
                                            <div className={`bg-lock bg-center bg-no-repeat bg-contain w-[7%] ${kit.acces ? 'hidden' : 'block'}`}></div>
                                            <div className={`bg-check bg-center bg-no-repeat bg-contain w-[7%] ${kit.take ? 'block' : 'hidden'}`}></div>
                                            <div className={`${(kit.acces && !kit.take) ? 'block' : 'hidden'}`}></div>
                                        </div>

                                        <div className={`w-full h-[60%] p-[18%] ${kit.acces ? 'grayscale-0' : 'grayscale'}`}>
                                            <div className={`bg-${kit.logo} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                                        </div>

                                        <div className={`flex flex-row justify-around h-[17%] w-full ${(kit.acces && kit.take) ? 'grayscale-0' : 'grayscale'}`}>
                                            <div className={`bg-${kit["misc"][0].background} bg-center bg-no-repeat bg-contain w-[35%]`}></div>
                                            <div className={`bg-${kit["weapons"][0].background} bg-center bg-no-repeat bg-contain w-[65%]`}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className='flex flex-row p-[2%] h-[45%] w-full justify-between'></div>
                    )
                }
            </div>

            <div className='hidden'>
                <div className='bg-starter'></div>
                <div className='bg-gold'></div>
                <div className='bg-diamond'></div>
                <div className='bg-booster'></div>
                <div className='bg-weekly'></div>
            </div>
        </div>
    )
}