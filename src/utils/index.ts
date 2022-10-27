export const setColor = (color: string, defaultValue = ""): string => {
    color = color || defaultValue;
  
    if (!color) {
      return ''
    }
  
    if (color.indexOf("#") > -1) {
      return color;
    }
    if (color.indexOf("rgb") > -1) {
      return color;
    }
    return "#" + color;
  };