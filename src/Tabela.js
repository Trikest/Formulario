function Tabela({vetor,selecionar}) {
  return (
    <table className="table">
      <thead>
        <th>IDproduto</th>
        <th>Nome do Produto</th>
        <th>Quantidade de Produto</th>
        <th>Preço do Produto</th>
        <th>Descrição do Produto</th>
        <th>Selecionar</th>
      </thead>
      <tbody>
        {
          vetor.map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.nomeProduto}</td>
              <td>{obj.quantidadeProduto}</td>
              <td>{obj.precoProduto}</td>
              <td>{obj.descricaoProduto}</td>
             
              
              
              <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
            </tr>))
        }



      </tbody>
    </table>
  )
}

export default Tabela;