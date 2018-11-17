// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {

    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
};




const match = curry((what, s) => s.match(what))
const filter = curry((f, xs) => xs.filter(f))
const replace = curry((what, replacement, s) => s.replace(what, replacement))
const map = curry((f, xs) => xs.map(f))

// const hasLetterR = match(/r/g)

// // console.log(filter(hasLetterR, ['rock and roll', 'jazz']))

// const removeStringsWithouR = filter(hasLetterR)
// //console.log(removeStringsWithouR(['rock and roll', 'jazz']))

// const noVowels = replace(/[aeiou]/ig)
// const censored = noVowels('*')
// console.log(censored('chocolate'))
const square = x => x * x
const getSquares = map(square)
//console.log(getSquares([1, 2, 4, 7]))


const split = curry((by, str) => str.split(by))

const makePassword = frase => {
  return split(" ")(frase)
}

console.log(makePassword("Foo bar baz"))
