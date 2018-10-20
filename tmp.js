const curry = (fn) => {
  const arity = fn.length;
  return function $curry(...args) {
    if (args.length < fn.length) {
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
};
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));


const reducer = (acc, fn) => [fn.call(null, ...acc)]
const compose = (...fns) => (...args) => fns.reduceRight(reducer, args)[0];

const toUpperCase = x => x.toUpperCase()
const exclaim = x => `${x}!`
const head = x => x[0]
const reverse = reduce((acc, x) => [x].concat(acc), [])

const last = compose(head, reverse)

const arg = ['jumpkick', 'roundhouse', 'uppercut']
const lastUpper = compose(toUpperCase, head, reverse)
const loudLastUpper = compose(exclaim, lastUpper)


lastUpper(arg) // UPPERCUT
loudLastUpper(arg) // UPPERCUT!

const toLowerCase = x => x.toLowerCase()
const replace = curry((re, rpl, str) => str.replace(re, rpl))
const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase)

snakeCase("Hello World") // "hello_world"

const split = curry((pattern, str) => str.split(pattern))
const map = curry((f, xs) => xs.map(f))
const join = curry((pattern, xs) => xs.join(pattern))
const initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '))

initials('hunter stockton thompson') // 'H. S. T.'

const angry = compose(toUpperCase, exclaim)
const latin = compose(map(angry), reverse)
latin(['frog', 'eyes']) // ['EYES!', 'FROG!']

const trace = curry((tag, x) => console.log(tag, x) || x)

const dasherize = compose(
  join('-'),
  map(toLowerCase),
  split(' '),
  replace(/\s{2,}/ig, ' ')
)
dasherize('The    world is vampire')
