//pre rendering +clientside data fetching


import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function eventList({ eventlist }) {
    console.log(eventlist);
    // const [Events, setEvents] = useState({});

    // const buttonHandler = async () => {
    //     const r = await (await axios.get('http://localhost:4000/events?categpry=sports')).data
    //     console.log(r);


    // }
    return <div>
        <button onClick={buttonHandler}>
            b
        </button>
        <div>list of events</div>{
            eventlist.map(e => {

                return (

                    <div>{e.id} {e.category} {e.name}</div>
                )

            })
        }

    </div>;
}

export default eventList;


export const getServerSideProps = async () => {
    const res = await axios("http://localhost:4000/events").data

    //console.log(res.data);
    return {
        props: {
            eventlist: res
        }
    }
}