import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('produtos')
export class ProdutosController {

// Listando todos os produtos.    
@Get()
obterTodos(): string{
    return 'Listando todos os produtos';
}

// Listando um produto por id. 
@Get(':id')
obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`
}

//Criando um produto.
@Post()
criar(@Body()produto): string{
    console.log(produto)
    return 'Produto Criado';
}

//Altera o produto.
@Put()
alterar(@Body()produto): string{
    console.log(produto)
    return 'Produto Atualizado';
}

//Deleta o produto. 
@Delete(':id')
deletar(@Param() params): string{
    return `Produto deletado ${params.id}`
}
}