import { gql, useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";
import { UserContext } from "../../Context/UserContext";

import ErrorMess from "../Utility/ErrorMess";

const CREATECHAT = gql`
   mutation ($user: [String!]!) {
    createChat(
      user: $user
    ) {
      errors {
        field
        message
      }
      chat {
        _id
    users
    lastMessage
        }
      }
    }
`;

export const ChatButton = (props:any) => {
  
    const [createChat]=useMutation(CREATECHAT)
    const channel=useContext(ChatChannelContext)
    const user=useContext(UserContext)
  const navigate = useNavigate();
  const users =new Array<String>()
  users.push(props.props)
  const handleCreate=async()=>{
      try{
    const {data,errors}= await createChat({variables:{
        user:users,
    }})
    if (errors){return <ErrorMess/>}

    if (data.createChat.errors ===null){
         channel.setChatChannel(data.createChat.chat._id)
        
        navigate("../../chat")   
    }
    else{
        channel.setChatChannel(data.createChat.chat._id)
         navigate("../../chat")
        // window.location.reload();
    }}
    catch(err){
        console.error(err)
    }

  }
  return (
    <Button
      onClick={()=>
      {  handleCreate()
      }}
    >
      Chat
    </Button>
  );
};
