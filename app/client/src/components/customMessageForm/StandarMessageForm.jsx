import React, { useState } from "react";
import MessageFormUi from "./MessageFormUi";

// ...

const StandarMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachement, setAttachement] = useState("");
  

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    const at = attachement ? [{ blob: attachement, file: attachement.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    console.log("Form to submit:", form);
    props.onSubmit(form);
    setMessage("");
    setAttachement('');
  };

  return (
    <MessageFormUi   
    setAttachement={setAttachement}
    message={message}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    />
  );
};

export default StandarMessageForm;

