/*
  Função que processa a query string da URL da requisição
  e verifica se o parâmetro "include" foi passado. Em caso
  positivo, preenche um objeto com os relacionamentos que
  devem ser incluídos na consulta sendo executada
*/
function includeRelations(query) {

  // Por padrão, não inclui nenhum relacionamento
  const include = {}

  // Se o parâmetro "include" estiver na query string
  if (query.include) {
    // Recorta o valor do parâmetro, separando os
    // relacionamentos informados onde há vírgula
    const relations = query.include.split(',')

    for (let rel of relations) {
      //Include de níve 2(Único nesta aplicação)
      if (rel === 'itens.produto') {
        include.itens = {
          include: { produto: true }
        }
      }

      else include[rel] = true

    }

  }

  return include
}

export { includeRelations }