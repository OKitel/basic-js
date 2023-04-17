/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],

  getLength() {
    let arr = chainMaker.result;
    return arr.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = '(  )';
    } else {
      value = `( ${value} )`;
    }
    this.result.push(value);
    return this;
  },

  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position > this.getLength()
    ) {
      this.result.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    let final = this.result.join('~~');
    this.result.length = 0;
    return final;
  },
};

module.exports = {
  chainMaker,
};
