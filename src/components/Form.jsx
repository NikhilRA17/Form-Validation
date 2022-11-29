import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    rating: yup.number().positive().integer().required().min(1).max(5),
    name: yup.string().required('Username is required!!!').min(2,'Username must be greater than 2 characters').max(15,'Username must be less than 15 characters'),
    comment: yup.string().required('Please give us your Feedback!!!')
}).required();

const AddForm = () => {

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });
    //   const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        console.log(data);

        reset()
        const msg = JSON.stringify(data);
        alert(`Current State is: ${msg}`);
    }

  return (
    <div className="App" style={{border:'2px solid grey', borderRadius:'10px', width:'350px', padding:'20px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5 style={{marginBottom:'20px'}}>Submit Comment</h5>
              <div>
                  <label className="form-label">Ratings</label><br></br>
                  <input type={'number'} {...register('rating')} className="form-control"/>
                  <p style={{color:'red'}}>{errors.rating?.message}</p>
              </div>

              <div>
                  <label className="form-label">Username</label><br></br>
                  <input type={'text'} {...register('name')} className="form-control"/>
                  <p style={{color:'red'}}>{errors.name?.message}</p>
              </div>

              <div>
                  <label className="form-label">Comment</label><br></br>
                  <textarea {...register('comment')} className="form-control"></textarea>
                  <p style={{color:'red'}}>{errors.comment?.message}</p>
              </div>           
              <button className="btn btn-primary" style={{marginTop:'20px'}}>Submit</button>
        </form>
    </div>
  )
}

export default AddForm