import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GifItem from '../GifItem/GifItem';




function GifList() {
  return (
    <ImageList sx={{ width: .8, height: .8 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <GifItem item={item} />
        </ImageListItem >
      ))}
    </ImageList>
  );
}


export default GifList


const itemData = [
    {
      img: 'https://media.giphy.com/media/dB0lH3k3AE96259Exh/giphy.gif',
      title: 'Hi!',
      author: 'Sarah',
    },
    {
      img: 'https://media.giphy.com/media/10LH5J2YEmUS6k/giphy.gif',
      title: 'RIP Coolio',
      author: 'Maggie',
    },
    {
      img: 'https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif',
      title: 'Bird',
      author: 'Kyle',
    }
  ];
  