import React, {useEffect, useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import './Firebase/Firebaseconfig';
// components
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Page/Contact/Contact';
import Loding from "./Components/Loading/Loading";

function App() 
{
    const [isloading ,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false)
    })
    if(isloading)
    {
        return <Loding full={true} />
    }
    else {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
                <Footer />
            </div>
        );
    }
    }
export default App;
