import './App.css';
import {useState,useRef, Suspense} from 'react'
import axios from 'axios'
import { useTranslation, Trans } from 'react-i18next';

 const lngs = {
  vi: {nativeName : 'Vi'},
  en :{nativeName : 'En'}
}
function App() {
  const { t ,i18n} = useTranslation();
  const [link, setLink] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(t('description.part18'));
  const [error, setError] = useState(null);
  const [saves,setSave] = useState([])
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
      saves.push(data)
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
    <div> 
      {/* nút chuyển đổi ngôn ngữ */}
        {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
             type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      <h1 style ={{ textAlign : 'center',
      color : 'blue'
    }}> {t('description.part12')}</h1>
    </div>
    <div className='Content'> 
      <b style  ={{}}> {t('description.part13')} </b>
      <br/>
      <input   
      className='set-content'
      ref = {InputRef}
      placeholder = {t('description.part15')} value={link} name = "url_facebook"
      autoComplete="off"
      onChange={e => setLink(e.target.value)}
      />
      <br/>
      <button onClick={getData} 
      className = "search-submit">{t('description.part14')}</button>
      <div>  
         {/* <p> Phone number :</p>  */}
         { data ? <p> {t('description.part16')} {data } </p> : <p>{t('description.part17')}</p> }
      
      </div>
      {/* <ul> 
        {saves.map(save => (
          <li> {save}</li>
        ))}
        </ul>    */}

    </div>
    <div className = 'Tutorial'>
      <h1> { t('description.part1')}</h1>
      <p> {t('description.part2')}</p>
         <h4> Example</h4>
         <ul style = {{ listStyleType: 'none'}}> 
           <li>{t('description.part3')}</li>
           <li>{t('description.part4')}</li>
           <li>{t('description.part5')}</li>
         </ul>
         <h1> { t('description.part6')}</h1>
         <p> { t('description.part7')}</p>
         <ul >
           <li >https://www.facebook.com/zuck </li>
           <li>https://m.facebook.com/MTP.Fan</li>
           <li>https://m.facebook.com/groups/FindidfbCom</li>
           <li>https://www.facebook.com/profile.php?id=100012362696847</li>
         </ul>
         <p>{ t('description.part8')}</p>
         <h1>{ t('description.part9')}</h1>
         <p> { t('description.part10')}</p>
         <p> { t('description.part11')}</p>
         
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

