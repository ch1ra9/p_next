import axios from "axios";
import useSWR from "swr";

const fetcher = async () => {
    const res = await axios.get("http://localhost:4000/dashboard");
    return res.data;
}
function dashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return 'an error has occured'
    if (!data) return 'Loading';
    return (
        <div>
            <div>
                DashboardData
            </div>
            <p>{console.log(data)}</p>
        </div>
    )

}

export default dashboardSWR;
