import { useState, useEffect } from 'react';

import "./clock.css"

const Clock = () => {
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        setInterval(() => {
        const dateObject = new Date()
    
        const hour = dateObject.getHours()
        const minute = dateObject.getMinutes()
        const second = dateObject.getSeconds()
        const currentTime = Convert(hour) + ' : ' + Convert(minute) + ' : ' + Convert(second)
        
        setTime(currentTime)
        }, 1000)
    }, [])
    
    const Convert = (number:number) => {
        return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2
        })
    }
    
    return (
        <div className='clock'>
        <h1>
            {time}
        </h1>
        </div>
    );
}
 
export default Clock;