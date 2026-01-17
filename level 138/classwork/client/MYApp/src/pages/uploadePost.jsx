const UploadePost = () =>{
  const handlePost = async (e) =>{
    e.preventDefault()

    const data ={
      title: e.target.title.value,
      content: e.target.content.value
    }
    try{
      const res = await fetch('http://localhost:3000/posts',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
      })
        if (!res.ok) {
        throw new Error("Post creation failed");
      }alert("Post added successfully ");
    }catch(err){
      console.log(err)
    }

  }
  return(
    <section>
        <form onSubmit={handlePost}>
          <input type="text" name = 'title' placeholder="title" required />

         <textarea name="content" placeholder="content" required
        />

          <button type="submit">Add post</button>
        </form>
    </section>
  )
}

export default UploadePost

// 1) შექმენით UploadPost კომპონენტი, კომპონენტების ფოლდერში, შექმენით ფორმა სადაც გექნებათ title და content ინფუთები თავისი სახელებით, შექმენით handleSubmit ფუნქციაც რომელიც დადასტურების შემდეგ წაიკითხავს ფორმის ინფოს
