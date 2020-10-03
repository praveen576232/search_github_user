import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import { Pie, Bar } from "react-chartjs-2";
import './Chart.css'
function Chart() {
  const [{ repo }] = useStateValue();
  const [data,setData] =useState();
  const [barData,setBarData] =useState();
  const [LineData,setLineData] =useState();
  const [forkData,setForksData] = useState();
  useEffect(() => {
    
    if (repo) {
      let languages = repo.reduce((acumalter, current) => {
        if (current?.language) {
          if (acumalter[current?.language]) {
            acumalter[current?.language] ={
                ...acumalter[current?.language],
                totle: acumalter[current?.language].totle + 1,
                stars:acumalter[current?.language].stars + current?.stargazers_count

            }
            
            return acumalter;
          } else {
            acumalter[current?.language] = {
              lang: current?.language,
              totle: 1,
              stars:current?.stargazers_count
            };

            return acumalter;
          }
        } else {
          return acumalter;
        }
      }, {});
      


   // stars per repo

   let {stars_per_repo,forks} = repo.reduce((acumalter,current)=>{
    acumalter.stars_per_repo[current?.name] = {name:current?.name ,stars:current?.stargazers_count}
    acumalter.forks[current?.name] = {name:current?.name ,forks:current?.forks}
    return acumalter;   
},{
       stars_per_repo:{},
       forks:{}
    })
    if(forks){
        forks = Object.values(forks);
        const forks_value = forks.sort((a,b)=>{
            return b.forks - a.forks;
        }).slice(0,5);
        console.log(forks_value);

        const forkschartData = {
            labels: forks_value.map(data =>data.name),
            datasets: [
              {
                label: 'Forks',
                backgroundColor: 'rgba(85,92,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: forks_value.map(data =>data.forks)
              }
            ]
          }
          setForksData(forkschartData)
    
    }
   if(stars_per_repo){
      
   stars_per_repo = Object.values(stars_per_repo);
     const line=  stars_per_repo.sort((a,b)=>{
        return b.stars - a.stars;
       }).slice(0,5);
      
      //pie chart for stars per repo  
      const lineChartData = {
        labels: line.map(data => data.name),
        datasets: [
            {
              label: 'Rainfall',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data:line.map(data =>data.stars)
            }
          
        ]
      }
 setLineData(lineChartData)
   }


      if(languages){
       languages = Object.values(languages);
   console.log(languages);
         const bar=languages.sort((a,b) =>{
             return b.stars - a.stars;
         }).slice(0,5);

         const pai=languages.sort((a,b) =>{
            return b.value - a.value;
        }).slice(0,5)
         
          
         
    // pai chart 
      const state = {
        labels:  pai.map(data =>data.lang),
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data:pai.map(data =>data.totle)
          }
        ]
      }
      setData(state);



      //bar chart 
      const barChartData = {
        labels: bar.map(data =>data.lang),
        datasets: [
          {
            label: 'language',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: bar.map(data =>data.stars)
          }
        ]
      }
      setBarData(barChartData)





    }
}
  }, [repo]);
  return (
    <div className="charts">
      {repo && repo!=undefined && 

      (
      <>
      <div className="top-chart">
      <div className="paichart">
     {data &&( <Pie
          data={data}
          options={{
            title:{
                position:"top",
              display:true,
              text:'Languages',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
     )}
      </div>
    <div className="barchart">
      {barData &&(
    <Bar
          data={barData}
          
          options={{
            title:{
              display:true,
              text:'Starts per language',
              fontSize:20
            },
           
          }}
        />)}
    </div>
    </div>
    <div className="bottom-chart">
      <div className="stars_piechart">
        {LineData && (
      <Pie
          data={LineData}
          options={{
            title:{
              display:true,
              text:'Stars per repo',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        )}
      </div>
      <div className="forks_barchart">
        {forkData && (

    <Bar
          data={forkData}
          
          options={{
            title:{
              display:true,
              text:'Forks per repo',
              fontSize:20
            },
           
          }}
        />
        )}
    </div>
    </div>
    </>
    )}
    </div>
  );
}

export default Chart;
