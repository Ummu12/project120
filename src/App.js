
import {Card, CardContent, Grid} from "@mui/material"
import { Dept } from "./component/Dept";
import React,{useState} from "react";

function App() {
  const arr= ["Mechnical","Computer","Engineering"];
  const [data,setData]=useState(arr);
  
  return (
    <Card>   
       <CardContent>
        <Grid container spacing={2}>
          {
            data.map(item=>
               <Dept item={item}/>
            )
          }

        </Grid>
       </CardContent>
  
    </Card>

  );
}

export default App;
