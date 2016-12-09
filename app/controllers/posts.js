import Ember from 'ember';

export default Ember.Controller.extend({
    search: '',

    _refreshRoute(){
        this.send('refresh');
    },

    actions:{
        search(input){
            this.set('search', input)
            Ember.run.debounce(this, '_refreshRoute',500)
        }
    }
});
