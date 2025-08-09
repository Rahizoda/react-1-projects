

import {  IconEdit, IconInfoCircle, IconTransitionRight, IconTrash, IconTrashFilled, IconTrashOff, IconTrashXFilled } from '@tabler/icons-react';

const Sync = ({ data, Delete }) => {
  
  return (
    <>
          <div style={{display:'flex', flexWrap:'wrap', gap:'20px', width:'1100px', margin:'auto' }} >
              { 
                  data.map((el) => {
                      return (
                          <div style={{ border: "1px solid black ", height:'400px', width:'300px', textAlign:'center', padding:'20px', borderRadius:'10px', }}>
                                
                              <img style={{ width: '200px ', borderRadius: '55%' }} src={el.avatar} alt="" />
                              <h2> <span style={{color:'blue'}}>Name: </span> {el.name} </h2>
                              <h3> <span style={{color:'blue'}}>Age:</span>  {el.age} </h3>
                              <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', gap:'20px'}}>
                                  
                                  <button onClick={()=>Delete(el.id)} > <IconTrash /> </button>
                                  <div>
                                      <button  > <IconEdit/> </button>
                                      <button> <IconInfoCircle /> </button>
                        
                                  </div>
                              </div>
                      </div>
                      )
                  })
              }
          </div> 

    </>
  );
}

export default Sync;
