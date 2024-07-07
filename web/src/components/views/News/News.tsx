import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import {debugData} from "../../../utils/debugData";
import {fetchNui} from "../../../utils/fetchNui";
import './News.css'

debugData([
    {
        action: 'setNews',
        data: {
            "id": "darkzone",
            "title": "Découvrez la nouvelle Darkzone de Revolt PVP",
            "main_img_link": "https://cdn.discordapp.com/attachments/1063178117277024316/1103799814052925460/darkzone.png",
            "date": "April 11th, 2023",
            "descriptions": [
                {
                    "title": "Présentation de la Darkzone",
                    "description": "Qui dit nouvelle Darkzone dit nouvelles features:",
                    "img": "https://cdn.discordapp.com/attachments/1063178117277024316/1103799814052925460/darkzone.png",
                    "list": [
                        "1H of Fight",
                        "STATS: Count in Real World",
                        "DROPS: Every 15 minutes and real world stuff",
                        "LEADERBOARD: Top 5 Players Win Real World Stuff",
                        "MAP: New map Darkzone with no Roof",
                        "SHOP: 8 Packs & +15 Buyable Items",
                        "SCHEDULES: Open every day from 5PM to 6PM & 9PM to 10PM (GMT+2)",
                    ]
                }
            ],
        },
    }
])

export default function News() {

    const close = () => {
        // const options = {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json; charset=UTF-8',
        //     },
        //     body: JSON.stringify({}),
        // };
        // fetch(`https://YBN/YBN.UI.close`, options);
    }

    const [news, setNews] = useState<any>([])
    useNuiEvent<any>('setNews', (news) => {
        setNews(news)

        var newsDoc = document.getElementById('news')
        if (newsDoc) {
            newsDoc.innerHTML = `
            <div class="flex flex-col justify-start w-screen max-w-screen scroll-auto touch-auto absolute overflow-auto bg-[#15171e]">
                <div class="flex flex-row justify-end w-full 800:h-[375px] 1024:h-[450px] 1280:h-[425px] 1440:h-[525px] 1600:h-[600px] 1920:h-[600px] 2560:h-[750px] bg-top bg-no-repeat bg-cover p-[1%]"
                style="background-image: url(${news.main_img_link});">
                    <div id="closeNews1" class='800:h-[20px] 800:w-[15px] 1024:h-[25px] 1024:w-[20px] 1280:h-[35px] 1280:w-[30px] 1600:h-[45px] 1600:w-[40px] 1920:h-[55px] 1920:w-[50px] 2560:h-[65px] 2560:w-[60px] bg-[#141618]/80 border border-dark-grey rounded p-2 cursor-pointer'>
                        <div class='bg-cross bg-contain bg-no-repeat bg-center h-full w-full'></div>
                    </div>
                </div>

                <div class="flex flex-col justify-start w-full px-[30%] p-[1%]">
                    <h1 class="text-[#f5f5f5] font-MollenBold leading-none 800:text-[20px] 1024:text-[25px] 1280:text-[30px] 1440:text-[35px] 1600:text-[40px] 1920:text-[45px] 2560:text-[50px]">${news.title}</h1>
                    <h2 class="text-[#47494e] font-SFProDisplaySemibold leading-tight 800:text-[10px] 1024:text-[11px] 1280:text-[12px] 1440:text-[13px] 1600:text-[14px] 1920:text-[15px] 2560:text-[16px]">${news.date}</h2>

                    ${news.descriptions.map((description: any) => {
                        return `
                            <div class="flex 800:mt-[10px] 1024:mt-[15px] 1280:mt-[20px] 1440:mt-[25px] 1600:mt-[30px] 1920:mt-[35px] 2560:mt-[40px] flex-col justify-start w-full h-full max-h-full max-w-full scroll-auto touch-auto overflow-auto">
                                <h1 class="text-[#b8b8ba] font-MollenBold leading-none 800:text-[11px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] underline underline-offset-1">${description.title}</h1>
                                <p class="text-[#9a9a9d] font-SFProDisplaySemibold 800:mt-[10px] 1024:mt-[15px] 1280:mt-[20px] 1440:mt-[25px] 1600:mt-[30px] 1920:mt-[35px] 2560:mt-[40px] leading-tight 800:text-[9px] 1024:text-[10px] 1280:text-[11px] 1440:text-[12px] 1600:text-[14px] 1920:text-[15px] 2560:text-[16px]">${description.description}</p>
                                
                                ${description.list ? `
                                    <ul id="ullist" class="text-[#9a9a9d] font-SFProDisplaySemibold 800:mt-[9px] 1024:mt-[10px] 1280:mt-[11px] 1440:mt-[12px] 1600:mt-[13px] 1920:mt-[14px] 2560:mt-[15px] leading-tight 800:text-[10px] 1024:text-[11px] 1280:text-[12px] 1440:text-[13px] 1600:text-[14px] 1920:text-[15px] 2560:text-[16px]"
                                    style="list-style-type: disc; list-style-position: inside;"
                                    >
                                        ${description.list.map((list: any) => {
                                            return `
                                                <li class="800:mt-[12px] 1024:mt-[13px] 1280:mt-[14px] 1440:mt-[15px] 1600:mt-[16px] 1920:mt-[17px] 2560:mt-[18px] leading-tight">${list}</li>
                                            `
                                        })}
                                    </ul>
                                ` : ``}

                                ${description.img ? `
                                    <div class="flex flex-row justify-between w-full 800:h-[180px] 1024:h-[230px] 1280:h-[275px] 1440:h-[325px] 1600:h-[370px] 1920:h-[450px] 2560:h-[575px] 800:mt-[10px] 1024:mt-[15px] 1280:mt-[20px] 1440:mt-[25px] 1600:mt-[30px] 1920:mt-[35px] 2560:mt-[40px] bg-top bg-no-repeat bg-contain p-[1%]"
                                    style="background-image: url(${description.img});"></div>
                                ` : ``}
                            </div>
                        `
                    })}
                </div>
            </div>
            `

            var ullist = document.querySelectorAll('#ullist')
            if (ullist) {
                ullist.forEach((ul: any) => {
                    ul.innerHTML = ul.innerHTML.replace(/,/g, '')
                })
            }

            var closeNews = document.getElementById('closeNews')
            if (closeNews) {
                closeNews.addEventListener('click', () => {
                    const options = {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                        },
                        body: JSON.stringify({}),
                    };
                    fetch(`https://YBN/YBN.UI.Close`, options);
                })
            }

            var closeNews1 = document.getElementById('closeNews1')
            if (closeNews1) {
                closeNews1.addEventListener('click', () => {
                    const options = {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                        },
                        body: JSON.stringify({}),
                    };
                    fetch(`https://YBN/YBN.UI.Close`, options);
                })
            }
        }
    })
    
    return (
        <div id='news' className='h-screen max-h-screen w-screen max-w-screen select-none'>
            
        </div>
    )
}