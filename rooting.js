const judgeVegetable = function (vegetables, metric) {
  this.val2 = metric;
  let newArr = vegetables.sort( ( a , b ) => { return b [ this.val2 ] - a [ this.val2 ] } ) ;
  return newArr[0].submitter ;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric);


