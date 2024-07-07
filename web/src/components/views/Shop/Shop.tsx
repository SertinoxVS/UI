import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";

export default function Shop() {
    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }

    const languages = getLanguages()

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    return (
        <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
            <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>Buy Station</h1>
            <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'><span className='bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded'>{languages["points2"]} <a className='text-yellow'>{userData && priceToPriceWithCommase(userData.points || 0)}</a></span></h1>
            <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Resources</span></h1>
            

            <div className='w-full h-full flex flex-row gap-[3%]'>
                <div className='grid grid-cols-2 grid-rows-3 gap-[3%] w-[57%] bg-black/40 p-[1%]'>
                    <div className='bg-gradient-to-b from-[#707070]/80 to-[#1f1f20] rounded border-y-4 hover:border-white border-dark-grey flex flex-col p-[2%] drop-shadow cursor-pointer'
                    // onMouseEnter={() => playSound('hover')}
                    onClick={() => {
                        changePage('shop_gears')
                    }}
                    >
                        <div className='w-full h-full p-[7%] grayscale'>
                            <div className='bg-plate bg-center bg-no-repeat bg-contain h-full w-full'></div>
                        </div>
                        <h1 className='font-Countach uppercase text-[#858585] 800:text-[14px] 1024:text-[16px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] tracking-wider'>{languages["gear"]}</h1>
                    </div>


                    <div className='bg-gradient-to-b from-[#707070]/80 to-[#1f1f20] rounded border-y-4 hover:border-white border-dark-grey flex flex-col p-[2%] drop-shadow cursor-pointer'
                    // onMouseEnter={() => playSound('hover')}
                    onClick={() => {
                        changePage('shop_weapons')
                    }}
                    >
                        <div className='w-full h-full p-[8%] grayscale'>
                            <div className='bg-weapon_combatmg_mk2 bg-center bg-no-repeat bg-contain h-full w-full'></div>
                        </div>
                        <h1 className='font-Countach uppercase text-[#858585] 800:text-[14px] 1024:text-[16px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] tracking-wider'>{languages["weapons"]}</h1>
                    </div>


                    <div className='bg-gradient-to-b from-[#707070]/80 to-[#1f1f20] rounded border-y-4 hover:border-white border-dark-grey flex flex-col p-[2%] drop-shadow cursor-pointer'
                    // onMouseEnter={() => playSound('hover')}
                    onClick={() => {
                        changePage('shop_vehicles')
                    }}
                    >
                        <div className='w-full h-full p-[4%] grayscale'>
                            <div className='bg-vehicle_deluxo bg-center bg-no-repeat bg-contain h-full w-full'></div>
                        </div>
                        <h1 className='font-Countach uppercase text-[#858585] 800:text-[14px] 1024:text-[16px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] tracking-wider'>{languages["vehicles"]}</h1>
                    </div>


                    <div className='bg-gradient-to-b from-[#707070]/80 to-[#1f1f20] group rounded border-y-4 hover:border-[#da7575] hover:from-[#e14f4e] hover:to-[#e14f4e]/50 border-[#e14f4e] flex flex-col p-[2%] drop-shadow cursor-pointer justify-center items-center'
                    // onMouseEnter={() => playSound('hover')}
                    onClick={() => {
                        changePage('shop_sell')
                    }}
                    >
                        <h1 className='font-Countach uppercase text-[#e14f4e] group-hover:text-[#e2caca] 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] tracking-wider'>{languages["sell_shop"]}</h1>
                        <h1 className='text-white text-center uppercase font-Countach text-[0.8rem] tracking-wider'>Careful, I'm a scammer. You'll earn more money selling to player market.</h1>
                    </div>
                </div>


                <div className='flex flex-col gap-[2%] h-full w-[25%]'>
                    <div className='flex flex-col gap-[5%] h-[40%] w-full bg-black/40'>
                        <h1 className='text-black uppercase leading-none text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Information</span></h1>

                        <div className='flex flex-col gap-[5%] p-[5%] h-full w-full items-center justify-center'>
                            <p className='text-center font-Countach tracking-wider font-light 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] text-[#9aa39a]'>Spend cash to purchase items. Each Buy Station you visit around the map will include same items.</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row justify-center 800:h-[32px] w-full 1024:h-[36px] 1280:h-[42px] 1600:h-[50px] 1920:h-[55px] 2560:h-[60px] rounded bg-dark-grey hover:bg-[#e14f4e] items-center pl-[5%] gap-[3%] cursor-pointer border-2 border-[#e14f4e] hover:border-[#da7575] group' onClick={() => {
                        const options = {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8',
                            },
                            body: JSON.stringify({}),
                        };
                        fetch(`https://YBN/YBN.Shops:SellAll`, options)
                    }}>
                        <h1 className='uppercase font-SFProDisplayRegular 800:text-[12px] 1024:text-[15px] 1280:text-[18px] 1600:text-[20px] 1920:text-[22px] 2560:text-[24px] text-[#e14f4e] group-hover:text-[#e2caca]'>
                            {languages["sell_all"]}
                        </h1>
                    </div>
                </div>
            </div>

            <div className='hidden'>
                <div className='bg-weapon_combatpistol'></div>
                <div className='bg-weapon_tacticalrifle'></div>
                <div className='bg-weapon_tacticalrifle2'></div>
                <div className='bg-weapon_carbinerifle2'></div>
                <div className='bg-weapon_bullpuprifle2'></div>
                <div className='bg-weapon_carbinerifle_mk22'></div>
                <div className='bg-weapon_specialcarbine_mk22'></div>
                <div className='bg-weapon_militaryrifle2'></div>
                <div className='bg-weapon_precisionrifle'></div>
                <div className='bg-weapon_advancedrifle'></div>
                <div className='bg-weapon_assaultrifle'></div>
                <div className='bg-weapon_carbinerifle'></div>
                <div className='bg-weapon_sniperrifle'></div>
                <div className='bg-weapon_heavyshotgun'></div>
                <div className='bg-weapon_pumpshotgun'></div>
                <div className='bg-weapon_assaultshotgun'></div>
                <div className='bg-weapon_combatshotgun'></div>
                <div className='bg-weapon_heavysniper'></div>
                <div className='bg-weapon_marksmanrifle'></div>
                <div className='bg-weapon_specialcarbine'></div>
                <div className='bg-weapon_bullpuprifle'></div>
                <div className='bg-weapon_microsmg'></div>
                <div className='bg-weapon_smg'></div>
                <div className='bg-weapon_assaultsmg'></div>
                <div className='bg-weapon_combatpdw'></div>
                <div className='bg-weapon_minismg'></div>
                <div className='bg-weapon_appistol'></div>
                <div className='bg-weapon_assaultrifle_mk2'></div>
                <div className='bg-weapon_autoshotgun'></div>
                <div className='bg-weapon_bat'></div>
                <div className='bg-weapon_bullpuprifle_mk2'></div>
                <div className='bg-weapon_bullpupshotgun'></div>
                <div className='bg-weapon_carbinerifle_mk2'></div>
                <div className='bg-weapon_ceramicpistol'></div>
                <div className='bg-weapon_compactrifle'></div>
                <div className='bg-weapon_dbshotgun'></div>
                <div className='bg-weapon_emplauncher'></div>
                <div className='bg-weapon_golfclub'></div>
                <div className='bg-weapon_heavypistol'></div>
                <div className='bg-weapon_heavyrifle'></div>
                <div className='bg-weapon_heavyrifle_mk2'></div>
                <div className='bg-weapon_hominglauncher'></div>
                <div className='bg-weapon_marksmanpistol'></div>
                <div className='bg-weapon_marksmanrifle_mk2'></div>
                <div className='bg-weapon_militaryrifle'></div>
                <div className='bg-weapon_molotov'></div>
                <div className='bg-weapon_musket'></div>
                <div className='bg-weapon_navyrevolver'></div>
                <div className='bg-weapon_pistol_mk2'></div>
                <div className='bg-weapon_pistol50'></div>
                <div className='bg-weapon_pumpshotgun_mk2'></div>
                <div className='bg-weapon_revolver_mk2'></div>
                <div className='bg-weapon_rpg'></div>
                <div className='bg-weapon_sawnoffshotgun'></div>
                <div className='bg-weapon_specialcarbine_mk2'></div>
                <div className='bg-weapon_combatmg_mk2'></div>
                <div className='bg-weapon_gusenberg'></div>
                <div className='bg-weapon_combatmg'></div>
                <div className='bg-weapon_combatmg2'></div>
                <div className='bg-weapon_mg'></div>
                <div className='bg-weapon_heavysniper_mk2'></div>
                <div className='bg-weapon_smg_mk2'></div>
                <div className='bg-weapon_revolver'></div>
                <div className='bg-bandage'></div>
                <div className='bg-medikit'></div>
                <div className='bg-kevlar'></div>
                <div className='bg-kevlar2'></div>
                <div className='bg-plate'></div>
                <div className='bg-crystal_speed'></div>
                <div className='bg-crystal_health'></div>
                <div className='bg-crystal_camo'></div>
                <div className='bg-crystal_camo2'></div>
                <div className='bg-crystal_boost'></div>
                <div className='bg-vehicle_buzzard2'></div>
                <div className='bg-vehicle_club'></div>
                <div className='bg-vehicle_havok'></div>
                <div className='bg-vehicle_deathbike'></div>
                <div className='bg-vehicle_mesa3'></div>
                <div className='bg-vehicle_buffalo'></div>
                <div className='bg-vehicle_savestra'></div>
                <div className='bg-vehicle_issi8'></div>
                <div className='bg-vehicle_brickade2'></div>
                <div className='bg-vehicle_deity'></div>
                <div className='bg-vehicle_flashgt'></div>
                <div className='bg-vehicle_impaler2'></div>
                <div className='bg-vehicle_paragon2'></div>
                <div className='bg-vehicle_dominator4'></div>
                <div className='bg-vehicle_caracara2'></div>
                <div className='bg-vehicle_everon'></div>
                <div className='bg-vehicle_hellion'></div>
                <div className='bg-vehicle_dominator3'></div>
                <div className='bg-vehicle_xls'></div>
                <div className='bg-vehicle_ruiner2'></div>
                <div className='bg-vehicle_nightshark'></div>
                <div className='bg-vehicle_deluxo'></div>
                <div className='bg-vehicle_oppressor'></div>
                <div className='bg-vehicle_oppressor2'></div>
                <div className='bg-vehicle_scramjet'></div>
                <div className='bg-vehicle_bmx'></div>
                <div className='bg-vehicle_scarab'></div>
                <div className='bg-box'></div>
                <div className='bg-box_back'></div>
                <div className='bg-vehicle_calico'></div>
                <div className='bg-vehicle_contender'></div>
                <div className='bg-vehicle_dukes2'></div>
                <div className='bg-vehicle_elegy'></div>
                <div className='bg-vehicle_gauntlet4'></div>
                <div className='bg-vehicle_insurgent2'></div>
                <div className='bg-vehicle_supervolito'></div>
                <div className='bg-vehicle_thruster'></div>
                <div className='bg-vehicle_ztype'></div>
                <div className='bg-vehicle_vigilante'></div>
            </div>
        </div>
    )
}