/**
 * Created by freya on 2017/5/31.
 */
module.exports = {
    root: __dirname,
    layout: false,
    viewExt: 'ejs',
    cache: true,
    debug: false,
    filters: require('./helpers/filters'),
    locals: require('./helpers/locals')
};