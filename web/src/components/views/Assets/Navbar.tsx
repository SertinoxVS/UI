import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, setLanguages2, priceToPriceWithCommase } from "../../../utils/misc";
import '../../../assets/css/Inventory.css'
import {debugData} from "../../../utils/debugData";
import {fetchNui} from "../../../utils/fetchNui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBars } from '@fortawesome/free-solid-svg-icons';

debugData([
    {
        action: "setLanguages",
        data: {
            crew: "CREW",
            crew2: "BLIP_27",
            crew_leave: "Leave Crew",
            crew_invite: "Invite to",
            crew_delete: "Delete",
            players_list: "PLAYER LIST",
    
            party: "Squad",
            party_kick: "Kick",
            party_invite: "Invite friends",
            party_public: "Public session",
            party_invite_id: "Invite Player by ID",
    
            friends: "Friends",
            friends_list: "Friends List",
            friends_invite: "Send Friend Request",
            add_friend: "Add A Friend",
            invite_friends: "INVITE FRIENDS",
    
            offline: "Offline",
            online: "Online",
            kick: "Kick",
            cancel: "Cancel",
            leave: "Leave",
            joinable: "Private",
            invite: "Invite",
    
            leaderboard: "Leaderboard",
            leaderboard_kills: "Kills",
            leaderboard_deaths: "DEATHS",
            leaderboard_rank: "Position",
            nickname: "Nom",
    
            profile: "HUD_PS3CRD",
            profile_progress: "CELL_3091",
    
            store: "Store",

            modify_banner: "Modify banner",
            modify_badge: "Modify badge",

            gamemode: "LOBBY",

            location: "CHOISIR UN EMPLACEMENT",
            location_desc: "Choisissez une map pour la prochaine Darkzone",
            active: "ACTIF",
    
            market:  "Markets",
            market_articles:  "SHOP_L_ITEMS",
            quantity: "PIM_GPIA",

            points: "Points",
            points2: "Points",

            sell_all:  "Sell All",
            sell_shop: "Sell to shop",
            sell: "Sell",
            gear: "GEAR",
            all: "All",
            weapons: "WEAPONS",
            vehicles: "VEHICLES",

            total: "collision_j5gaf4",

            inventory: "PIM_TINVE",
            rang: "collision_t86kys",

            trade_confirm: "BS_WB_CONFTR",
            trade_wait: "HUD_TRANSP",
            trade_cancel: "collision_8ch87rx",

            global_world: "HUD_OVER_RANK2",
            settings: "PM_SCR_SET",

            ideontknow: "???",

            my_offers: "My offers",
            articles: "Articles",

            camo_label: "CAMO_LABEL",
            camo_desc: "CAMO_DESC",

            crew_member: "CREW_MEMBER",
            crew_moderator: "CREW_MODERATOR",
            crew_admin: "CREW_ADMIN",
            create_crew: "Create a crew",

            leaderboard_refresh: "Le classement est mis à jours toutes les 3 minutes",
            parties_refresh: "La liste est mise à jours toutes les minutes",
            modify: "Modifier",

            opening_at: "Ouverture dans",
            next_drop: "Prochain DROP dans",

            modes_desc: "Modes de jeu",
            modes: "Choisissez un mode de jeu",

            hitmarker_size_label: "Taille du hitmarker",
            hitmarker_size_desc: "Choisissez la taille du hitmarker",

            join: "Rejoindre",
            search: "RESEARCH:",
            buy: "Buy",
            delete: "Delete",
            confirm: "Confirm",

            kits: "Kits",
            remove: "Remove",
            lootBagSystem_label: "LootBag System",
        },
    },
]);

debugData([
    {
        action: "setUserData",
        data: {
            pseudo: "YBN",
            identifier: "4576187",
            banner: "calling_card_20",
            avatar: "https://cdn.discordapp.com/avatars/1084881905226350592/1c09d0c2eb26544cad5d4a1a60a123dc.webp",
            level: 13,
            points: 100,
            badge: "prestige_1",
        }
    }
]);

export default function Navbar() {
    let history = useHistory()

    useNuiEvent<string>('setPage', (page) => {
        changePage(page)
    })

    const [userData, setUserData] = useState<any>(null)
    useNuiEvent<any>('setUserData', (data) => {
        setUserData(data)
    })

    const [languages, setLanguages] = useState<any>(null);
    useNuiEvent<any>('setLanguages', (data) => {
        setLanguages(data)
        setLanguages2(data)
    })

    const changePage = (page: string) => {
        history.push("/" + page)
        playSound('click_navbar')

        var id = document.getElementById(page)

        // if (page == "market") {
        //     fetchNui("unavailable")
        //     return
        // }

        if (id !== null) {
            id.className = "bg-black/50 text-[#ffffff] border border-light-red h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-[#151514] font-SFProDisplayMedium cursor-pointer"

            if (page == "settings") {
                id.className = "bg-[#bab8b2] hover:bg-[#9f9e90] ml-[1%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            } else if (page == "news") {
                id.className = "bg-[#bab8b2] hover:bg-[#9f9e90] ml-[0.25%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }

        if (page !== "squad") {
            var id = document.getElementById("squad")
            if (id !== null) {
                id.className = "bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }
        // if (page !== "party") {
        //     var id = document.getElementById("party")
        //     if (id !== null) {
        //         id.className = "bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
        //     }
        // }
        if (page !== "lobby") {
            var id = document.getElementById("lobby")
            if (id !== null) {
                id.className = "bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }
        if (page !== "leaderboard_kills") {
            var id = document.getElementById("leaderboard_kills")
            if (id !== null) {
                id.className = "bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }
        if (page !== "market") {
            var id = document.getElementById("market")
            if (id !== null) {
                id.className = "bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }

        // if (page !== "profile") {
        //     var id = document.getElementById("profile")
        //     if (id !== null) {
        //         id.className = "bg-[#b6b5b1]/30 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
        //     }
        // }
        // if (page !== "friends") {
        //     var id = document.getElementById("friends")
        //     if (id !== null) {
        //         id.className = "bg-[#b6b5b1]/30 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
        //     }
        // }
        // if (page !== "kits") {
        //     var id = document.getElementById("kits")
        //     if (id !== null) {
        //         id.className = "bg-[#b6b5b1]/30 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
        //     }
        // }
        if (page !== "store") {
            var id = document.getElementById("store")
            if (id !== null) {
                id.className = "bg-[#b6b5b1]/30 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full rounded-r px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[12px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer"
            }
        }
        // if (page !== "settings") {
        //     var id = document.getElementById("settings")
        //     if (id !== null) {
        //         id.className = "bg-[#b6b5b1]/20 hover:bg-[#9f9e90] ml-[1%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer group"
        //     }
        // }
        // if (page !== "news") {
        //     var id = document.getElementById("news")
        //     if (id !== null) {
        //         id.className = "bg-[#b6b5b1]/20 hover:bg-[#9f9e90] ml-[0.25%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer group"
        //     }
        // }
    }

    
    
    return (
        <div className='h-auto w-full absolute'>
            <div className='absolute w-full h-auto mt-[1%]'>
                <div className='w-auto h-auto flex flex-row justify-center items-center select-none gap-2'>
                    {/* <div id='squad' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] hover:border-[#ffffff] border border-light-grey/30 h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('squad')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["crew"] : 'Team'
                        }
                    </div> */}
                    <div id='leaderboard_kills' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] hover:border-[#ffffff] border border-light-grey/30 h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('leaderboard_kills')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["leaderboard"] : 'Leaderboard'
                        }
                    </div>
                    {/* <div id='market' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] hover:border-[#ffffff] border border-light-grey/30 h-full rounded px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('market')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["market"] : 'Markets'
                        }
                    </div> */}
                    <div id='lobby' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] hover:border-[#ffffff] border border-light-grey/30 h-full rounded px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('lobby')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["gamemode"] : 'Gamemode'
                        }
                    </div>
                    <div id='store' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] hover:border-[#ffffff] border border-light-grey/30 h-full rounded px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('store')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            'Tebex'
                        }
                    </div>
                    {/* <div id='party' className='bg-mid-grey/50 hover:bg-[#1b1b1b] hover:text-[#ffffff] border border-light-grey/30 hover:border-[#ffffff] h-full rounded px-3 py-1 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('party')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["party"] : 'Party'
                        }
                    </div> */}
                    {/* <div id='friends' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('friends')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["friends"] : 'Friends'
                        }
                    </div> */}
                    {/* <div id='profile' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('profile')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["profile"] : 'Profile'
                        }
                    </div> */}
                    {/* <div id='kits' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('kits')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["kits"] : 'Kits'
                        }
                    </div> */}
                    {/* <div id='store' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] hover:text-[#474641] hover:rounded h-full rounded-r px-3 py-1 800:text-[8px] text-[10px] 1024:text-[10px] 1280:text-[11px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer' onClick={() => changePage('store')} onMouseEnter={() => playSound('hover_navbar')}>
                        {
                            languages !== null && languages !== undefined && languages !== '' ? languages["store"] : 'Store'
                        }
                    </div> */}
                    {/* <div id='settings' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] ml-[1%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer group' onClick={() => changePage('settings')} onMouseEnter={() => playSound('hover_navbar')}>
                        <div className='800:h-[12px] 800:w-[11px] 1024:h-[18px] 1024:w-[17px] 1280:h-[19px] 1280:w-[18px] 1440:h-[21px] 1440:w-[20px] 1600:h-[22px] 1600:w-[21px] 1920:h-[23px] 1920:w-[22px] 2560:h-[23px] 2560:w-[23px] group-hover:bg-settings_2 bg-settings bg-no-repeat bg-center bg-contain'></div>
                    </div> */}
                    {/* <div id='news' className='bg-[#b6b5b1]/20 hover:bg-[#9f9e90] ml-[0.25%] hover:text-[#474641] hover:rounded h-full rounded px-3 py-1 items-center justify-center uppercase text-light-yellow font-SFProDisplayMedium cursor-pointer group' onClick={() => changePage('news')} onMouseEnter={() => playSound('hover_navbar')}>
                        <div className='800:h-[12px] 800:w-[11px] 1024:h-[18px] 1024:w-[17px] 1280:h-[19px] 1280:w-[18px] 1440:h-[21px] 1440:w-[20px] 1600:h-[22px] 1600:w-[21px] 1920:h-[23px] 1920:w-[22px] 2560:h-[23px] 2560:w-[23px] group-hover:bg-news_2 bg-news bg-no-repeat bg-center bg-contain'></div>
                    </div> */}
                </div>
            </div>

            <div className='absolute w-full flex flex-col items-end mt-[0.25%]'>
                {/* <div className='800:w-[11px] 1024:w-[150px] 1280:w-[200px] 1440:w-[225px] 1600:w-[250px] 1920:w-[350px] 2560:w-[600px] h-auto flex flex-col justify-between items-end select-none absolute'>
                    {
                        userData === null || userData.length === 0 ? (
                            <>
                            </>
                        ) : (
                            <div className='bg-[#161212]/75 h-full border-l border-y border-[#555353] rounded-l pr-[10%] px-3 py-1 800:text-[7px] text-[10px] 1024:text-[10px] 1280:text-[13px] 1440:text-[14px] 1600:text-[15px] 1920:text-[16px] 2560:text-[17px] items-center justify-center text-[#d8d1d1] font-SFProDisplayLightItalic text-right'
                            onClick={() =>  {
                                const help = document.getElementById('help')
                                if(help?.classList.contains('hidden')) {
                                    help?.classList.remove('hidden')
                                } else {
                                    help?.classList.add('hidden')
                                }
                            }}
                            >
                                <h1>{userData.pseudo} [{userData.identifier}] <br/> {priceToPriceWithCommase(userData.points)} {languages["points"]}</h1>
                            </div>
                        )
                    }
                </div> */}
                <div className='800:w-[11px] 800:h-[30px] 1024:w-[150px] 1024:h-[35px] 1280:w-[200px] 1280:h-[40px] 1440:w-[225px] 1440:h-[45px] 1600:w-[250px] 1600:h-[55px] 1920:w-[350px] 1920:h-[55px] 2560:w-[500px] 2560:h-[70px] flex flex-row justify-end items-end select-none pr-[2%] absolute'>
                    <div className='bg-[#161212]/40 border border-[#555353] flex flex-row gap-1 rounded h-full w-auto items-center'>
                        <div id="helpButton" className="h-full items-center flex hover:border border-[#b5b5b0] hover:bg-gradient-to-t from-[#474841]/60 to-[#626660]/60 rounded-sm cursor-pointer px-2 1440:px-4" onClick={() => {
                            const help = document.getElementById('help')
                            if(help?.classList.contains('hidden')) {
                                help?.classList.remove('hidden')
                                help?.classList.add('flex')
                            } else {
                                help?.classList.remove('flex')
                                help?.classList.add('hidden')
                            }
                        }} onMouseEnter={() => playSound('hover_navbar')}>
                            <FontAwesomeIcon icon={faBars} className='text-[#ffffff] h-[45%]'/>
                        </div>

                        <div className="h-full items-center flex hover:border border-[#b5b5b0] hover:bg-gradient-to-t from-[#474841]/60 to-[#626660]/60 rounded-sm cursor-pointer px-2 1440:px-4" onClick={() => changePage('settings')} onMouseEnter={() => playSound('hover_navbar')}>
                            <FontAwesomeIcon icon={faGear} className='text-[#ffffff] h-[45%]'/>
                        </div>

                        {
                            userData === null || userData.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <div className="h-full items-center flex hover:border border-[#b5b5b0] hover:bg-gradient-to-t from-[#474841]/60 to-[#626660]/60 rounded-sm cursor-pointer px-3 1440:px-5 gap-3" onClick={() => changePage('profile')} onMouseEnter={() => playSound('hover_navbar')}>
                                    <div className='border-[#eaf34d] border 1440:border-2 rounded-full 800:h-[20px] 800:w-[20px] 1024:h-[23px] 1024:w-[23px] 1280:h-[27px] 1280:w-[27px] 1440:h-[30px] 1440:w-[30px] 1600:h-[40px] 1600:w-[40px] 1920:h-[40px] 1920:w-[40px] 2560:h-[50px] 2560:w-[50px] flex flex-row justify-center items-center'
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
                                    <h1 className='text-[#ffffff] font-StratumMedium 800:text-[10px] 1024:text-[12px] 1280:text-[16px] 1440:text-[19px] 1600:text-[23px] 1920:text-[25px] 2560:text-[27px]'>{userData.level}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}