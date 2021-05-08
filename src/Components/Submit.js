import React from 'react';

const Submit =({submit})=>{
    return(
        <div className="f2 red pt4 dim" style={{display:'flex', justifyContent:'center'}}>
        <button type="submit" onClick={submit} style={{background :'rgb(60, 150, 150)'}}>Submit</button>
        </div>
    )
}

export default Submit;