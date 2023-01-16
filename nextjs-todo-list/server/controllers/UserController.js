const env = require('dotenv');

var users = [
	{
		id: Date.now(),
		username: 'Illia Sarafyn',
		email: 's.illia@gmail.com',
		address: 'express street in Node',
	},

	{
		id: Date.now()+1,
		username: 'smartdev',
		email: 'smartdev@gmail.com',
		address: 'asp.net street in CSharpe',
	},

	{
		id: Date.now()+2,
		username: 'smartdev2',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+3,
		username: 'smartdev3',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+4,
		username: 'smartdev4',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+5,
		username: 'smartdev5',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+6,
		username: 'smartdev6',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+7,
		username: 'smartdev7',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+8,
		username: 'smartdev8',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+9,
		username: 'smartdev9',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	},

	{
		id: Date.now()+10,
		username: 'smartdev10',
		email: 'smartdev2@gmail.com',
		address: 'asp.net street in CSharpe2',
	}
	
]
exports.getList = (req, res, next) => {
	res.send(users);
};

exports.getOne = (req, res, next) => {
	res.send(users.find(user=>user.id===parseInt(req.params.id)));
};

exports.createOne = (req, res, next) => {
	let newUser = {...req.body};
	if ( newUser.id )
	{
		let index = users.findIndex(user=>user.id==newUser.id);
		users[index] = newUser;
	}
	else
	{
		newUser.id = Date.now();
		users.push(newUser);
	}
	res.send(newUser);
};

exports.delete = (req, res, next) => {
	users = users.filter(user=>req.params.ids.split(',').findIndex(id=>id==user.id)==-1);
	res.send(users);
};



