import React from 'react'
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input , Modal, ModalHeader,Button, ModalBody,Table} from 'reactstrap';
import { auth } from '../../firebase';

function Posts({address,postId,location1,businessName,companyName,descriptions,industry,location,ownerEmail,web,timestamp,ownerId,ownerUsername,ownerphotoURL,phone,postImage}) {

    
    const parseTimestamp = (timestamp) => {
        try {
            let date = new Date(timestamp)
            return date.toUTCString()
        } catch (error) {
            console.error(error)
            return timestamp
        }
    }

    return (
        <div>
            {location1 === '' &&(
                <>
                   <React.Fragment key={postId}>
    <div style={{backgroundColor: "#fff"}}>
   <Table responsive> 
     <thead>
        <tr>
        <th>Company Name</th>
        <th>Logo</th>
       <th>Location</th>
       <th>Role</th>
       </tr>
     </thead>
     <tbody>
       <tr>
        <td>{companyName}</td>
        <td><img style={{objectFit: "cover",height:30}} src={postImage} alt='logo'/></td>
       <td>{location}</td>
        <td className="button-crud">
            {businessName}
        </td>
       </tr>
      </tbody>
    </Table>  

 <div className="row no-gutters shadow-lg p-3 mb-5  rounded" style={{backgroundColor: "#DEDEDE"}} >

 
   <div className="col-md-8">
   <div className="card-body">
       <div style={{display: "flex",justifyContent: "space-between"}}>
       <h5 className="card-title" ><small className="text-muted">{address}</small></h5>
     <p className="card-text"><small className="text-muted">Kenya</small></p>
       </div>    
       <div style={{display: "flex",justifyContent: "space-between"}}>
     <div className="card-text"><small className="text-muted">Company Email:  {ownerEmail}</small></div>
     <div><small className="text-muted">Company Phone: {phone}</small></div>
     </div>
     <div style={{display: "flex",justifyContent: "space-between",marginTop:10}}>
     <div><small className="text-muted">Job Requirements: <div>-{descriptions}</div></small></div>

     <p className="card-text">Website: <small className="text-muted">{web}</small></p>
     </div>
     {auth?.currentUser?.uid &&(
    <div style={{display: "flex",marginTop:10}}>
    <a itemprop="telephone" title={`Call Now ${businessName}`} data-business="Avenue Motors Ltd" data-catname="Car Hire" data-value="8" href={`tel:${phone}`} class="biztelephone">
    <Button style={{backgroundColor: "#00BFFF",marginLeft:0,color: "#fff"}} className="card-text "  ><i className="fa fa-edit">Call now</i></Button>
</a> 
    <a href={`/businesses-email/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${industry}`} title={`send an email message to ${businessName}`} class="bizemail">
    <Button style={{backgroundColor: "#00BFFF",marginLeft:10,color: "#fff"}} className="card-text "  ><i className="fa fa-edit">Message</i></Button>
        </a> 
        </div>
     )}
 


     <div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  class="modal-dialog" role="document">
    <div style={{background: "#fff"}} class="modal-content">
      <div class="modal-header">
        <h6 style={{color: "black"}} class="modal-title" id="exampleModalLabel">
        <p className="card-text">Company Email: {ownerEmail}</p>
        <p className="card-text">Company Phone: {phone}</p>

            </h6>
        <button style={{color: "black"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style={{color: "black"}} aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
              <p>Requirements</p>
              <hr/>
    <h5>{descriptions}</h5>            
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
       Posted on {parseTimestamp(timestamp)}
      </div>
    </div>
  </div>
</div>
   </div>
</div>

</div> 
</div>

 {/* update modal */}



<Modal >
  <React.Fragment> 
 <ModalHeader>EDIT COMPANY</ModalHeader>
 <ModalBody>
 <br></br>
 <Form id="update" method="post">
 <FormGroup>
<Label for="name">Name</Label>
<Input type="text" name="name" id="name" placeholder="Enter your name" required/>
</FormGroup>
<FormGroup>
<Label for="logo">Logo</Label>
<Input type="file" name="logo" id="logo" placeholder="Enter your Logo" />
</FormGroup>
<FormGroup>
<Label for="location">Location</Label>
<Input type="text" name="location" id="location"  placeholder="Enter your location" required/>
</FormGroup>
<FormGroup>
<Label for="description">Description</Label>
<Input type="textarea" name="description" id="description"  placeholder="Enter your company description" required/>
</FormGroup>
<Button className='button_login bg-success'>Submit</Button>
</Form>
 </ModalBody>
 </React.Fragment> 
</Modal>

</React.Fragment> 
                </>
            )}

{location === location1 &&(
                <>
                    <React.Fragment key={postId}>
    <div style={{backgroundColor: "#fff"}}>
   <Table responsive> 
     <thead>
        <tr>
        <th>Company Name</th>
        <th>Logo</th>
       <th>Location</th>
       <th>Role</th>
       </tr>
     </thead>
     <tbody>
       <tr>
        <td>{companyName}</td>
        <td><img style={{objectFit: "cover",height:30}} src={postImage} alt='logo'/></td>
       <td>{location}</td>
        <td className="button-crud">
            {businessName}
        </td>
       </tr>
      </tbody>
    </Table>  

 <div className="row no-gutters shadow-lg p-3 mb-5  rounded" style={{backgroundColor: "#DEDEDE"}} >

 
   <div className="col-md-8">
   <div className="card-body">
       <div style={{display: "flex",justifyContent: "space-between"}}>
       <h5 className="card-title" ><small className="text-muted">{address}</small></h5>
     <p className="card-text"><small className="text-muted">Kenya</small></p>
       </div>    
       <div style={{display: "flex",justifyContent: "space-between"}}>
     <div className="card-text"><small className="text-muted">Company Email:  {ownerEmail}</small></div>
     <div><small className="text-muted">Company Phone: {phone}</small></div>
     </div>
     <div style={{display: "flex",justifyContent: "space-between",marginTop:10}}>
     <div><small className="text-muted">Job Requirements: <div>-{descriptions}</div></small></div>

     <p className="card-text">Website: <small className="text-muted">{web}</small></p>
     </div>
     <div style={{display: "flex",marginTop:10}}>
     <a itemprop="telephone" title={`Call Now ${businessName}`} data-business="Avenue Motors Ltd" data-catname="Car Hire" data-value="8" href={`tel:${phone}`} class="biztelephone">
     <Button style={{backgroundColor: "#00BFFF",marginLeft:0,color: "#fff"}} className="card-text "  ><i className="fa fa-edit">Call now</i></Button>
</a> 
     <a href={`/businesses-email/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${industry}`} title={`send an email message to ${businessName}`} class="bizemail">
     <Button style={{backgroundColor: "#00BFFF",marginLeft:10,color: "#fff"}} className="card-text "  ><i className="fa fa-edit">Message</i></Button>
         </a> 
         </div>


     <div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  class="modal-dialog" role="document">
    <div style={{background: "#fff"}} class="modal-content">
      <div class="modal-header">
        <h6 style={{color: "black"}} class="modal-title" id="exampleModalLabel">
        <p className="card-text">Company Email: {ownerEmail}</p>
        <p className="card-text">Company Phone: {phone}</p>

            </h6>
        <button style={{color: "black"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style={{color: "black"}} aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
              <p>Requirements</p>
              <hr/>
    <h5>{descriptions}</h5>            
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
       Posted on {parseTimestamp(timestamp)}
      </div>
    </div>
  </div>
</div>
   </div>
</div>

</div> 
</div>

 {/* update modal */}



<Modal >
  <React.Fragment> 
 <ModalHeader>EDIT COMPANY</ModalHeader>
 <ModalBody>
 <br></br>
 <Form id="update" method="post">
 <FormGroup>
<Label for="name">Name</Label>
<Input type="text" name="name" id="name" placeholder="Enter your name" required/>
</FormGroup>
<FormGroup>
<Label for="logo">Logo</Label>
<Input type="file" name="logo" id="logo" placeholder="Enter your Logo" />
</FormGroup>
<FormGroup>
<Label for="location">Location</Label>
<Input type="text" name="location" id="location"  placeholder="Enter your location" required/>
</FormGroup>
<FormGroup>
<Label for="description">Description</Label>
<Input type="textarea" name="description" id="description"  placeholder="Enter your company description" required/>
</FormGroup>
<Button className='button_login bg-success'>Submit</Button>
</Form>
 </ModalBody>
 </React.Fragment> 
</Modal>

</React.Fragment> 
                </>
            )}

          <>
          
          </>      
        </div>
    )
}

export default Posts
