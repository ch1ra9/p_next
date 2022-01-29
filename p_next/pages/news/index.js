import axios from "axios";
function news({ data }) {
    return <div>
        <h1>list of news</h1>

        {
            data.map(e => {
                return (
                    <div key={e.id}>

                        <div>
                            <p > {e.id} {e.Name}</p>

                            <hr />
                        </div>



                    </div>
                )
            })
        }

    </div>;
}

export default news;

export const getServerSideProps = async () => {


    const res = await axios.get('http://localhost:4000/items')
    console.log('@@', res);

    return {
        props: {
            data: res.data,
        }

    }

}