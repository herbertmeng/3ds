var User = require('../dao/user');
module.exports = {
	index: async function(ctx) {
		await ctx.render('index');
	},

	
}

