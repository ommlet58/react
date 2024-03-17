
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";



function MessageFormUi({
    setAttachement,
    message,
    handleChange,
    handleSubmit

}) {

    const [preview,setPreview]=useState("");

  return (
    <div>

<div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onDrop={() => URL.revokeObjectURL(preview)}
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
                <input {...getInputProps()} />
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
  

    </div>
  )
}

export default MessageFormUi