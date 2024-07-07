import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages, priceToPriceWithCommase } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import {fetchNui} from "../../../utils/fetchNui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTag, faBoxesStacked, faEnvelope, faBars, faGear, faXmark, faCalendarDays, faCircleUser, faHandFist, faBezierCurve } from '@fortawesome/free-solid-svg-icons';

debugData([
    {
        action: "setUserData",
        data: {
            pseudo: "YBN",
            identifier: "4576187",
            avatar: "https://cdn.discordapp.com/avatars/271355722820747264/0945d9b03e6fbcf5e59e4b26408186c3.png",
            level: 13,
            points: 100,
            badge: "top3kills",
            banner: "calling_card_50",
        }
    }
]);

export default function Help() {
    let history = useHistory()

    const changePage = (page: string) => {
        history.push("/" + page)
        playSound('click_navbar')

        var help = document.getElementById('help')
        if(help?.classList.contains('flex')) {
            help?.classList.remove('flex')
            help?.classList.add('hidden')
        }
    }

    const languages = getLanguages()

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    return (
        <div className='h-full w-full justify-end items-end absolute z-10 pr-[2%] hidden' id='help'>
            <div className='h-full w-[30%] flex justify-start flex-col'>
                <div className=' bg-[#222524] h-[10%] w-full flex flex-col p-[4%] px-[13.5%]'>
                    <div className='bg-[#2f3130] flex flex-row rounded justify-evenly overflow-hidden h-full w-auto items-center'>
                        <div id="helpButton" className="h-full items-center flex bg-[#d6d8d7] rounded cursor-pointer px-1 800:px-1 1024:px-2 1280:px-5 1440:px-6 1600:px-7 1920:px-8 2560:px-12" onClick={() => {
                            const help = document.getElementById('help')
                            if(help?.classList.contains('hidden')) {
                                help?.classList.remove('hidden')
                                help?.classList.add('flex')
                            } else {
                                help?.classList.remove('flex')
                                help?.classList.add('hidden')
                            }
                        }} onMouseEnter={() => playSound('hover_navbar')}>
                            <FontAwesomeIcon icon={faBars} className='text-[#1b1b1b] h-[55%]'/>
                        </div>

                        <div className="h-full items-center flex hover:border group border-[#b5b5b0] hover:bg-[#d6d8d7] rounded cursor-pointer px-1 800:px-1 1024:px-2 1280:px-5 1440:px-6 1600:px-7 1920:px-8 2560:px-12" onClick={() => changePage('settings')} onMouseEnter={() => playSound('hover_navbar')}>
                            <FontAwesomeIcon icon={faGear} className='text-[#8a8c8d] group-hover:text-[#1b1b1b] h-[55%]'/>
                        </div>

                        {
                            userData === null || userData.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <div className="h-full items-center flex hover:border group border-[#b5b5b0] hover:bg-[#d6d8d7] rounded cursor-pointer px-1 1024:px-2 1280:px-2 1440:px-2 1600:px-3 1920:px-3 2560:px-5 gap-3" onClick={() => changePage('profile')} onMouseEnter={() => playSound('hover_navbar')}>
                                    <div className='border-light-blue border 1440:border-2 rounded-full 800:h-[25px] 800:w-[25px] 1024:h-[30px] 1024:w-[30px] 1280:h-[30px] 1280:w-[30px] 1440:h-[35px] 1440:w-[35px] 1600:h-[40px] 1600:w-[40px] 1920:h-[40px] 1920:w-[40px] 2560:h-[40px] 2560:w-[40px] flex flex-row justify-center items-center'
                                    style={
                                        {
                                            backgroundImage: `url(${userData.avatar})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }
                                    }
                                    >
                                        <div className={`bg-${userData.badge} bg-contain bg-no-repeat h-[70%] w-[70%]`}></div>
                                    </div>
                                    <h1 className='text-[#ffffff] group-hover:text-[#1b1b1b] font-StratumMedium 800:text-[13px] 1024:text-[15px] 1280:text-[17px] 1440:text-[22px] 1600:text-[25px] 1920:text-[27px] 2560:text-[30px]'>{userData.level}</h1>
                                </div>
                            )
                        }

                        <div className="h-full items-center flex hover:border group border-[#b5b5b0] hover:bg-[#d6d8d7] rounded cursor-pointer px-1 800:px-1 1024:px-2 1280:px-5 1440:px-6 1600:px-7 1920:px-8 2560:px-12" onClick={() => {
                            var help = document.getElementById('help')
                            if(help?.classList.contains('flex')) {
                                help?.classList.remove('flex')
                                help?.classList.add('hidden')
                            }
                        }} onMouseEnter={() => playSound('hover_navbar')}>
                            <FontAwesomeIcon icon={faXmark} className='text-[#8a8c8d] group-hover:text-[#1b1b1b] h-[65%]'/>
                        </div>
                    </div>
                </div>

                
                <div className=' bg-[#161616] h-[90%] w-full flex flex-col p-[5%] pt-[5%]'>
                    <div className='800:gap-1 1024:gap-2 1440:gap-5 w-full max-h-[50%] h-[50%] gap-[1%] scroll-auto touch-auto overflow-auto grid grid-cols-3 grid-flow-row auto-rows-max border-b border-b-[#2f2f2f]'>
                        <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => changePage('friends')}
                        >
                            <FontAwesomeIcon icon={faUsers} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>{languages["friends"]}</h1>
                        </div>
                        {/* <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => changePage('kits')}
                        >
                            <FontAwesomeIcon icon={faBoxesStacked} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>{languages["kits"]}</h1>
                        </div> */}
                        <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => changePage('lobby')}
                        >
                            <FontAwesomeIcon icon={faHandFist} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>{languages["gamemode"]}</h1>
                        </div>
                        <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => changePage('store')}
                        >
                            <FontAwesomeIcon icon={faTag} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>{languages["store"]}</h1>
                        </div>
                        {/* <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => console.log('not implemented')}
                        >
                            <FontAwesomeIcon icon={faBezierCurve} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>Notes de patch</h1>
                        </div>
                        <div className='h-[115px] uppercase gap-[8%] 800:h-[75px] 1024:h-[95px] 1280:h-[105px] 1440:h-[125px] 1600:h-[145px] 1920:h-[165px] 2560:h-[195px] rounded bg-gradient-to-tr from-[#373c3a]/60 to-[#202322] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue cursor-pointer border-2 border-[#343636] flex flex-col justify-center items-center group'
                        onClick={() => console.log('not implemented')}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className='text-[#6f706e] group-hover:text-light-yellow h-[35%] w-full'/>
                            <h1 className='text-[#6f706e] group-hover:text-light-yellow font-StratumRegular text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[13px] 1600:text-[15px] 1920:text-[18px] 2560:text-[1.5rem] font-bold'>Passe de combat</h1>
                        </div> */}
                    </div>

                    <div className='w-full h-[35%] pt-[3%] flex flex-col'>
                        {
                            userData === null || userData.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <div className="h-full flex flex-col mt-[3%] rounded cursor-pointer px-3 1440:px-5 gap-2 1440:gap-4 1600:gap-4 1920:gap-5">
                                    <h1 className='text-[#ffffff] font-StratumMedium 800:text-[12px] 1024:text-[14px] 1280:text-[17px] 1440:text-[21px] 1600:text-[24px] 1920:text-[27px] 2560:text-[30px]'>{userData.pseudo}#{userData.identifier}</h1>
                                    
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <div className='border-[#535451] border 1440:border-2 rounded-full 800:h-[35px] 800:w-[35px] 1024:h-[45px] 1024:w-[45px] 1280:h-[55px] 1280:w-[55px] 1440:h-[65px] 1440:w-[65px] 1600:h-[75px] 1600:w-[75px] 1920:h-[90px] 1920:w-[90px] 2560:h-[105px] 2560:w-[105px] flex flex-row justify-center items-center'
                                        style={
                                            {
                                                backgroundImage: `url(${userData.avatar})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }
                                        }
                                        >
                                        </div>
                                        <div className={`rounded bg-cover bg-no-repeat bg-center bg-${userData.banner} 800:h-[30px] 1024:h-[40px] 1280:h-[50px] 1440:h-[60px] 1600:h-[70px] 1920:h-[85px] 2560:h-[100px] w-[80%] flex flex-row justify-center items-center`}>   
                                        </div>
                                    </div>

                                    <div className='flex mt-[5%] flex-row justify-start px-[5%] items-center bg-[#343434] rounded border border-[#565656] uppercase text-[#9d9e9b] hover:bg-dark-blue hover:border-light-blue hover:text-light-yellow 800:h-[25px] 1024:h-[30px] 1280:h-[40px] 1440:h-[50px] 1600:h-[60px] 1920:h-[70px] 2560:h-[80px] w-full gap-4'
                                    onClick={() => changePage('banner')}
                                    >
                                        <FontAwesomeIcon icon={faCalendarDays} className='group-hover:text-light-yellow h-[35%]'/>
                                        <h1 className='font-StratumMedium 800:text-[10px] 1024:text-[13px] 1280:text-[16px] 1440:text-[18px] 1600:text-[21px] 1920:text-[24px] 2560:text-[28px]'>{languages["modify_banner"]}</h1>
                                    </div>
                                    <div className='flex flex-row justify-start px-[5%] items-center bg-[#343434] rounded border border-[#565656] uppercase text-[#9d9e9b] hover:bg-dark-blue hover:border-light-blue hover:text-light-yellow 800:h-[25px] 1024:h-[30px] 1280:h-[40px] 1440:h-[50px] 1600:h-[60px] 1920:h-[70px] 2560:h-[80px] w-full gap-4'
                                    onClick={() => changePage('profile')}
                                    >
                                        <FontAwesomeIcon icon={faCircleUser} className='group-hover:text-light-yellow h-[35%]'/>
                                        <h1 className='font-StratumMedium 800:text-[10px] 1024:text-[13px] 1280:text-[16px] 1440:text-[18px] 1600:text-[21px] 1920:text-[24px] 2560:text-[28px]'>{languages["modify_badge"]}</h1>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}