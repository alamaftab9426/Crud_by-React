import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'
import './App.css'

function App() {
  const model = {
    fullname:'',
    class:'',
    roll:'',
    subject:'',
    dob:''

  }
const [editIndex, setEditIndex ] = useState(null)

  const [open, setOpen] = useState(-450)
  const [students, setStudents]= useState([])
  const [form, setForm]=useState(model)





  const handle = () => {
    setOpen(0)
  }



const handleInput = (e)=>{
  const input = e.target
  const value = (input.value)
  const key = input.name
  setForm ({
    ...form,
    [key]:value
  })


}
 
const createStudent = (e)=>{
  e.preventDefault()

  setStudents([
    ...students,
    form
  ])
  setForm(model)
  setOpen(-450)
}
  
 const deleteStudent=(index)=>{
  const backup =[...students]
  backup.splice(index,1)
  setStudents(backup)


 }
 

  const editStudent =(index)=>{
setOpen(0)
setForm(students[index])
setEditIndex(index)

  }

  const saveStudent =(e)=>{
    e.preventDefault()
    const backup = [...students]
    backup[editIndex] = form
    setStudents(backup)
   setForm(model)
  setEditIndex(null)
  setOpen(-450)
  
  }
  const colseDrawer = ()=>{
    setOpen(-450)
    setForm(model)
    setEditIndex(null)
  }

  return (
    <div style={{
      backgroundColor: '#ddd',
      minHight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        width: '75%',
        margin: '32px auto',
        padding: 32

      }}>
        <h1 style={{
          padding: 0,
          margin: 0,
          textAlign: 'center',
        }}>Curd React Application</h1>

        <button style={{
          padding: '14px 25px',
          border: 'none',
          backgroundColor: '#8407BA',
          color: 'white',
          borderRadius: '5px',
          fontSize: '15px'



        }} onClick={handle}> <i className="ri-user-add-fill" style={{ marginRight: '5px' }}></i>New Student</button>

        <table className='curd-app' style={{
          margin: "20px 0"
        }}>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Student'S Name</th>
              <th>Subejct</th>
              <th>Class</th>
              <th>Roll Number</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
             {
              students.map((item,index)=>(
                
                <tr>
                    <td>{index+1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.subject}</td>
                    <td>{item.class}</td>
                    <td>{item.roll}</td>
                    <td>{item.dob}</td>
                    <td>
                      <div>
                      <button
                      onClick={()=>editStudent(index)}
                      
                      style={{
                        padding: '9px',
                        borderRadius: '3px',
                        boxShadow: '0 0  8px 0 black',
                        background: 'green',
                        color: 'white',
                        fontSize: '15px',
                        border: 'none',
                        marginRight: '15px'


                      }}><i className="ri-file-edit-fill"></i></button>
                      <button 
                      onClick={()=>deleteStudent(index)}
                      style={{
                        padding: '9px',
                        borderRadius: '3px',
                        boxShadow: '0 0  8px 0 black',
                        background: 'red',
                        color: 'white',
                        fontSize: '15px',
                        border: 'none'

                      }}><i className="ri-delete-bin-2-line"></i></button>
                    </div>
                  </td>
                </tr>
              ))
             }
                
             

          </tbody>
        </table>

      </div>
      n
      <div style={{
        position: 'fixed',
        top: 0,
        right: open,
        width: 400,
        background: 'white',
        height: '100%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        padding: 23,
        transition: '0.3s'

      }}>
        <button style={{
          border: 'none',
          background: '#8407BA',
          top: 20,
          right: 35,
          position: 'absolute',
          fontSize: 18,
          borderRadius: '20px',
          color: 'white'
        }} onClick={colseDrawer}><i className="ri-close-circle-line"></i></button>
        <h1 style={{ fontFamily: 'cursive' }}>My Drawer</h1>
        <hr style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '17',
          marginBottom: '20px'
        }}></hr>
        <form
         onSubmit={editIndex  === null ? createStudent : saveStudent}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,

          }}>
          <input
          value={form.fullname}
           onChange={handleInput}
            type='text' name='fullname'
            placeholder="Enter Your Full Name" required
            style={{
              border: '2px solid black',
              padding: 12,
              borderRadius: '5px'
            }} />
          <input
          value={form.class}
            onChange={handleInput}
            type="text" name='class' placeholder="Enter Your Class Name" required style={{
              border: '2px solid black',
              padding: 12,
              borderRadius: '5px'
            }} />
          <input
          value={form.roll}
          onChange={handleInput}
            type="number" name='roll' placeholder="Enter Your Roll Number" required style={{
              border: '2px solid black',
              padding: 12,
              borderRadius: '5px'
            }} />
          <input
          value={form.subject}
            onChange={handleInput}
            type="text" name='subject' placeholder="Enter Your Subject Name" required style={{
              border: '2px solid black',

              padding: 12,
              borderRadius: '5px'
            }} />
          <input
            value={form.dob}
            onChange={handleInput}
            type="date" name='dob' required style={{
              border: '2px solid black',

              padding: 12,
              borderRadius: '5px'


            }} />
            {
              editIndex === null ?
              <button style={{
                border: 'none',
                background: '#8407BA',
                color: 'white',
                fontSize: 18,
                padding: 12,
                borderRadius: 5,
                margin: '20px 0'
              }}>Submit</button>
              :
              <button style={{
                border: 'none',
                background: 'deeppink',
                color: 'white',
                fontSize: 18,
                padding: 12,
                borderRadius: 5,
                margin: '20px 0'
    
              }}>Save</button>
               
            }
         


        </form>
      </div>




    </div>

  )
}
export default App