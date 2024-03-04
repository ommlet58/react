import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import {useQuery } from '@tanstack/react-query'
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import {makeRequest} from "../../axios";
import { AuthContext } from "../../context/authContext";


const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);
  

  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', { postId: post.id }],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/likes", {
          params: { postId: post.id }
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
  
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) {
        return makeRequest.delete(`/likes?postId=${post.id}`);
      }
      return makeRequest.post('/likes', { postId: post.id });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.refetchQueries(['likes', { postId: post.id }]);
    },
  });
  const deleteMutation = useMutation({
    mutationFn: (postId) => {
      
      return makeRequest.delete('/posts/' + postId);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.refetchQueries(['posts']);
    },
  });
  
  const handlike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };
  
  const handleDelete = ()=> {
    deleteMutation.mutate(post.id);
  }
  
  
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userid}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={()=>setMenuOpen(!menuOpen)} />
        {
          (menuOpen && post.userid === currentUser.id) && <button onClick={handleDelete} >delete</button>
        }
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./uplead/"+post.img} alt={post.img} />
          
        </div>
        <div className="info">
          <div className="item">
            { !isLoading? ( data.includes(currentUser.id) ? <FavoriteOutlinedIcon style={{color:'red'}} onClick={handlike} /> : <FavoriteBorderOutlinedIcon onClick={handlike} />) :"Loading"
            }
            {data ? data.length : "0 "
            } Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
