import {Fade} from "react-awesome-reveal";
import { colStyle } from "../Components/cssStyles";

const Home=()=>{
    return(
        <div>
            <Fade direction="down" cascade={true}>
            <div className="row page">
                <div className="col-sm flex-column d-flex align-items-center justify-content-evenly">   
                    <div>
                        <h1 className="dispaly-1 sochara-text">Sochara</h1>
                    </div>
                    <div><p>set<b>•</b> yourself<b>•</b>apart</p></div>
                    <div>
                    <img className="Sirv rounded" data-src="https://gemittyi.sirv.com/SOCHARA/DSC_8163.JPG" alt="" />
                    </div>   
                </div>
            </div>
            </Fade>
            <br/>
            <Fade direction="down" cascade={true}>
                <div className="row">
                    <div className="col-sm">
                        <img className="Sirv rounded" data-src="https://gemittyi.sirv.com/SOCHARA/DSC_8287.JPG" alt="" />
                    </div>
                    <div className={`col-sm ${colStyle}`} >
                       <a href="/our-story"><h1 className="link-text display-1"><u>About</u></h1></a>
                    </div>
                </div>
            </Fade>
            <br/>
            <Fade direction="down" cascade={true}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="Sirv rounded" data-src="https://gemittyi.sirv.com/SOCHARA/242826420_957005214849260_3888005431566537311_n.webp" alt="" />
                        </div>
                        <div className="col-sm">
                            <img className="Sirv rounded" data-src="https://gemittyi.sirv.com/SOCHARA/DSC_8196.JPG" alt="" />
                        </div>
                        <div className="col-sm">
                            <img className="Sirv rounded" src="https://gemittyi.sirv.com/SOCHARA/242854318_1012878992898571_1689857292551473885_n.webp" alt="" />
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default Home;