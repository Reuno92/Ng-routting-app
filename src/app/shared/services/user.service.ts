import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]>  = Promise.resolve([
    {
        id: 1,
        name: 'Chris',
        username: 'chrisoncode',
        avatar: 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN_200x200.jpg',
    },
    {
        id: 2,
        name: 'Renaud',
        username: 'Reuno92',
        avatar: 'https://pbs.twimg.com/profile_images/958687181882654720/U0q3AwW9_400x400.jpg',
    },
    {
        id: 3,
        name: 'Ana',
        username: 'Ana108',
        avatar: 'https://pbs.twimg.com/profile_images/573161532235911168/zqYh-JKc_400x400.jpeg',
    }
]);

@Injectable()
export class UserService {

    // Obtenir tout les users
    getUsers() {
        return usersPromise;
    }


    // chercher un user spécifique
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));
    }
}
