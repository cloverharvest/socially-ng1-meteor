# socially-ng1-meteor
Practice app from angular-meteor team.

# Run app
  `$ meteor`

## Run test (Jasmine)
Turn off development server (i.e. `$ meteor`) before running the test to avoid errors.
Running two copies of Meteor in the same application directory
will not work. If something else is using port 3000, you can
specify an alternative port with --port <port>.


  `$ meteor npm run test:watch`

## User operations

   `$ meteor remove insecure`
   `$ meteor add accounts-password`

## Social login feature

   `meteor add accounts-facebook accounts-twitter accounts-github`

### Autopublish Issue
  Autopuplish pushes all of the database into the client.

  Keep autopublish while in development and testing, or at least until we determine which parties we want to send to the client.

  If autopublish is removed during development, the list of todos(aka parties inserted) are added to the database **but** do not show on the view.

  Remove before deploying for production with:

  `$ meteor remove autopublish`
