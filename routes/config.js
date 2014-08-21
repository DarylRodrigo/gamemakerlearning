var config = {}

//Database config
config.databaseurl  = "";
config.ajaxUrl = "";
config.collections = ["user", "app", "teachers", "classrooms"];

//Accounts
var twitter = {
	consumerKey: 'DPjy8SuUC72nlMYT6G3YVUcGe',
	consumerSecret: 'Uz78DmL43Toy6hlbW1eM5RPFSfrGYiyTGLvBpXTl8whqcfELQf',
	accessTokenKey: '630389561-8nEMC5ds8i4py1HHASEjIGDHiF0fscifDMeyRsvp',
	accessTokenSecret: '3FI7zLBPLuQ4wj2ygPJXV1d98P0pHYu4ViW4kaD3A76IC',
	callback: 'http://192.168.1.96:3000/auth/callback'
}

//Loggin on
config.log = true;

//add accounts

config.twitter = twitter;

module.exports = config;	