import React from 'react';
import { MdOutlineDeleteForever,MdEmojiEvents   } from "react-icons/md";
import { FaImages,FaCloudUploadAlt  } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

export const SidebarData = [
  
  {
    title: 'Images',
    path: '/products',
    icon: <FaImages  />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/eventsImages',
    icon: <MdEmojiEvents  />,
    cName: 'nav-text'
  },
  {
    title: 'Delete Images',
    path: '/images',
    icon: <MdOutlineDeleteForever  />,
    cName: 'nav-text'
  },
  {
    title: 'Delete Events',
    path: '/eventsDelete',
    icon: <MdOutlineDeleteForever  />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/contact',
    icon: <IoMdContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Pdf Upload',
    path: '/pdf',
    icon: <FaCloudUploadAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Video Upload',
    path: '/video',
    icon: <FaCloudUploadAlt />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Event Registerations',
    path: '/reg-eve',
    icon: <FaCloudUploadAlt />,
    cName: 'nav-text'
  }
];

