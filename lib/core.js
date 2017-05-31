/**
 * Created by freya on 2017/5/31.
 */
var Comment  = require('./comment');
var Topic = require('./topc');
var User = require('./user');

module.exports =  {
    get $User(){
        return User;
    },

    get $Comment(){
        return Commment;
    },

    get $Topic(){
        return Topic;
    }
}