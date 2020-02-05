
# to show changes
download: 
	node download.js
	diff -u --color assets/current-hacker-laws.md assets/dowloaded-hacker-laws.md

action: 
	node data.js

server: 
	cd ../hacker-law.com; hugo server --baseURL "http://localhost/" -D

build:
	cd ../hacker-law.com; hugo --minify