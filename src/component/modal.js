import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter }from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toaddmovie:{
      title:'',
      rating:'',
      youtube:'',
      image:''},
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  handlechange=(event)=>{
  
this.setState({toaddmovie:{...this.state.toaddmovie,[event.target.name]:event.target.value}})
  }
  render() {
    return (
      <div className="modal-container">
      
 <Button className="plus" color="warning" onClick={this.toggle} >Add new Movie {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="title-modal">Add new movie</ModalHeader>
          <ModalBody>
            <p className="title-each-input">Title:</p>   <input name="title" type="text" placeholder="new movie name...." className="input-add-movie" onChange={this.handlechange}/>
            <p className="title-each-input">Rating:</p> <input name="rating" type="number" min="1" max="5"  placeholder="new movierating...." className="input-add-movie-ratting" onChange={this.handlechange}/> 
            <p className="title-each-input">Image:</p>  <input name="image" type="text" placeholder="new movie url...." className="input-add-movie" onChange={this.handlechange}/>
            <p className="title-each-input">Youtube:</p>  <input name="youtube" type="text" placeholder="...." className="input-add-movie" onChange={this.handlechange}/>

          </ModalBody><br/>
          <ModalFooter>
           
            <Button color="danger" className="add-btn" onClick={()=>{this.props.add(this.state.toaddmovie);this.toggle()}}>Add</Button>
            <Button color="dark" className="add-btn" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
     
    );
  }
}
export default ModalExample;



              
