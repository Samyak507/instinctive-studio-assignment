'use client';
import Header from '../app/components/Header';
import { MainSection } from "./components/MainSection"
// import QuickLinks from '../app/components/QuickLinks';
// import ClassSchedule from '../app/components/ClassSchedule';
// import VideoPlayerModal from '../app/components/VideoPlayerModal';
// import { AccessClassRecordings } from '@/app/components/AccessClassRecordings'
import NoLiveClass from '../app/components/NoLiveClass';
import styles from '../app/styles/Home.module.css';
import { useState } from 'react';

const Home = () => {
  const [hasLiveClass, setHasLiveClass] = useState<boolean>(true);

  return (
    <>
      <Header userName="Gokul Raj" />
      <MainSection  />
    </>

  );
};

export default Home;
