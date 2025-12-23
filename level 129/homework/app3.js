const express = require('express')

const app3 = express()
const tasks = [
  { id: 1, title: 'Learn Express.js', completed: false },
  { id: 2, title: 'Build a REST API', completed: false },
  { id: 3, title: 'Handle DELETE requests', completed: false },
  { id: 4, title: 'Practice routing', completed: false },
  { id: 5, title: 'Test with Postman', completed: false }
]
app3.delete('/tasks',(req,res)=>{
  const id = Number(req.query.id)
  

   if (!id) {
    return res.status(400).json({
      message: 'Task id is required'
    })
  }

const index = tasks.findIndex(t => t.id === id)

  if(index === -1){
    return res.status(404).json({
      message: 'Task not Found'
    })
  }
  tasks.splice(index,1)

  res.json({message: `task with th id of ${id} deleted sucesfully`})

})

app3.listen(3000,()=>{
  console.log('server is listen on port 3000')
})
// 4) მოუსმინეთ Delete მოთხოვნას '/tasks?id={id}' მოცემულ ბილიკზე, შეამოწმეთ თუ მოცემული id - ით task - არსებობს მაშინ წაშალეთ და დააბრუნეთ შესაბამისი message, სხვა შემთხვევაში კი დააბრუნეთ error - ის message - ი შესაბამისი status code - ით