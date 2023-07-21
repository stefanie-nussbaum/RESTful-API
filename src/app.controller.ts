import { Controller, Get, Post, Put, Delete, Req, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { QuoteModel } from './data/data.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get a random quote
  @Get()
  getRandomQuote(): QuoteModel {
    return this.appService.getRandomQuote();
  }

  // Get all quotes
  @Get('quotes')
  getAllQuotes(): Array<QuoteModel> {
    return this.appService.getAllQuotes();
  }

  // Get all quotes from specified character
  @Get(`quotes/character`)
  getCharacterQuotes(@Body() character: string): Array<QuoteModel> {
    return this.appService.getCharacterQuotes(character);
  }

  // Add a quote
  @Post()
  addQuote(@Body() quoteToAdd: QuoteModel): QuoteModel {
    return this.appService.addQuote(quoteToAdd);
  }

  // Update a quote
  @Put()
  updateQuote(@Body() quoteToUpdate: QuoteModel): QuoteModel {
    return this.appService.updateQuote(quoteToUpdate);
  }

  // Delete a quote
  @Delete()
  deleteQuote(@Body() quoteToDelete: QuoteModel): QuoteModel {
    return this.appService.deleteQuote(quoteToDelete);
  }
}


