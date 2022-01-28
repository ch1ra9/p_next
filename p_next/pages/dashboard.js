import axios from "axios";
import { useState, useEffect } from "react";
function dashboard() {
    const [Loading, setLoading] = useState(false);
    const [DashboardData, setDashboardData] = useState(null);

    useEffect(() => {

        const fetchDashbordData = async () => {
            const res = await axios.get('http://localhost:4000/dashboard')
            console.log(res.data);

        }; fetchDashbordData()
    }, []);

    return <div>hi there</div>;
}

export default dashboard;
