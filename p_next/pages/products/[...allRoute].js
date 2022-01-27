import { useRouter } from 'next/router';
import React from 'react';

function allRoute() {
    
    const router = useRouter()
    const { allRoute } = router.query

    console.log(allRoute);
    return <div></div>;
}

export default allRoute;
