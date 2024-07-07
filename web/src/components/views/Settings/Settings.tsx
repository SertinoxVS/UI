import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {useNuiEvent} from "../../../hooks/useNuiEvent";
import { playSound, getLanguages } from "../../../utils/misc";
import {debugData} from "../../../utils/debugData";
import './Checkbox.scss'

debugData([
    {
        action: 'setSettings',
        data: [
            {
                'id': 'lootBagSystem',
                'value': true,
                'label': 'On'
            },
            {
                'id': 'hitmarker_soundLevel',
                'value': 85,
                'label': '30'
            },
        ]
    }
])

debugData([
    {
        action: 'setPlatine',
        data: false
    }
])

export default function Settings() {        
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const languages = getLanguages()

    const [platine, setPlatine] = useState<boolean>(false);
    useNuiEvent<any>('setPlatine', (data) => {
        setPlatine(data);
    });

    const [currentSetting, setCurrentSetting] = useState<any>(null);

    const [settings, setSettings] = useState<any>(null);
    useNuiEvent<any>('setSettings', (data) => {
        setSettings(data);

        if (data != null) {
            if (data.length > 0) {
                data.map((setting: any) => {
                    var element = document.getElementById(setting.id) as HTMLInputElement;
                    if (element) {
                        console.log(element)
                        console.log(typeof setting.value)
                        if (typeof setting.value === 'boolean') {
                            console.log(typeof setting.value)
                            element.checked = setting.value;
                        }
                        if (setting.id == "hitmarker") {
                            var element2 = document.getElementById("hitmarker_" + setting.value) as HTMLInputElement;
                            if (element2) {
                                element2.setAttribute("selected", "selected");
                            }
                        }
                        if (setting.id == "hitmarker_size") {
                            var element2 = document.getElementById("hitmarker_size_" + setting.value) as HTMLInputElement;
                            if (element2) {
                                element2.setAttribute("selected", "selected");
                            }
                        }
                        if (setting.id == "hitmarker_soundLevel") {
                            var element2 = document.getElementById("hitmarker_soundLevel") as HTMLInputElement;
                            if (element2) {
                                element2.value = setting.value;
                            }
                        }
                        var label = document.getElementById(setting.id + '_label');
                        if (label) {
                            label.innerHTML = setting.label;
                        }
                    }
                })
            }
        }
    });

    if (settings == null) {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({}),
        };
        fetch(`https://YBN/YBN.Settings:Reload`, options)
    }

    return (
        <div className='flex flex-col h-screen max-h-screen w-screen max-w-screen select-none p-[5%] pt-[3%] bg-black bg-opacity-50 bg-center bg-cover gap-[1%]'>
            <div className='flex flex-row gap-[1%] items-end'>
                <h1 className='text-[#989898] font-Countach 800:text-[25px] 1024:text-[30px] 1280:text-[40px] 1440:text-[50px] 1600:text-[55px] 1920:text-[65px] 2560:text-[75px] leading-none tracking-wider font- uppercase drop-shadow'>{languages["settings"]}</h1>
            </div>

            <div className='flex flex-row justify-between w-full h-full mt-[2%]'>
                <div className='flex flex-col gap-[2%] w-[50%] h-full'>
                    <div className='flex flex-col gap-[2%] h-full w-full max-h-full scroll-auto touch-auto overflow-auto'>
                        <h1 className='text-[#9aa39a] uppercase text-[10px] 800:text-[10px] 1024:text-[13px] 1280:text-[16px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] rounded tracking-wider font-light font-Countach'><span className='bg-[#2b2c2b] px-[1%] pb-1 rounded-sm'>Home</span></h1>

                        <div className='flex flex-col gap-[3%] h-full w-full items-center justify-start max-h-full scroll-auto touch-auto overflow-auto'>
                            {/* <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["lootBagSystem_label"],
                                        description: languages["lootBagSystem_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["lootBagSystem_label"]}</h1>
                                <h1 id='lootBagSystem_label' className='text-[#9aa39a] group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>
                                    {languages["ideontknow"]}
                                </h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='lootBagSystem' className="lootBagSystem"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('lootBagSystem') as HTMLInputElement;

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'lootBagSystem',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div> */}
                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["streamer_label"],
                                        description: languages["streamer_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["streamer_label"]}</h1>
                                <h1 id='streamer_label' className='text-[#9aa39a] group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["ideontknow"]}</h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='streamer' className="streamer"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('streamer') as HTMLInputElement;

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'streamer',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div>
                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["respawnItems_label"],
                                        description: languages["respawnItems_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["respawnItems_label"]}</h1>
                                <h1 id='respawnItems_label' className='text-[#9aa39a] group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["ideontknow"]}</h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='respawnItems' className="respawnItems"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('respawnItems') as HTMLInputElement;

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'respawnItems',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div>
                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["hudsettings_label"],
                                        description: languages["hudsettings_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["hudsettings_label"]}</h1>
                                <h1 id='hudsettings_desc' className='text-[#9aa39a] group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["ideontknow"]}</h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='hudsettings' className="hudsettings"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('hudsettings') as HTMLInputElement;

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'hudsettings',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div>
                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["zombieSound_label"],
                                        description: languages["zombieSound_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["zombieSound_label"]}</h1>
                                <h1 id='zombieSound_label' className='text-[#9aa39a] group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["ideontknow"]}</h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='zombieSound' className="zombieSound"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('zombieSound') as HTMLInputElement;

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'zombieSound',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div>

                            <div className={`flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-t ${platine ? 'from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue' : 'from-[#7d857d] to-[#9aa29a] hover:border-[#cfdbcf]'} group`}
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["camo_label"],
                                        description: languages["camo_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className={`
                                ${platine ? 'text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue' : 'text-[#141313] border-[#1c221b]'}
                                w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase
                                `}>{languages["camo_label"]}</h1>
                                <h1 id='camo_label' className={`${platine ? 'text-[#9aa39a]' : 'text-[#141313]'} group-hover:text-light-blue pl-[3%] w-[30%] text-left flex items-center h-[70%] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase`}>{languages["ideontknow"]}</h1>
                                <label className="chkbx h-[70%] w-[20%] flex justify-end items-center">
                                    <input type="checkbox" id='camo' className="camo"
                                    onClick={
                                        () => {
                                            var element = document.getElementById('camo') as HTMLInputElement;

                                            if (!platine) {
                                                element.checked = false;
                                            }

                                            const options = {
                                                method: 'post',
                                                headers: {
                                                    'Content-Type': 'application/json; charset=UTF-8',
                                                },
                                                body: JSON.stringify({
                                                    id: 'camo',
                                                    value: element.checked,
                                                    label: element.checked ? 'LOB_CUST_0' : 'LOB_CUST_1'
                                                }),
                                            };
                                            fetch(`https://YBN/YBN.Settings:Update`, options)
                                        }
                                    }
                                    />
                                    <span className="x"></span>
                                </label>
                            </div>

                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["hitmarker_label"],
                                        description: languages["hitmarker_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["hitmarker_label"]}</h1>

                                <select id='hitmarker' className={`hitmarker hitmarker_select ml-[3%] text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[47%] h-[70%] 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach flex justify-end items-center`}
                                onChange={
                                    () => {
                                        var element = document.getElementById('hitmarker') as HTMLSelectElement;

                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                id: 'hitmarker',
                                                value: element.value,
                                                label: element.value == '1' ? 'Classic' : element.value == '2' ? 'Modern' : element.value == '3' ? 'Modern' : 'Tick'
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Settings:Update`, options)
                                    }
                                }
                                >
                                    <option id='hitmarker_1' value='1'>Classic</option>
                                    <option id='hitmarker_2' value='2'>Modern</option>
                                    <option id='hitmarker_3' value='3'>Tick</option>
                                </select>
                            </div>

                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["hitmarker_size_label"],
                                        description: languages["hitmarker_size_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["hitmarker_size_label"]}</h1>

                                <select id='hitmarker_size' className={`hitmarker_size hitmarker_select ml-[3%] text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[47%] h-[70%] 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach flex justify-end items-center`}
                                onChange={
                                    () => {
                                        var element = document.getElementById('hitmarker_size') as HTMLSelectElement;

                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                id: 'hitmarker_size',
                                                value: element.value,
                                                label: element.value == '1' ? 'XS' : element.value == '2' ? 'S' : element.value == '3' ? 'M' : element.value == '4' ? 'L' : 'XL'
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Settings:Update`, options)
                                    }
                                }
                                >
                                    <option id='hitmarker_size_1' value='1'>XS</option>
                                    <option id='hitmarker_size_2' value='2'>S</option>
                                    <option id='hitmarker_size_3' value='3' selected>M</option>
                                    <option id='hitmarker_size_4' value='4'>L</option>
                                    <option id='hitmarker_size_5' value='5'>XL</option>
                                </select>
                            </div>

                            <div className='flex shrink flex-row justify-start items-center px-[4%] w-full 800:h-[25px] 1024:h-[30px] 1280:h-[35px] 1440:h-[40px] 1600:h-[50px] 1920:h-[60px] 2560:h-[70px] rounded border border-[#5c5c5b] bg-gradient-to-b from-[#3a3a39] to-[#2f2f2e] hover:from-dark-blue hover:to-dark-blue hover:border-light-blue group'
                            onMouseEnter={
                                () => {
                                    setCurrentSetting({
                                        title: languages["hitmarker_soundLevel_label"],
                                        description: languages["hitmarker_soundLevel_desc"]
                                    })
                                }
                            }
                            >
                                <h1 className='text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[50%] border-r-2 text-left flex items-center h-[70%] border-[#686c67] tracking-wider leading-3 800:text-[11px] 1024:text-[13px] 1280:text-[15px] 1440:text-[18px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] font-Countach uppercase'>{languages["hitmarker_soundLevel_label"]}</h1>

                                <input id='hitmarker_soundLevel' className={`hitmarker_soundLevel hitmarker_range ml-[3%] text-[#9aa39a] group-hover:text-light-blue group-hover:border-light-blue w-[47%] flex justify-end items-center`}
                                type='range' min='0' max='100' defaultValue='50'
                                onChange={
                                    () => {
                                        var element = document.getElementById('hitmarker_soundLevel') as HTMLInputElement;

                                        const options = {
                                            method: 'post',
                                            headers: {
                                                'Content-Type': 'application/json; charset=UTF-8',
                                            },
                                            body: JSON.stringify({
                                                id: 'hitmarker_soundLevel',
                                                value: element.value,
                                                label: element.value
                                            }),
                                        };
                                        fetch(`https://YBN/YBN.Settings:Update`, options)
                                    }
                                }
                                />
                            </div>
                        </div>
                    </div>
               </div>


               <div className='flex flex-col w-[46%] h-full'>
                    {
                        currentSetting ? (
                            <div className='flex flex-col gap-[2%] h-full w-full max-h-full scroll-auto touch-auto overflow-auto'>
                                <h1 className='text-[#989898] font-Countach 800:text-[16px] 1024:text-[18px] 1280:text-[20px] 1440:text-[25px] 1600:text-[28px] 1920:text-[35px] 2560:text-[45px] leading-none tracking-wider uppercase drop-shadow'>{currentSetting.title}</h1>
                                <h1 className='text-[#9aa39a] font-Countach 800:text-[14px] 1024:text-[15px] 1280:text-[16px] 1440:text-[17px] 1600:text-[17px] 1920:text-[18px] 2560:text-[20px] font-light leading-none tracking-wider drop-shadow'>{currentSetting.description}</h1>
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