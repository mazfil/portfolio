import './App.css';
import { useState } from 'react';
import Post from './components/Post';

function App() {
    const tempPost = { 
        heading: "this is a post", 
        subheading: "subtitle of post", 
        summary: "this is the post content which is displayed in each post",
        content: "expanded content\nlonger content to be displayed when expanded." 
    }

    const [tab, changeTab] = useState(1)
    const handleTabChange = (target) => {
        changeTab(target);
        console.log(target)
    }

    return (
        <div className='container'>
            <div className='profile-container'>
                <img className="profile-backsplash" src={process.env.PUBLIC_URL + "/IMG_0780_blue_smaller.jpg"}/>
                <img className="profile-memoji" src={process.env.PUBLIC_URL + "/pfp.png"}/>
                
                <br/>
                
                <h1 style={{display: "inline"}}>Filip Mazur</h1>
                <p className="sub" style={{display: "inline"}}> (he/him)</p>
                <p>description</p>
                <p className="sub">Australian National University</p>
                <p className="sub">Canberra, Australia</p>

            </div>

            <div className='content-container'>
                <div className='content-navigation'>
                    <button className='navigation' onClick={()=>handleTabChange(1)}>.about</button>
                    <button className='navigation' onClick={()=>handleTabChange(2)}>.work</button>
                    <button className='navigation' onClick={()=>handleTabChange(3)}>.contact</button>
                    {/* LINK */}
                    {/* LINK */}
                </div>

                <div className='posts'>
                    <Post postData={tempPost}></Post>
                </div>
            </div>
        </div>
    );
}

export default App;