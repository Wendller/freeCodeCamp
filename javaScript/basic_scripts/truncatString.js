function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(str[0], num).concat("...");
    console.log(str.slice(str[0], num).concat("..."));
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);