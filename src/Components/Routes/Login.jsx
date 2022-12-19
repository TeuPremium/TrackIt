import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../CommonAssets/Logo";
import { Link } from "react-router-dom";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data){ 

 console.log(data);
}

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    
        <Container>
            <Logo/>
        
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div><input placeholder="email" id='email' name="email" type="email" defaultValue="email" {...register("email", {required:true})} /></div>
                {errors.email && <div><h2>Este campo deve estar preenchido</h2></div>}
                
                <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("senha", { required: true })} /></div>
                {errors.senha && <div>Este campo deve estar preenchido</div>}

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
