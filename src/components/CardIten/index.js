import { Card } from "antd"

export const CardIten = ({ nome, genero, nota, descriçao, url }) => {
    return (
        <>
            <div style={{ marginTop: '10px' }}>
                <Card bordered={true}>
                    <h2>{nome}</h2>
                    <h3>Genero: {genero}</h3>
                    <p>{nota === 2 ? 'Nota:☆☆' : ''}</p>
                    <p>{nota === 1 ? 'Nota:☆' : ''}</p>
                    <p>{nota === 3 ? 'Nota:☆☆☆' : ''}</p>
                    <p>{nota === 4 ? 'Nota:☆☆☆☆' : ''}</p>
                    <p>{nota === 5 ? 'Nota:☆☆☆☆☆' : ''}</p>
                    <p style={{ width: '250px' }}>{descriçao}</p>
                    <br />
                    <img width={200} height={180} src={url}></img>
                </Card> 

            </div>
        </>

    )
}