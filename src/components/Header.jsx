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



const Header = () => {
    const {cart} = useSelector(state=> state.updateCart)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: "25px",
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    return (

        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <Navbar.Brand href="/" className='text-decoration-none '><AutoModeRoundedIcon /> Animo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <NavLink to="/" className={"text-decoration-none text-black pt-1 "} style={{
                                
                            }}>Products </NavLink> */}
                            <NavLink className="text-decotation-none text-black pt-1  " >
                            <StyledBadge badgeContent={cart.length} color="secondary">
                                 <ShoppingBasketIcon onClick={handleClick} style={{
                                marginBottom: "5px",
                                marginLeft: "68rem"
                            }} />
                             </StyledBadge></NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>






            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                
                <MenuItem onClick={handleClose}>
                    {
                        cart.length===0? <div className="">
                            CART EMPTY
                        </div>:
                        <div style={{
                            width: "27rem",
                            
                            


                        }}>
                        <div >
                           <Table striped bordered hover>
                            <tr>
                            <th>
                              <td>
                                Your Cart
                              </td>
                            </th>
                            </tr>

                        {
                            cart.map(movie=>{
                                
                                return(
                                
                                <tbody>
                                    <tr>
                                <td>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{
                                        width: 140,
                                        height:200,
                                        borderRadius: 15,
                                        backgroundColor: "white"
                                    }} alt="" />
                                </td>
                                <td>
                                    <p> Movie Name: {movie.original_title}</p>
                                    <p> Movie Price: {movie.popularity}</p>
                                   
                                    <div className="w-50 d-flex justify-content-between">
                                        <p>-</p>
                                        <p>x 1</p>
                                        <p>+</p>
                                    </div>
                                </td>
                                <td>
                                    <DeleteIcon style={{
                                        cursor: "pointer", color: "darkred", fontSize: "2rem"
                                    }}/>
                                </td>
                                </tr>
                            </tbody>
                            
                            )})
                        }



                           
                            <tfoot>
                                <tr>
                                <div className="">total</div>
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