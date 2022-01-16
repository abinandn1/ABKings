export class Lobby {
    maxUsers = 4;
    // array of string username
    usersList = [];
    
    // return a boolean
    isFull() {
        return this.usersList.length >= this.maxUsers;
    }

    // return void
    addUser(username) {
        this.usersList.push(username);
    }

    removeUser(username) {
        let newList = [];
        this.usersList.map((user) => {
            if (user !== username) {
                newList.append(user);
            }
        });
        this.usersList = newList;
    }
}