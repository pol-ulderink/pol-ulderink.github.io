var tasks = [

  // 2000 betekent datum onbekend

  d("f", "1877-11-16", "1928-10-19", "Adriana van Elst"),
  d("o", "1903-12-03", "1917-05-12", "1"), // zoon https://www.wiewaswie.nl/nl/detail/47785846
  d("M", "1882-01-14", "1950-10-15", "Jan Johannes"),
  d("o", "1929-11-28", "1942-01-13", "2"),
  d("f", "1889-11-16", "1942-01-13", "Elfrieda Gertrude Marta Ilgner"),
  d("f", "1933-03-27", "2000", "dochter"),

  d("M", "1885-11-12", "1959-01-29", "Johannes"),
  d("o", "1909-07-01", "1959-01-29", "3"),
  d("f", "1883-12-28", "1976-12-24", "Johanna Maria Hengeveld"),

  d("m", "1883-08-08", "1952-08-08", "Otto R.H. Coenders"),
  d("o", "1912-12-22", "1932-04-23","4"),
  d("F", "1887-04-16", "2000" ,"Hendrika"),
  d("o", "1933-04-20", "1941-09-06" ,"5"),
  d("m", "1898-07-31", "1941-09-06" ,"Joseph Philip Sanders"),

  d("F", "1889-02-02", "1970-02-24", "Maria"),
  d("o", "1915-08-25", "1968-06-02", "6"),
  d("m", "1890-04-24", "1968-06-02", "Simon Bruijning"),

  d("M", "1890-08-23", "1990-11-05", "Tijmen"),
  d("o", "1916-01-12", "1971-08-10", "7"),
  d("f", "1892-08-23", "1971-08-10", "Clara Clazina Cobelens"),

  d("m", "1888-06-13", "1973-12-24", "Frans Frederik Schneider"),
  d("o", "1920-06-17", "1954-01-28", "8"),
  d("F", "1892-08-15", "1972", "Jannetje"),
  d("o", "1954-11-25", "1959-08-20", "9"),
  d("m", "1886-07-18", "1959-08-20", "Marnold Beekhof"),
  d("o", "2000", "2000", "10"),
  d("m", "2000", "2000", "de Clerck"),

  d("o", "1945-11-28", "1946-01-16", "logé Jan J"),
  d("o", "1946-02-09", "1946-12-17", "logé Hendrika"),
  d("o", "1948-08-30", "1950-11-18", "logé Hendrika"),
  d("o", "1948-05-13", "1949-02-21", "logé Jannetje"),
  d("o", "1950-07-03", "1953-07-08", "logé Jannetje"),
  d("o", "1962-03-14", "1962-04-26", "logé Siem's tante"),

]
var names = [
  "Adriana van Elst","1","Jan Johannes","2","Elfrieda Gertrude Marta Ilgner","dochter",
  "-----------------",
  "Johannes", "3", "Johanna Maria Hengeveld",
  "------------------",
  "Otto R.H. Coenders", "4", "Hendrika", "5", "Joseph Philip Sanders",
  "-------------------",
  "Maria", "6", "Simon Bruijning",
  "--------------------",
  "Tijmen", "7","Clara Clazina Cobelens",
  "---------------------",
  "Frans Frederik Schneider", "8","Jannetje", "9", "Marnold Beekhof", "10", "de Clerck",
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
d3.selectAll("rect").attr("height","9").attr("rx","2").attr("rx","2") // balkhoogte en -ronding
