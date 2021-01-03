import React from "react";
import "./Styles.css";
import { createWorker } from "tesseract.js";
import logo from "./photos/logo.png";
import p1 from "./photos/p1.png";
import p2 from "./photos/p2.png";
var data=""
class Mainpage extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            img:'',
            words:''
        }
    }
    convert=()=>{
    const worker = createWorker({
        logger: m => console.log(m),
      });
    const doOCR = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(this.state.img);
        this.setState({
            words:text
        })
    };
    doOCR();
    console.log(this.state.words)
    }
    copy=()=>{
        var text = document.getElementById("converted_text");
        text.select();
        text.setSelectionRange(0,9999);
        document.execCommand("copy");

    }
    upload=(e)=>{
            const reader = new FileReader();
            reader.onload=()=>{
                if(reader.readyState===2){
                    this.setState({
                        img:reader.result
                    })
                }
            }
            reader.readAsDataURL(e.target.files[0]);
            
    }
    render(){
        const img1 = this.state.img? this.state.img:p1
        const img2 =this.state.words?null:<img className="responsive-img" src={p2}></img>
        return(
        <div>
             <nav className="nav-wrapper transparent" style={{boxShadow:"none"}}>
                <div>
                   <a className="brand-logo center"><img className="responsive-img" src={logo} ></img></a> 
                
                </div>
            </nav>
        
            <div className="row" style={{marginTop:"80px"}}>
            <div className="col s12 m6">
                <div className="container">
                    <img className="responsive-img" src={img1}></img>
                    
                   
                </div>
                <div>
                <form action="#">
                        <div class="file-field input-field">
                            <button id="uploadbtn" style={{width:"70%",height:"50px"}}>
                                
                                Upload Image
                                <input type="file"  onChange={this.upload} accept="image/*"/>
                            </button>
                            
                        </div>
                </form>
                </div>
               
               
                
      
                
               
                
            </div>
            <div className="col s12 m6">
                <div className="container" style={{overflow: "scroll"}}>
                    <i className="material-icons right" onClick={this.copy} style={{color:"#7b1fa2",marginRight:"5px",marginTop:"5px"}}>content_copy</i>
                    
                    {img2}
                    <textarea type="text" id="converted_text" value={this.state.words}/>
                </div>
                <div>
                <form action="#">
                        <div class="file-field input-field">
                            <button id="uploadbtn" style={{width:"70%",height:"50px"}} onClick={this.convert}>
                                
                                Convert 
                              
                            </button>
                            
                        </div>
                </form>
                </div>
            </div>
            

            </div>
            
        
        </div>)
    }
}
export default Mainpage;