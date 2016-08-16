# socially-ng1-meteor
Practice app from angular-meteor team.

# Run app
  `$ meteor`

# Run test (Jasmine)
Must turn of development server (i.e. `$ meteor`) before running the test to avoid errors.

  `$ meteor npm run test:watch`

### Autopublish Issue
  Keep autopublish while in development and testing.
  If autopublish is removed during development, the list of todos(aka parties inserted) are added to the database **but** do not show on the view.

  Remove before deploying for production with:

  `$ meteor remove autopublish`
