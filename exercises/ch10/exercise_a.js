// Write a function that adds two possibly null numbers together using `Maybe` and `ap`.

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
const safeAdd = curry((a, b) => Maybe.of(add).ap(a).ap(b))
