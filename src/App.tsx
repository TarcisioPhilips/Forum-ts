import {Post, PostType} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/TarcisioPhilips.png',
      name: 'Tarcisio Philips',
      role: 'Bug Creator @ Escola DNC'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Escola DNC DAY, evento da DNC. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-03-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/barbxrx.png',
      name: 'Babisete',
      role: 'Mae de Dev @ Escola DNC'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Escola DNC DAY, evento da DNC. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-03-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => { 
            return (
              <Post
                key={post.id}
                post = {post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

