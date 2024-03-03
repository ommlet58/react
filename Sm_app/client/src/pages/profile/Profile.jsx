import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import {useQuery } from '@tanstack/react-query'
import {makeRequest} from "../../axios";
import {useLocation} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {  useMutation, useQueryClient } from '@tanstack/react-query';


const Profile = () => {

  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const {currentUser}= useContext(AuthContext);



  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/users/find/"+userId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  
  const { isLoading:rlIsLoading, data:relationshipdata } = useQuery({
    queryKey: ['relationship'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/relationships?followedUserId="+userId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  console.log(relationshipdata);


  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (following) => {
      if (following) {
        return makeRequest.delete(`relationships/?userId=${userId}`);
      }
      return makeRequest.post('/relationships', { userId });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.refetchQueries(['relationship', { userId }]);
    },
  });
  
  const handleFollow = () => {
    mutation.mutate(relationshipdata.includes(currentUser.id));
  };
  

  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (rlIsLoading) {
    return <p>Loading...</p>;
  }



  return (
    <div className="profile">
      <div className="images">
        <img
          src={data.coverPic}
          alt=""
          className="cover"
        />
        <img
          src={data.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>
            {userId === currentUser.id ?( <button>update</button>) 
            :  <button  onClick={handleFollow}>{relationshipdata.includes(currentUser.id)? "following":"follow"}</button>}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts  userId={userId}/>
      </div>
    </div>
  );
};

export default Profile;
