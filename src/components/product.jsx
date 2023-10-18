import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import add from '../actions/action';






const Product = () => {



    const dispatch = useDispatch()

    const [Data, setData] = useState([])
    console.log(Data)

    const getData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b17f0cf3767afa94633670f8e84b1354')

            .then((response) => response.json())
        setData(response.results)


    }
    useEffect(() => {
        getData();
    }, []);


    const send = (movie) => {

        dispatch(add(movie))

    }

    return (
        <div>
            <div className="background" style={{
                background: "lavender",
                margin: "auto",
                marginLeft: "2rem",
                marginRight: "2rem",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderRadius: 15,
                zIndex: "-333"

            }}>
                <div className="row" style={{



                    backdropFilter: "blur(5px)",
                    zIndex: "333"



                }}>



                    {
                        Data && Data.map(movie => (

                            <li key={movie.id} style={{
                                listStyle: "none",
                                // display: "flex",
                                // flexWrap: "wrap"
                                width: 350,
                                margin: "auto",
                                marginTop: "2rem",
                                filter: "none"

                            }}>
                               
                                <div className="" style={{
                                    margin: "auto",
                                    backdropFilter: "blur(3px)"
                                }}>
                                    <Card sx={{
                                        maxWidth: 300, maxHeight: 600, alignContent: "center", alignItems: "Center", margin: "auto", borderRadius: 5, border: "5",
                                        backdropFilter: "blur(3px)"
                                    }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    sx={{ bgcolor: red[500], alignItems: "center", justifyContent: "center", marginLeft: "auto", maxWidth: 250, maxHeight: 150 }}
                                                    aria-label="movie "
                                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}

                                                />


                                            }

                                            title={`${movie.title.substring(0, 28)}`}
                                            subheader={movie.release_date}
                                        />
                                        <CardMedia
                                            sx={{
                                                borderRadius: 10,
                                                marginTop: 1,
                                                width: 270,
                                                marginLeft: 1.5



                                            }}
                                            component="img"
                                            height="250"

                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.original_title}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {movie.overview.substring(0, 100)}...
                                            </Typography>
                                            <Typography variant="body" color="text.secondary" style={{
                                                justifyContent: "center", marginLeft: "5rem"
                                            }}>
                                                <br />
                                                Price: {movie.popularity} INR<br />
                                                Rating: {movie.vote_average}<br />
                                                Language: {movie.original_language}<br />

                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <button 
                                            onClick={() => send(movie)} 
                                            style={{
                                                border: "none",
                                                borderRadius: 50,
                                                marginRight: 3

                                            }}>
                                                <IconButton aria-label="add to cart">
                                                    <AddCircleIcon />
                                                </IconButton>
                                            </button>
                                            {/* <button
                                 style={{
                                    border: "none",
                                    borderRadius: 30,
                                    
                                    
                                }}><IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                </button> */}
                                        </CardActions>

                                    </Card>
                                </div>
                            </li>
                        )




                        )
                    }







                </div>
            </div>


        </div>
    )
}

export default Product