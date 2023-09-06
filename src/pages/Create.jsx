import React from 'react'
import '../styles/create.css'
const Create = () => {

	const handleCreate=(e)=>{
	
		console.log("created");
	}
  return (
    <div>
        <div>create</div>
        <div>create</div>
        <div>create</div>
        <div>create</div>
        <div>create</div>

        <div className='create-container'>
			<div class="form-container">
      			<div class="form-head">
         			Create Project
      			</div>
				<form action="">
      			
         			<div class="form-row">
            			<div class="input-data">
               				<input type="text" required/>
               				<div class="underline"></div>
               				<label for="">Project Name</label>
            			</div>
            			<div class="input-data">
               				<input type="text" required/>
               				<div class="underline"></div>
               				<label for="">Value</label>
           				</div>
         			</div>
         		
					<div class="form-row">
           				<div class="input-data">
           				   <input type="text" required/>
           				   <div class="underline"></div>
           				   <label for="">Sector</label>
           				</div>
           				<div class="input-data">
           				   <input type="text" required/>
           				   <div class="underline"></div>
           				   <label for="">Location</label>
           				</div>
         			</div>
					<div class="form-row">
           				<div class="input-data">
           				   <input type="text" required/>
           				   <div class="underline"></div>
           				   <label for="">Date</label>
           				</div>
           				<div class="input-data">
           				   <input type="text" required/>
           				   <div class="underline"></div>
           				   <label for="">Cover Image Url</label>
           				</div>
         			</div>
         			<div class="form-row">
         				<div class="input-data textarea">
         				   <textarea rows="8" cols="80" required></textarea>
         				   <br />
         				   <div class="underline"></div>
         				   <label for="">Project Description</label>
         				   <br />
						   
         				   <div onClick={handleCreate} class="form-row-btn submit-btn">
         				      <div class="input-data">
         				         <div class="inner"></div>
         				         <input type="submit" value="submit"/>
         				      </div>
         				   </div>
						 </div>  
					</div>	   
      </form>
      </div>
		</div>
    </div>
  )
}

export default Create;
