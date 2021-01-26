const Logo = ({ inverted }) => {
  if (inverted) {
    return (
      <img src="https://www.maestras.com.br/assets/img/logo-negativo.png" />
    );
  }
  return <img src="https://www.maestras.com.br/assets/img/logo.png" />;
};

export default Logo;