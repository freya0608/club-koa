/**
 * Created by freya on 2017/5/31.
 */
var Comment  = require('../models').Comment;
exports.addComment = function (data) {
    return Comment.create(data);
};

exports.getCommentsByTopicId = function (id) {
    return Comment.find({topic_id:id}).sort('update_at').exec();
};