Lev's exam for 24me 
===================
The objective of this exercise is to gain some familiarity of the base architecture. http://compoundjs.com (server-side). You will need to exhibit strong control and understanding of the MVC design pattern. Code should be asynchronous when possible and following OOP design. The application will be a small website.

The website must have:
1) Page with a form POST request
	a) Display POST request parameters on confirmation page
	b) Save results to BigCouch/CouchDB doc.
2) Page load via GET request.
	a) Load data from DB doc from step 1. If empty, tell user.
3) Page that requests three other websites and parses for H1 tag.
	a) The H1 tags should be presented to the user at end of process.
	b) The three websites can by of any you wish to use…
	c) The methods behind the request should be asynchronous. The faster, the better.

For the view level, use Angular.js -- it can be as simple as possible.

All though this is relatively a simple project, it should be done as professionally as possible. This is left to your discretion.

Some notes: 
The architecture is based off of Express.JS, so many libraries of Express work well with the CompoundJS framework. 
Here is a great site for NodeJS libraries: https://github.com/joyent/node/wiki/modules
Please look at libraries async and superAgent.
I strongly suggest that you base your work environment in Linux or Mac. Few important libraries and services run only in Linux based systems. Also, our code base works only in Linux like environments.
If you insist using Windows, you'll have trouble installing BigCouch -- try using CouchDB as an alternative. (Please learn/know the difference between CouchDB and BigCouch).
If you prefer using a library for the DB controller -- feel free. One popular option is cradle. Note that we do not use this library, but our own.
