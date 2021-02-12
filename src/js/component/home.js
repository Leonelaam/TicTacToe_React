import React, { useState } from "react";
import { Board } from "./board";
import { SelectPlayer } from "./selectplayer";

//create your first component
export function Home() {
	//iniciarJuego desde  selectPlayer
	const [startGame, setStartGame] = useState(false);

	const iniciarJuego = () => {
		setStartGame(!startGame);
	};

	//Establecer nombre a jugadores.
	const [userName, setUserName] = useState({
		jugador1: null,
		jugador2: null
	});

	const nameEntry = e => {
		let data = {
			[e.target.name]: e.target.value
		};
		setUserName({ ...userName, ...data });
	};

	//Arma de los jugadores
	const [weapon, setweapon] = useState("");
	const weaponSelectX = () => {
		setweapon("X");
	};
	const weaponSelectO = () => {
		setweapon("O");
	};
	// resetear el juego
	const resetGame = () => {
		setUserName({
			jugador1: null,
			jugador2: null
		});
		setStartGame(false);
		setweapon(" ");
	};

	return (
		<div className="text-center mt-5">
			<h1>
				<span>
					<h1>TIC TAC TOE React</h1>
				</span>
			</h1>
			{startGame ? (
				<Board
					jugador1={userName.jugador1}
					weapon={weapon}
					resetGame={resetGame}
				/>
			) : (
				<SelectPlayer
					userName={userName}
					nameEntry={nameEntry}
					iniciarJuego={iniciarJuego}
					weaponSelectX={weaponSelectX}
					weaponSelectO={weaponSelectO}
					weapon={weapon}
				/>
			)}
		</div>
	);
}
