import React, { useRef, useEffect, useContext, useState } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatContainer = () => {

  const {messages, selectedUser,setSelectedUser,sendMessage, getMessages}= useContext(ChatContext)

  const {authUser, onlineUsers}= useContext(AuthContext)
  const scrollEnd = useRef();

  const [input, setInput]= useState('');
//Handle sending a message
  const handleSendMessage= async(e)=>{
     e.preventDefault();
     if(input.trim()==="") return null;
     await sendMessage({text: input.trim()});
     setInput("")
  }
  
  //Handle sending an image
  const handleSendImage = async(e)=>{
    const file = e.target.files[0];
    if(!file || !file.type.startsWith("image/")){
      toast.error("Select an image file")
      return;
    }
    const reader= new FileReader();
    reader.onloadend= async()=>{
      await sendMessage({image: reader.result})
      e.target.value=""
    }
    reader.readAsDataURL(file)
  }

  useEffect(()=>{
    if(selectedUser)
    {
      getMessages(selectedUser._id)
    }
  },[selectedUser])

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return selectedUser ? (
    <div className="h-full flex flex-col overflow-hidden relative backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 px-4 border-b border-stone-500">
        <img
          src={selectedUser?.profilePic || assets.avatar_icon}
          alt="User"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser?.fullName}
         {onlineUsers.includes(selectedUser._id) && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="Back"
          className="md:hidden max-w-7 cursor-pointer"
        />
        <img
          src={assets.help_icon}
          alt="Help"
          className="max-md:hidden max-w-5"
        />
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col flex-grow overflow-y-scroll p-3 pb-28">
        {messages.map((msg, index) => {
          const isCurrentUser = msg.senderId === authUser._id;

          return (
            <div
              key={index}
              className={`flex items-end gap-2 mb-4 ${
                isCurrentUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar + Time */}
              <div className="text-center text-xs">
                <img
                  src={
                    isCurrentUser
                      ? authUser?.profilePic || assets.avatar_icon
                      : selectedUser?.profilePic || assets.avatar_icon
                  }
                  alt="avatar"
                  className="w-7 rounded-full"
                />
                <p className="text-white text-[10px] bg-black/40 px-2 py-[2px] rounded-md mt-1">
                  {formatMessageTime(msg.createdAt)}
                </p>
              </div>

              {/* Message Bubble or Image */}
              {msg.image ? (
                <img
                  src={msg.image}
                  alt="media"
                  className="max-w-[230px] border border-gray-700 rounded-lg"
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg break-words bg-violet-500/30 text-white ${
                    isCurrentUser ? "rounded-br-none" : "rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </p>
              )}
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

      {/* Message Input */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/10 px-3 rounded-full">
          <input onChange={(e)=>setInput(e.target.value)} value={input} onKeyDown={(e)=>e.key ==="Enter"?handleSendMessage(e) : null}
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none
            text-white placeholder-gray-300 bg-transparent"
          />
          <input onChange={handleSendImage} type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="Upload"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img onClick={handleSendMessage}
          src={assets.send_button}
          alt="Send"
          className="w-7 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} className="max-w-16" alt="logo" />
      <p className="text-lg font-medium text-white">Let's Chat!</p>
    </div>
  );
};

export default ChatContainer;
