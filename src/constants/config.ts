export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: 'Scots', // This changes the display name for your language
  gameName: 'MacWordle', // This changes the display name for Wordle in your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'Vasilis Karaiskos', // Put your name here so people know who made this Wordle!
  authorWebsite: 'YourLinkHere', // Put a link to your website or social media here
  wordListSource: 'the Dictionaries of the Scots Language', // Describe the source material for your words here
  wordListSourceLink: 'https://dsl.ac.uk/', // Put a link to the source material for your words here
	sourceLogo: '/dsl-logo.jpg', //the logo of the organisation (placed in public/ folder)
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'March 9, 2022 00:00:00', // what date and time to start your game from
  defaultLang: 'sc', // the default interface language
  availableLangs: [
	'sc', 'en', 'es'], // the options available to the user for translation languages
}
