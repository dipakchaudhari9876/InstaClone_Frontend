import React, { useEffect, useState } from 'react'
import { sendData } from '../../utilities/utils'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import "./upload.css"



const Upload = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let actualDate = `${day}-${month}-${year}`

  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const [data, setData] = useState({ name: "", location: "", likes: 0, description: "", postImage: "", date: actualDate })

  const sendFile = async (file) => {
    if (!file) {
      alert("Please choose image")
    } else {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "qheohyha")

      const temp = await Axios.post("https://api.cloudinary.com/v1_1/duozpcxox/image/upload", formData)
      setData({ ...data, postImage: `${temp.data.url}` })
      return temp.data.url

    }

  }



  const onSubmitHandler = async (e) => {
    e.preventDefault()
    let { name, location, description, postImage } = data
    if (!name || !location || !description) {
      alert("Please fill all data")
    } else {
      let imgData = await sendFile(file) 

      if (imgData) {

        if (!postImage) {
          alert("Click on post again")

        } else {
          sendData(data)
          navigate('/instaclone')
        }
      } else {
        alert("Error in sending image to cloudinary")
      }
    }

  }

  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <form method='POST' onSubmit={onSubmitHandler}>
          <div className='inputs'>
            <input type="file" onChange={(e) => {
              setFile(e.target.files[0])
            }} />
          </div>
          <div>
            <div className='input-author'>
              <input type="text" placeholder='Author' onChange={(e) => {
                setData({ ...data, name: e.target.value })
              }} />
              <input type="text" placeholder='Location' onChange={(e) => {
                setData({ ...data, location: e.target.value })
              }} />
            </div>
          </div>
          <div className='inputs'>
            <input className='description' type="text" placeholder='Description' onChange={(e) => {
              setData({ ...data, description: e.target.value })
            }} />
          </div>
          <div>
            <button className='btn' type="submit">POST</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload