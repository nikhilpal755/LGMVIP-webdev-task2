import React from 'react'
import { Card,CardContent, Typography } from '@mui/material'

export default function User({ user }) {

    return (
        <>
           
            <Card sx={{ minWidth: 275,display:'flex', alignItems:'center', justifyContent:"center", width:'auto'}}>
                <CardContent>
                    <img src={user.avatar} alt={user.first_name} />
                    <Typography variant="h5" gutterBottom component="div">
                        {user.first_name} {user.last_name}
                    </Typography>
                   
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {user.email}
                    </Typography>
                    

                </CardContent>
           
            </Card>

        </>
    )
}
