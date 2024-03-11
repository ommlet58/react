import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "../customHeader";
import StandarMessageForm from "../customMessageForm/StandarMessageForm";
function Chat() {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "test-user",
        "1234"
    )


  return <div style={{flexBasis: "100%" }}>
    <MultiChatWindow
    {...chatProps}
    style={{height:"100vh"}}
    renderChatHeader={(chat)=> <Header chat={chat}/>}
    renderMessageForm={(props)=>{
      return (
        <StandarMessageForm props={props} activeChat={chatProps.chat} />
        )
      }}
    />
      <MultiChatSocket {...chatProps}></MultiChatSocket>
    
  </div>;
}

export default Chat;
