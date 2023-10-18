import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Table } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fullscreen } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useDispatch } from 'react-redux';
import { remove } from '../actions/action';
// import remove from '../actions/action';



const Header = () => {
    const { cart } = useSelector(state => state.updateCart)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch();

    const send = (movie) => {

        dispatch(remove(movie))

    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: "25px",
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    return (

        < >
            <div className="style" style={{
                overflowX: "none",
                // position: "fixed",
                // zIndex: "222",
                marginBottom: "2rem"

            }}>
                <Navbar expand="lg" className="bg-body-tertiary navbar-light  navbar-expand-lg" style={{
                    overflowX: "none",
                    margin: "1rem",
                    borderRadius: "15px",

                }}>

                    <Container style={{
                        overflowX: "none"
                    }}>

                        <Navbar.Brand href="/" className='text-decoration-none '><AutoModeRoundedIcon style={{
                            marginBottom: "5px"
                        }} /> RentaFlick</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <NavLink to="/" className={"text-decoration-none text-black pt-1 "} style={{
                                
                            }}>Products </NavLink> */}
                                <NavLink className="text-decotation-none text-black pt-1  " >
                                    <StyledBadge badgeContent={cart.length} color="secondary" style={{
                                        backgroundColro: "lavender"
                                    }}>
                                        <ShoppingBasketIcon onClick={handleClick} style={{
                                            marginBottom: "5px",
                                            marginLeft: "1rem"

                                        }} />
                                    </StyledBadge></NavLink>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="typog" style={{

                }}>
                    <Typography variant='h1' style={{
                        margin: "2rem",
                        marginTop: "4rem",
                        fontWeight: "bold",

                        marginBottom: "3rem",
                        textAlign: "center",

                        overflowY: "hidden"
                    }} >Rent

                        a
                        Flick, <br />Where Content Meets You.</Typography>

                    <Typography variant='h4' style={{
                        margin: "2rem",
                        fontWeight: "bold",
                        marginBottom: "3rem",
                        textAlign: "center"

                    }} gutterBottom>Enter the gateway to your Entertainment</Typography> </div>
                <div style={{
                    textAlign: "center",
                    marginBottom: "8rem",

                }} >
                    <Button variant="contained" size="large" onClick={handleClick} style={{
                        margin: "1rem",
                        backgroundColor: "Lavender",
                        color: "black",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                        height: "3rem",
                        color: "black",
                        fontSize: "17px",
                        borderRadius: "4rem",
                        fontWeight: "bold",
                        width: "10rem"
                    }} >
                        Your Cart
                    </Button><br />
                    <Typography variant='h6' style={{
                        marginTop: "2rem",
                        fontWeight: "bold"
                    }}>Explore This Month's Featured</Typography>
                    <ExpandCircleDownIcon />
                </div>

            </div>




            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                style={{
                    borderRadius: 15,
                    left: "60rem",
                    width: "30rem"
                }}
            >

                <MenuItem
                    style={{

                    }} >
                    {
                        cart.length === 0 ? <div className="" style={{
                            textAlign: "center",



                        }}>
                            Your Cart Is Empty,<br />
                            But Not For Long,<br />
                            Rent A Flick Now!
                        </div> :
                            <div style={{
                                width: "26rem",





                            }}>
                                <div >
                                    <Table striped bordered hover
                                        style={{
                                            left: "88rem"
                                        }}>
                                        <tr>
                                            <th>
                                                <td>
                                                    Your Cart
                                                </td>
                                            </th>
                                        </tr>

                                        {
                                            cart.map(movie => {

                                                return (

                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{
                                                                    width: 140,
                                                                    height: 200,
                                                                    borderRadius: 15,
                                                                    backgroundColor: "white"
                                                                }} alt="" />
                                                            </td>
                                                            <td>
                                                                <p> Movie Name: {movie.original_title}</p>
                                                                <p> Movie Price: {movie.popularity}</p>
                                                                <p> Movie Language: {movie.original_Language}</p>
                                                                <p> Movie Rating: {movie.vote_average}</p>

                                                                <div className="w-50 d-flex justify-content-between">
                                                                    <p>-</p>
                                                                    <p>x 1</p>
                                                                    <p>+</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <DeleteIcon
                                                                    style={{
                                                                        cursor: "pointer",
                                                                        color: "darkred",
                                                                        fontSize: "2rem"
                                                                    }}
                                                                    onClick={() => send(movie)} 
                                                                    />

                                                            </td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            })
                                        }




                                        <tfoot>
                                            <tr>
                                                <div className=""></div>
                                            </tr>
                                        </tfoot>
                                    </Table>
                                </div>
                            </div>
                    }
                </MenuItem>

            </Menu>








        </>

    );
}

export default Header