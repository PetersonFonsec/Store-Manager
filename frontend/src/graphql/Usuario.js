import graphql from 'graphql-tag'

export const novoUsuario = graphql`
    mutation novoUsuarioMutate($dados: UsuarioInput!){
        novoUsuario( dados: $dados ){
            id nome email
        }
    }`

export const login = graphql`
    query login($email:String!, $senha:String!){
        login(email:$email, senha: $senha){            
            id nome email token
        }
    }`