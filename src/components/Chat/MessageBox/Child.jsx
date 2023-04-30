import "./Child.scss";
import React, { useRef } from "react";
import sendIcon from "../../../assets/images/Chat/sendIcon.svg";
import emojiIcon from "../../../assets/images/Chat/emojiIcon.svg";
import attachmentIcon from "../../../assets/images/Chat/attachmentIcon.svg";
import axios from "axios";

export default function Child() {
  const messageRef = useRef();
  return (
    <section className="message-box flex justify-between gap-3">
      <button className="w-12 h-12">
        <img src={emojiIcon} alt="emojiIcon" />
      </button>
      <textarea
        ref={messageRef}
        className=""
        type="text"
        cols="1"
        rows="1"
        placeholder="Type Something"
      />

      <button className="w-12 h-12">
        <img src={attachmentIcon} alt="attachmentIcon" />
      </button>
      <button
        className="w-12 h-12"
        onClick={async () => {
          const message = messageRef.current.value;
          console.log(message);
          messageRef.current.value = "";
          const data = {
            sender: "Joy",
            receiver: "Khusi",
            message: message,
            uniqueId: Date.now(),
          };
          const res2 = await axios
            .get("http://localhost:8000/api/database/")
            .then((res) => {
              return res;
            })
            .catch((err) => {
              return err;
            });

          console.log(res2, res2.data.data);

          console.log(data);

          const response = await axios
            .post("http://localhost:8000/api/sendMessage", data)
            .then((res) => {
              return res;
            })
            .catch((err) => {
              return err;
            });

          console.log(response.data.message);
        }}
      >
        <img src={sendIcon} alt="sendIcon" />
      </button>
    </section>
  );
}
