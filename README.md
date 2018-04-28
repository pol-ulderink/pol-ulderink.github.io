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

    d("m", "1888-06-13", "1973-12-24", "Frans Frederik Schneider"),
    d("o", "1920-06-17", "1954-01-28", "8"),
    d("F", "1892-08-15", "1972", "Jannetje"),
    d("o", "1954-11-25", "1959-08-20", "9"),
    d("m", "1886-07-18", "1959-08-20", "Marnold Beekhof"),
    d("o", "1948-05-13", "1949-02-21", "logé Jannetje"),
    d("o", "1950-07-03", "1953-07-08", "logé Jannetje"),

Each line defines four properties: a bar style (documented in `bar-styles.js`),
two dates and the label of a line in the chart.
A label may be repeated for multiple bars on the same line.
You also need to enumerate labels to define their order in the chart.


### Issues

* compute the height of the chart from the number of lines
* extract the `names` array in proper order from the `tasks` array
* though `tasks` and `names` are passed in as arguments
  a rename seems impossible because of some global use
* gradients for bars with an unknown end date


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