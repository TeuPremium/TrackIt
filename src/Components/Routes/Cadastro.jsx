import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../CommonAssets/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cadastro(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()

  function onSubmit(data){ 
    const submitData = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)
    submitData.then((res) => {
            navigate('/')
        })
    submitData.catch((err) =>{
            alert(err.response.data.message)
            console.log(err.response.data)
        })
    console.log(data);
    }

  return (
    
        <Container>
            <Logo/>
        
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div><input placeholder="email" id='email' name="email" type="email" defaultValue="email" {...register("email", {required:true})} /></div>
                {errors.email && <div><h2>Este campo deve estar preenchido</h2></div>}
                
                <div><input id='name' name="name" placeholder="nome" type="text" {...register("name", { required: true })} /></div>
                {errors.name && <div>Este campo deve estar preenchido</div>}

                <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("password", { required: true })} /></div>
                {errors.password && <div>Este campo deve estar preenchido</div>}

                <div><input id='picture' name="picture" placeholder="foto" type="URL" {...register("image", { required: true })} /></div>
                {errors.image && <div>Este campo deve estar preenchido</div>}
            <div> <input style={{background:'#52b6ff', color:'white'}} type="submit" /></div>
            </form>
            <Link style={{color:'#52b6ff'}} to='/'>
            <LoginHook>Ja tem uma conta? Faca login</LoginHook>
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
        color: #414141;
        font-weight: 400;
        font-size: 20px;
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
