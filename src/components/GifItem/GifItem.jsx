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


function GifItem( { item }) {

    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="280"
                src={item.img}
                alt={item.title}
                key={item.id}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.title}
                </Typography>
            </CardContent>
            <CardActions>
                <FavoriteIcon />Favorite
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=""
                        label="category"
                        // onChange={handleChange}
                        >
                        <MenuItem value='Funny'>Funny</MenuItem>
                        <MenuItem value='Cohort'>Cohort</MenuItem>
                        <MenuItem value='Cartoon'>Cartoon</MenuItem>
                        <MenuItem value='NSFW'>NSFW</MenuItem>
                        <MenuItem value='Meme'>Meme</MenuItem>
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

