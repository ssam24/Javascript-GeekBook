box = (Boolean, width, padding, border) =>{
    if (Boolean===true) { //es content-box
        return width, padding;
    } 
    else { //es border-box
        return border, padding; 
    }
}

box (false, 24, 45, 10);
console.log(box);
