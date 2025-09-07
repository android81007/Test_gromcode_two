import summTwo,{ getSquaredArray, getOddNumbers} from "./calculator";

it("squared number ", () => {
  const result = getSquaredArray([2, 3, 10]);

  expect(result).toEqual([4, 9, 100]);
});

it('number not event',() => {
    const itog = getOddNumbers([0,3,4,11]);

    expect(itog).toEqual([3,11]);
} );

it('default test',() => {
    const plus = summTwo(9,11);

    expect(plus).toEqual(20);
})