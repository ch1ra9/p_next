import { useRouter } from 'next/router';
import React from 'react';

function index() {
    const r = useRouter()
   
  return <div>hi this is product page</div>;
}

export default index;
