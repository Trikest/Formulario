
function Formulario({ botao ,eventoTeclado,cadastrar,obj,cancelar,remover,alterar }) {
    return (
        <form>
            <input type="text" value={obj.idProduto} name="idProduto" onChange={eventoTeclado}  placeholder="IdProduto" className="form-control"/>
            <input type="text" value={obj.nomeProduto} name="nomeProduto"  onChange={eventoTeclado} placeholder="Nome" className="form-control"/>
            <input type="text" value={obj.quantidadeProduto} name="quantidadeProduto" onChange={eventoTeclado}  placeholder="Quantidade" className="form-control"/>
            <input type="text"value={obj.precoProduto}  name="precoProduto" onChange={eventoTeclado}  placeholder="Preço" className="form-control"/>
            <input type="text" value={obj.descricaoProduto} name="descricaoProduto"  onChange={eventoTeclado} placeholder="Descrição" className="form-control"/>
            <input type="text" value={obj.imgProduto} name="imgProduto" onChange={eventoTeclado}  placeholder="Nome da imagem" className="form-control"/>
            {
                botao ?
                    <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary"></input>
                    :
                    <div>
                        <input type="button" value="Alterar" onClick={alterar} className="btn btn-warning"></input>
                        <input type="button" value="Remover" onClick={remover} className="btn btn-danger"></input>
                        <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary"></input>
                    </div>
            }


        </form>
    )
}

export default Formulario;