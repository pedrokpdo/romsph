import { CardIten } from "../CardIten"
import * as C from './style'
import { array } from "../../mock"


export const CardsContainer = () => {

    return (
        <C.Container>
            {array.map((item) => (
                <>
                    <CardIten
                        nome={item.nome}
                        genero={item.genero}
                        nota={item.nota}
                        descriçao={item.descriçao}
                        url={item.url}
                    />
                </>
            ))}
        </C.Container>
    )
}