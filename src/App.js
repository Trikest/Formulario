import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const produto = {
    idProduto : "",
    quantidadeProduto : "",
    nomeProduto : "",
    descricaoProduto :"",
    imgProduto : "",
    precoProduto : "",
  }
  
  const [produtor,setprodutor]=useState([]);
  const [btncadastrar,setbtncadastrar] =useState(true);
  const [objProdutor,setobjProdutor] = useState(produto);
  useEffect(()=>{
  fetch("http://localhost:8080/product")
  .then(retorno => retorno.json())
  .then(retorno_convertido => setprodutor(retorno_convertido))
  }, [])

  const aoDigita = (e) => {  
    setobjProdutor({...objProdutor,[e.target.name]:e.target.value,});
  }
const cadastrar = () =>{
  fetch("http://localhost:8080/createP",{
    method:"post",
    body:JSON.stringify(objProdutor),
    headers:{
      "Content-type":"application/json",
      "Accept" : "application/json"
    }
})
.then(retorno => retorno.json())
.then(retorno_convertido =>{
  if(retorno_convertido.mensagem !== undefined){
    alert(retorno_convertido.mensagem);
  }
  else{
    setprodutor([...produto,retorno_convertido])
    alert("Produtor cadastrado com sucesso!");
    limpaformulario();
   
  }
  
})
}

const remover = () =>{
  fetch("http://localhost:8080/deleteP",{
    method:"delete",
    headers:{
      "Content-type":"application/json",
      "Accept" : "application/json"
    }
})
.then(retorno => retorno.json())
.then(retorno_convertido =>{
  alert(retorno_convertido.mensagem);
  let vetorTemp=[...produtor]

  let indice = vetorTemp.findIndex((p)=>{
    return p.idProduto === objProdutor.idProduto;
  });
vetorTemp.splice(indice,1)
  
setprodutor(vetorTemp);
limpaformulario();
})
}
const limpaformulario =()=>{
  setobjProdutor(produto)
  setbtncadastrar(true)
}
const selecionarProduto =(indice)=>{
  setobjProdutor(produtor[indice])
  setbtncadastrar(false)
}
const alterar = () =>{
  fetch("http://localhost:8080/alterarP",{
    method:"put",
    body:JSON.stringify(objProdutor),
    headers:{
      "Content-type":"application/json",
      "Accept" : "application/json"
    }
})
.then(retorno => retorno.json())
.then(retorno_convertido =>{
  if(retorno_convertido.mensagem !== undefined){
    alert(retorno_convertido.mensagem);
  }
  else{
    
    alert("Produtor alterado com sucesso!");
    let vetorTemp=[...produtor]

    let indice = vetorTemp.findIndex((p)=>{
      return p.idProduto === objProdutor.idProduto;
    });
  vetorTemp[indice]=objProdutor
    
  setprodutor(vetorTemp);
    limpaformulario();
   
  }
  
})
}
  return (
    <div>
      <p>{JSON.stringify(objProdutor)}</p>
      <Formulario botao={btncadastrar} eventoTeclado={aoDigita} cadastrar={cadastrar} obj={objProdutor} cancelar={limpaformulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={produtor} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
