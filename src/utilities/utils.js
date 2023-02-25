const fetchData = async () => {
    try{
        const data = await fetch("https://instaclone-backend-yuf0.onrender.com/getall")
        return data.json()

    }catch(err){
        console.log(err)
    }
}

const sendData = async (temp) => {
    const res = await fetch('https://instaclone-backend-yuf0.onrender.com/upload', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(temp)
    })
    const user = await res.json()
    console.log(user)
  }

export {
    fetchData,
    sendData
}