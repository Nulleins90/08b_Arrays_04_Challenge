

/*
Aufgabe:
<html><head></head><body><h1></h1><p></p></body></html>

    ---->

<html>
    <head>
    </head>
    <body>
        <h1></h1>
        <p></p>
    </body>
</html>

--> return : "\n"  
--> Tab: "\t"

// new tag after open tag = tab
// after every tag \n

Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html", "head", "head", "body", "h1", "h1", "p", "p", "body", "html"];
let stack = [];
let stack2 = [];
let indentation = 0;

output(getHTML());

function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTag(tags[i])) {
            htmlStr += getTags(tags[i], "open");
        } else {
            htmlStr += getTags(tags[i], "close");
        }
    }
    return htmlStr;
}

// Modul: open || close ?
function isOpenTag(tag) {

    const cond = (tag != stack[stack.length - 1]); // tag liegt oben!

    if (cond) {
        stack.push(tag);
        return true;
    } else {
        stack.pop();
        return false;
    }
}

function isOpenTag2(tag) {

    const cond = (tag != stack2[stack2.length - 1]); // tag liegt oben!

    if (cond) {
        stack2.push(tag);
        // output(stack2);
        return true;
    } else {
        stack2.pop();
        // output(stack2);
        return false;
    }
}

// Modul: Zusammenbau: <tagStr> --> Tests:
function getTags(tag, op) {
    switch (op) {
        case "open":
            return indent(tag) + controls[0] + tag + controls[2] + breakLine();
        case "close":
            return indent(tag) + controls[1] + tag + controls[2] + breakLine();
        default:
            return "#!";
    }
}

function indent(tag) {
    let extra = 0;
    const cond = !isOpenTag2(tag);
    if (cond) {
        if (tag == "h1" || tag == "p") {
            indentation -= 1;
            extra = 1;
            return "";
        }
        indentation -= 1;
        extra = 1;
    }
    else if (!cond) {
        indentation += 1;
        extra = 0;
    }

    switch (indentation + extra) {
        case 1:
            return "";
        case 2:
            return "\t";
        case 3:
            return "\t\t";
        default:
            break;
    }
}

function breakLine() {
    if (stack.length < 3) {
        return "\n";
    } else {
        return "";
    }
}
// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}


// function indent() {
//     indentation++;
//     switch (indentation) {
//         case 1:
//         case 6:
//         case 8:
//         case 10:
//             return "";
//         case 2:
//         case 3:
//         case 4:
//         case 9:
//             return "\t";
//         case 5:
//         case 7:
//             return "\t\t";
//         default:
//             break;
//     }
// }

// function indent(tag) {
//     let extra = 0;
//     if (!isOpenTag2(tag)) {
//        indentation -= 1;
//        extra = 1;
//     }
//     else if (stack.length == 2) {
//         indentation = 1;
//         extra = 0;
//     } else if (stack.length == 3) {
//         indentation = 2;
//         extra = 0;
//     }
//     else if (stack.length == 1) {
//         indentation = 0;
//         extra = 0;

//     }
//     switch (indentation + extra) {
//         case 0:
//             return "";
//         case 1:
//             return "\t";
//         case 2: 
//             return "\t\t";
//         default:
//             break;
//     }
// }
