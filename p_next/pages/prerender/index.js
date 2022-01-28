import React from 'react';
import axios from 'axios'
import Link from 'next/link';

function prerender({ data }) {
    console.log(data);
    return <div>
        <div>
            <h1>data</h1>
        </div>
        {
            data.map(e => {
                return (
                    <div key={e.id}>
                        <Link href={`/prerender/[post]`} as={`/prerender/${e.id}`} >
                            <div>
                                <p > {e.id} {e.title}</p>

                                <hr />
                            </div>

                        </Link>
                    </div>
                )

            })
        }

    </div>;
}

export default prerender;

// export const getStaticProps = async () => {

//     const re = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log('@@', re);

//     return {
//         props: {
//             data: re.data,
//         }
//     }
// }


export const getServerSideProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('@@', res);

    return {
        props: {
            data: res.data,
        }
    }

}