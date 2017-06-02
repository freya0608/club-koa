/**
 * Created by freya on 2017/6/1.
 */
var Models = require('../lib/core');
var $Topic = Models.$Topic;

exports.get = function* () {
    var tab = this.query.tab;
    var p = this.query.p || 1;

    yield this.render('index', {
        topics: $Topic.getTopicsByTab(tab, p)
    });
};