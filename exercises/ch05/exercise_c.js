// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
// Hint, the `flip` function may come in handy.

// fastestCar :: [Car] -> String
const _fastestCar = (cars) => {
  const sorted = sortBy(car => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
};

const append = flip(concat);

const fastestCar = compose(
  append(' is the fastest'),
  prop('name'),
  last,
  sortBy(prop('horsepower'))
)
