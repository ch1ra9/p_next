import { useRouter } from 'next/router';

function AllRoute() {
    
    const router = useRouter()
    const { allRoute } = router.query

    console.log(allRoute);
    return <div></div>;
}

export default AllRoute;
