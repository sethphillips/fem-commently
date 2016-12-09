import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    queryParams:{
        search:{
            replace:true,
        }
    },

    model({search}) {
        return this.store.query('post',{search});
    },
    actions:{
        refresh(){
            this.refresh();
        }
    }
});