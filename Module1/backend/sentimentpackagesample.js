const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Dogs are loyal.');
console.log(result); // Score: -2, Comparative: -0.666