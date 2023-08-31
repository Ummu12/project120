import React from "react";
import {Card,CardContent,Grid} from "@mui/material"

export const Dept=({item})=>{
  return (
  <Grid item xs={4}>
    <Card sx={{bgcolor:"greenyellow",color:"red"}}>
        <CardContent>
            {item}
        </CardContent>
    </Card>

  </Grid>
   

  )

}