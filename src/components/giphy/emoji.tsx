import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components'; 
const gf = new GiphyFetch("EU96dEA1VGFKXPnlbuEvBzEkUg19K9ze");


export const emoji = async () => {
    try {
        const result = await gf.emoji({ limit: 2 })
        console.log(`emoji`, result)
    } catch (error) {
        console.error(`emoji`, error)
    }
}