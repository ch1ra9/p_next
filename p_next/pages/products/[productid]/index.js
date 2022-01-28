
import { useRouter } from "next/router";
function Productid() {
    const router = useRouter()
    const id = router.query.productid
    return <div>hi your id is {id}</div>;
}

export default Productid;
