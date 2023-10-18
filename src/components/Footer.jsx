import React from 'react'
import { Typography } from '@mui/material'


const Footer = () => {
  return (
    <div>
    <div className="footer" style={{
      backgroundColor: "lavender",
      // margin: "1rem",
      // borderRadius: 10,
      
    }}>
    <div className="foot">
      <div className="text" style={{
        flexGrow: "2"
      }}>
        <Typography variant='h5' style={{
          textAlign: "center",
          marginLeft: "1rem",
          marginTop: "1rem",
          fontWeight: "lighter",
          fontSize: "2rem",
          color: "dimgray"
        }}>RentaFlick</Typography>
        <Typography variant='h6' style={{
          textAlign: "center",
          marginLeft: "1rem",
          color: "dimgray",
          fontWeight: "lighter"
        }}>Formerly Known As Animo</Typography>
      </div>
      <div className="othertext" style={{
        margin: "1rem",
        textAlign: "center",
        color: "dimgray"
      }}>
        <Typography variant='h6' style={{
          fontSize: "12px"
        }}>API</Typography>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer