import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await response.json();
  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postid: `${post.id}`,
  //     },
  //   };
  // });

  // console.log(paths);

  return {
    paths: [
      {
        params: { postid: '1' },
      },
      {
        params: { postid: '2' },
      },
      {
        params: { postid: '3' },
      },
    ],
    // paths,
    // fallback: false,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
