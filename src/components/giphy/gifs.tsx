import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components'; 
const gf = new GiphyFetch("EU96dEA1VGFKXPnlbuEvBzEkUg19K9ze");


const gifs = async () => {
    try {
      const result = await gf.gifs(["3oEjHGr1Fhz0kyv8Ig"]);
      console.log(`gifs`, result);
    } catch (error) {
      console.error(`gifs`, error);
    }
};