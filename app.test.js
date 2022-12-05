
test ('adds 14 plus 9 equals 23', () => {
    const {sum} = require ('./app');
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test ('change 2 euros to dollars equals 2.4', () => {
    const {fromEurotoDollar} = require ('./app');
    let total = fromEurotoDollar(2);
    expect(total).toBe(2.4);
});

test ('change 2 dollars to yen equals 213.1666666666669', () => {
    const {fromDollartoYen} = require ('./app');
    let total = fromDollartoYen(2);
    expect(total).toBe(213.16666666666669);
});

test ('change 2 yen to punds equals 0.012509773260359656', () => {
    const {fromYentoPound} = require ('./app');
    let total = fromYentoPound(2);
    expect(total).toBe(0.012509773260359656);
})
