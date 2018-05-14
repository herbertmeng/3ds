/**
 *  获取点赞的信息
 */
const Sequelize = require('sequelize');

var sequelize = require('../db');

const User = sequelize.define('user', {
  	username: Sequelize.STRING,
  	password: Sequelize.STRING,
  	mobile: Sequelize.STRING,
  	avator: Sequelize.STRING, //头像地址
  	gender: {
  		type: Sequelize.ENUM,
  		values: ['0', '1'] //0 是男性， 1是女性
  	},
  	password: Sequelize.STRING, //密码
	  regdate: Sequelize.DATE,
	  birthday: Sequelize.DATE,
	  desc: Sequelize.STRING, //个人简介
	  skill:{
  		type: Sequelize.ENUM,
  		values: ['3d', 'autocad'] 
  	},
	  address: Sequelize.STRING, //地址
	  company: Sequelize.STRING, 
	  position: Sequelize.STRING, 
	  homepage: Sequelize.STRING //个人主页


});

/**
 * 创建表格
 */


module.exports = User;