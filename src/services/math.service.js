class Math {
  sum(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error('only number parameters')
    }

    return n1 + n2
  }
}

module.exports = Math;