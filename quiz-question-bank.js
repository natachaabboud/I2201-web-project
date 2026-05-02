class question{
    static allQuestions=[];
    constructor(a,b,c,d,e,f){
        this.questioncontent=a;
        this.answer=b;
        this.choices=c;
        this.language=d;
        this.topic=e;
        this.difficulty=f;
        question.allQuestions.push(this);
    }
}


const Q1 = new question(
    "What does HTML stand for?",
    "Hyper Text Markup Language",
    ["Hyper Text Markup Language", "Hawa Tamem Moukhif Latif", "Hayde Taybe Mjadra Lazize", "Hello To My Lasagna"],
    "HTML",
    "Basics",
    "Easy"
)

const Q2 = new question(
    "Which HTML tag is used to create a hyperlink?",
    "<a>",
    ["<a>", "<p>", "<img>", "<link>"],
    "HTML",
    "Links",
    "Easy"
)

const Q3 = new question(
    "Which HTML tag is used to define a paragraph?",
    "<p>",
    ["<p>", "<h1>", "<div>", "<span>"],
    "HTML",
    "Tags",
    "Easy"
)

const Q4 = new question(
    "Which HTML tag is used to display the largest heading?",
    "<h1>",
    ["<h1>", "<h6>", "<head>", "<header>"],
    "HTML",
    "Headings",
    "Easy"
)

const Q5 = new question(
    "Which HTML element contains the visible content of a web page?",
    "<body>",
    ["<body>", "<head>", "<title>", "<html>"],
    "HTML",
    "Structure",
    "Easy"
)

const Q6 = new question(
    "Which HTML tag is used to display an image?",
    "<img>",
    ["<img>", "<image>", "<pic>", "<src>"],
    "HTML",
    "Images",
    "Easy"
)

const Q7 = new question(
    "Which attribute is used to provide alternative text for an image?",
    "alt",
    ["alt", "src", "title", "href"],
    "HTML",
    "Attributes",
    "Easy"
)

const Q8 = new question(
    "Which HTML tag is used to create an unordered (bulleted) list?",
    "<ul>",
    ["<ul>", "<ol>", "<li>", "<dl>"],
    "HTML",
    "Lists",
    "Easy"
)

const Q9 = new question(
    "Which HTML tag is used to define a list item?",
    "<li>",
    ["<li>", "<item>", "<list>", "<ul>"],
    "HTML",
    "Lists",
    "Easy"
)

const Q10 = new question(
    "Which HTML element is used to add a line break?",
    "<br>",
    ["<br>", "<break>", "<lb>", "<hr>"],
    "HTML",
    "Formatting",
    "Easy"
)

const Q11 = new question(
    "What does CSS stand for?",
    "Cascading Style Sheets",
    ["Cascading Style Sheets", "Colorful Style System", "Creative Styling Syntax", "Coded Style Sheets"],
    "CSS",
    "Basics",
    "Easy"
)

const Q12 = new question(
    "Which CSS property is used to change the color of text?",
    "color",
    ["color", "text-color", "font-color", "foreground"],
    "CSS",
    "Properties",
    "Easy"
)

const Q13 = new question(
    "Which CSS property is used to change the background color of an element?",
    "background-color",
    ["background-color", "bg-color", "color", "background-style"],
    "CSS",
    "Background",
    "Easy"
)

const Q14 = new question(
    "Which symbol is used to select a class in CSS?",
    ".",
    [".", "#", "*", "&"],
    "CSS",
    "Selectors",
    "Easy"
)

const Q15 = new question(
    "Which CSS property controls the size of the text?",
    "font-size",
    ["font-size", "text-size", "size", "font-style"],
    "CSS",
    "Typography",
    "Easy"
)

const Q16 = new question(
    "How do you write a comment in CSS?",
    "/* this is a comment */",
    ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "# this is a comment"],
    "CSS",
    "Syntax",
    "Easy"
)

const Q17 = new question(
    "Which CSS property is used to align text horizontally?",
    "text-align",
    ["text-align", "align-text", "justify-content", "horizontal-align"],
    "CSS",
    "Text",
    "Easy"
)

const Q18 = new question(
    "Which CSS property is used to change the font of text?",
    "font-family",
    ["font-family", "font-style", "font-weight", "text-font"],
    "CSS",
    "Typography",
    "Easy"
)

const Q19 = new question(
    "Which CSS selector targets an element with the id 'header'?",
    "#header",
    ["#header", ".header", "header", "*header"],
    "CSS",
    "Selectors",
    "Easy"
)

const Q20 = new question(
    "Which CSS property adds space inside the border of an element?",
    "padding",
    ["padding", "margin", "border-spacing", "gap"],
    "CSS",
    "BoxModel",
    "Easy"
)

const Q21 = new question(
    "What is JavaScript mainly used for in web pages?",
    "Adding interactivity and behavior",
    ["Adding interactivity and behavior", "Defining page structure only", "Styling the page only", "Storing files on the server"],
    "JavaScript",
    "Basics",
    "Easy"
)

const Q22 = new question(
    "Which keyword is used to declare a variable that can change later?",
    "let",
    ["let", "const", "varies", "change"],
    "JavaScript",
    "Variables",
    "Easy"
)

const Q23 = new question(
    "How do you write a single-line comment in JavaScript?",
    "// comment",
    ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    "JavaScript",
    "Syntax",
    "Easy"
)

const Q24 = new question(
    "Which method selects an element by its id?",
    "document.getElementById()",
    ["document.getElementById()", "document.getElementsByClassName()", "document.querySelectorAll()", "document.getElementsByTagName()"],
    "JavaScript",
    "DOM",
    "Easy"
)

const Q25 = new question(
    "Which built-in function is commonly used to print messages to the browser console?",
    "console.log()",
    ["console.log()", "print()", "echo()", "alert()"],
    "JavaScript",
    "Output",
    "Easy"
)

const Q26 = new question(
    "How do you create an array in JavaScript?",
    "Using square brackets [ ]",
    ["Using square brackets [ ]", "Using curly braces { }", "Using parentheses ( )", "Using angle brackets < >"],
    "JavaScript",
    "Arrays",
    "Easy"
)

const Q27 = new question(
    "Which keyword is used to declare a constant that cannot be reassigned?",
    "const",
    ["const", "let", "static", "final"],
    "JavaScript",
    "Variables",
    "Easy"
)

const Q28 = new question(
    "What does the 'if' statement do in JavaScript?",
    "Executes code only when a condition is true",
    ["Executes code only when a condition is true", "Repeats code forever", "Stops all code execution", "Defines a new function"],
    "JavaScript",
    "Conditionals",
    "Easy"
)

const Q29 = new question(
    "Which loop is commonly used to repeat code a specific number of times?",
    "for loop",
    ["for loop", "when loop", "repeat loop", "case loop"],
    "JavaScript",
    "Loops",
    "Easy"
)

const Q30 = new question(
    "Which method is used to attach a click event in modern JavaScript?",
    "addEventListener",
    ["addEventListener", "onClickNow", "attachClick", "clickHandler"],
    "JavaScript",
    "Events",
    "Easy"
)


const Q31 = new question(
  "Which HTML element is used to create a dropdown list in a form?",
  "<select>",
  ["<input>", "<option>", "<select>", "<datalist>"],
  "HTML",
  "Forms",
  "Medium"
);


const Q32 = new question(
  "Which HTML element is used to group form controls with a caption?",
  "<fieldset>",
  ["<section>", "<fieldset>", "<div>", "<form>"],
  "HTML",
  "Forms",
  "Medium"
);

const Q33 = new question(
  "Which attribute connects a <label> to a specific form input?",
  "for",
  ["name", "id", "for", "target"],
  "HTML",
  "Forms",
  "Medium"
);


const Q34 = new question(
  "Which input type is best for selecting a single date in HTML?",
  "date",
  ["text", "datetime", "date", "calendar"],
  "HTML",
  "Forms",
  "Medium"
);

const Q35 = new question(
  "Which tag should be used inside a <table> to define a header cell?",
  "&ltth>",
  ["<thead>", "<tr>", "<td>", "<th>"],
  "HTML",
  "Tables",
  "Medium"
);

const Q36 = new question(
  "Which attribute makes a link open in a new browser tab?",
  "target='_blank'",
  ["newtab", "target='_blank'", "open='tab'", "rel='external'"],
  "HTML",
  "Links",
  "Medium"
);

const Q37 = new question(
  "Which tag is used to embed a video in HTML without plugins?",
  "<video>",
  ["<media>", "<movie>", "<video>", "<embed>"],
  "HTML",
  "Media",
  "Medium"
);

const Q38 = new question(
  "Which element is used to provide multiple image sources for responsive images?",
  "<picture>",
  ["<source>", "<imgset>", "<picture>", "<figure>"],
  "HTML",
  "Images",
  "Medium"
);

const Q39 = new question(
  "Which meta tag is commonly used to control page scaling on mobile devices?",
  "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
  [
    "<meta charset='UTF-8'>",
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    "<meta http-equiv='refresh' content='5'>",
    "<meta name='description' content='...'>"
  ],
  "HTML",
  "Metadata",
  "Medium"
);

const Q40 = new question(
  "Which attribute is used to store custom data on an HTML element (for JavaScript to read later)?",
  "data-*",
  ["custom-*", "info-*", "data-*", "dataset-*"],
  "HTML",
  "Attributes",
  "Medium"
);


const Q41 = new question(
  "Which CSS property controls the space between the content and the border of an element?",
  "padding",
  ["margin", "padding", "border-spacing", "gap"],
  "CSS",
  "Box Model",
  "Medium"
);

const Q42 = new question(
  "Which value of the position property makes an element stay fixed relative to the viewport while scrolling?",
  "fixed",
  ["relative", "absolute", "sticky", "fixed"],
  "CSS",
  "Positioning",
  "Medium"
);

const Q43 = new question(
  "Which CSS function is used to reference a CSS variable?",
  "var()",
  ["value()", "variable()", "var()", "getVar()"],
  "CSS",
  "CSS Variables",
  "Medium"
);

const Q44 = new question(
  "Which selector targets an element only when the user hovers over it?",
  ":hover",
  [":active", ":focus", ":hover", ":visited"],
  "CSS",
  "Pseudo-classes",
  "Medium"
);

const Q45 = new question(
  "In a flex container, which property controls spacing between flex items along the main axis?",
  "justify-content",
  ["align-items", "justify-content", "align-content", "place-items"],
  "CSS",
  "Flexbox",
  "Medium"
);

const Q46 = new question(
  "Which CSS property sets the stacking order of positioned elements?",
  "z-index",
  ["stack-order", "layer", "z-index", "order"],
  "CSS",
  "Positioning",
  "Medium"
);

const Q47 = new question(
  "Which value of display creates a block-level flex container?",
  "flex",
  ["inline", "grid", "flex", "inline-flex"],
  "CSS",
  "Flexbox",
  "Medium"
);

const Q48 = new question(
  "Which CSS property makes text bold (heavier)?",
  "font-weight",
  ["font-style", "text-weight", "font-weight", "letter-spacing"],
  "CSS",
  "Typography",
  "Medium"
);

const Q49 = new question(
  "Which property is used to round the corners of an element?",
  "border-radius",
  ["corner-radius", "border-radius", "outline-radius", "radius"],
  "CSS",
  "Borders",
  "Medium"
);

const Q50 = new question(
  "Which CSS unit is relative to the font-size of the root element (<html>)?",
  "rem",
  ["em", "rem", "%", "vh"],
  "CSS",
  "Units",
  "Medium"
);


const Q51 = new question(
  "Which method converts a JSON string into a JavaScript object?",
  "JSON.parse()",
  ["JSON.stringify()", "JSON.parse()", "Object.parse()", "toJSON()"],
  "JavaScript",
  "JSON",
  "Medium"
);

const Q52 = new question(
  "Which keyword declares a block-scoped variable that can be reassigned?",
  "let",
  ["var", "let", "const", "static"],
  "JavaScript",
  "Variables",
  "Medium"
);

const Q53 = new question(
  "Which array method creates a new array containing only items that pass a test?",
  "filter()",
  ["map()", "filter()", "forEach()", "reduce()"],
  "JavaScript",
  "Arrays",
  "Medium"
);

const Q54 = new question(
  "Which operator is used to check both value and type equality?",
  "===",
  ["==", "=", "===", "!=="],
  "JavaScript",
  "Operators",
  "Medium"
);

const Q55 = new question(
  "Which statement is used to handle errors that may happen in a block of code?",
  "try...catch",
  ["if...else", "try...catch", "switch...case", "throw...break"],
  "JavaScript",
  "Error Handling",
  "Medium"
);

const Q56 = new question(
  "Which DOM method selects the first element that matches a CSS selector?",
  "document.querySelector()",
  ["document.getElementById()", "document.querySelector()", "document.querySelectorAll()", "document.getElementsByClassName()"],
  "JavaScript",
  "DOM",
  "Medium"
);

const Q57 = new question(
  "Which function runs code after a specified delay (in milliseconds)?",
  "setTimeout()",
  ["setInterval()", "setTimeout()", "requestAnimationFrame()", "delay()"],
  "JavaScript",
  "Timers",
  "Medium"
);

const Q58 = new question(
  "Which method adds an element to the end of an array and returns the new length?",
  "push()",
  ["pop()", "shift()", "push()", "unshift()"],
  "JavaScript",
  "Arrays",
  "Medium"
);

const Q59 = new question(
  "Which keyword inside a function refers to the object that called the function (depending on how it's called)?",
  "this",
  ["self", "this", "that", "me"],
  "JavaScript",
  "this Keyword",
  "Medium"
);

const Q60 = new question(
  "Which Promise method runs when the Promise is fulfilled (resolved)?",
  "then()",
  ["catch()", "finally()", "then()", "resolve()"],
  "JavaScript",
  "Promises",
  "Medium"
);

const Q61 = new question(
  "Which element is used to define an image map container that works with <area> hotspots?",
  "<map>",
  ["<map>", "<area>", "<figure>", "<imgmap>"],
  "HTML",
  "Image Maps",
  "Hard"
);

const Q62 = new question(
  "Which attribute on an &ltimg> links it to an image map defined with <map>?",
  "usemap",
  ["usemap", "map", "ismap", "coords"],
  "HTML",
  "Image Maps",
  "Hard"
);

const Q63 = new question(
  "Which HTML element is used to provide a machine-readable time or date value via the datetime attribute?",
  "<time>",
  ["<time>", "<date>", "<datetime>", "<meta>"],
  "HTML",
  "Semantics",
  "Hard"
);

const Q64 = new question(
  "Which attribute allows a &ltform> to submit without adding its fields to the URL-encoded body (commonly used for file uploads)?",
  "enctype",
  ["enctype", "method", "accept", "target"],
  "HTML",
  "Forms",
  "Hard"
);

const Q65 = new question(
  "Which value of the form's method is typically required to upload files?",
  "post",
  ["get", "post", "put", "delete"],
  "HTML",
  "Forms",
  "Hard"
);

const Q66 = new question(
  "Which element represents a caption/legend for its parent &ltdetails> element (the clickable summary text)?",
  "<summary>",
  ["<summary>", "<caption>", "<legend>", "<title>"],
  "HTML",
  "Interactive Elements",
  "Hard"
);

const Q67 = new question(
  "Which attribute on a &ltscript> makes it execute after the document has been parsed, without blocking HTML parsing?",
  "defer",
  ["async", "defer", "type", "crossorigin"],
  "HTML",
  "Scripts",
  "Hard"
);

const Q68 = new question(
  "Which attribute on a &ltscript> allows it to execute as soon as it’s downloaded (order not guaranteed) without blocking parsing?",
  "async",
  ["async", "defer", "integrity", "referrerpolicy"],
  "HTML",
  "Scripts",
  "Hard"
);

const Q69 = new question(
  "Which attribute is used with &ltscript> or &ltlink> to provide a Subresource Integrity hash?",
  "integrity",
  ["integrity", "nonce", "crossorigin", "referrerpolicy"],
  "HTML",
  "Security",
  "Hard"
);

const Q70 = new question(
  "Which &ltmeta> tag declares the character encoding of an HTML document (recommended to be placed early in <head>)?",
  "<meta charset='UTF-8'>",
  ["<meta charset='UTF-8'>", "<meta encoding='UTF-8'>", "<meta type='utf-8'>", "<meta content='UTF-8'>"],
  "HTML",
  "Metadata",
  "Hard"
);

const Q71 = new question(
  "In CSS Grid, which property defines the columns of the grid container?",
  "grid-template-columns",
  ["grid-columns", "grid-template-columns", "grid-auto-columns", "grid-column"],
  "CSS",
  "Grid",
  "Hard"
);

const Q72 = new question(
  "Which CSS function can create a custom easing curve for transitions/animations?",
  "cubic-bezier()",
  ["ease-in-out()", "steps()", "cubic-bezier()", "curve()"],
  "CSS",
  "Animations",
  "Hard"
);

const Q73 = new question(
  "Which CSS property specifies how an element's width/height should be calculated (content-box vs border-box)?",
  "box-sizing",
  ["box-model", "box-sizing", "sizing-mode", "content-sizing"],
  "CSS",
  "Box Model",
  "Hard"
);

const Q74 = new question(
  "Which CSS pseudo-class targets an element when it is the only child of its parent?",
  ":only-child",
  [":only-child", ":first-child", ":single-child", ":only-of-type"],
  "CSS",
  "Selectors",
  "Hard"
);

const Q75 = new question(
  "Which CSS property controls whether an element can be clicked or hovered (mouse events)?",
  "pointer-events",
  ["user-select", "pointer-events", "touch-action", "cursor"],
  "CSS",
  "Interactivity",
  "Hard"
);

const Q76 = new question(
  "Which CSS property is used to clip an element to a circle/ellipse/polygon shape?",
  "clip-path",
  ["mask-image", "clip-path", "overflow", "shape-outside"],
  "CSS",
  "Visual Effects",
  "Hard"
);

const Q77 = new question(
  "Which CSS property allows you to control the stacking context order inside a flex container (without z-index)?",
  "order",
  ["order", "z-index", "layer", "stack"],
  "CSS",
  "Flexbox",
  "Hard"
);

const Q78 = new question(
  "Which CSS unit is relative to 1% of the viewport's smaller dimension (width or height)?",
  "vmin",
  ["vh", "vw", "vmin", "rem"],
  "CSS",
  "Units",
  "Hard"
);

const Q79 = new question(
  "Which CSS property helps prevent a flex item from shrinking below its content size by setting a minimum width?",
  "min-width",
  ["min-width", "flex-basis", "max-width", "width"],
  "CSS",
  "Flexbox",
  "Hard"
);

const Q80 = new question(
  "Which CSS function lets you target elements based on their position in a list, like every 3rd item?",
  ":nth-child()",
  [":nth-child()", ":nth-of-type()", ":child()", ":select()"],
  "CSS",
  "Selectors",
  "Hard"
);

const Q81 = new question(
  "Which keyword declares a variable that is block-scoped and cannot be reassigned?",
  "const",
  ["var", "let", "const", "static"],
  "JavaScript",
  "Variables",
  "Hard"
);

const Q82 = new question(
  "What will `typeof null` return in JavaScript?",
  "\"object\"",
  ["\"null\"", "\"object\"", "\"undefined\"", "\"number\""],
  "JavaScript",
  "Types",
  "Hard"
);

const Q83 = new question(
  "Which Array method returns a new array with all elements that pass a test function?",
  "filter()",
  ["find()", "filter()", "some()", "every()"],
  "JavaScript",
  "Arrays",
  "Hard"
);

const Q84 = new question(
  "Which statement stops a loop immediately and continues with the next iteration?",
  "continue",
  ["stop", "return", "break", "continue"],
  "JavaScript",
  "Control Flow",
  "Hard"
);

const Q85 = new question(
  "Which Promise method is used to handle a rejected Promise?",
  "catch()",
  ["then()", "resolve()", "catch()", "finally()"],
  "JavaScript",
  "Promises",
  "Hard"
);

const Q86 = new question(
  "Which operator creates a shallow copy of an object when used like `{...obj}`?",
  "spread operator (...)",
  ["rest operator (...)", "spread operator (...)", "optional chaining (?.)", "nullish coalescing (??)"],
  "JavaScript",
  "Objects",
  "Hard"
);

const Q87 = new question(
  "In an arrow function, what does `this` refer to?",
  "It is inherited from the surrounding scope",
  ["The global object always", "The object that called the function", "It is inherited from the surrounding scope", "A new this is created each call"],
  "JavaScript",
  "this Keyword",
  "Hard"
);

const Q88 = new question(
  "Which method runs a function after the current call stack is cleared, before rendering (commonly used for smooth animations)?",
  "requestAnimationFrame()",
  ["setTimeout()", "setInterval()", "requestAnimationFrame()", "queueMicrotask()"],
  "JavaScript",
  "Event Loop",
  "Hard"
);

const Q89 = new question(
  "What does `Array.isArray([])` return?",
  "true",
  ["true", "false", "\"array\"", "undefined"],
  "JavaScript",
  "Arrays",
  "Hard"
);

const Q90 = new question(
  "Which statement is true about `==` compared to `===` in JavaScript?",
  "`==` does type coercion, `===` does not",
  ["`===` does type coercion, `==` does not", "`==` checks type only", "`==` does type coercion, `===` does not", "They behave identically"],
  "JavaScript",
  "Operators",
  "Hard"
);
