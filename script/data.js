const fs = require("fs");
const path = require("path");

var allText = fs.readFileSync("assets/current-hacker-laws.md", "utf8");
const arrayOfLawsName = allText.match(/###([\s\S]*?)\n\n/g);

arrayOfLawsName.forEach((value, index) => {
	let innerLink = changeFileName(value.substr(4).trim());
	let regex = new RegExp("#" + innerLink, "g");
	let hugoLink = `{{< ref "${innerLink}.md" >}}`;

	allText = allText.replace(regex, hugoLink);
});

const data = [];
let count = 0;
arrayOfLawsName.forEach(element => {
	let indexOfElement = allText.indexOf(element);
	let obj = {
		id: count++,
		title: element.substr(4).trim(),
		text: allText
			.substr(indexOfElement + element.length)
			.match(/([\s\S]*?)##/)[1]
	};
	data.push(obj);
});

//
const defaultPostPath = path.join(
	__dirname,
	"../hacker-law.com/archetypes/default.md"
);
const defaultPost = fs.readFileSync(defaultPostPath, "utf8");

function editPost(postObj) {
	let defaultPostHeader = {
		title: postObj.title,
		draft: true
	};

	return JSON.stringify(defaultPostHeader) + "\n" + postObj.text;
}
//

const contentLawPath = path.join(__dirname, "../hacker-law.com/content/law");

// write file law file
data.forEach(element => {
	fs.writeFile(
		path.join(contentLawPath, changeFileName(element.title) + ".md"),
		editPost(element),
		"utf8",
		err => {
			if (err) console.log(err);
		}
	);
});

function changeFileName(str) {
	let temp = str
		.toLowerCase()
		// prettier-ignore
		.replace(/'|\(|\)|&|\//g, "")
		.split(" ")
		.filter(x => x)
		.join("-");
	return temp;
}
