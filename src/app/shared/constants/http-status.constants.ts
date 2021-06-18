
export class HttpStatus {

    /**
     * 400 - Requisição mal formada pelo cliente - ex: um parâmetro que deveria ser um número,
     * mas foi passado como 'abc'
     */
    public static readonly badRequest: number = 400;

    /**
     * 500 - Erro interno no servidor
     */
    public static readonly internalServerError: number = 500;

    /**
     * 204 - Resposta sem conteúdo
     */
    public static readonly noContent: number = 204;

    /**
     * 404 - Endpoint requisitado não foi encontrado
     */
    public static readonly notFound: number = 404;

    /**
     * 200 - Requisição com Sucesso
     */
    public static readonly ok: number = 200;

    /**
     * 503 - Algum serviço utilizado pelo servidor está indisponível
     */
    public static readonly serviceUnavailable: number = 503;

    /**
     * 401 - O cliente não está autorizado a acessar esse recurso
     */
    public static readonly unauthorized: number = 401;

    /**
     * 0 - Esse Status não é padronizado, mas é utilizado pelo angular
     * quando algumas requisições falham
     */
    public static readonly zero: number = 0;

    /**
     * Função que avalia se um status representa um erro - 4XX ou 5XX
     */
    public static isError(httpStatus: number){
        return ((httpStatus > 399) && (httpStatus < 600));
    }
}