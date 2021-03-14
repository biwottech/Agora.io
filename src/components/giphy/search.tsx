import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components'; 
const gf = new GiphyFetch("EU96dEA1VGFKXPnlbuEvBzEkUg19K9ze");

const search = async () => {
    try {
      const result = await gf.search("dogs", { sort: "recent" });
      console.log(`search`, result);
    } catch (error) {
      console.error(`search`, error);
    }
};
