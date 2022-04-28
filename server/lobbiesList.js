export class LobbiesList {
    // array of type lobby
    lobbies = [];

    constructor() {
    }

    // username: string
    addUserToCorrectLobby(username) {
        let openLobby = 0;
        this.lobbies.every((lobby) => {
            if (this.lobbies[openLobby].length < this.lobbies[openLobby].maxUsers) {
                this.lobbies[this.firstLobbyWithSpace].append(username);
                openLobby++;
                return false;
            } else if (this.lobbies.length <= openLobby) {
                this.lobbies.append([username]);
                return false;
            } else {
                return true;
            }
        });
    }

    removeUserFromLobby(username, lobbyIndex) {
        this.lobbies[lobbyIndex].removeUser();
    }
}
