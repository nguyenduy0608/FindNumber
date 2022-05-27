import './App.css';
import {useState,useRef} from 'react'
import axios from 'axios'

function App() {
  const [link, setLink] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const InputRef = useRef()
  const setSearch = ()=>{

  }
  const getData = async () => {
    setIsLoading(true);
    setLink('')
    try {
      const res = await axios.get(
        `http://dev.winds.vn:22522/users?id=${link}`
      );
      setData(res.data.data.phone);
      console.log(data)
    } catch (error) {
      setError(error);
     // console.log(error)
    } finally {
      setIsLoading(false);
    }
    InputRef.current.focus()
    // console.log(res.data);
  }
  return (
    <div className='main'> 
    <div className='header'>
      <h1 style ={{ textAlign : 'center',
      color : 'blue'
    }}> FIND PHONE NUMBER</h1>
    </div>
    <div className='Content'> 
      <b style  ={{}}> Facebook profile link : </b>
      <br/>
      <input   
      className='set-content'
      ref = {InputRef}
      placeholder = 'xin mời nhập link...' value={link} name = "url_facebook"
      autoComplete="off"
      onChange={e => setLink(e.target.value)}
      />
      <br/>
      <button onClick={getData} 
      className = "search-submit">Find number</button>
      <div> Phone number : {data}</div>
    </div>
    <div className = 'Tutorial'>
      <h1> What is this tool?</h1>
      <p> This tool called "Find Facebook ID" provides an easy and fast way to 
        find the Facebook ID for your profile or a group or a page.
         There is also other information such as User name, Name, Type, ...</p>
         <h4> Example</h4>
         <ul style = {{ listStyleType: 'none'}}> 
           <li>- For Profile type: Profile picture, Id, User name, Name, Old page id (if converted from classic page) </li>
           <li>- For Page type: Page picture, Id, User name, Name, Likers count, Description.</li>
           <li>- For Group type: Group picture, Id, User name, Name, Members count, Privacy info.</li>
         </ul>
         <h1> How to use?</h1>
         <p> This tool accepts Facebook URL, see the following example URL formats below:</p>
         <ul> 
           <li >https://www.facebook.com/zuck </li>
           <li>https://m.facebook.com/MTP.Fan</li>
           <li>https://m.facebook.com/groups/FindidfbCom</li>
           <li>https://www.facebook.com/profile.php?id=100012362696847</li>
         </ul>
         <p>Put your Facebook URL and click the "Find numeric ID →" button, or simply press enter. The numeric ID will appear in the green box.</p>
         <h1> Why use this tool?</h1>
         <p> 1. Numeric Facebook IDs are needed when retrieving some data from Facebook.</p>
         <p> 2. You will kinda know your place in Facebook history. For example, 
           we will enter the URL https://www.facebook.com/zuck on the text box below,
            the extracted ID will show "4" which means he is one of the earliest users or records in Facebook database.</p>
    </div>
      <div className='Footer'>
      © 2020 • Powered by 
      <a href="#"> FindidFB</a>
      <img src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=fdeca383-9830-4ffb-bfb9-8575bd226919" 
                alt="DMCA.com Protection Status"></img>
      
      </div>
    </div>
    
  );
}

export default App;
