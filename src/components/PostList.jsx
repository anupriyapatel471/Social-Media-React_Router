import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostlistData } from "../store/post-list-store";
import { useLoaderData } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts; //returning promise
    });
};
export default PostList;
