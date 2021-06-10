import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SearchService {
	async getGamesByTeam(team: string) {
		try {
			const gameData = (await axios.get("https://www.scorebat.com/video-api/v1/")).data;

			let returnData = [];

			for (const idx in gameData) {
				const game = gameData[idx];
				const data = game.title.split(' - ');

				if (data[0] === team) {
					returnData.push(game);
				} else if (data[1] === team) {
					returnData.push(game);
				}
			}

			return returnData;
		} catch (err) {
			console.log(err);
		}
	}
}
