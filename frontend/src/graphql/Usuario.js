import graphql from 'graphql-tag'

export const novoUsuario = graphql`
    mutation novoUsuarioMutate($dados: UsuarioInput!){
        novoUsuario( dados: $dados ){
            id nome email
        }
    }`