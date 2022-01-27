import { useRouter } from 'next/router';
import React from 'react';

function review() {
    const router = useRouter()
    const { productid, review } = router.query
    return <div>product id is :{productid} and review is :{review} </div>;
}

export default review;
