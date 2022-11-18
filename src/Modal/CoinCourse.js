import React, { useEffect, useState } from "react";
import Loader from "../Loader";

function CoinCourse() {
  const [answer, setAnwser] = useState(['empty']);

    useEffect(() => {
        fetch("http://api.coinlayer.com/api/live?access_key=df026db8052485090e7235fd206a9d68")
        .then(response => response.json())
        .then(answer => {
            setAnwser(answer);})
    }, []); 

            const resArray = ['loading'];
            resArray.push(answer.rates);
            console.log(resArray);

            if (resArray[1] === undefined) {return (<Loader></Loader>)} else
                {return (           
                    <div>
                    <ul style={{listStyle: 'none'}}>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/5968/5968260.png' width="20px" height="20px" alt=""></img>
                        &nbsp;BTC - {resArray[1].BTC} $</li>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/1777/1777889.png' width="20px" height="20px" alt=""></img>
                        &nbsp;ETH - {resArray[1].ETH} $</li>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/6675/6675721.png' width="20px" height="20px" alt=""></img>
                        &nbsp;BNB - {resArray[1].BNB} $</li>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/825/825463.png' width="20px" height="20px" alt=""></img>
                        &nbsp;LTC - {resArray[1].LTC} $</li>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/8744/8744148.png' width="20px" height="20px" alt=""></img>
                        &nbsp;DOGE - {resArray[1].DOGE} $</li>
                        <li><img src='https://cdn-icons-png.flaticon.com/128/7016/7016514.png' width="20px" height="20px" alt=""></img>
                        &nbsp;ADA - {resArray[1].ADA} $</li>
                    </ul>  
                    </div>  
                );}   
}
export default CoinCourse;
