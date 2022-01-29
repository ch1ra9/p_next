import axios from "axios";


function category({data,category}) {
  console.log(data);
  return <div>
    <h1>Filter {category}</h1>
    {
      
      data.map(e => {
        return(
           <div key={e.id}>
          <h3>{e.id} {e.Name}</h3>
          </div>
          )
       
      })
    }
  </div>;
}


export default category;



// export const getStaticPaths = async () => {
//   const data = await axios.get('https://jsonplaceholder.typicode.com/posts/')
 
//   const paths = data.data.slice(0, 5).map(e => {
//     return {
//       params: {
//         post: e.id.toString()
//       }
//     } 

//   })
//   return {
//     paths,
//     fallback: true,
//   }

// }



export const getServerSideProps = async (context) => {
 
  const category = context.params.category
 
  console.log('@@@@',category);
  const res = await axios.get(`http://localhost:4000/items?Price=${category}`);
 

  return {
    props: {
      data: res.data,
      category
      
    }
  }
}
