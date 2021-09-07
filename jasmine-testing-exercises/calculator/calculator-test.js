
it('should calculate the monthly rate correctly', function () {
  let value = {
    amount: 1000,
    years: 3,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(value)).toEqual('30.33');
});


it("should return a result with 2 decimal places", function() {
  let value = {
    amount:10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(value)).toEqual('131.00')
});

it("should handle terribly high interest rates", function(){
  let value = {
    amount: 1000,
    years: 40,
    rate: 99
  }
  expect(calculateMonthlyPayment(value)).toEqual('82.50');
});
/// etc
