import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const schema = yup.object({
    rating: yup.number().positive().integer().required().min(1,'Please Rate us above 1').max(5,'Sorry Rating limit is 5'),
    author: yup.string().required('Username is required!!!').min(2,'Username must be greater than 2 characters').max(15,'Username must be less than 15 characters'),
    comment: yup.string().required('Please give us your Feedback!!!')
}).required();

const AddForm = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = (data) => {
  
        const userObj = {
            author: data.author,
            rating: data.rating,
            comment: data.comment
        }

        console.log(userObj);

        reset()
      
        const msg = JSON.stringify(userObj);
        alert(`Current State is: ${msg}`);
    }

  return (
    <div className='App'>
      
     <div style={{width:'100%', border:'2px solid red', textAlign:'center'}}>
      <img src='data:image/jpeg;base64,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'/>
     <br></br>
     <button onClick={handleShow} className="btn btn-primary">Submit Comment</button>
     </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label className="form-label">Ratings</label><br></br>
                  <input type={'number'} {...register('rating')} className="form-control"/>
                  <p style={{color:'red'}}>{errors.rating?.message}</p>
              </div>

              <div>
                  <label className="form-label">Username</label><br></br>
                  <input type={'text'} {...register('author')} className="form-control"/>
                  <p style={{color:'red'}}>{errors.author?.message}</p>
              </div>

              <div>
                  <label className="form-label">Comment</label><br></br>
                  <textarea {...register('comment')} className="form-control"></textarea>
                  <p style={{color:'red'}}>{errors.comment?.message}</p>
              </div>           

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button className="btn btn-primary" style={{ marginTop: '20px' }} >Submit</button>
              </div>
        </form>
        </Modal.Body>
       
      </Modal>
      </div>



        
    
  )
}

export default AddForm