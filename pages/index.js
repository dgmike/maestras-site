import Logo from '../components/logo';
import Menu from '../components/menu';

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






export default Home