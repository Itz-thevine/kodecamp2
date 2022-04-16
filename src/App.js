import { useState, useReducer } from 'react';
import './App.css';


const formReducer = (state, event) =>{
  return{
    ...state,
    [event.name]: event.value
  }
}


function App() {

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData]= useReducer(formReducer, {});

  const handleChange = (event)=>{
    setFormData(
      {
        name: event.target.name,
        value: event.target.value,
      }
    )
  }

  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);


  //  setTimeout(() => {
  //    setSubmitting(false);
  //  }, 3000)
 }
  return (
    <div className="App">
      <div>
        <h1>Profile form</h1>
      </div>
      <div className='display'>
        {
          submitting ? 
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}
            </ul>
          </div>
          : <p>No content</p>
        }
      </div>
      <div className='formWrapper'>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <label htmlFor="">
              <p className='labelStyle'>
                FirstName:
              </p> 
              <input type="text" name='firstName' className='inputStyle' onChange={handleChange}/>
            </label>
              <label htmlFor="">
                <p className='labelStyle'>
                  LastName:
                </p> 
                <input type="text" name='lastName' className='inputStyle' onChange={handleChange}/>
              </label>
          </div>
          <div className='formControl'>
            <label htmlFor="">
              <p className='labelStyle'>
                Email:
              </p> 
              <input type="email" name='Email' className='inputStyle' onChange={handleChange}/>
            </label>
              <label htmlFor="">
                <p className='labelStyle'>
                  Gender:
                </p> 
                <select name="Gender" onChange={handleChange} id="" className='select' defaultValue={{ label: "none", value: 2 }}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">none</option>
                </select>
              </label>
          </div>
          <div className='formControl'>
            <label htmlFor="">
              <p className='labelStyle'>
                Adddress:
              </p> 
              <input type="text" name='Address' onChange={handleChange} className='inputStyle'/>
            </label>
            <textarea placeholder='Bio' name='bio' type="text" className='textStyle' onChange={handleChange}/>
          </div>
          <div className='formControl'>
            <input type="submit" className='submit'  />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
