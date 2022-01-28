import { useRouter } from 'next/router';

function Review() {
    const router = useRouter()
    const { productid, review } = router.query
    return <div>product id is :{productid} and review is :{review} </div>;
}

export default Review;
