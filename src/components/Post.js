import './Post.css';
import { useState } from "react";

function Post({postData}) {
  const [open, setOpen] = useState(false);

  const toggle = () =>{
    setOpen(!open);
  }

  return(
    <div className="post" onClick={toggle}>
      <p className='emph'> { postData.heading } </p>
      <p className='sub'> { postData.subheading } </p>
      { open ? 
        <p> { postData.summary } </p>
        :
        <p> { postData.content } </p>
      }
      
    </div>
  );
}
export default Post;