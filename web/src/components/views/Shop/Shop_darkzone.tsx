import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import ProgressBar from "@ramonak/react-progress-bar";

debugData([
    {
        action: 'setDarkzoneShop',
        data: [
            {
                "item": "box",
                "label": "Combat MG Mk II",
                "points": 125000,
                "type": "Machine Gun",
                "access": true
            },
            {
                "item": "weapon_combatmg_mk2",
                "label": "Combat MG Mk II",
                "points": 125000,
                "type": "Machine Gun",
                "access": false
            },
        ]
    }
])

export default function Shop_darkzone() {
    const [shopData, setShopData] = useState<any>(null)
    useNuiEvent<any>('setDarkzoneShop', (data) => {
        setShopData(data)
    })

    const languages = getLanguages()

    if (shopData === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Darkzone:Reload`, options)
    }

    const renderShopData = () => {
        const items: any[] = []

        if (shopData === null) {
            return items
        }

        for (let i = 0; i < shopData.length; i++) {
            const data = shopData[i]
            const item = data.item
            const label = data.label
            const points = data.points
            const type = data.type
            const access = data.access

            items.push(
                <div className={`800:h-[110px] 1024:h-[130px] 1280:h-[160px] 1600:h-[200px] 1920:h-[250px] 2560:h-[300px] bg-gradient-to-b 
                ${access ? 'from-[#4c4c4b] to-[#232222]' : 'from-[#3c3c3b] to-[#1a1a1a]'}
                from-[#4c4c4b] to-[#232222] rounded-md overflow-hidden border-t-4 group hover:border-[#cdcdcd] hover:border-x border-dark-grey flex flex-col drop-shadow cursor-pointer col-span-2`}
                onClick={() => {
                    if (!access) {
                        // playSound('error')
                        return
                    }
                    BuyItem(data)
                }}
                onMouseEnter={() => {
                    // playSound('hover')
                }}
                >
                    <div className='w-full h-[10%] flex justify-end items-end items drop-shadow p-[2%]'></div>
                    <div className={`w-full h-[50%] drop-shadow`}>
                        <div className={`bg-${item} ${access ? 'grayscale-0' : 'grayscale opacity-75'} bg-center bg-no-repeat bg-contain h-full w-full`}></div>
                    </div>
                    <div className='p-[2%] drop-shadow'>
                        <h1 className={`uppercase font-Countach tracking-widest leading-none 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] ${access ? 'text-[#898988]' : 'text-[#434343]'}`}>{label}</h1>
                        <h4 className={`uppercase font-Countach tracking-widest 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1600:text-[14px] 1920:text-[16px] 2560:text-[18px] ${access ? 'text-[#605f5f]' : 'text-[#3c3c3c]'}`}>{type}</h4>
                    </div>
                    <div className='w-full h-[18%] flex flex-row justify-end items-center bg-[#3b3b3a] group-hover:bg-[#cdcdcd] drop-shadow p-[2%]'>
                        {
                            access ? (
                                <h1 className='text-white font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] group-hover:text-[#141313] font-thin'>${priceToPriceWithCommase(points)}</h1>
                            ) : (
                                <h1 className='text-[#ec4444] font-Countach tracking-widest leading-none 800:text-[11px] 1024:text-[14px] 1280:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] font-thin'>${priceToPriceWithCommase(points)}</h1>
                            )
                        }
                    </div>
                </div>
            )
        }

        return items
    }

    const BuyItem = (item: any) => {
        const options = {
            method: 'post',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                item: item,
            }),
        };

        fetch('https://YBN/YBN.Darkzone:BuyItem', options)
    }
    
    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserDataDarkzone', (data) => {
        setUserData(data)
    })

    return (
        <div className="flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]">
            <div className='flex flex-row gap-[1%] items-end'>
                <h1 className='text-white font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>Buy Station</h1>
            </div>
            <h1 className='text-[#9aa39a] uppercase 800:text-[13px] 1024:text-[15px] 1280:text-[20px] 1440:text-[22px] 1600:text-[25px] 1920:text-[30px] 2560:text-[40px] font-Countach tracking-wide drop-shadow'><span className='bg-dark-grey border border-dark-grey px-[0.5%] pb-1 rounded'>{languages["points2"]} <a className='text-[#ec4444]'>{userData && priceToPriceWithCommase(userData.points)}</a></span></h1>
            <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>{languages["weapons"]}</span></h1>
            
            <div className='w-full h-full flex flex-row gap-[1%] overflow-hidden'>
                <div className='grid grid-cols-12 grid-flow-row auto-rows-max gap-[1%] w-full bg-black/40 p-[1%] scroll-auto touch-auto overflow-auto'>
                    {renderShopData()}
                </div>
            </div>
        </div>
    )
}