const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  
  getLength () {
    let arr = chainMaker.result;
    return arr.length;
  },

  addLink (value) {
    value += '';
    this.result.push(value);
    return this;
  },

  removeLink (position) {
    this.result.splice(position-1,1);
    return this;
  },

  reverseChain () {
   this.result.reverse();
   return this;
  },


  finishChain () {
    let final =  '( ' + this.result.join(' )~~( ') +' )';
    this.result.length = 0;
    return final;
  }
};

module.exports = chainMaker;
