# socially-ng1-meteor
Practice app from angular-meteor team.

# Run app
  `$ meteor`

# Run test (Jasmine)
(Must turn of development server (aka `$ meteor`) before running the test to avoid error)

  `$ meteor npm run test:watch`

# Autopublish Issue
  Keep autopublish for development and testing.
    (If removed during development, list of todos(aka parties inserted) do not show but are added to the database

  Remove before deplying for production with:

  `$ meteor remove autopublish`
