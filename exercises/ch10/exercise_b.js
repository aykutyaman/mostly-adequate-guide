// Rewrite `safeAdd` from exercise_a to use `liftA2` instead of `ap`.

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
// const safeAdd = curry((a, b) => liftA2(add, a, b))
const safeAdd = liftA2(add)
