interface Propriedades {
    chave: String;
    valor: number|String;
}
export interface Imovel {
    id: number;
    url_foto: String;
    nome: String;
    cidade: String;
    estado: String;
    ca_apt: String;
    favorito: boolean;
    adicionais: Propriedades[];
}