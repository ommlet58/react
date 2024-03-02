import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import {makeRequest} from "../../axios";
import moment from "moment";
import {useQuery } from '@tanstack/react-query'
import {  useMutation, useQueryClient } from '@tanstack/react-query';


const Comments = ({postId}) => {
  const { currentUser } = useContext(AuthContext);
 const [desc,setDesc]=useState("");
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/comments?postId="+postId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });



  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment)=>{
      return makeRequest.post('/comments',newComment)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.refetchQueries('comments');
    },
  })
  
  
  
    const handleClick = async (e)=>{
      e.preventDefault();
      
      mutation.mutate({desc, postId});
      setDesc('');
      
    }
  



  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" value={desc} onChange={e=>setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading ? 'Loading' : data.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
