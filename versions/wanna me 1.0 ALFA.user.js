// ==UserScript==
// @name        wanna me?
// @include     *.youtube.com/watch?v=*
// @description instant youtube downloader by ibtisam_midlet
// @version     1.0 ALFA
// @date        2019-04-16
// @homepage    https://justinmidlet.blogspot.com/2019/04/wanna-me-instant-youtube-downloader-by.html
// @license     do what the fuck you want to do public license >>http://www.wtfpl.net/about/
// @require     https://code.jquery.com/jquery-3.4.0.min.js
// @grant       GM_addStyle
// ==/UserScript==

$("body").append ( `

<ol id="tobe-replaced"></ol>
  <style>
.dropbtn {
    width: 100px;
    height: 25px;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border: 0px;
    border-radius: 0px 12px 12px 0px;
}
#new-projects {
    margin-top: 39%;
    position: fixed;
    z-index: 999999999999999;
}
body {
    font-size: 12px;
    font-family: Arial;
}
li * {
    display: inline-flex;
    margin: auto 5px;
}
.label.label-default {
    display: none;
}
ul.dl-list:nth-child(1) {
    display: none;
}
.dl-list {
    width: -moz-max-content;
    overflow-y: scroll;
    height: 200px;
	display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.btn.btn-default.btn-download {
    margin: 0px 20px;
}

.dl-list li {
    color: black;
    padding: 3px 2px;
    text-decoration: none;
    display: block;
}

.dl-list li:hover {
    background-color: #ddd;
}

#new-projects:hover .dl-list {
    display: block;
}

#new-projects:hover .dropbtn {
    display: none;
}
.glyphicon.glyphicon-download-alt {
    display: none;
}

/*** for chrome compatibility ***/
#tobe-replaced {
    padding-left: inherit;
}
#new-projects {
    padding-left: 0px;
}
.dl-list {
    padding-left: inherit;
	    width: max-content;
}

/*** for youtube mobile ***/
ytm-app {
    position: absolute;
}
</style>

` );


     var pageURL = $(location).attr("href");
$( "#tobe-replaced" ).load( "https://trackmeup.000webhostapp.com/youtube-downloader/getvideo.php?videoid=" + pageURL + "&type=Download #new-projects" );


