import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModel } from './data/data.interface';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Get /', () => {
    it("get random quote", async () => {
      const result = appController.getRandomQuote();
      expect(result).not.toBeNull();
      
    });
  });

  describe('Get/quotes', () => {
    it("get all quotes", async () => {
      const result = appController.getAllQuotes();
      expect(result).not.toBeNull();
      
    });
  });

  describe('Get/quotes/character', () => {
    it("get all quotes from specific character", async () => {
      const character: string = 'Stefanie';
      const result = appController.getCharacterQuotes(character);
      expect(result).not.toBeNull();
      
    });
  });

  describe('Post /', () => {
    it("create quote", async () => {
      const quoteToAdd: QuoteModel = {
        quote: 'Test quote',
        character: 'Stefanie'
      }
      const result = appController.addQuote(quoteToAdd);
      expect(result).not.toBeNull();
      expect(result.quote === quoteToAdd.quote).toBeTruthy();
    });
  });

  describe('Put /', () => {
    it("update quote", async () => {
      // oof I need to mock and test using the mock...but how?
      const mockQuotes: Array<QuoteModel> = [
        {
          quote_id: 0,
          quote: 'Quote 0',
          character: 'Character 0'
        },
        {
          quote_id: 1,
          quote: 'Quote 1',
          character: 'Character 1'
        },
        {
          quote_id: 2,
          quote: 'Quote 2',
          character: 'Character 2'
        },
      ];

      const quoteToUpdate: QuoteModel = {
        quote_id: 2,
        quote: 'Test update quote',
        character: 'Stefanie'
      }
      const result = appController.updateQuote(quoteToUpdate);
      expect(result).not.toBeNull();
      expect(result.quote).toEqual(quoteToUpdate.quote);
    });
  });

  describe('Delete /', () => {
    it("update quote", async () => {
      // also need to mock
      const mockQuotes: Array<QuoteModel> = [
        {
          quote_id: 0,
          quote: 'Quote 0',
          character: 'Character 0'
        },
        {
          quote_id: 1,
          quote: 'Quote 1',
          character: 'Character 1'
        },
        {
          quote_id: 2,
          quote: 'Quote 2',
          character: 'Character 2'
        },
      ];
      
      const quoteToDelete: QuoteModel = {
        quote_id: 2,
        quote: 'Quote 2',
        character: 'Character 2'
      }
      const result = appController.deleteQuote(quoteToDelete);
      // const result = jest.fn(mockQuotes, appController.deleteQuote(quoteToDelete));
      // const result = jest.mock<Array<QuoteModel>>(mockQuotes)
      expect(result).not.toBeNull();
      expect(result.quote).toEqual(quoteToDelete.quote);
    });
  });
});
