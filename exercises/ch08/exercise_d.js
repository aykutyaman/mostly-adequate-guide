// We now consider the following functions:
//
//   // validateUser :: (User -> Either String ()) -> User -> Either String User
//   const validateUser = curry((validate, user) => validate(user).map(_ => user));
//
//   // save :: User -> IO User
//   const save = user => new IO(() => ({ ...user, saved: true }));
//
// Write a function `validateName` which checks whether a user has a name longer than 3 characters
// or return an error message. Then use `either`, `showWelcome` and `save` to write a `register`
// function to signup and welcome a user when the validation is ok.
//
// Remember either's two arguments must return the same type.

// validateName :: User -> Either String ()
const validateName = ({ name }) => (
  name.length > 3
    ? Either.of(null)
    : left('Your name need to be > 3')
)

const saveAndWelcome = compose(map(showWelcome), save)

// register :: User -> IO String
const register = compose(
  either(IO.of, saveAndWelcome),
  validateUser(validateName)
);
