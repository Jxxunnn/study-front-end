import { loadPosts } from "@/lib/load-posts";
import React from "react";

export default function Blog({ posts }: any) {
  // Render posts...
  return <div>Blog</div>;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = res.json() as any;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // {fallback: false} means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post 'id',
  // If the route is like /post/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      post,
    },
  };
}
