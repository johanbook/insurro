export function set(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
}

/** Get value of cookie by name */
export function get(cname) {
  const name = cname + "=";
  const segments = document.cookie.split(";");
  for (var i = 0; i < segments.length; i++) {
    const segment = segments[i].trim();
    if (segment.indexOf(name) === 0) {
      return segment.substring(name.length, segment.length);
    }
  }
  return "";
}
