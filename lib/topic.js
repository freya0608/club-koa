/**
 * Created by freya on 2017/5/31.
 */
var Topic = require('../models').Topic;
var cache = require('co-cache')({
    expire:10000
});

exports.addTopic = function (data) {
    return Topic.create(data);
};

exports.getTopicById = function (id) {
    return Topic.finfByIdAndUpdate(id,{$inc:{pv:1}}).exec();
};

exports.getTopicByTab = cache(function  getTopicByTab(tab,p) {
    var query ={};
    if(tab){query.tab = tab}
    return Topic.find(query).skip((p-1)*10).sort('-updated_at').limit(10).select('-content').exec()
},{
    key:function (tab, p) {
        tab = tab || 'all';
        return this.name+':'+tab +':' +p;
    }
});


//获取用户所有话题
exports.getTopicsByName = function (name) {
    return Topic.find({'user.name': name}).sort('-updated_at').exec();
};

//通过id增加一个话题的评论数
exports.incCommentById = function (id) {
    return Topic.findByIdAndUpdate(id, {$inc: {comment: 1}}).exec();
};

//获取5条最新未评论的话题
exports.getNoReplyTopics = cache(function getNoReplyTopics() {
    return Topic.find({comment: 0}).sort('-updated_at').limit(5).select('title').exec();
});

//获取不同标签的话题数
exports.getTopicsCount = cache(function getTopicsCount(tab) {
    var query = {};
    if (tab) { query.tab = tab; }
    return Topic.count(query).exec();
}, {
    key: function (tab) {
        tab = tab || 'all';
        return this.name + ':' + tab;
    }
});


