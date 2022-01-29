import axios from "axios";
import { useState, useEffect } from "react";
function dashboard() {
    const [Loading, setLoading] = useState(false);
    const [DashboardData, setDashboardData] = useState(null);

    useEffect(() => {

        const fetchDashbordData = async () => {
            const res = await axios.get('http://localhost:4000/dashboard')
            console.log(res.data);
            setDashboardData(res.data)

        }; fetchDashbordData()
    }, []);
    if (Loading) {
        return (<>
            <div>
                Loading......
            </div>
        </>)
    } else {
        return <div>
            <div>dasbord</div>
            <h2></h2>
        </div>;
    }

}

export default dashboard;
