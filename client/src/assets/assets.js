import avatar_icon from './avatar_icon.png'
import gallery_icon from './gallery_icon.svg'
import help_icon from './help_icon.png'
import logo_icon from './logo_icon.svg'
import logo_big from './logo_big.svg'
import logo from './logo.png'
import profile_Jason from './profile_Jason.png'
import profile_Henry from './profile_Henry.png'
import profile_rafael from './profile_rafael.png'
import profile_Liza from './profile_Liza.png'
import profile_martin from './profile_martin.png'
import search_icon from './search_icon.png'
import send_button from './send_button.svg'
import menu_icon from './menu_icon.png'
import arrow_icon from './arrow_icon.png'
import code from './code.svg'
import bgl_image from './bgl_image.svg'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'

const assets = {
    avatar_icon,
    gallery_icon,
    help_icon,
    logo_big,
    logo_icon,
    logo,
    search_icon,
    send_button,
    menu_icon,
    arrow_icon,
    code,
    bgl_image,
    profile_martin
}

export default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, pic1, pic2]

export const userDummyData = [
  {
    _id: "680f50aaf10f3cd28382ecf2",
    email: "test1@user.com",
    fullName: "Jason Rodriguez",
    profilePic: profile_Jason,
    bio: "Hello Everyone! I am using ChatHive",
  },
  {
    _id: "680f50e4f10f3cd28382ecf9",
    email: "test2@user.com",
    fullName: "Martin Williams",
    profilePic: profile_martin,
    bio: "Hello Everyone! I am using ChatHive",
  },
  {
    _id: "680f510af10f3cd28382ed01",
    email: "test3@user.com",
    fullName: "Liza Brown",
    profilePic: profile_Liza,
    bio: "Hello Everyone! I am using ChatHive",
  },
  {
    _id: "680f5137f10f3cd28382ed10",
    email: "test4@user.com",
    fullName: "Rafael Jones",
    profilePic: profile_rafael,
    bio: "Hello Everyone! I am using ChatHive",
  },
  {
    _id: "680f516cf10f3cd28382ed11",
    email: "test5@user.com",
    fullName: "Henry Jackson",
    profilePic: profile_Henry,
    bio: "Hello Everyone! I am using ChatHive",
  },
];

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": img1,
        "seen": true,
        "createdAt": "2025-06-11T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": img2,
        "seen": true,
        "createdAt": "2025-06-11T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-06-11T10:24:08.523Z",
    }
]
