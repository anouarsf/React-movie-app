import React, {Component} from 'react';
import './App.css';
import Listemovie from './component/listemovie'
import Searchmovie from './component/searchmovie'
import ModalExample from './component/modal'


class App extends Component {

state={
  liste:[
    {title : "The Irishman" , image : "https://images.justwatch.com/poster/159326038/s166" , rating: 4 ,youtube:"https://www.youtube.com/watch?v=WHXxVmeGQUc" },
    {title : "The Lion King" , image : "https://images.justwatch.com/poster/113704524/s166" , rating: 2 , youtube:"https://www.youtube.com/watch?v=7TavVZMewpY"},
    {title : "Mariage Story" , image :"https://images.justwatch.com/poster/152916265/s166" , rating: 3 , youtube:"https://www.youtube.com/watch?v=BHi-a1n8t7M"},
    {title:"The commuter" , image:"https://images.justwatch.com/poster/27668572/s166" , rating: 4 ,youtube:"https://www.youtube.com/watch?v=aDshY43Ol2U" },
    {title:"Jersey" , image:"https://images.justwatch.com/poster/125540483/s166" , rating: 3 , youtube:"https://www.youtube.com/watch?v=aDshY43Ol2U"},
    {title:"Jersey" , image:"https://images.justwatch.com/poster/125540483/s166" , rating: 4 , youtube:"https://www.youtube.com/watch?v=aDshY43Ol2U"},
    {title:"It Chapter Two" , image:"https://images.justwatch.com/poster/73659291/s166" , rating: 5 , youtube:"https://www.youtube.com/watch?v=xhJ5P7Up3jA"},
    {title:"Spider-Man" , image:"https://images.justwatch.com/poster/8545306/s166" ,rating: 3, youtube:"https://www.youtube.com/watch?v=KwWT8HCB4f4"},
    {title:"Forrest Gump" , image:"https://images.justwatch.com/poster/8652161/s166" , rating: 2 , youtube:"https://www.youtube.com/watch?v=uPIEn0M8su0"},
    {title:"J. Edgar" ,image : "https://images.justwatch.com/poster/10629393/s166" , rating: 5, youtube:"https://www.youtube.com/watch?v=XULIO67YIRA"},
    {title:"Us" ,image : "https://images.justwatch.com/poster/120454663/s166" , rating: 5 , youtube:"https://www.youtube.com/watch?v=hNCmb-4oXJA"},
    {title:"Good Boys" ,image : "https://images.justwatch.com/poster/142046584/s166" , rating: 3, youtube:"https://www.youtube.com/watch?v=zPXqwAGmX04"},
    {title:"Uncut Gems" ,image : "https://images.justwatch.com/poster/149156672/s166" , rating: 2, youtube:"https://www.youtube.com/watch?v=vTfJp2Ts9X8"},
  ],

  filtermovie:'',
  rating:undefined ,
  isloading:true ,
}

handleadd=(z)=>this.setState({
  liste:[...this.state.liste,z]
})

componentDidMount (){
  setTimeout(()=>{
    this.setState({
      isloading:false
    })
  } ,3000)
}

changeRating=(newRating,title) =>{
  this.setState ({ rating :newRating})
}

  render() {
    return this.state.isloading ? <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> :(
      <div  className="App">
        <Searchmovie rating={this.state.rating} changeRating={this.changeRating}  filtername={(e)=>{this.setState({filtermovie : e})}}  />
        <ModalExample add={this.handleadd}/>  
        <Listemovie  changeRating={this.changeRating}  liste={this.state.liste.filter(el => this.state.rating ?
            el.title.toLowerCase().includes(this.state.filtermovie) && el.rating >= this.state.rating :
            el.title.toLowerCase().includes(this.state.filtermovie))} loading={this.state.isloading}/>


      </div>
    )
  }
}
 
export default App