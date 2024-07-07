import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { playSound } from "../../../utils/misc";
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";

debugData([
    {
        action: 'setAllDropData',
        data: [
            {
                id: 1,
                name: 'Equipment expert',
                weapons: {
                    primary: {
                        label: "M4A1",
                        item: "weapon_tacticalrifle",
                        count: 1,
                    },
                    secondary: {
                        label: "M1911",
                        item: "weapon_tacticalrifle",
                        count: 1,
                    },
                },
                equipment: {
                    primary: {
                        label: "M4A1",
                        item: "crystal_camo",
                        count: 1,
                    },
                    secondary: {
                        label: "M1911",
                        item: "weapon_tacticalrifle",
                        count: 1,
                    },
                },
            },
        ]
    }
])

export default function Airdrop() {
    const [dropInfo, setDropInfo] = useState<any>(null);
    const [allDropData, setAllDropData] = useState<any>(null);
    useNuiEvent<any>('setAllDropData', (data) => {
        setAllDropData(data)
    })

    if (allDropData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Drop:Reload`, options)
    }

    const getDrop = (id: number) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
            }),
        };
        fetch(`https://YBN/YBN.Drop:Get`, options)
    }
    
    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black/40 gap-[1%]'>
            <h1 className='text-[#b8b8a3] font-Countach 800:text-[20px] 1024:text-[30px] 1280:text-[40px] 1440:text-[40px] 1600:text-[45px] 1920:text-[55px] 2560:text-[65px] leading-none tracking-wider font-light uppercase drop-shadow'>Select br loadout</h1>

            <div className='w-full h-full flex flex-row gap-[3%] p-[3%]'>
                <div className='gap-[3%] w-[22%] bg-black/40'>
                    <h1 className='text-black bg-black/40 tracking-wider flex uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-Countach'><span className='bg-extreme-light-grey px-[0.5%]'>Default loadouts</span></h1>

                    <div className='flex h-[90%] flex-col gap-[0.5%] p-[5%]' onMouseLeave={() => setDropInfo(null)}>

                        {
                            allDropData?.map((drop: any) => {
                                return (
                                    <div className='flex flex-row 800:h-[20px] 1024:h-[25px] 1280:h-[30px] 1600:h-[40px] 1920:h-[45px] 2560:h-[50px] w-full justify-start pl-[4%] rounded bg-gradient-to-t from-[#2e2f2e] to-[#3b3b3a] items-center cursor-pointer hover:border-[#fafafa] hover:from-white hover:to-[#fafafa] text-[#bec2bf] hover:text-[#141313] mt-[2%]' onMouseEnter={() => setDropInfo(drop)} onClick={() => getDrop(drop.id)}>
                                        <h1 className='uppercase font-SFProDisplayMedium 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px]'>{drop.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='gap-[3%] w-[45%] bg-black/40'>
                    <h1 className='text-black bg-black/40 tracking-wider flex uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] font-Countach'><span className='bg-extreme-light-grey px-[0.5%]'>Information</span></h1>

                    {
                        dropInfo ? (
                            <div className='flex h-[90%] flex-col p-[3%]'>
                                <h1 className='text-[#e3e2da] font-Countach leading-none tracking-widest uppercase 800:text-[17px] 1024:text-[20px] 1280:text-[25px] 1600:text-[30px] 1920:text-[40px] 2560:text-[50px]'>{dropInfo.name}</h1>
        
                                <h1 className='text-[#e3e2da] mt-[2%] font-Countach leading-none tracking-widest uppercase 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[15px] 1920:text-[17px] 2560:text-[19px]'>Weapons</h1>
                                <div className='flex flex-row w-full mt-[0.5%] gap-[3%] h-full'>
                                    <div className='h-full w-[45%] bg-black/80 p-[1%] overflow-hidden flex flex-col drop-shadow'>
                                        <div className='flex flex-row w-full gap-[2%]'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>Primary</h1>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>(x{dropInfo.weapons["primary"].count})</h1>
                                        </div>
                                        <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                                        <div className='w-full h-[60%] grayscale drop-shadow'>
                                            <div className={`bg-${dropInfo.weapons["primary"].item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                                        </div>
                                        <div className='p-[2%] drop-shadow'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[13px] 1024:text-[15px] 1280:text-[17px] 1600:text-[19px] 1920:text-[22px] 2560:text-[25px] text-[#898988]'>{dropInfo.weapons["primary"].label}</h1>
                                        </div>
                                    </div>
                                    <div className='h-full w-[45%] bg-black/80 p-[1%] overflow-hidden flex flex-col drop-shadow'>
                                        <div className='flex flex-row w-full gap-[2%]'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>Secondary</h1>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>(x{dropInfo.weapons["secondary"].count})</h1>
                                        </div>
                                        <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                                        <div className='w-full h-[60%] grayscale drop-shadow'>
                                            <div className={`bg-${dropInfo.weapons["secondary"].item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                                        </div>
                                        <div className='p-[2%] drop-shadow'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[13px] 1024:text-[15px] 1280:text-[17px] 1600:text-[19px] 1920:text-[22px] 2560:text-[25px] text-[#898988]'>{dropInfo.weapons["secondary"].label}</h1>
                                        </div>
                                    </div>
                                </div>
        
                                <h1 className='text-[#e3e2da] mt-[2%] font-Countach leading-none tracking-widest uppercase 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[15px] 1920:text-[17px] 2560:text-[19px]'>Equipement</h1>
                                <div className='flex flex-row w-full mt-[0.5%] gap-[3%] h-full'>
                                    <div className='h-full w-[30%] bg-black/80 p-[1%] overflow-hidden flex flex-col drop-shadow'>
                                        <div className='flex flex-row w-full gap-[2%]'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>Tactical</h1>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>(x{dropInfo.equipment["primary"].count})</h1>
                                        </div>
                                        <div className='w-full h-[3%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                                        <div className='w-full h-[70%] grayscale drop-shadow'>
                                            <div className={`bg-${dropInfo.equipment["primary"].item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                                        </div>
                                        <div className='p-[2%] drop-shadow text-center'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[13px] 1024:text-[15px] 1280:text-[17px] 1600:text-[19px] 1920:text-[22px] 2560:text-[25px] text-[#898988]'>{dropInfo.equipment["primary"].label}</h1>
                                        </div>
                                    </div>
                                    <div className='h-full w-[30%] bg-black/80 p-[1%] overflow-hidden flex flex-col drop-shadow'>
                                        <div className='flex flex-row w-full gap-[2%]'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>Lethal</h1>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[9px] 1024:text-[11px] 1280:text-[13px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] text-[#898988]/80'>(x{dropInfo.equipment["secondary"].count})</h1>
                                        </div>
                                        <div className='w-full h-[3%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                                        <div className='w-full h-[70%] grayscale drop-shadow'>
                                            <div className={`bg-${dropInfo.equipment["secondary"].item} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                                        </div>
                                        <div className='p-[2%] drop-shadow text-center'>
                                            <h1 className='uppercase font-Countach tracking-widest leading-none 800:text-[13px] 1024:text-[15px] 1280:text-[17px] 1600:text-[19px] 1920:text-[22px] 2560:text-[25px] text-[#898988]'>{dropInfo.equipment["secondary"].label}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}