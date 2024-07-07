import React, {useState} from 'react';
import {useNuiEvent} from "../hooks/useNuiEvent";

export const isEnvBrowser = (): boolean => !(window as any).invokeNative

// Basic no operation function
export const noop = () => {}

export const playSound = (sound: string) => {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            sound: sound,
            volume: 0.3,
        }),
    };
    fetch(`https://YBN/YBN.Sound:Play`, options);
}

export const openUrl = (url : string) => {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            url: url,
        }),
    };
    fetch(`https://YBN/YBN.Inventory:openUrl`, options);
}

var languages = <any>[];
export const getLanguages = () => {
    return languages;
}
export const setLanguages2 = (data: any) => {
    languages = data;
}

export const priceToPriceWithCommase = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const stringUpperToFirst = (str: string) => {
    if (typeof str !== 'string') return '';
    if (str.length === 0) return str;
    if (str.includes('µ')) {
        str = str.replace('µ', '');
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}