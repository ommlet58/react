import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const StandarMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachement, setAttachement] = useState("");
  const [preview, setPreview] = useState("");

  console.log(props);
  console.log(activeChat);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
  
    const at = attachement ? [{ blob: attachement , file:attachement.name}]:[];
    const form = {
      attachment : at,
      created : date,
      sender_username: props.username,
      text:message,
      activeChatId: activeChat.id,
    }
    props.onSubmit(form);
    setMessage("");
    setAttachement('');
    };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          ></img>
          {
            <XMarkIcon
              className="message-form-icon-x"
              onClick={() => {
                setPreview("");
                setAttachement("");
              }}
            />
          }
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Send a message ..."
          ></input>
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachement(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()}></input>
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                ></PaperClipIcon>
              </div>
            )}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StandarMessageForm;
