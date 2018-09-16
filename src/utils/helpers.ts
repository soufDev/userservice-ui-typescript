import { User } from '../entities/User';

export const addPropertiesToPartialUser = (user: Partial<User>) => ({
  ...user,
  birthDate: '11-11-1990',
  phoneNumber: '+33661616161',
  address: '123 street Brooklyn New York',
  picture: 'http://placehold.it/256x256',
  friends: [
    {
      id: 0,
      name: 'Virginia Weber'
    },
    {
      id: 1,
      name: 'Samantha Knight'
    },
    {
      id: 2,
      name: 'Jewell Norman'
    }
  ],
  gender: 'male',
  age: 28,
  company: 'wynd',
  registred: '2015-06-07T10:10:43 -02:00',
  latitude: -9.463673,
  longitude: -75.808407,
  tags: [
    'culpa',
    'in',
    'culpa',
    'pariatur',
    'velit',
    'sit',
    'sunt'
  ],
  greeting: 'Hello, Gay! You have 1 unread messages.',
  favoriteFruit: 'banana',
});
