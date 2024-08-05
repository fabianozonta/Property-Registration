const imoveis = []
let opcao = ''

do{
    opcao = prompt('Imóveis cadastrados: ' + imoveis.length + '\n1 - Novo imóvel \n2 - Lista imóveis \n3 - Sair' ) 

    switch(opcao){
        case '1':
            const imovel = {}
            imovel.proprietario = prompt('Nome do proprietário: ')
            imovel.quartos = prompt('Quantidade de quartos: ')
            imovel.banheiros = prompt('Quantidade de banheiros: ')
            imovel.garagem = prompt('Imóvel possui garagem: Sim ou Não')

            const confirmacao = confirm(
                'Salvar esse imóvel?\n' + 
                '\nProprietário ' + imovel.proprietario + 
                '\nQuartos: ' + imovel.quartos + 
                '\nBanheiros: ' + imovel.banheiros + 
                '\nGaragem: ' + imovel.garagem
            )

            if (confirmacao){
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso')
            }else{
                alert('Voltando para o Menu')
            }
            break
        case '2':
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    'Imóvel ' + (i + 1) + 
                    '\nProprietário ' + imoveis[i].proprietario + 
                    '\nQuartos: ' + imoveis[i].quartos + 
                    '\nBanheiro: ' + imoveis[i].banheiros + 
                    '\nPossui garagem?: ' + imoveis[i].garagem

                )
            }
            break
        case '3':
            alert('Saindo do programa')
            break
        default:
            alert('Opção inválida')

    }   


}while(opcao != '3')