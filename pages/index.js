const Home = () => {
  return (<div>
<Logo/>
<Botao/>
        </div>)

  

};
const Botao = () => {
  return <button>compre</button>
};
const Logo = ({ inverted }) => {
  if (inverted) {
    return <img src="https://www.maestras.com.br/assets/img/logo-negativo.png" />
  }
  return <img src="https://www.maestras.com.br/assets/img/logo.png" />
}
export default Home
