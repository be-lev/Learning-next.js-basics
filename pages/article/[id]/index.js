import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query

  return (
    <>
    <Meta title={article.title} description={article.excerpt} />
      This is an article number {article.id}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//     const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

//!use it as a static web site
export const getStaticProps = async (context) => {
    const res = await fetch(
      `${server}/api/articles/${context.params.id}`
    );
  
    const article = await res.json();
  
    return {
      props: {
        article,
      },
    };
  };
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
  
    const articles = await res.json();
  
    const ids = articles.map((article) => article.id);
  
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  };
  

// //!use it as a static web site
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };


// Export static site:
// 1. run build: "npm run build"
// 2. install serve: "npm -g serve"
// than run "serve -s out 8000 (example)"

export default article;
