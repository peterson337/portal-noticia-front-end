export type noticiaPrincipalType = {
    autor: string;
    categoria: string;
    conteudo: string;
    imagem: string;
    slug: string;
    title: string;
    views: number;
    id: string;
}


export type OutrasNoticiasType = {
    autor: string;
    categoria: string;
    conteudo: string;
    imagem: string;
    slug: string;
    title: string;
    views: number;
    id: string;
}

export type Props = {
    noticiaPrincipal: noticiaPrincipalType;
}


export type Teste = {
    OutrasNoticias: OutrasNoticiasType[];

}

export type NoticiaPrincipalVerMais = {
    autor: string;
    categoria: string;
    conteudo: string;
    imagem: string;
    slug: string;
    title: string;
    views: number;
    _id: string;
}


