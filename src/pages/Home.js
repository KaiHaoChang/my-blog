import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebase-config'
import { getDocs, doc, collection, deleteDoc} from 'firebase/firestore'

const Home = ({isAuth}) => {

  const [posts, setPosts] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    getPosts() // 呼叫 getPosts() 函式
  },[posts])

  // 刪除文章
  const handleDelete = async (id) => {
    const postDoc = doc(db, 'posts', id )
    await deleteDoc(postDoc)
  }

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.post}</p>
            <p>{post.author.name}</p>
            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={()=>handleDelete(post.id)} >Delete</button>} 
            {/* 如果已登入 且 登入人與發文者相同時後才會顯示刪除按鈕 */}
          </div>
        )
      })}
    </div>
  )
}

export default Home