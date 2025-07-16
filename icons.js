// function returning 3 dot menu svg element
export function menuSvgIcon() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    // create SVG element
    const menuSvg = document.createElementNS(SVG_NS, "svg");
    menuSvg.setAttribute("id", "menuBtn");
    menuSvg.setAttribute("class", "todoListBtn");
    menuSvg.setAttribute("width", "24");
    menuSvg.setAttribute("height", "24");
    menuSvg.setAttribute("viewBox", "0 0 24 24");
    menuSvg.setAttribute("fill", "currentColor");
    menuSvg.setAttribute("xmlns", SVG_NS);

    // create 3 circles
    const circle1 = document.createElementNS(SVG_NS, "circle");
    circle1.setAttribute("cx", "5");
    circle1.setAttribute("cy", "12");
    circle1.setAttribute("r", "2");

    const circle2 = document.createElementNS(SVG_NS, "circle");
    circle2.setAttribute("cx", "12");
    circle2.setAttribute("cy", "12");
    circle2.setAttribute("r", "2");

    const circle3 = document.createElementNS(SVG_NS, "circle");
    circle3.setAttribute("cx", "19");
    circle3.setAttribute("cy", "12");
    circle3.setAttribute("r", "2");

    // append all to SVG
    menuSvg.appendChild(circle1);
    menuSvg.appendChild(circle2);
    menuSvg.appendChild(circle3);

    return menuSvg;
};

// function returning pencil svg element
export function editSvgIcon() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    // create SVG element
    const editSvg = document.createElementNS(SVG_NS, "svg");
    editSvg.setAttribute("id", "editBtn");
    editSvg.setAttribute("class", "todoListBtn hideElement");
    editSvg.setAttribute("xmlns", SVG_NS);
    editSvg.setAttribute("width", "24");
    editSvg.setAttribute("height", "24");
    editSvg.setAttribute("fill", "none");
    editSvg.setAttribute("stroke", "currentColor");
    editSvg.setAttribute("stroke-width", "2");
    editSvg.setAttribute("stroke-linecap", "round");
    editSvg.setAttribute("stroke-linejoin", "round");

    // path 1
    const path1 = document.createElementNS(SVG_NS, "path");
    path1.setAttribute("d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7");

    // path 2
    const path2 = document.createElementNS(SVG_NS, "path");
    path2.setAttribute("d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z");

    // append all to SVG
    editSvg.appendChild(path1);
    editSvg.appendChild(path2);

    return editSvg;
};

// function returning trash svg element
export function deleteSvgIcon() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    // create SVG element
    const deleteSvg = document.createElementNS(SVG_NS, "svg");
    deleteSvg.setAttribute("id", "deleteBtn");
    deleteSvg.setAttribute("class", "todoListBtn hideElement");
    deleteSvg.setAttribute("xmlns", SVG_NS);
    deleteSvg.setAttribute("width", "24");
    deleteSvg.setAttribute("height", "24");
    deleteSvg.setAttribute("fill", "none");
    deleteSvg.setAttribute("stroke", "currentColor");
    deleteSvg.setAttribute("stroke-width", "2");
    deleteSvg.setAttribute("stroke-linecap", "round");
    deleteSvg.setAttribute("stroke-linejoin", "round");

    // add polyline
    const polyline = document.createElementNS(SVG_NS, "polyline");
    polyline.setAttribute("points", "3 6 5 6 21 6");

    // add path
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");

    // line 1
    const line1 = document.createElementNS(SVG_NS, "line");
    line1.setAttribute("x1", "10");
    line1.setAttribute("y1", "11");
    line1.setAttribute("x2", "10");
    line1.setAttribute("y2", "17");

    // line 2
    const line2 = document.createElementNS(SVG_NS, "line");
    line2.setAttribute("x1", "14");
    line2.setAttribute("y1", "11");
    line2.setAttribute("x2", "14");
    line2.setAttribute("y2", "17");

    // append all to SVG
    deleteSvg.append(polyline, path, line1, line2);

    return deleteSvg;
};

// function returning cross svg element
export function cancelSvgIcon() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    // create SVG
    const crossSvg = document.createElementNS(SVG_NS, "svg");
    crossSvg.setAttribute("id", "cancelBtn");
    crossSvg.setAttribute("class", "todoListBtn hideElement");
    crossSvg.setAttribute("xmlns", SVG_NS);
    crossSvg.setAttribute("width", "24");
    crossSvg.setAttribute("height", "24");
    crossSvg.setAttribute("fill", "none");
    crossSvg.setAttribute("stroke", "currentColor");
    crossSvg.setAttribute("stroke-width", "2");
    crossSvg.setAttribute("stroke-linecap", "round");
    crossSvg.setAttribute("stroke-linejoin", "round");

    // circle
    const circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");

    // line 1
    const line1 = document.createElementNS(SVG_NS, "line");
    line1.setAttribute("x1", "15");
    line1.setAttribute("y1", "9");
    line1.setAttribute("x2", "9");
    line1.setAttribute("y2", "15");

    // line 2
    const line2 = document.createElementNS(SVG_NS, "line");
    line2.setAttribute("x1", "9");
    line2.setAttribute("y1", "9");
    line2.setAttribute("x2", "15");
    line2.setAttribute("y2", "15");

    // append all to SVG
    crossSvg.append(circle, line1, line2);

    return crossSvg;
};

// function returning check svg element
export function checkSvgIcon() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    // create SVG element
    const checkSvg = document.createElementNS(SVG_NS, "svg");
    checkSvg.setAttribute("id", "checkBtn");
    checkSvg.setAttribute("class", "todoListBtn hideElement");
    checkSvg.setAttribute("xmlns", SVG_NS);
    checkSvg.setAttribute("width", "24");
    checkSvg.setAttribute("height", "24");
    checkSvg.setAttribute("fill", "none");
    checkSvg.setAttribute("stroke", "currentColor");
    checkSvg.setAttribute("stroke-width", "2");
    checkSvg.setAttribute("stroke-linecap", "round");
    checkSvg.setAttribute("stroke-linejoin", "round");

    // checkmark (path)
    const checkPath = document.createElementNS(SVG_NS, "path");
    checkPath.setAttribute("d", "M9 12l2 2l4 -4");

    // circle
    const circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");

    // append all to SVG
    checkSvg.append(checkPath, circle);

    return checkSvg;
};