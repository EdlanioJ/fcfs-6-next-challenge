import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  body: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};

type PostsProps = {
  posts: Post[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <div className="h-screen">
      <Head>
        <title>Challenge List</title>
        <meta name="description" content="Challenge List" />
      </Head>
      <main className="mx-auto max-w-screen-2xl">
        <h1 className="text-5xl leading-normal text-gray-700 ml-4">
          Next Challenge Post List
        </h1>
        <div className="mx-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="m-5 mb-10 flex flex-col bg-white p-10 shadow-lg"
              >
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 relative">
                    <Image
                      className="rounded-full"
                      src={post.user.avatar}
                      alt={post.user.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h2 className="font-bold text-sm text-gray-700 ml-2">
                    {post.user.name}
                  </h2>
                </div>
                <h1 className="font-bold text-xl mb-2">{post.title}</h1>
                <p className="text-gray-700 text-justify text-base">
                  {post.body}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetch('http://localhost:3000/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
