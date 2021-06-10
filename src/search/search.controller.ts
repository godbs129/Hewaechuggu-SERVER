import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { returnLib } from 'src/lib/returnLib';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
	constructor(
		private readonly searchService: SearchService,
	) { }

	@Get('/get')
	@HttpCode(200)
	async searchTeam(@Query('team') team: string) {
		const data = await this.searchService.getGamesByTeam(team);

		return returnLib(200, '조회 성공', data);
	}
}
