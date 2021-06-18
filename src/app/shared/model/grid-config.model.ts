
/**
 * Interface que define as propriedades de configuração do Grid
 */
export interface GridConfig {

    /**
     * Configuração do ng-table se a tabela será paginada ou não
     */
    paging: boolean;

    /**
     * Flag que indica se o componente de paginação deve estar visível ou não
     */
    showPagination: boolean;

    /**
     * Objeto com as configurações de Ordenação
     */
    sorting: any;

    /**
     * Objeto com as configurações de filtro
     */
    filtering: any;

    /**
     * Classes CSS da tabela
     */
    className: Array<string>;
}