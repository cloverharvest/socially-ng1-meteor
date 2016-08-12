import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/api/parties';

Meteor.startup(() => {
    if (Parties.find().count() === 0) {
    const parties = [{
        'name': 'Dinner with family',
        'description': 'Precious moments.'
    }, {
        'name': 'Birthdays',
        'description': 'Gift of life!'
    }, {
        'name': 'Promotions',
        'description': 'Moving up.'
    }];

    parties.forEach((party) => {
        Parties.insert(party)
    });
  }
});