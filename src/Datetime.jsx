import React from 'react';

var Datetime=()=>{
    var showdate=new Date();
    var displaytodaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getUTCFullYear();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    return(
        <div>
            <div>Date - {displaytodaydate} </div> 
           <div>TIME - {displaytime}</div>
        </div>
    );
}
 export default Datetime;