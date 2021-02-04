import logo from './logo.svg';
import { useState} from 'react'
import './App.css';
import Signup from './cmp/Signup';
import Auth from './cmp/Auth';
import SignUpEmail from './cmp/SignUpEmail';
import Auth2factor from './cmp/Auth2factor';
import Navigation from './cmp/Navigation';
import Footerlinks from './cmp/Footerlinks';
import Githublogin from './cmp/Githublogin';
import Step2login from './cmp/Step2login';
// import Verifycode from './cmp/Verifycode';
import Creditcard from './cmp/Creditcard';
import Forget from './cmp/Forget';
import SavedAccount from './cmp/SavedAcc'
import SavedAccount1 from './cmp/SavedAcc1'

import Paymentmethod from './cmp/Paymentmethod';
import Check from './cmp/Check';
import Thankyou from './cmp/Thankyou'
import NewDeviceLogin from './cmp/NewDeviceLogin';
import PurchaseDetail from './cmp/PurchaseDetail'
import AddCard from './cmp/AddCard'
import Paypal from './cmp/Paypal'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersistentDrawerLeft from "./components/sidebar/SideBar";
import ButtonDisabled from "./partials/ButtonDisabled";
import FormFieldOutlined from "./partials/FormFieldOutlined";
import SubHeadingTitle from "./partials/SubHeadingTitle";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  

  const mystyle = {
    padding: "5px 10px",
    textDecoration: "none",
    listStyle: "none"
    
  };
  return (
    <div className="App">
      <Router basename = {'/Cobolt'}>

      <div className="base">
        {/* <Navigation /> */}
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

<Route path='/sidebar' className='wrapper'>
<PersistentDrawerLeft/>
</Route>


<Route path="/paypal">
<Paypal />
          </Route>

          <Route path="/savedacc1">
<SavedAccount1 />
          </Route>


          <Route path="/signup">
            <Signup name="Create your Account" />
          </Route>
     
          <Route path="/newlogin">
<NewDeviceLogin />
            </Route>
            <Route path="/purchasedetail">
<PurchaseDetail />
            </Route>


          <Route path="/auth2factor">
            <Auth2factor name="2-Factor Authentication" />
          </Route>
          <Route path="/signupemail">
            <SignUpEmail name="Sign Up With Email"/>
          </Route>
          <Route path="/Navigation">
            <Navigation />
          </Route>
          <Route path="/Footerlinks">
            <Footerlinks />
          </Route>
          <Route path="/Githublogin">
            <Githublogin />
          </Route>

          <Route path="/thankyou">
            <Thankyou />
          </Route>          <Route path="/savedacc">
            <SavedAccount name="mubeen@hashlob.com" />
          </Route>
          {/* <Route path="/Verifycode">
            <Verifycode name="Verify it's you" />
          </Route> */}
          <Route path="/forget">
            <Forget name="Forget Password?" />
          </Route>
         

         <Route path='/addcard'>
         <AddCard />

         </Route>
          <Route path="/paymentmethod">
            <Paymentmethod name="Add a Payment method to your account" />
          </Route>
          <Route path="/Creditcard">
            <Creditcard name="Add a Payment detailsto your account" />
          </Route>
          <Route path='/Check'>
            <Check />
          </Route>
          

          <Route path="/">
            <Auth name="Sign In" />
          </Route>  
        </Switch>
      </div>
    </Router>
    </div>
  );
 
}

export default App;
