import { AdItens } from '../AdItens'
import * as c from './style'

export const Ad = () => {
    return (
        <c.Container>
            <AdItens
                nome='Churrasqueira'
                preço='RS 16,90'
                url='https://a-static.mlcdn.com.br/618x463/churrasqueira-a-carvao-mor-rodeio-com-4-espetos/magazineluiza/144804900/06e273451be46d5ca89f8fc284e29a1a.jpg'
            />
            <AdItens
                nome='Furadeira'
                preço='RS 17,30'
                url='https://imgs.ponto.com.br/14188583/1xg.jpg'
            />
            <AdItens
                nome='Playstation 5'
                preço='RS 79,50'
                url='https://meups.com.br/wp-content/uploads/2022/05/PS5-1-900x503.jpg'
            />
            <AdItens
                nome='Anuncie Aqui'
                preço='Anuncie Aqui'
                url='https://i.ytimg.com/vi/7w9cn8MJNmA/maxresdefault.jpg'
            />
            <AdItens
                nome='Anuncie Aqui'
                preço='Anuncie Aqui'
                url='https://i.ytimg.com/vi/7w9cn8MJNmA/maxresdefault.jpg'
            />
            <AdItens
                nome='Anuncie Aqui'
                preço='Anuncie Aqui'
                url='https://i.ytimg.com/vi/7w9cn8MJNmA/maxresdefault.jpg'
            />
            <AdItens 
                nome='Anuncie Aqui'
                preço='Anuncie Aqui'
                url='https://i.ytimg.com/vi/7w9cn8MJNmA/maxresdefault.jpg'
            />
        </c.Container>
    )
}