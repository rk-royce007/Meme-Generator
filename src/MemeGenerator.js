import React from "react"
class MemeGenerator extends React.Component{
 constructor(){
   super()
   this.state={
     topText:"",
     bottomText:"", 
     randomImg:"http://i.imgflip.com/1bij.jpg",
     allMemeImgs:[]
   }
   this.handlechange=this.handlechange.bind(this)
   this.handlesubmit=this.handlesubmit.bind(this)
 }
 
 componentDidMount(){
   fetch("https://api.imgflip.com/get_memes")
   .then(response=>response.json())
   .then(response=>{
     const{memes}=response.data
     this.setState({allMemeImgs:memes})
    }
   )
 }

 handlechange(event){
  const{name,value}=event.target
  this.setState({[name]:value})
 }

 handlesubmit(event){
   const randNum=Math.floor(Math.random%this.state.allMemeImgs.length)
   const randImg=this.state.allMemeImgs[randNum].url
   this.setState({randomImg:randImg})
 }

 render(){
   return(
     <div>

      <form onSubmit={this.handlesubmit}>
      <input
       type="text"
       name="topText"
       placeholder="top text"
       value={this.state.topText}
      />
       <button>Gen</button>
      </form>

      <div>
      <img src={this.state.randomImg} alt=""/>
      <h2>{this.text.topText}</h2>
      <h2>{this.text.bottomText}</h2>
      </div>

     </div>
   )
 }
}
export default MemeGenerator