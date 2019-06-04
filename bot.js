//initialising twit API

var twit = new require('twit');

//creating config variable to be used in twit

var config = new require('./config.js');

//passing config to twit

var Twitter = new twit(config);

//updating status or posting tweet

/*Twitter.post('statuses/update', {status:'checking2'}, function(err, data, response){
	console.log(data);
})*/

//checking to get tweets on account

Twitter.get('search/tweets', { q: 'gameofthrones , #GoT, #gameofthrones' ,result_type:'recent', lang: 'en' , count: 1 }, function(err, data, response) {
	var myId = data.statuses[0].id_str;
  	console.log(data)
	Twitter.post('statuses/retweet/:id', {id: myId}, function(err, data, response){
		console.log(data);
	})
})

//Deleting a tweet based on id
/*
Twitter.post('statuses/destroy/:id', {id : '1136016445312077826'},  function(err, data, response){
	console.log(data);
}) 	

//Retweeting 

Twitter.post('statuses/retweet/:id', {id : myId}, function(err, data, response){
	console.log(data);
}) */
