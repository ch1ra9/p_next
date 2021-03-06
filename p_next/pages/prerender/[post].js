
import axios from 'axios'
import { useRouter } from 'next/router'
function Post({ data }) {

  console.log();


  return <div>  <div>
    <p > {data.id} {data.title}</p>

    <hr />
  </div>  </div>;
}


export default Post;



export const getStaticPaths = async () => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  // const data = await d.json()
  // console.log(data);
  const paths = data.data.slice(0, 5).map(e => {
    return {
      params: {
        post: e.id.toString()
      }
    }

  })
  return {
    paths,
    fallback: true,
  }

}



export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.post
  const re = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
  console.log('@@', re);

  return {
    props: {
      data: re.data,
    }
  }
}
