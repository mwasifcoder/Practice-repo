import React, { useState } from 'react'
import './TextBox.css'



const TextArea = (props) => {
  const handleUpClick = () =>{
    setText("you've Clicked once".toLocaleUpperCase)
  } 
  const handleOnChange = (event) =>{
    let test = event.target.value;
    console.log(test);
    setText(test)
  } 
  const [text, setText] = useState('Enter text here ');
  return (
    <>
    {/* <div className='container col-xsm-6 bg-info rounded-3 '>
      <h2 className='col-4 offset-4 fw-bold text-uppercase'>{props.heading}</h2>
      <textarea className=' col-10 rounded-3 p-3  bg-primary text-light m-3 ' value={text} rows="10" cols="40" onChange={handleOnChange}>
      </textarea>

      <button className='btn p-3 rounded-3 m-3 text-light fw-bold fs-5 bg-primary' onClick={handleUpClick}>toUpperCase
      <span class="badge text-bg-warning m-1">4</span>
      </button>
    </div> */}
        <nav class="navbar navbar-expand-sm navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">primary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarID">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        
                    </div>
                </div>
            </div>
        </nav>
    {/* <div >
      <h1>{props.heading}</h1>
      <div className="mb-3 container col-xsm-6 bg-info rounded-3">
        <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
        <button className='btn btn-primary' onClick={handleUpClick}>ConvertToUppercase
        </button>
      </div>
    </div> */}
    </>
  )
}

export default TextArea
// import React, { Component } from 'react'

// export default class TextArea extends Component {
//   state = {
//     count: 0,
//     imgUrl : 'http://picsum.photos/300'
//   }
//   style ={
//     fontSize : 20,
//     background : 'DeepPink',
//     // backgroundImage: this.state.imgUrl ,
//   }
//   render() {
//     let classes = " "
//     classes=+ (this.state.count === 0) ? 'bg-waring' : 'bg-primary';
//     return (
//       <React.Fragment>
//         {/* <img src={this.state.imgUrl} alt="" /> */}
//         <span style={this.style}  >
//           {this.counterformater()}
//         </span>
//         <button className={classes}><h4>Increment</h4></button>
//       </React.Fragment>
//     )
//   }

//   counterformater(){
//    const {count } = this.state;
//    return count === 0 ? "Zero" : count;
//   }
// }
