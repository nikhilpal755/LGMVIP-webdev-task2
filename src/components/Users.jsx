import React from 'react'
import User from './User';
import { Grid } from '@mui/material';

import { Button } from "@mui/material";
import { CircularProgress } from '@mui/material';


export default function Users() {
    const [users, setUsers] = React.useState([]);
    const [loader, setLoader] = React.useState(false);
    const [fetched, setFetched] = React.useState(false);


    const fetchUsers = async () => {
        setLoader(true);

        setTimeout(async() => {

            const res = await fetch('https://reqres.in/api/users?page=1');
            const users = await res.json();
            setLoader(false);
            setUsers(users.data);
            setFetched(true);
            console.log(users.data);
        },1500)
        
    }
    
    
    return (
        <>

            <div className="content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              { !loader && !fetched &&
               <Button variant="contained" style={{ marginTop: "20px", backgroundColor: '#6d4646' }} onClick={fetchUsers}>
                    Get Users
                </Button>
             
              }
              {loader && <CircularProgress style={{color:'#6d4646'}}/>}
              {fetched && 
                <Button variant="contained" style={{marginTop:'20px' , backgroundColor:'#6d4646'}}>
                    Fetched Users
                </Button>
              }
              {  <Grid container spacing={4} style={{ padding: '4%' }}>
                    {
                        users && users.map(user => (
                            // if users is not null, then map through the users array and return a list of users
                            <Grid item xs={12} sm={6} md={4} lg={4} key={user.id}>
                                <User key={user.id} user={user} />
                            </Grid>

                        ))
                    }
                     </Grid>
                }

            </div>
            </>
            )
}
