import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/32266873?v=4" alt="Diogo Cardoso" />
              <div className="user-info">
                <strong>Diogo Cardoso</strong>
                <span>Reactjs, Node.js</span>
              </div>
            </header>
            <p>Estudante do curso Superior de Sistemas para Internet no IFPB. Apaixonado por desenvolvimento de games e web.</p>
            <a href="https://api.github.com/users/dicardoso">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/32266873?v=4" alt="Diogo Cardoso" />
              <div className="user-info">
                <strong>Diogo Cardoso</strong>
                <span>Reactjs, Node.js</span>
              </div>
            </header>
            <p>Estudante do curso Superior de Sistemas para Internet no IFPB. Apaixonado por desenvolvimento de games e web.</p>
            <a href="https://api.github.com/users/dicardoso">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/32266873?v=4" alt="Diogo Cardoso" />
              <div className="user-info">
                <strong>Diogo Cardoso</strong>
                <span>Reactjs, Node.js</span>
              </div>
            </header>
            <p>Estudante do curso Superior de Sistemas para Internet no IFPB. Apaixonado por desenvolvimento de games e web.</p>
            <a href="https://api.github.com/users/dicardoso">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
