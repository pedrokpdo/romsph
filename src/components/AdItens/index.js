
export const AdItens = ({nome, preço, url}) => {
    return (
        <div style={{border:'1px solid' ,height:'500px', marginBottom:'30px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h1>{nome}</h1>
            <img width={250} src={url}/>
            <h1>{preço}</h1>
        </div>
    )
}