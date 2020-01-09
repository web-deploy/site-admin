import HomeStore from './homeStore';

class Store {
    constructor() {
        this.homeStore = new HomeStore();
    }
}

export default new Store;