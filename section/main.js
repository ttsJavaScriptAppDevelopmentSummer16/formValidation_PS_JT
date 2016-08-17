//Get the top level header element
console.log($("h1"));

//Get all the section elements
console.log($("section"));

//Get the section element with class="current"
console.log($("section.current"));

//Get the section that comes after the current section
console.log($("section.current").next());

//Get the h2 node from the section before the 'current' section
console.log($("section.current").prev().find("h2")[0]);

//Get the div that contains the section that has an h2 with a class of 'highlight'
console.log($("h2.highlight").parent().parent());

//Get all the sections that contain an H2 and store them in an Array
console.log($("sections").find("h2").toArray());
