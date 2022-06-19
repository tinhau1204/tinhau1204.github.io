import Sidebar from '../Sidebar';
import './index.scss';
import Home from '../Home'

const Layout =  () => { 
return(
    <div className="App"> 
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Home/>
            <span className='tags bottom-tags'>
            &lt;/body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div> 
    </div>
    ); 

} 

    


export default Layout