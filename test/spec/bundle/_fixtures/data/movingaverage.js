module.exports = {
  input: [
    { date: new Date(0), close: 22.27 },
    { date: new Date(1), close: 22.19 },
    { date: new Date(2), close: 22.08 },
    { date: new Date(3), close: 22.17 },
    { date: new Date(4), close: 22.18 },
    { date: new Date(5), close: 22.13 },
    { date: new Date(6), close: 22.23 },
    { date: new Date(7), close: 22.43 },
    { date: new Date(8), close: 22.24 },
    { date: new Date(9), close: 22.29 },
    { date: new Date(10), close: 22.15 },
    { date: new Date(11), close: 22.39 },
    { date: new Date(12), close: 22.38 },
    { date: new Date(13), close: 22.61 },
    { date: new Date(14), close: 23.36 },
    { date: new Date(15), close: 24.05 },
    { date: new Date(16), close: 23.74 }
  ],
  expected: {
    sma: [
//      { date: new Date(0), value: 22.27 },
//      { date: new Date(1), value: 22.23 },
//      { date: new Date(2), value: 22.179999999999996 },
//      { date: new Date(3), value: 22.1775 },
//      { date: new Date(4), value: 22.177999999999997 },
//      { date: new Date(5), value: 22.169999999999998 },
//      { date: new Date(6), value: 22.178571428571423 },
//      { date: new Date(7), value: 22.209999999999997 },
//      { date: new Date(8), value: 22.21333333333333 },
      { date: new Date(9), value: 22.220999999999997 },
      { date: new Date(10), value: 22.208999999999996 },
      { date: new Date(11), value: 22.228999999999996 },
      { date: new Date(12), value: 22.258999999999997 },
      { date: new Date(13), value: 22.302999999999997 },
      { date: new Date(14), value: 22.421 },
      { date: new Date(15), value: 22.613 },
      { date: new Date(16), value: 22.764000000000003 }
    ],
    ema: [
//      { date: new Date(0), value: 22.27 },
//      { date: new Date(1), value: 22.23 },
//      { date: new Date(2), value: 22.179999999999996 },
//      { date: new Date(3), value: 22.1775 },
//      { date: new Date(4), value: 22.177999999999997 },
//      { date: new Date(5), value: 22.169999999999998 },
//      { date: new Date(6), value: 22.178571428571423 },
//      { date: new Date(7), value: 22.209999999999997 },
//      { date: new Date(8), value: 22.21333333333333 },
      { date: new Date(9), value: 22.220999999999997 },
      { date: new Date(10), value: 22.208090909090906 },
      { date: new Date(11), value: 22.241165289256195 },
      { date: new Date(12), value: 22.266407963936885 },
      { date: new Date(13), value: 22.32887924322109 },
      { date: new Date(14), value: 22.516355744453616 },
      { date: new Date(15), value: 22.79520015455296 },
      { date: new Date(16), value: 22.966981944634238 }
    ]
  }
};