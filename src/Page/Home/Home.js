import React, {useEffect, useState} from 'react';
import './Home.css';
import Card from '../../Components/Card/Card';
import SliderShow from '../../Components/SliderShow/SliderShow';
import Resume from '../../Components/Resume/Resume';
import Chanelle from '../../Components/Chanelle/Chanelle';
import firebase from "../../Firebase/Firebaseconfig";
import Loding from "../../Components/Loading/Loading";

function Home(props)
{
    const [data,setData] = useState([]) ;
    const [isloding,setLoding] = useState(true);
    useEffect(()=>{
        let blogsRef = firebase.database().ref("blogs");
        blogsRef.on("value",(snapshot)=>{
            let blogs = snapshot.val();
            let blogstab = [];
            for(let blog in blogs)
            {
                blogstab.push({
                    id : blog,
                    title:blogs[blog].title,
                    content:blogs[blog].content
                })
            }
            setData(blogstab)
            setLoding(false)
        })
    },[])


        if(isloding)
        {
            return <Loding />
        }
        else {
            return (
            <div>
                {

                }
                <SliderShow/>
                <div className="container mt-5 contant">
                    <h2 className="title">News</h2>
                    <div className="row ml">
                        {
                            data.map((item, i) => {
                                return (
                                    <div className="col mb-2" key={i}>
                                        <Card item={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <hr></hr>
                    <Resume/>
                    <Chanelle/>
                </div>
            </div>
            )
        }

}
export default Home;
