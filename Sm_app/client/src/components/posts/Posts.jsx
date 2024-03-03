import Post from "../post/Post";
import "./posts.scss";
import {useQuery } from '@tanstack/react-query'
import {makeRequest} from "../../axios";
const Posts = ({userId}) => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/posts?userId="+userId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });


  
  return <div className="posts">
    {error ? "Somthing went wrong": (isLoading? "loading" :data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </div>;
};

export default Posts;
