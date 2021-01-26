import Logo from '../components/logo';

const Home = () => {
  return (<div>
<Logo/>
<Logo inverted/>
<Botao/>
        </div>)
};

const Botao = () => {
  return <button>compre</button>
};

export default Home
