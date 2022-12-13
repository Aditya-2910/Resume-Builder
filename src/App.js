import {Route,Routes,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import ExperienceForm from './components/ExperienceForm';
import Forms from './components/Forms';
import Home from './components/Home';
import EducationForm from './components/EducationForm'
import SkillsForm from './components/SkillsForm';
import SummaryForm from './components/SummaryForm';
import TemplateSelectAndDownload from './components/TemplateSelectAndDownload';
import Login from './components/Login';
import Signup from './components/Signup';
import { NavDropdown } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {clearLoginStatus} from './slices/userslice'

const DBurl = "mongodb+srv://Newuser-29:New@user-29@asrinivascluster.gddxiog.mongodb.net/?retryWrites=true&w=majority";



//connect with mongodb server



function App() {


    let dispatch=useDispatch();

    let navigate = useNavigate();

    const userLogout=()=>{
        localStorage.clear()
        dispatch(clearLoginStatus());
        navigate('/Login');
    }
  
    let {userObj,isError,isLoading,isSuccess,errMsg} = useSelector(state=>state.user);
  
    let obj = useSelector(state=>state.user) ///needed to add this to access the username
  
    return (
    <div >

        {/* Should fix the navbar such that it is visible even if we scroll down..... */}


         <nav className="navbar navbar-light navbar-fixed-top bg-light ms-auto">
          <div className='p-3'>
          <a className="navbar-brand text-warning p-2" href="#">Resume-Builder</a>
          </div>
          <div className="navbar-nav" id="navbarNav">
              <ul className="nav navbar">
                  <li className="nav-item"  style={{paddingRight:'20px'}}>
                      <NavLink style={{color:'black',textDecorationLine:'none'}}to=''>Home</NavLink>
                  </li>
                  <li className="nav-item"  style={{paddingRight:'20px'}}>
                      <NavLink style={{color:'black',textDecorationLine:'none'}} to='Forms'>Build Resume</NavLink>
                  </li>
                  <li className="nav-item" style={{paddingRight:'20px'}}>
                      <a className="nav-link" href="#">Help</a>
                  </li>

                {/* Giving conditional rendering to change the login to logout and vice versa */}


                  {isSuccess!==true ? (
                    <>
                  <li className="nav-item"  style={{paddingRight:'20px'}}>
                      <NavLink style={{color:'black',textDecorationLine:'none'}} to='Login'>Login</NavLink>
                  </li>
                    
                  </>

                  ) : (

                    <>
                    <NavDropdown title={obj.user.username} className="collasible-nav-dropdown" id='drop-down'>

                        <NavDropdown.Item>
                            Change Password
                        </NavDropdown.Item> 

                        <NavDropdown.Divider/>

                        <NavDropdown.Item onClick={userLogout}>
                            Logout
                        </NavDropdown.Item> 

                    </NavDropdown>

                  </>

                  )}
              </ul>
          </div>
        </nav>


        {/* Routing */}

        <Routes>


                <Route path='' element={<Home/>}/>

                <Route path='Login' element={<Login/>}/>

                <Route path='Signup' element={<Signup/>}/>

                <Route path='Forms' element={<Forms/>}/>

                <Route path='ExperienceForm' element={<ExperienceForm/>}/>

                <Route path='EducationForm' element={<EducationForm/>}/>

                <Route path='SkillsForm' element={<SkillsForm/>}/>

                <Route path='SummaryForm' element={<SummaryForm/>}/>

                <Route path='TemplateSelectAndDownload' element={<TemplateSelectAndDownload/>}/>

                

        </Routes>
        

        </div>

  );
}

export default App;
