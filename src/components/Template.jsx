import { React, useState   } from "react"
import "./Template.css"
import Modern_data from "./Data/Modern_data"
import Proff from "./Data/proff"
import Dynamic from "./Data/dyanamic-data"
import Geometric from "./Data/geometric"
import Rounded from "./Data/rounded"
import Gradients from "./Data/Gradients"
import Basic from "./Data/basic"
import { Button,Show_Button } from "./Button"
import VideoPlayer from "react-video-js-player"
import Video from "./videos/Tracer_Preview_4a.m4v"


const Left_Div_Compo = ["Modern","Professional","Dynamic","Geometric","Rounded","Gradients","Basic"];

export const Template = () => {

     const videoSrc = Video;
     const poster = "https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png"

     const [items] = useState(Modern_data);
     const [temps] = useState(Proff)
     const [dyna] = useState(Dynamic)
     const [gdata] = useState(Geometric)
     const [round] = useState(Rounded)
     const [grad] = useState(Gradients)
     const [basic] = useState(Basic)

     return(
          
          <div className="container">
               <div className="bgcolor">
                    <div className="component-div">
                         <div className="LeftDiv">
                              {Left_Div_Compo.map((e) => {
                                   return <div className="component"> {e} </div>
                              })}
                         </div>
                         <div className="right-div">
                              <div>
                                   <span className="text">Choose a template</span>
                                   <span className="smalltext">Recommended color, font, and style combos, curated and ready to use.</span>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">MODERN</span>
                              </div>
                              <div className="pictures">
                                   {
                                        items.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div> 
                              <div className="modern-div">
                                   <span className="smalltext">PROFESSIONAL</span>
                              </div>
                              <div className="pictures">
                                   {
                                        temps.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>  
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">DYNAMIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        dyna.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div> 
                              <div className="modern-div">
                                   <span className="smalltext">GEOMETRIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        gdata.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">ROUNDED</span>
                              </div>
                              <div className="pictures">
                                   {
                                        round.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">GRADIENTS</span>
                              </div>
                              <div className="pictures">
                                   {
                                        grad.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">BASIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        basic.map((elem) => {
                                             const  {image,button,name} = elem
                                             return(
                                                  <div className="images-div">
                                                       <img className="height" src={image} alt="" />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>  
                              <div className="btn-div">
                              </div>             
                         </div>
                    </div>
               </div>
          </div>
     )
}
    