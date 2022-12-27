import * as React from 'react';
import { useEffect,useState } from 'react';
import {FaAmbulance,FaProcedures,FaHospitalAlt,FaRunning,FaBed} from "react-icons/fa";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';






export default function Orders() {

  const [update_date_time,set_update_date_time] = useState(null)
  const [local_total_cases,set_local_total_cases] = useState(null)
  const [local_active_cases,set_local_active_cases] = useState(null)
  const [local_new_cases,set_local_new_cases] = useState(null)
  const [local_recovered,set_local_recovered] = useState(null)
  const [local_deaths,set_local_deaths] = useState(null)

  useEffect(()=>{
    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
      .then(res=>{
        if (!res.ok) throw Error("")
        return res.json()
      })
        .then(details=>{
          const {data} = details;
          const {
            update_date_time,
            local_total_cases,
            local_active_cases,
            local_new_cases,
            local_recovered,
            local_deaths
          } = data;
          set_update_date_time(update_date_time)
          set_local_total_cases(local_total_cases)
          set_local_active_cases(local_active_cases)
          set_local_new_cases(local_new_cases)
          set_local_recovered(local_recovered)
          set_local_deaths(local_deaths)
        })
        .catch((error)=>{
          console.log(error.message);
        })
  },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <div style={{textAlign:'center',fontSize:32}}>COVID-19 Situation Report of Sri Lanka</div>
        <div style={{textAlign:'center',fontSize:20}}>{update_date_time}</div>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{textAlign:'center'}}>
          <Grid xs={2} sm={4} md={4}>
              <FaHospitalAlt size={48} color={' #e70'}/>
              <div>{local_total_cases}</div>
              <div style={{textAlign:'center',fontSize:20,color:'#e70'}}>Total Confirmed Cases</div>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
              <FaProcedures size={48} color={' pink'}/>
              <div>{local_active_cases}</div>
              <div style={{textAlign:'center',fontSize:20,color:'pink'}}>Active Cases</div>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
              <FaAmbulance size={48} color={'#08f'}/>
              <div>{local_new_cases}</div>
              <div style={{textAlign:'center',fontSize:20,color:'#08f'}}>Daily New Cases</div>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
              <FaRunning size={48} color={'green'}/>
              <div>{local_recovered}</div>
              <div style={{textAlign:'center',fontSize:20,color:'green'}}>Recovered</div>
          </Grid> 
          <Grid xs={2} sm={4} md={4}>
              <FaBed size={48} color={'#e00'}/>
              <div>{local_deaths}</div>
              <div style={{textAlign:'center',fontSize:20,color:'#e00'}}>Deaths</div>
          </Grid>
      </Grid>
    </Box>
  );
}