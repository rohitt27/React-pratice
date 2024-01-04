import React from 'react';
import TextField from '@mui/material/TextField';

const cardArr = [
    {
        id: 1,
        no: "01",
        icon:"https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321073a41e0518dece1cb79_hourglass.svg",
        cardName:"Reminding & Resumption",
        information:
        "You're constantly switching between unfinished tasks all day, leaving tabs open so you don't lose where you left off.",iconBackgroundColor:"lightblue"

    },

    {
        id: 2,
        no: "02",
        icon:"https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106dea62b46be39712309_page-scroll.svg",
        cardName:"Resurfacing",
        information:
        "You leave articles and papers open in tabs to read because you don't have time to read them right now but if you put them away you may forget and never get back to them.",iconBackgroundColor:"lightgreen"
        
    },

    {
        id: 3,
        no: "03",
        icon:"https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106deffe37448ce8514f2_query.svg",
        cardName:"Refinding",
        information:
        "You leave docs and links open to avoid sifting through emails or Slack to find them again.",iconBackgroundColor:"lightpink"
    },
];

const c1={
    backgroundImage:'url("https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/63211cc49298aa30db18b0d9_Tabs.svg")',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat'
}

//bg-gradient-to-r from-red-50 via-purple-200 to-purple-100 sm:w-full



function Homepage() {
  return (
    
    <div className='mt-16 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-100'>
        <div className='flex justify-center pt-20' style={c1}>
            <h1 className='text-7xl text-center w-8/12 font-semibold'>Your browser is a mess.<br /> It not your fault.</h1>
        </div>
        

        <p className='text-center text-gray-600 my-10'>Skeema is a new way to manage your tabs that helps declutter your browser and your mind.</p>
        <div className='flex justify-center'>
            <button className='bg-black text-white h-[60px] rounded-full px-5 mt-12' >GET STARTED
            </button>
        </div>
       
            <p className='mt-10 text-center pt-12 text-gray-600'>AS FEATURED IN</p>

            <div className='flex justify-between p-10 mx-20 mt-12'>
                <div>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/633e37f6a9588ee6b11e251b_1200px-TechCrunch_logo.svg.png" className='w-50 h-6' />
            </div>

            <div>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321e7fa901241e10ffdb95a_1280px-Fast_Company_logo.svg.png" className='w-50 h-6' />
            </div>

            <div>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321e78f2c65be443f467b5c_Inc._magazine_logo.png" className='w-50 h-6'  />
            </div>

            <div>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321e78f1221452ca13dc3ba_ScienceAlert-Logo.png" className='w-50 h-6' />
            </div>

            <div>
            <img src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321e78fa3c2e104ad1f95b4_Mashable_Logo.svg.png" className='w-50 h-6' />
            </div>

                
            </div>
        




     
        <p className='text-5xl text-center mt-12'>Skeema solves the three main problems that cause tab overload.</p>
     




        
        <div className="flex flex-wrap justify-center" >
        {
            cardArr.map((cardinfo)=>{
                const iconStyle = {
                    backgroundColor:cardinfo.iconBackgroundColor
                };

                return(
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 p-3'>
                        <div className='border rounded-lg shadow-grid bg-white m-4 p-3 h-full'>
                            <div className='flex justify-between items-center m-4 h-16'>
                            
                        <h1>{cardinfo.no}</h1>
                       <div style={iconStyle} className='h-12 p-2 rounded-xl'> 
                        <img src={cardinfo.icon} className='w-full h-full' alt='Card Icon'  />
                       </div>
                       </div>
                        
                        <div className='text-xl m-4'>
                        <h2>{cardinfo.cardName}</h2>
                        <p >{cardinfo.information}</p>
                        </div>
                        
                        </div>
                        
                       
                        

                    </div>
                )
            })}
      </div>
      <br /><br /><br />
    </div>
  )
}


export default Homepage

