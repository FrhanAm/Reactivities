import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';

const Home: NextPage = () => {

  const [activities, setActivities] = useState<any>([]);
  useEffect(() => { 
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response)
      setActivities(response.data);
    })
  }, [])

  return (
    <div className={styles.container}>
      <Header as="h2" icon="users" content="Reactivities" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
