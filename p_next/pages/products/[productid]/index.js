import React from 'react';
import { useRouter } from "next/router";
function productid() {
    const router = useRouter()
    const id = router.query.productid
    return <div>hi your id is {id}</div>;
}

export default productid;
