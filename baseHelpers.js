function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restrict(input,min,max) {
  if (input > max) {
    return max;
  } else if (input < min) {
    return min;
  } else {
    return input;
  }
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
}

function size(el,height,width) {
  $(el)
  .height(height)
  .width(width);
  console.log(el+'resized to: '+$(el).height()+' '+$(el).width());
}
