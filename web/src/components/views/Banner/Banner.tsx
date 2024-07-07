import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";
import { getLanguages } from "../../../utils/misc";

debugData([
    {
        action: 'setBanners',
        data: [
            {
                "name": "Adamant",
                "img": "calling_card_1"
            },
            {
                "name": "Aerial Entrance",
                "img": "calling_card_2"
            },
            {
                "name": "Almost Eaten",
                "img": "calling_card_3"
            },
            {
                "name": "Avaritia",
                "img": "calling_card_4"
            },
            {
                "name": "Invidia",
                "img": "calling_card_21"
            },
            {
                "name": "Gula",
                "img": "calling_card_18"
            },
            {
                "name": "Luxuria",
                "img": "calling_card_24"
            },
            {
                "name": "Superbia",
                "img": "calling_card_37"
            },
            {
                "name": "Notice Me",
                "img": "calling_card_28"
            },
        ]
    }
])

debugData([
    {
        action: 'setUserData',
        data: {
            discordAvatar: 'https://cdn.discordapp.com/avatars/878608186175807488/ead147d3899701d534ad552641947671.png',
            banner: 'calling_card_44',
            pseudo: 'Loris',
        }
    }
])

export default function Banner() {
    let history = useHistory()
    const changePage = (page: string) => {
        history.push("/" + page)
    }

    const [banners, setBanners] = useState<any>(null)
    useNuiEvent<any>('setBanners', (data) => {
        setBanners(data)
    })
    
    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    const [previewBanner, setPreviewBanner] = useState<any>(null)

    const languages = getLanguages()

    if (banners === null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Banners:Reload`, options)
    }

    return (
        <div className='flex flex-row justify-between h-screen max-h-screen w-screen max-w-screen select-none p-[5%] bg-black bg-opacity-50 bg-top bg-cover'>
            <div className='grid grid-cols-3 grid-flow-row auto-rows-max w-[70%] h-full gap-1 800:gap-1 1024:gap-1 1280:gap-2 1440:gap-3 1600:gap-4 1920:gap-4 2560:gap-5 scroll-auto touch-auto overflow-auto pr-[2%]'>
                {
                    banners !== null && banners.map((banner: any, index: number) => {
                        return (
                            <div className={`2560:h-[115px] 1920:h-[100px] 1600:h-[92px] 1440:h-[80px] 1280:h-[71px] 1024:h-[61px] 800:h-[51px] bg-cover bg-center bg-no-repeat bg-${banner.img} cursor-pointer border-y border-[#696962] rounded-sm hover:border-y-4 hover:border-x-0 hover:border-light-blue opacity-50`} 
                            onClick={() => {
                                const options = {
                                    method: 'post',
                                    headers: {
                                        'Content-Type': 'application/json; charset=UTF-8',
                                    },
                                    body: JSON.stringify({
                                        banner: banner.img
                                    }),
                                };
                                fetch(`https://YBN/YBN.Banners:Select`, options)
                            }}
                            onMouseEnter={() => {
                                setPreviewBanner(banner)
                            }}
                            onMouseLeave={() => {
                                setPreviewBanner(null)
                            }}
                            >
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex flex-col justify-between h-full w-[30%]'>
                <div className='w-full h-[50%] bg-[#4e4e4d]/50 rounded border border-[#696962]/50 flex flex-col'>
                    <h1 className='text-[#5d5e5b] font-Countach uppercase tracking-widest w-full bg-[#4e4e4d]/50 p-[0.5%] 800:text-[10px] 1024:text-[12px] 1280:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[18px]'>// Preview Details</h1>
                    
                    {
                        previewBanner !== null && (
                            <div className='p-[5%] flex flex-col gap-[15%] h-[80%]'>
                                <h1 className='text-white font-Countach uppercase tracking-widest w-full 800:text-[17px] 1024:text-[20px] 1280:text-[25px] 1600:text-[30px] 1920:text-[40px] 2560:text-[50px]'>{previewBanner.name}</h1>
                                <div className={`2560:h-[115px] 1920:h-[100px] 1600:h-[92px] 1440:h-[80px] 1280:h-[71px] 1024:h-[61px] 800:h-[51px] bg-cover bg-center bg-no-repeat bg-${previewBanner.img}`}></div>
                            </div>
                        )
                    }
                </div>

                <div className='w-full h-[30%]'>
                    {
                        userData === null || userData.length === 0 ? (
                            <>
                            </>
                        ) : (
                            <>
                                <div className='flex flex-col gap-[3%]'>
                                    <div className='flex flex-row w-full h-auto gap-[4%] drop-shadow items-center mt-[2%]'>
                                        <div className='2560:h-[96px] 2560:w-[96px] 1920:h-[86px] 1920:w-[86px] 1600:h-[76px] 1600:w-[76px] 1440:h-[66px] 1440:w-[66px] 1280:h-[56px] 1280:w-[56px] 1024:h-[46px] 1024:w-[46px] 800:h-[36px] 800:w-[36px] bg-no-repeat bg-cover bg-center rounded-full border'
                                        style={
                                            {
                                                backgroundImage: `url(${userData.avatar})`,
                                            }
                                        }></div>
                                        <div className={`2560:h-[110px] 1920:h-[95px] 1600:h-[87px] 1440:h-[75px] 1280:h-[66px] 1024:h-[56px] 800:h-[46px] w-[76%] bg-no-repeat bg-cover bg-center rounded bg-${userData.banner}`}>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

            <div className='bg-calling_card_1'></div>
            <div className='bg-calling_card_2'></div>
            <div className='bg-calling_card_3'></div>
            <div className='bg-calling_card_4'></div>
            <div className='bg-calling_card_5'></div>
            <div className='bg-calling_card_6'></div>
            <div className='bg-calling_card_7'></div>
            <div className='bg-calling_card_8'></div>
            <div className='bg-calling_card_9'></div>
            <div className='bg-calling_card_10'></div>
            <div className='bg-calling_card_11'></div>
            <div className='bg-calling_card_12'></div>
            <div className='bg-calling_card_13'></div>
            <div className='bg-calling_card_14'></div>
            <div className='bg-calling_card_15'></div>
            <div className='bg-calling_card_16'></div>
            <div className='bg-calling_card_17'></div>
            <div className='bg-calling_card_18'></div>
            <div className='bg-calling_card_19'></div>
            <div className='bg-calling_card_20'></div>
            <div className='bg-calling_card_21'></div>
            <div className='bg-calling_card_22'></div>
            <div className='bg-calling_card_23'></div>
            <div className='bg-calling_card_24'></div>
            <div className='bg-calling_card_25'></div>
            <div className='bg-calling_card_26'></div>
            <div className='bg-calling_card_27'></div>
            <div className='bg-calling_card_28'></div>
            <div className='bg-calling_card_29'></div>
            <div className='bg-calling_card_30'></div>
            <div className='bg-calling_card_31'></div>
            <div className='bg-calling_card_32'></div>
            <div className='bg-calling_card_33'></div>
            <div className='bg-calling_card_34'></div>
            <div className='bg-calling_card_35'></div>
            <div className='bg-calling_card_36'></div>
            <div className='bg-calling_card_37'></div>
            <div className='bg-calling_card_38'></div>
            <div className='bg-calling_card_39'></div>
            <div className='bg-calling_card_40'></div>
            <div className='bg-calling_card_41'></div>
            <div className='bg-calling_card_42'></div>
            <div className='bg-calling_card_43'></div>
            <div className='bg-calling_card_44'></div>
            <div className='bg-calling_card_45'></div>
            <div className='bg-calling_card_46'></div>
            <div className='bg-calling_card_47'></div>
            <div className='bg-calling_card_48'></div>
            <div className='bg-calling_card_49'></div>
            <div className='bg-calling_card_50'></div>
            <div className='bg-calling_card_51'></div>
            <div className='bg-calling_card_52'></div>
            <div className='bg-calling_card_53'></div>
            <div className='bg-calling_card_54'></div>
            <div className='bg-calling_card_55'></div>
            <div className='bg-calling_card_56'></div>
            <div className='bg-calling_card_57'></div>
            <div className='bg-calling_card_58'></div>
            <div className='bg-calling_card_59'></div>
            <div className='bg-calling_card_60'></div>
        </div>
    )
}