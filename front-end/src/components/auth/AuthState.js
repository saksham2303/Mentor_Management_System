import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {Login_user, Login_user_failed, Load_user, Register_user, Register_user_failed, Auth_Error,Logout_user} from '../actions';
import React, {useReducer} from 'react'
import AuthToken from './tokenAuth';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        
        error: null
            
    }
   
        const [state, dispatch] = useReducer(AuthReducer, initialState)

        const loadUser = async() =>{
            

            
        if(localStorage.token){
            AuthToken(localStorage.token);
               
            }
        }

        const registerData = async formData =>{
            const headers ={
                headers : {
                    'Content-Type' : 'application/json'
                    
                    
                  }
            }
            try{
                const res = await axios.post("https://mentor-0.herokuapp.com/receive/register", formData, headers)
                
                const token = res.data
                // AuthToken(token);
               
                dispatch({  
                    type: Register_user,
                    payload: res.data
                })
                
            }catch(error){
                alert("check email")
                dispatch({
                    type: Register_user_failed,
                    payload: error.response.data.message
                    
                })
            }
        }



        const loginData = async formDatag =>{
            const headers ={
                headers : {
                    'Content-Type' : 'application/json'
                    
                    
                  }
            }
            try{
                const res = await axios.post("https://mentor-0.herokuapp.com/receive/getdata/", formDatag, headers)
                const token = res.data
                // AuthToken(token);
               
                dispatch({
                    type: Login_user,
                    payload: res.data
                })

            }catch(error){
                alert("something went wrong please check the details again")
                dispatch({
                    type: Login_user_failed,
                    payload: error.response.message
                    
                })
            }
        }
        return(
            <AuthContext.Provider 
            value = {
                {
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                
                registerData,
                loginData
                
                
               

}

}>
    {props.children}
</AuthContext.Provider>
        );
};

export default AuthState
