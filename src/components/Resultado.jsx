import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    
`
const Imagen = styled.img`
  display: block;
  max-width: 100%;
  border: 4px solid #ccc;
  box-shadow: 2px 2px 4px rgba(211, 19, 19, 0.1);
  margin-bottom: 1rem;
  margin-left: -10rem;
`;

const Texto = styled.p`
  font-size: 1.6rem;
  color: #919191;
  font-family: 'Nanum Myeongjo', serif;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;

const Precio = styled.p`
  font-size: 3rem;
  color: #bbbbbb;
  font-family: 'Nanum Myeongjo', serif;
  letter-spacing: 1px;

  span {
    font-weight: bold;
  }
`;
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto durante el día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo durante el día: <span>{LOWDAY}</span></Texto>
            <Texto>Cambio en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última modificación: <span>{LASTUPDATE}</span></Texto>
        </div>
        
    </Contenedor>
  )
}

export default Resultado