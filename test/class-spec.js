const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");
const { beforeEach } = require("mocha");

describe("Word", function () {

  let word;

  before(() => {
   word = new Word("Something");
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("Something");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("Smthng");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("oei");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("omethingSay");
    });
  });
});