import { Injectable } from '@nestjs/common';
import { QuoteModel } from './data/data.interface';

@Injectable()
export class AppService {
  getRandomQuote(): QuoteModel {
    const fs = require('fs');
    const officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    const numberOfQuotes = officeQuotes.length;
    const randomQuote = officeQuotes[Math.floor(Math.random() * (numberOfQuotes -1))];
    console.log(randomQuote);
    return randomQuote;
  }

  getAllQuotes(): Array<QuoteModel> {
    const fs = require('fs');
    const officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    return officeQuotes;
  }

  // My feature :) gets all quotes from specified character
  getCharacterQuotes(character: string): Array<QuoteModel> {
    const fs = require('fs');
    let officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    let characterQuotes: Array<QuoteModel> = [];
    officeQuotes.forEach(quote => {
      if(quote['character'] == character['character']) {
        characterQuotes.push(quote);
      }
    });
    console.log(characterQuotes.length)
    return characterQuotes;
  }

  addQuote(quoteToAdd: QuoteModel): QuoteModel {
    const fs = require('fs');
    let officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    const numberOfQuotes = officeQuotes.length;
    let addedQuote: QuoteModel = {
      quote_id: numberOfQuotes,
      quote: quoteToAdd.quote,
      character: quoteToAdd.character
    }
    officeQuotes.push(addedQuote);
    fs.writeFile('./src/data/office_quotes.json', JSON.stringify(officeQuotes), (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully");
      }
      });
    return quoteToAdd;
  }

  updateQuote(updatedQuote: QuoteModel): QuoteModel {
    const fs = require('fs');
    // This is really bad, I should just get/update the entry needed 
    // but I'm not sure there is a way to do that with local json file data
    let officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    officeQuotes.forEach(quote => {
      if(quote['quote_id'] == updatedQuote.quote_id) {
        officeQuotes.pop(quote);
        officeQuotes.push(updatedQuote);
      }
    });
    fs.writeFile('./src/data/office_quotes.json', JSON.stringify(officeQuotes), (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File updated successfully");
      }
      });
    return updatedQuote;
  }

  deleteQuote(quoteToDelete: QuoteModel): QuoteModel {
    const fs = require('fs');
    // Same issue as update
    const officeQuotes = JSON.parse(fs.readFileSync('./src/data/office_quotes.json', 'utf8'));
    officeQuotes.splice(quoteToDelete.quote_id, 1);
    fs.writeFile('./src/data/office_quotes.json', JSON.stringify(officeQuotes), (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File deleted successfully");
      }
      });
    return quoteToDelete;
  }
}
