var tasks = [

  // 2000 betekent datum onbekend

  d("f", "1877-11-16", "1928-10-19", "Adriana van Elst"),
  d("r", "1903-12-03", "1917-05-12", "Adriana van Elst"), // zoon https://www.wiewaswie.nl/nl/detail/47785846
  d("M", "1882-01-14", "1950-10-15", "Jan Johannes"),
  d("r", "1929-11-28", "1942-01-13", "Jan Johannes"),
  d("f", "1889-11-16", "1942-01-13", "Elfrieda Gertrude Marta Ilgner"),
  d("f", "1933-03-27", "2000", "dochter"),

  d("M", "1885-11-12", "1959-01-29", "Johannes"),
  d("r", "1909-07-01", "1959-01-29", "Johannes"),
  d("f", "1883-12-28", "1976-12-24", "Johanna Maria Hengeveld"),

  d("m", "1883-08-08", "1952-08-08", "Otto R.H. Coenders"),
  d("r", "1912-12-22", "1932-04-23","Otto R.H. Coenders"),
  d("F", "1887-04-16", "2000" ,"Hendrika"),
  d("r", "1933-04-20", "1941-09-06" ,"Hendrika"),
  d("m", "1898-07-31", "1941-09-06" ,"Joseph Philip Sanders"),

  d("F", "1889-02-02", "1970-02-24", "Maria"),
  d("r", "1915-08-25", "1968-06-02", "Maria"),
  d("m", "1890-04-24", "1968-06-02", "Simon Bruijning"),

  d("M", "1890-08-23", "1990-11-05", "Tijmen"),
  d("r", "1916-01-12", "1971-08-10", "Tijmen"),
  d("f", "1892-08-23", "1971-08-10", "Clara Clazina Cobelens"),

  d("m", "1888-06-13", "1973-12-24", "Frans Frederik Schneider"),
  d("r", "1920-06-17", "1954-01-28", "Frans Frederik Schneider"),
  d("F", "1892-08-15", "1972", "Jannetje"),
  d("r", "1954-11-25", "1959-08-20", "Jannetje"),
  d("m", "1886-07-18", "1959-08-20", "Marnold Beekhof"),

  d("o", "1945-11-28", "1946-01-16", "logé Jan J"),
  d("o", "1946-02-09", "1946-12-17", "logé Hendrika"),
  d("o", "1948-08-30", "1950-11-18", "logé Hendrika"),
  d("o", "1948-05-13", "1949-02-21", "logé Jannetje"),
  d("o", "1950-07-03", "1953-07-08", "logé Jannetje"),
  d("o", "1962-03-14", "1962-04-26", "logé Siem's tante"),

]
var names = [
  "Adriana van Elst","Jan Johannes","Elfrieda Gertrude Marta Ilgner","dochter",
  "-----------------",
  "Johannes", "Johanna Maria Hengeveld",
  "------------------",
  "Otto R.H. Coenders", "Hendrika", "Joseph Philip Sanders",
  "-------------------",
  "Maria", "Simon Bruijning",
  "--------------------",
  "Tijmen", "Clara Clazina Cobelens",
  "---------------------",
  "Frans Frederik Schneider", "Jannetje", "Marnold Beekhof",
  "bij Siem en Marie --------------",
  "logé Jan J", "logé Hendrika", "logé Jannetje", "logé Siem's tante"
]
function d(style, start, end, name) {
  return {
    "status": style,
    "startDate": new Date(start),
    "endDate": new Date(end),
    "taskName": name,
    "height": 9,
  }
}
d3.gantt().taskTypes(names).taskStatus(taskStatus).tickFormat("%Y")(tasks)
d3.selectAll(".tick line").attr("y1","-700") // lijn per decenium dwars over alle balken
d3.selectAll(".bar").attr("height","10").attr("rx","2").attr("rx","2") // balkhoogte en -ronding
d3.selectAll(".bar-r").attr("height","9").attr("y","6") // balkhoogte
