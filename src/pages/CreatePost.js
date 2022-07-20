import React, {useState, useEffect} from 'react'
import {db, auth} from '../firebase-config'
import {addDoc, collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'


const CreatePost = ({isAuth}) => {

  const navigate = useNavigate()

  // 防止未登入的人進入 createpost頁面
  useEffect(() => {
    !isAuth && navigate('/login')
  },[])


  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  
  // firebase的collection
  const postsCollectionRef = collection(db, 'posts')

  const handleSubmit = async () => {
    await addDoc(postsCollectionRef, {title:title, post:post, author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
    navigate('/')
    // 回到Home畫面
  }

  return (
    <div className="createPost-container">
      <div className="create-title">
        <label> Title : </label>
        <input placeholder='title...' type="text" onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="create-post">
        <label> Post : </label>
        <textarea placeholder='post...' cols="30" rows="10" onChange={e => setPost(e.target.value)}></textarea>
      </div>
      <button className='create-post-btn' onClick={handleSubmit} >Submit Post</button>
    </div>
  )
}

export default CreatePost