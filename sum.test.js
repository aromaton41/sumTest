const sum = require('./sum')

// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
    expect(sum(1,2)).toBe(3);
  });

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21' ,() =>{
    expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ 7 
test('2 + 5 เท่ากับ 7 ' ,() => {
    expect(sum(2,5)).toBe(7);
});

// -1 + 1 เท่ากับ 0
test('-1 + 1 เท่ากับ 0 ' , () => {
    expect(sum(-1,1)).toBe(0);
});

// -2 + -5 เท่ากับ -7
test('-2 + -5 เท่ากับ -7' , () =>{
    expect(sum(-2,-5)).toBe(-7);
});