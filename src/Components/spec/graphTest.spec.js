const { expect } = require('chai');
const { categoryFinder, refFunc } = require('../Graph')

// describe('categoryFinder', () => {
//     it('will return an array when given an array', () => {
//       expect(categoryFinder([])).to.be.an('array')
//     })
//     it('will return one category when given a category', () => {
//         expect(categoryFinder([{category: "burglary", location_type: null}])).to.eql(['burglary'])
//     })
//     it('will return one category when given a category', () => {
//         expect(categoryFinder([{category: "burglary", location_type: null}, {category: "criminal-damage-arson", location_type: null}, {category: "burglary", location_type: null}])).to.eql(['burglary', 'criminal-damage-arson'])
//     })
// });

describe('refFunc', () => {
    it('will return an array when given an array', () => {
        expect(refFunc([])).to.be.an('array')
    });
    it('will return 1 when given one instance of a crime', () => {
        expect(refFunc([{category: "burglary", location_type: null}])).to.eql([{"burglary" : 1}])
    });
    it('will return one category when given a category', () => {
        expect(refFunc([{category: "burglary", location_type: null}, {category: "criminal-damage-arson", location_type: null}, {category: "burglary", location_type: null}])).to.eql([{'burglary' : 2, 'criminal-damage-arson' : 1}])
    })
});