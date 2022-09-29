import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GifItem from '../GifItem/GifItem';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';





function GifList() {
    const dispatch = useDispatch()
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = () => {
        dispatch({
            type: 'SEARCH_GIFS_S',
            payload: 'random'
        })
    }
    const theGifs = useSelector(store => store.gifList)
    console.log('theGifs?', theGifs)


    // const itemData = {
    //     img: theGifs.data.images.fixed_height.url,
    //     title: 'please work',
    //     author: 'All'
    // }

  return (
    <ImageList sx={{ width: .8, height: .8 }}>
      {theGifs.map((item, i) => (
        <ImageListItem >
            <GifItem item={item} i={i} />
        </ImageListItem >
      ))}
    </ImageList>
  );
}


export default GifList


// const itemData = [
//     {
//       img: 'https://media.giphy.com/media/dB0lH3k3AE96259Exh/giphy.gif',
//       title: 'Hi!',
//       author: 'Sarah',
//     },
//     {
//       img: 'https://media.giphy.com/media/10LH5J2YEmUS6k/giphy.gif',
//       title: 'RIP Coolio',
//       author: 'Maggie',
//     },
//     {
//       img: 'https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif',
//       title: 'Bird',
//       author: 'Kyle',
//     }
//   ];
  