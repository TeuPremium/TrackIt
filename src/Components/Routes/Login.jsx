import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../CommonAssets/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";


export default function App() {
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate()
const {setToken} = useContext(AuthContext)

console.log(setToken)

function onSubmit(data){ 
const submitData = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data)
submitData.then((res) =>{
        console.log(res)
        setToken(res.data.token)
        navigate('/hoje')
        })

submitData.catch((err) => {
    alert(err.response.data.message)
})

console.log(data);
}

return (

    <Container>
        <Logo/>
    
        <form onSubmit={handleSubmit(onSubmit)}>
        
            <div><input placeholder="email" id='email' name="email" type="email" {...register("email", {required:true})} /></div>
            {errors.email && <div><h3>Insira seu Email</h3></div>}
            
            <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("password", { required: true })} /></div>
            {errors.password && <div>Digite sua senha correta!</div>}

        <div> <input value="Entrar" style={{background:'#52b6ff', color:'white'}} type="submit" /></div>
        </form>
        <Link style={{color:'#52b6ff'}} to='/cadastro'>
        <LoginHook>Nao tem uma conta? Cadastre-se!</LoginHook>
        </Link>
    </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 65px;
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;
        }    
    }
`
const LoginHook = styled.div`
    margin-top: 25px;
    color:#52b6ff;
    font-size: 14px;
    text-decoration: underline;
`
