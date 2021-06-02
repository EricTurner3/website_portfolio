const { data_skills } = require('../data/skills');

// this function will grab all the dynamicly set text & bg colors from ../data/skils.js
// the set will ensure no duplicates are in the list

// at this time I cannot figure out how to dynamically import it into gatsby (it does not like the export statement of data_skills)
// so I just manually run it and have loaded the items to the file itself
const whitelistedClasses = [... new Set (
	Object.values(data_skills).map(({ color }) => "bg-" + color)
  	.concat(Object.values(data_skills).map(({ color }) => "text-" + color)) 
)];

