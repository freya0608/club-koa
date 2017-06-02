/**
 * Created by freya on 2017/6/1.
 */
exports.get = function* () {
    this.session = null;
    this.redirect('back');
};
