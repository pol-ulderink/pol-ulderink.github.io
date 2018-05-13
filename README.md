# pol-ulderink.github.io

data driven documents for a specific family tree
------------------------------------------------

Standard reports for a family database may look nice,
they may not tune in to the story you want to tell in a blog post.


DIY family bar charts
---------------------

Adapted from a [gist], demo: [siblings and spouses]

[gist]: https://gist.github.com/be8e3005cfcb0aba5f763963c75f3c7e.git
[siblings and spouses]: https://pol-ulderink.github.io/siem-marie#legend

The head section of the web page need two lines. The height depends on the number of lines in the chart.

    <link rel="stylesheet" href="../utils/style.css" type="text/css">
    <style>html, body{ height: 480px; }</style>

Put the following lines near the end of the body (so the rest of the article renders quickly):

    <script type="text/javascript" src="../utils/d3.v4.min.js"></script>
    <script type="text/javascript" src="../utils/gantt.js"></script>
    <script type="text/javascript" src="../utils/bar-styles.js"></script>
    <script type="text/javascript" src="bar-chart.js"></script>

You'll need a copy of the files from `../utils` used in the two snippets above
(just the bottom section of the css which matches `bar-styles.js`)
and your own version of `bar-chart.js`. The major part of the latter looks like:

    d("m", "1888-06-13", "1973-12-24", "F.F. Schneider"),
    d("r", "1920-06-17", "1954-01-28", "F.F. Schneider"),
    d("F", "1892-08-15", "1972", "Jannetje"),
    d("r", "1954-11-25", "1959-08-20", "Jannetje"),
    d("m", "1886-07-18", "1959-08-20", "M. Beekhof"),
    d("o", "1945-11-28", "1946-01-16", "logé Jan J"),
    d("o", "1946-02-09", "1946-12-17", "logé Hendrika"),

Each line defines four properties: a bar style (documented in `bar-styles.js`),
two dates and the label of a line in the chart.
A label may be repeated for multiple bars on the same line.
You also need to enumerate labels to define their order in the chart.

Some styling with JavaScript:

    d3.selectAll(".tick line").attr("y1","-700") // line over all bars
    d3.selectAll(".bar").attr("height","9").attr("rx","2").attr("rx","2") // bar height and rounded end
    d3.selectAll(".bar-r").attr("height","7").attr("y","6") // bars spanning a relation overlap bars spanning a life



### Issues

* compute the height of the chart from the number of lines
* extract the `names` array in proper order from the `tasks` array
* though `tasks` and `names` are passed in as arguments
  a rename seems impossible because of some global use
* gradients for bars with an unknown end date
* put chart in a div or to have the body width and height independent of the chart


Page template for this repository
---------------------------------

A page is stored as `index.html` in a directory together with its assets.
The home page is and exception to the rule.
Fill in the triple dots in the template shown below.


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>...</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../utils/style.css" type="text/css">
</head>
<body>
    ...
    <script type="text/javascript" src="../utils/d3.v4.min.js"></script>
    <script type="text/javascript" src="../utils/menu.js"></script>
</body>
```
