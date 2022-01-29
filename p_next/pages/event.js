//pre rendering +clientside data fetching


import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function eventList({ eventlist }) {
    console.log(eventlist);
     const [Events, setEvents] = useState(eventlist);

    const buttonHandler = async () => {
        const r =  (await axios.get('http://localhost:4000/events?category=sports')).data
        console.log(r);
        setEvents(r)


    }
    return (<div>
        <button onClick={buttonHandler}>
            sports
        </button>
       
        <div>list of events</div>{
            Events.map(e => {

                return (

                    <div key={e.id}>{e.id} {e.category} {e.name}</div>
                )

            })
        }

    </div>
    )
}

export default eventList;


export const getServerSideProps = async () => {
    const res = await axios("http://localhost:4000/events")
    const d= res.data

    //console.log(res.data);
    return {
        props: {
            eventlist: d
        }
    }
}