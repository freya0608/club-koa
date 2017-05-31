/**
 * Created by freya on 2017/5/31.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    gender: {type: String,required: true},
    signature: {type: String},
    created_at: {type: Date,required: true},
    update_at: {type: Date,required: true}
});
UserSchema.index({name:1});
module.exports = mongoose.model('User',UserSchema);