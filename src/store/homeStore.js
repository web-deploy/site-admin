import {
    observable,
    action,
    computed,
    configure
} from 'mobx';

configure({
    enforceActions: 'always'
});

class HomeStore {
    @observable number = 0;
}

export default HomeStore;