import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ballImg from './img/woobies.jpg'
import boxesImg from './img/header.jpg'

function App() {
	return (
		<div className="cards-container">
			<div className="card">
				<img className="card-img-top" src={ballImg} alt="" />
				<div className="card-body">
					<h5 className="card-title">Ball Game</h5>
					<p className="card-text">
						This game you can challenge yourself to see how many scores you can make
					</p>
          <div>
            <a href="https://amin-bash.github.io/Ball-Game/"  target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              See project
            </a>
            <a href="https://github.com/amin-bash/Ball-Game"  target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-2">
              Go to Gihub
            </a>
          </div>
				</div>
			</div>


      <div className="card">
				<img className="card-img-top" src={boxesImg} alt="" />
				<div className="card-body">
					<h5 className="card-title">Boxes game</h5>
					<p className="card-text">
          This project is to count how many couple boxes you got
					</p>
          <div>
            <a href="https://amin-bash.github.io/Boxes-Game/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              See project
            </a>
            <a href="https://github.com/amin-bash/Boxes-Game" target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-2">
              Go to Gihub
            </a>
          </div>
				</div>
			</div>
		</div>
	);
}

export default App;
