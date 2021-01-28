import Logo from '../components/logo';

const Home = () => {
  return (<div>
<Logo/>
<Logo inverted/>
<Botao/>
<Menu />
        </div>)
};

const Botao = () => {
  return <button>compre</button>
};




function Menu(){
  return(
    <ul>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Sobre</a></li>

    </ul>
  )
};

export default Home
