import "./App.css";
import logo from "./img/bikcraft.svg";
import bike from "./img/bicicleta.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Bikcraft"></img>
        <nav class="menu">
          <a href="/">Sobre</a>
          <a href="/">Produtos</a>
          <a href="/">Lojas</a>
          <a href="/">Contato</a>
        </nav>
      </header>

      <main class="conteudo">
        <article class="introducao">
          <h1>Bicicletas Feitas a Mão</h1>
          <p>
            A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela
            vem equipada com os melhores acessórios da marca.
          </p>
          <a class="botao" href="/">
            Ver Mais
          </a>
        </article>

        <article>
          <img src={bike} alt="Bicicleta Bikcraft Preta"></img>
        </article>

        <article class="sub">
          <h2 class="subtitulo">Vantagens Bikcraft</h2>
        </article>

        <article>
          <div class="vantagens">
            <div class="vantagens-item">
              {/* <img src="./img/eletrica.svg" alt=""> */}
              <h3>Motor Elétrico</h3>
              <p>
                Permite você viajar distâncias inimaginaveis com a sua bike.
              </p>
            </div>
            <div class="vantagens-item">
              {/* <img src="./img/velocidade.svg" alt=""> */}
              <h3>40 km/h</h3>
              <p>
                A mais rápida bicicleta elétrica disponível hoje no mercado.
              </p>
            </div>
            <div class="vantagens-item">
              {/* <img src="./img/rastreador.svg" alt=""> */}
              <h3>Rastreador</h3>
              <p>
                Rastreador e sistema anti-furto para garantir o seu sossego.
              </p>
            </div>
          </div>
        </article>
      </main>

      <footer class="rodape">
        <p>Bikcraft. Alguns Direitos Reservados.</p>
      </footer>
    </div>
  );
}

export default App;
