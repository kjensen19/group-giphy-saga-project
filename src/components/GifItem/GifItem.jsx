import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux'
import { useState } from 'react'


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


function GifItem( { item, i }) {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('Favorite')

    function handleChange(event) {
        console.log('event', event.target.value)
        setCategory(event.target.value)

    }

    function handleFavorite(fav) {
        const urlToFavorite = {
            url: item.url,
            category: category}
        console.log('URL?', urlToFavorite)
        dispatch({
            type: 'ADD_FAVES_S',
            payload: urlToFavorite
        })


    }
    // function putCategory() {
    //     console.log('in put', category)

    //     dispatch({
    //         type: 'ADD_CATEGORY'
    //     })
    // }

    

    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="280"
                src={item.url}
                alt={item}
                key={item.id}
            />
            <CardContent>
            </CardContent>
            <CardActions>
                <Box sx={{ minWidth: 120 }}>
                    <FavoriteIcon id={i} onClick={() => handleFavorite(item.url)}/>Favorite
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="category"
                        onChange={handleChange}
                        >
                        <MenuItem value='Funny'>Funny</MenuItem>
                        <MenuItem value='Cohort'>Cohort</MenuItem>
                        <MenuItem value='Cartoon'>Cartoon</MenuItem>
                        <MenuItem value='NSFW'>NSFW</MenuItem>
                        <MenuItem value='Meme'>Meme</MenuItem>
                        <MenuItem value='Favorite'>Favorite</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </CardActions>
        </Card>

      </>
    )
}

export default GifItem




// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={item.image}
//         alt={item.title}
//          key={item.id}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {item.title}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <FavoriteIcon />Favorite
//         <Button size="small">CATEGORY GOES HERE</Button>
//       </CardActions>
//     </Card>
//   );
// }

