/**
 *  初始化数据库
 */

const User = require('./user');

module.exports = async function() {
	try {
		await User.sync();
	}catch(e) {
		console.error(e);
	}
}