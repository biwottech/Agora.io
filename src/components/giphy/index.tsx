import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function GifDemo(props:any) {
    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
      const { data } = await giphyFetch.gif(props.name);
      setGif(data); 
    }, []);
    console.log(gif); 
    return  <Gif gif={props.gif} width={200} />;
}

function GridDemo(props:any) {  
    const fetchGifs = (offset: number) =>
    giphyFetch.trending({ offset, limit: 10 });
    const [width, setWidth] = useState(window.innerWidth);
     
    return (
      <>
        <Grid 
          onGifClick={props.onGifClick} 
          fetchGifs={fetchGifs}
          width={width}
          columns={3}
          gutter={6}
        />
        <ResizeObserver
          onResize={({ width }) => {
            setWidth(width);
          }}
        />
      </>
    );
}

function EmojiDemo(props:any) {  
    const fetchGifs = (offset: number) =>
    giphyFetch.emoji({ offset, limit: 10 });
    const [width, setWidth] = useState(window.innerWidth);
     
    return (
      <>
        <Grid 
          onGifClick={props.onGifClick} 
          fetchGifs={fetchGifs}
          width={width}
          columns={3}
          gutter={6}
        />
        <ResizeObserver
          onResize={({ width }) => {
            setWidth(width);
          }}
        />
      </>
    );
}
 
export const Hello = function(){
    const [modalGif, setModalGif] = useState();
    return(

        <div>  
            <h4>Gif</h4>

        {/* <GridDemo   onGifClick={(gif:any, e:any) => {
          console.log("gif", gif);
          e.preventDefault();
          console.log(gif); 
        }} />   */}

        <EmojiDemo onGifClick={(gif:any, e:any) => {
          console.log("gif", gif);
          e.preventDefault(); 
          setModalGif(gif);
        }} />   
        
         {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          
          <Gif gif={modalGif} width={200} />
        </div>
      )}
        <h4>Testing the test </h4></div>
    )
}
