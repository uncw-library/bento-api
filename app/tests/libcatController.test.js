const rewire = require('rewire')
const libcatController = rewire('../controllers/libcat')

const extract = libcatController.__get__('extract')

describe('extract tries to pull the expected data from an unreliable source', () => {
  test('govdocs example', () => {
    const bundle = [
      {
        title: 'Hi-Tech Bed Systems Corporation',
        author: 'United States. Government Accountability Office',
        citation: 'Washington, D.C. : U.S. Govt. Accountability Office, [2012]',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&1%2C1%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=819324713&issn='
      },
      {
        title: 'Proceedings of the Workshop on At-sea Detection and Removal of Derelict Fishing Gear, December 9-10, 2008, Honolulu, HI, USA',
        author: 'Workshop on At-sea Detection and Removal of Derelict Fishing Gear (2008 : Honolulu, Hawaii)',
        citation: 'Silver Spring, MD : U.S. Department of Commerce, National Oceanic and Atmospheric Administration, National Ocean Service, Office of Response & Restoration, Marine Debris Division, [2010]',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&2%2C2%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=703424444&issn='
      },
      {
        title: 'Hi-Grouse environmental justice',
        author: 'Pfeiffer, Lois J., author',
        citation: '[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&3%2C3%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962027725&issn='
      },
      {
        title: 'Biological evaluation for the Hi-Grouse forest management project : Goosenest Ranger District, Klamath National Forest',
        author: 'Oechsner, Marynell, author',
        citation: '[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&4%2C4%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962037552&issn='
      },
      {
        title: 'Migratory bird and deer analysis for the Hi-Grouse forest management project : Goosenest Ranger District, Klamath National Forest',
        author: 'Oechsner, Marynell, author',
        citation: '[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&5%2C5%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962037710&issn='
      }
    ]
    const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html lang="en">
<head>
<title>University of North Carolina Wilmington                                  / UNCW</title>
<base target="_self"/>
<link rel="stylesheet" type="text/css" href="/scripts/ProStyles.css" />
<link rel="stylesheet" type="text/css" href="/screens/styles_uncw.css" />
<link rel="shortcut icon" type="ximage/icon" href="/screens/favicon.ico" />
<script type="text/javascript" src="/scripts/common.js">
</script>
<script type="text/javascript" src="/scripts/webbridge.js">
</script>
<script type="text/javascript" src="/scripts/elcontent.js">
</script>
a
<script>var trackOutboundLink = function(url) {   ga('send', 'event', 'outbound', 'click', url, {     'transport': 'beacon',     'hitCallback': function(){document.location = url;}   });}</script><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous"><meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4"><link rel="stylesheet" type="text/css" href="/screens/styles_print.css" media="print"><script type="text/javascript" src="/screens/bibdisplay.js"></script><link rel="stylesheet" type="text/css" href="/screens/sms.css" /><script type=”text/javascript” src='/screens/sms.js'></script><script type=”text/javascript” src='/screens/jquery_mods.js'></script><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script><script>$(document).ready(function(){var url=$(".bibLinks a").attr("href");var outbound=$(".bibLinks a").attr("onclick");var check=outbound.substring(0,11);var scooter="trackOutboundLink('"+url+"');";if (check=="window.open"){$(".bibLinks a").attr("onclick",scooter);$(".bibLinks a[href^='http://']").attr("target","_blank");} });</script>
</head>
<body bgcolor="#FFFFFF" >
<!-- begin toplogo_s4.html file -->
<!--gc--> 
<!-- Rel 2009B Example Set -->
<!-- Updated: 06 Oct 2010; 08 Feb 2011 -->
<script type="text/javascript">
if (document.body){document.body.className = "bodybg";}
</script>
<script type="text/javascript" src='/screens/sms.js'> </script>

<div class="minHeight">
<div class="fullPage">

<div id="skipNav"><a href="#content" tabindex="1">Skip to content</a></div>
<div class="topLogo">

<!-- Move all navigation to one row below graphic. LKW 
<div class="topLinks">
<ul id="topLinksList">
<li><a href="/patroninfo" tabindex="120">Login</a></li>
<li><a href="/help" tabindex="115">Help</a></li>
<li><a href="#" onClick="window.print();" tabindex="110"><span class="buttonTopLinks"><img src="/screens/ico_printer.gif" alt=""><span class="buttonTopLinksText">Print</span></span></a></li>
<li><a href="/search/" tabindex="105">New Search</a></li>
</ul>
</div>-->

<div class="topLogoSmall">
<!--<a href="/search" tabindex="10"><img src="/screens/UNCWlogo.jpg"  width="483" height="75" alt="Library Catalog Home" title="Library Catalog Home"></a>-->
<a href="https://library.uncw.edu" tabindex="10"><img src="/screens/UNCWlogo.jpg" width="350" height="62"  alt="Library  Home" title="Library Home"></a>

</div>

</div><!--topLogo-->

<!--for text instead of image logo:
<div class="topLogoSmall">
<h2 class="topLogoText">Library Name</h2>
</div>
-->

<div class="topMyLibrary">
<!--<div id="topMyLibraryHeader"><h1>My Library</h1></div>-->

<ul id="toplogoMoreNav">
<!-- Toplogo alt links. -->
<!--<li><a href="/acquire">Suggest a purchase</a></li>
<li><a href="/suggest">Leave Comments</a></li>
-->

<!-- Dropdown menus -->
  
<li id="first"><div><a href="/search/">New Search</a></div>
<ul><li><a href="/search/">Basic Search</a></li>
<li> <a href="/search/X">Advanced Keyword</a></li>
<li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
<li> <a href="/search/t">Title</a></li>
<li> <a href="/search/j">Journal Title</a></li>
<li> <a href="/search/a">Author</a></li>
<li> <a href="/search/d">Subject</a></li>
<li> <a href="/search/c">LC Call Number</a></li>
<li> <a href="/search/l">Local Call Number</a></li>
<li> <a href="/search/g">Government Document Number</a></li>
<li> <a href="/search/m">Dewey Number</a></li>
<li> <a href="/search/i">ISBN/ISSN</a></li>
<li> <a href="/search/o">OCLC # Number</a></li>
<li> <a href="/search/q">Author and Title</a></li></ul></li>

<li><div><a href="">Library Links</a></div>
<ul>
<li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
<li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
<li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
<li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
<li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
<li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
<li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
      
</ul>
</li>
  
<!--<li ><a href="http://library.uncw.edu/" target="_new">Library Home</a></li>-->
  
<li><a href="/patroninfo" >My Library Account</a></li>

<li  id="last">
<div><a href="/help">Help</a></div>
<ul>
<li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
<li><a href="/help#searching">Searching Tips</a></li>
<li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
<li><a href="/help#prefsearch">Saving your searches</a></li>
<li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
<li><a href="/help#renewals">Renewals</a></li>
</ul>
</li>

<!--<li >
<div><a href="#">Features</a></div>
<ul>
            <li><a href="<encore IP/iii/encore>">Search Encore</a></li>
            <li><a href="/iii/calendar/month">Program Calendar</a></li>
            
            <li><a href="/rpro">Research Pro</a></li>
            <li><a href="/search/y">Find e-resources</a></li>
            <li><a href="/illb">Interlibrary Loan</a></li>
</ul>
</li> -->
<!-- End dropdown menus -->    
</ul>
    
    
    
    
    
    
    
    
<!-- Garret: Responsive Dropdown Menu -->        
<div class="dropdown">
  <i onclick="responsiveDropdown()" class="dropbtn fa fa-bars" aria-hidden="true"></i>
  <div id="myDropdown" class="dropdown-content">
    <ul>
        <li>
            <div>
                <h4 onclick="toggle_visibility('newSearchDropDown');">New Search</h4>
                <ul id="newSearchDropDown">
                    <li><a href="/search/">Basic Search</a></li>
                    <li><a href="/search/X">Advanced Keyword</a></li>
    <li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
                    <li><a href="/search/t">Title</a></li>
                    <li><a href="/search/j">Journal Title</a></li>
                    <li><a href="/search/a">Author</a></li>
                    <li><a href="/search/d">Subject</a></li>
                    <li><a href="/search/c">LC Call Number</a></li>
                    <li><a href="/search/l">Local Call Number</a></li>
                    <li><a href="/search/g">Government Document Number</a></li>
                    <li><a href="/search/m">Dewey Number</a></li>
                    <li><a href="/search/i">ISBN/ISSN</a></li>
                    <li><a href="/search/o">OCLC # Number</a></li>
                    <li><a href="/search/q">Author and Title</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('libraryLinksDropDown');">Library Links</h4>
                <ul id="libraryLinksDropDown">
                    <li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
                    <li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
                    <li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
                    <li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
                    <li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
                    <li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
                    <li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('helpDropDown');">Help</h4>
                <ul id="helpDropDown">
                    <li><a href="/help">Help</a></li>
                    <li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
                    <li><a href="/help#searching">Searching Tips</a></li>
                    <li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
                    <li><a href="/help#prefsearch">Saving your searches</a></li>
                    <li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
                    <li><a href="/help#renewals">Renewals</a></li>
                </ul>
            </div>
        </li>
            <div>
                <!-- Class Needs To Be Added In The Next Line -->       
                <h4 id="closeDropDown" onclick="document.getElementById('myDropdown').style.display = 'none';"><i class="fa fa-times" aria-hidden="true"></i> Close</h4>
            </div>
    </ul>
  </div>
</div>    
    
<div id="myLibraryAccount">
    <a href="/patroninfo" ><i class="dropbtn fa fa-cog" aria-hidden="true"></i></a>  
</div>
    
    
 <!-- Garret: Responsive Dropdown Menu Javascript-->    
<script type="text/javascript">
    
function responsiveDropdown() {
        document.getElementById("myDropdown").style.display = 'block';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    
function toggle_visibility(id) {

   document.getElementById("newSearchDropDown").style.display = 'none';
   document.getElementById("libraryLinksDropDown").style.display = 'none';
   document.getElementById("helpDropDown").style.display = 'none';
    
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
    
</script>
    
    
    
    

<script type="text/javascript"><!--//--><![CDATA[//><!--

//Enable optional dropdown menu for additional navigation options.
if (document.all&&document.getElementById) {
  navRoot = document.getElementById("toplogoMoreNav");
  for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
      node.onmouseover=function() {
        this.className+=" over";
      }
      node.onmouseout=function() {
        this.className=this.className.replace(" over", "");
      }
    }
  }
}

//--><!]]></script>

</div><!--myLibrary-->
<div class="topNavClear"></div>

<!-- Removed. LKW <div class="searchNav">
<script language="JavaScript"> 

function GotoURL() { 
//top.location.href = dl.specializedSearch.options[dl.specializedSearch.selectedIndex].value;
window.location.assign(document.getElementById("specializedSearch").value);
return false;
} 
// 
</script>-->
<!--
<div id="searchNavMenu">
<select name="specializedSearch" id="specializedSearch">
<option selected="selected" value=" ">(More Searches)</option>
<option value="/search/X">Advanced Keyword</option>
<option value="/search/t">Title</option>
<option value="/search/j">Journal Title</option>
<option value="/search/a">Author</option>
<option value="/search/d">Subject</option>
<option value="/search/c">LC Call Number</option>
<option value="/search/l">Local Call Number</option>
<option value="/search/g">Government Document Number</option>
<option value="/search/m">Dewey Number</option>
<option value="/search/i">ISBN/ISSN</option>
<option value="/search/o">OCLC Number</option>
<option value="/search/q">Author and Title</option>
<option value="/search/p">Instructor</option>
<option value="/search/r">Course</option> 
</select>
<input type="image" src="/screens/ico_go_uncw.gif" class="searchNavBut" value="Go" onclick="GotoURL();" >
</div>

</div>--><!--searchNav-->
<div class="clear"></div>
<div class="pageContent"><!-- content container -->
<a name="content" id="content"></a>
<!--end toplogo_s4.html-->

<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&SORT=D&b=wd&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&SORT=D&b=wd&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
<noscript>
<h2>Search history function requires JavaScript.</h2>
</noscript>
</form>
</div>

<!-- BEGIN BROWSE SCREEN TABLE -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="browseScreen">
<!-- BEGIN SEARCH WIDGET -->
<div align="center">
<tr align="center" valign="middle">
<td valign="middle" colspan="2">
<div  class="browseSearchtool">
<script type="text/JavaScript">
<!-- Hide the JS
var savedScope;
var savedTag;
var savedSearch;
var sortButtonText = null;
var savedExactSearch = null;
var sortButtonEvent = null;
var sortExactBrowseURL = null;
var sortTypes = new Array();
var sortLabels = new Array();
sortTypes[0] = "t";
sortLabels[0] = "Title";
sortTypes[1] = "a";
sortLabels[1] = "Author";
sortTypes[2] = "c";
sortLabels[2] = "Year";
sortTypes[3] = "r";
sortLabels[3] = "Reverse Year";
sortTypes[4] = "n";
sortLabels[4] = "Call Number";
sortTypes[5] = "m";
sortLabels[5] = "Material Type";
sortLabels[6] = "System Sorted";
sortTypes[6] = "-";
var sortSelectedValue = "6";
var nonSortTags = "XYZprWw"
// Unhide the JS -->
</script>
<form name="searchtool" target="_self" action="/search~S4/" method='GET'>
      <label for="searchtype" style="display:none;">SearchType</label> <select name="searchtype" id="searchtype" onChange="initSort()">
        <option value="X" selected="selected"> KEYWORD</option>
        <option value="t"> TITLE</option>
        <option value="j"> JOURNAL TITLE</option>
        <option value="a"> AUTHOR</option>
        <option value="d"> SUBJECT</option>
        <option value="c"> CALL NO</option>
        <option value="g"> GOVT DOC #</option>
        <option value="l"> LOCAL CALL NO</option>
      </select>
      &nbsp;
      <label for="searcharg" style="display:none;">Search</label><input type="text" name="searcharg" id="searcharg" size="30" onchange='return searchtoolSubmitAction()'maxlength="75" value="hi" />
      &nbsp;

<span id="sort_cell">
</span>

<script type="text/JavaScript">
<!-- Hide the JS
initSort();
// Unhide the JS -->
</script>
      <input type="hidden" name="SORT" value="DZ" /><input type="hidden" name="extended" value="0" />      <input type="submit" name="SUBMIT" value="Search" onclick='return searchtoolSubmitAction();' />
<div>
      <input type="checkbox" name="availlim" value="1"  /> <span class="availLimMessage">Limit search to available items</span><br/>
</div>
<div>
      <input type="hidden" name="searchlimits" value="b=wd" />
      <input type="hidden" name="searchorigarg" value="Xhi&SORT=D" />
</div>
</form>
<div  class="browseSearchtoolMessage">      <i>Limited to:</i> Location "Government Resources" <i> and</i>  <i>67 results found. </i>Sorted by  <strong>relevance</strong>  | <a href="/search~S4/X?(hi)&SORT=DX&b=wd">date</a>  | <a href="/search~S4/X?(hi)&SORT=AX&b=wd">title</a> .
</div>
<div></div></div>

</td>
</tr>
</div>
<!-- END SEARCH WIDGET -->

<!-- BEGIN BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/13%2C67%2C67%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/25%2C67%2C67%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/37%2C67%2C67%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/49%2C67%2C67%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/61%2C67%2C67%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/13%2C67%2C67%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BROWSE PAGER -->

<!-- BEGIN BROWSE SCREEN LEFT CELL: BROWSELIST/BRIEFCIT AREA -->
<tr><td>
<table border="0" cellpadding="0" width="100%">
<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<form method="POST" action="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/browse" name="export_form" id="export_form" >
<input type="hidden" name="jumpref" value="X%28hi%29">
<input type="hidden" id="save_func" name="save_func" value=""/>
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn1' id='save_page_btn1' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
<span name='mylist_btn1' id='mylist_btn1' style='visibility: visible' ><a href="#" onclick="save_to_mylist();">
<span class="button"><img src="/screens/ico_saveMylists.gif" alt=""><span class="buttonText">Save Marked to My Lists</span></span></a>
</span>
</td></tr>


</td>
</tr>
<tr  class="browseHeader">
<td align="center" class="browseHeaderData">
KEYWORDS (1-12 of 67)
</td>
</tr>
<!-- Right Result rank 1 -->
<tr  class="browseSuperEntry browseEntryRelGroup1"><td colspan="1"><img src="/screens/relevance5.gif" alt="Most relevant">&nbsp;<h1 class="browseSuperEntryTitle">Most relevant titles</h1>&nbsp;entries 1-19</td></tr>
<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_1'></a> 1<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2413017" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=819324713&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=819324713&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&1%2C1%2C">Hi-Tech Bed Systems Corporation</a></h2>
<br >
United States. Government Accountability Office<br >
Washington, D.C. : U.S. Govt. Accountability Office, [2012]
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_2'></a> 2<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2291465" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=703424444&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=703424444&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&2%2C2%2C">Proceedings of the Workshop on At-sea Detection and Removal of Derelict Fishing Gear, December 9-10, 2008, Honolulu, HI, USA</a></h2>
<br >
Workshop on At-sea Detection and Removal of Derelict Fishing Gear (2008 : Honolulu, Hawaii)<br >
Silver Spring, MD : U.S. Department of Commerce, National Oceanic and Atmospheric Administration, National Ocean Service, Office of Response & Restoration, Marine Debris Division, [2010]
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_3'></a> 3<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917078" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962027725&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962027725&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&3%2C3%2C">Hi-Grouse environmental justice</a></h2>
<br >
Pfeiffer, Lois J., author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_4'></a> 4<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917107" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962037552&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962037552&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&4%2C4%2C">Biological evaluation for the Hi-Grouse forest management project : Goosenest Ranger District, Klamath National Forest</a></h2>
<br >
Oechsner, Marynell, author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_5'></a> 5<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917108" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962037710&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962037710&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&5%2C5%2C">Migratory bird and deer analysis for the Hi-Grouse forest management project : Goosenest Ranger District, Klamath National Forest</a></h2>
<br >
Oechsner, Marynell, author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_6'></a> 6<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917114" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962067806&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962067806&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&6%2C6%2C">Biological assessment for the Hi-Grouse forest management project : Goosenest Ranger District, Klamath National Forest / prepared by Marynell Oechsner ; reviewed by Christy Cheyne [and] Laura Allen</a></h2>
<br >
Oechsner, Marynell, author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2010
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_7'></a> 7<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917071" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962026404&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962026404&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&7%2C7%2C">Hi-Grouse Project : air quality report</a></h2>
<br >
Pfeiffer, Lois J., author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_8'></a> 8<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917074" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962026591&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962026591&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&8%2C8%2C">Hi-Grouse Project : biological assessment/evaluation for threatened, endangered, proposed, and sensitive plant species</a></h2>
<br >
Baker, Blaze, author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_9'></a> 9<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917077" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962027351&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962027351&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&9%2C9%2C">[Hi-Grouse Project cultural resource]</a></h2>
<br >
Goetz, Jeanne, author<br >
[Yreka, California?] : [U.S. Department of Agriculture, Forest Service], 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_10'></a> 10<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917079" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962027727&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962027727&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&10%2C10%2C">Hi-Grouse forest management project : fire and fuels report</a></h2>
<br >
Helmbrecht, Donald J., author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_11'></a> 11<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917080" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962028690&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962028690&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&11%2C11%2C">Hi-Grouse Project : recreation report</a></h2>
<br >
Desser, Rochelle, author<br >
[Yreka, California?] : U.S. Department of Agriculture, Forest Service, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_12'></a> 12<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2917081" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=962029240&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=962029240&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/frameset&FF=X(hi)&SORT=D&b=wd&12%2C12%2C">Report on survey and manage species for the Hi-Grouse forest management project</a></h2>
<br >
<br >
[Yreka, California?] : [U.S. Department of Agriculture, Forest Service], 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn2' id='save_page_btn2' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
</form>

<form action="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/browse/indexsort=D" method="POST">
<input type="HIDDEN" name="jumpref" value="X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/1%2C67%2C67%2CB/browse">
<script type="text/JavaScript">

function iiiDoSubmit_1()
{
//getFormHandleForm() is in common.js
var obj = getFormHandleForm(1);
obj.submit();
}
</script>
<input type="hidden" id="iiiFormHandle_1"/>
<a href="#" onclick="iiiDoSubmit_1();"><div onmousedown="this.className='pressedState';" onmouseout="this.className='';" onmouseup="this.className='';"><div class="buttonSpriteDiv"><span class="buttonSpriteSpan1"><span class="buttonSpriteSpan2">Locate in results</span></span></div></div></a>



<script type="text/JavaScript">

//getFormHandleForm() is in common.js
var evtobj = getFormHandleForm(1);
if (document.layers)
    {
    document.captureEvents(Event.KEYUP);
    }
document.onkeyup = function(evt)
{
if (!evt) evt = window.event;
var keyCode;
if (evt.which) keyCode = evt.which;
else if (evt.keyCode) keyCode = evt.keyCode;
var targ;
if (evt.target) targ = evt.target;
else if (evt.srcElement) targ = evt.srcElement;
if (targ.nodeType == 3) //for Safari bug
    targ = targ.parentNode;
if (targ.form)
    {
    targ = targ.form;
    //alert('targ='+targ+'  evtobj='+evtobj);
    if (keyCode == 13 && targ == evtobj)
        {
        iiiDoSubmit_1();
        }
    }
};

</script>
<input type="TEXT" name="jumpto" value="67" size="2" maxlength="2">
</form>

</td></tr>


</td>
</tr>
</table>
<!-- END BROWSELIST/BRIEFCIT AREA -->
</td>
<!-- END BROWSE SCREEN LEFT CELL -->

</tr>

<!-- BEGIN BOTTOM BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/13%2C67%2C67%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/25%2C67%2C67%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/37%2C67%2C67%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/49%2C67%2C67%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/61%2C67%2C67%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&SORT=D&b=wd/X(hi)&SORT=D&b=wd&SUBKEY=(hi)/13%2C67%2C67%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BOTTOM BROWSE PAGER -->
</table>
<!-- END BROWSE SCREEN TABLE -->
<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&SORT=D&b=wd&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&SORT=D&b=wd&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
</form>
</div>


<!-- begin botlogo.html file -->
<!-- Rel 2009B Example Set -->
<!-- Updated: Sept 2009 -->
</div><!-- pageContent  -->
<div style="clear:both"></div>
</div><!-- fullPage -->
</div><!-- min-height -->

<!--import jquery code-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">

$ ("table.bibLinks a").on('click', function(){

                var analytics_bibLinks = $(this).text();

                _gaq.push(['_trackEvent', "Bib Records", 'Clicked BibLink', analytics_bibLinks]);

});

</script>

<!--begin google analytics tracking code-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5263020-17', 'uncw.edu');
  ga('send', 'pageview');

</script>

<!--end google analytics tracking code-->

<!--The following code opens a span, hides what is in that span (the Innovative credit statement), but never closes the span.  
The InnovativeCredit span is now included in this un-displayed span and is invisible.-->
<span style="display:none">

<!-- end botlogo.html file -->

</body>
</html>
`
    expect(extract(html)).toEqual(bundle)
  })
})

describe('extract tries to pull the expected data from an unreliable source', () => {
  test('books-ebooks example', () => {
    const bundle = [
      {
        title: 'Hi, Koo! : a year of seasons',
        author: 'Muth, Jon J',
        citation: 'New York : Scholastic Press, 2014',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&1%2C1%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=9780545166683/SC.GIF&client=uncwh&upc=&oclc=816499033&issn='
      },
      {
        title: 'Hi-lo comprehension-building passages : mini-mysteries : 15 reproducible passages with comprehension questions that  guide students to infer, visualize, summarize, predict, and more',
        author: 'Doyle, Bill H., 1968-',
        citation: 'New York : Scholastic, c2013',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&2%2C2%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=0545124085/SC.GIF&client=uncwh&upc=&oclc=795009394&issn='
      },
      {
        title: 'Managing creativity in science and hi-tech',
        author: 'Kay, Ronald, Dr',
        citation: 'Berlin ; London : Springer, 2012',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&3%2C3%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=9783642246357/SC.GIF&client=uncwh&upc=9786613698193&oclc=794925355&issn='
      },
      {
        title: 'Hi Iþm ... Pirate',
        author: 'Lopetegui, José A',
        citation: '[Álava] : Editorial Saure, [2011]',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&4%2C4%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=868945022&issn='
      },
      {
        title: 'Hi-de-ho the life of Cab Calloway',
        author: 'Shipton, Alyn',
        citation: 'Oxford : Oxford University Press, 2010',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&5%2C5%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=671741245&issn='
      }
    ]
    const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html lang="en">
<head>
<title>University of North Carolina Wilmington                                  / UNCW</title>
<base target="_self"/>
<link rel="stylesheet" type="text/css" href="/scripts/ProStyles.css" />
<link rel="stylesheet" type="text/css" href="/screens/styles_uncw.css" />
<link rel="shortcut icon" type="ximage/icon" href="/screens/favicon.ico" />
<script type="text/javascript" src="/scripts/common.js">
</script>
<script type="text/javascript" src="/scripts/webbridge.js">
</script>
<script type="text/javascript" src="/scripts/elcontent.js">
</script>

<script>var trackOutboundLink = function(url) {   ga('send', 'event', 'outbound', 'click', url, {     'transport': 'beacon',     'hitCallback': function(){document.location = url;}   });}</script><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous"><meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4"><link rel="stylesheet" type="text/css" href="/screens/styles_print.css" media="print"><script type="text/javascript" src="/screens/bibdisplay.js"></script><link rel="stylesheet" type="text/css" href="/screens/sms.css" /><script type=”text/javascript” src='/screens/sms.js'></script><script type=”text/javascript” src='/screens/jquery_mods.js'></script><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script><script>$(document).ready(function(){var url=$(".bibLinks a").attr("href");var outbound=$(".bibLinks a").attr("onclick");var check=outbound.substring(0,11);var scooter="trackOutboundLink('"+url+"');";if (check=="window.open"){$(".bibLinks a").attr("onclick",scooter);$(".bibLinks a[href^='http://']").attr("target","_blank");} });</script>
</head>
<body bgcolor="#FFFFFF" >
<!-- begin toplogo_s4.html file -->
<!--gc--> 
<!-- Rel 2009B Example Set -->
<!-- Updated: 06 Oct 2010; 08 Feb 2011 -->
<script type="text/javascript">
if (document.body){document.body.className = "bodybg";}
</script>
<script type="text/javascript" src='/screens/sms.js'> </script>

<div class="minHeight">
<div class="fullPage">

<div id="skipNav"><a href="#content" tabindex="1">Skip to content</a></div>
<div class="topLogo">

<!-- Move all navigation to one row below graphic. LKW 
<div class="topLinks">
<ul id="topLinksList">
<li><a href="/patroninfo" tabindex="120">Login</a></li>
<li><a href="/help" tabindex="115">Help</a></li>
<li><a href="#" onClick="window.print();" tabindex="110"><span class="buttonTopLinks"><img src="/screens/ico_printer.gif" alt=""><span class="buttonTopLinksText">Print</span></span></a></li>
<li><a href="/search/" tabindex="105">New Search</a></li>
</ul>
</div>-->

<div class="topLogoSmall">
<!--<a href="/search" tabindex="10"><img src="/screens/UNCWlogo.jpg"  width="483" height="75" alt="Library Catalog Home" title="Library Catalog Home"></a>-->
<a href="https://library.uncw.edu" tabindex="10"><img src="/screens/UNCWlogo.jpg" width="350" height="62"  alt="Library  Home" title="Library Home"></a>

</div>

</div><!--topLogo-->

<!--for text instead of image logo:
<div class="topLogoSmall">
<h2 class="topLogoText">Library Name</h2>
</div>
-->

<div class="topMyLibrary">
<!--<div id="topMyLibraryHeader"><h1>My Library</h1></div>-->

<ul id="toplogoMoreNav">
<!-- Toplogo alt links. -->
<!--<li><a href="/acquire">Suggest a purchase</a></li>
<li><a href="/suggest">Leave Comments</a></li>
-->

<!-- Dropdown menus -->
  
<li id="first"><div><a href="/search/">New Search</a></div>
<ul><li><a href="/search/">Basic Search</a></li>
<li> <a href="/search/X">Advanced Keyword</a></li>
<li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
<li> <a href="/search/t">Title</a></li>
<li> <a href="/search/j">Journal Title</a></li>
<li> <a href="/search/a">Author</a></li>
<li> <a href="/search/d">Subject</a></li>
<li> <a href="/search/c">LC Call Number</a></li>
<li> <a href="/search/l">Local Call Number</a></li>
<li> <a href="/search/g">Government Document Number</a></li>
<li> <a href="/search/m">Dewey Number</a></li>
<li> <a href="/search/i">ISBN/ISSN</a></li>
<li> <a href="/search/o">OCLC # Number</a></li>
<li> <a href="/search/q">Author and Title</a></li></ul></li>

<li><div><a href="">Library Links</a></div>
<ul>
<li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
<li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
<li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
<li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
<li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
<li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
<li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
      
</ul>
</li>
  
<!--<li ><a href="http://library.uncw.edu/" target="_new">Library Home</a></li>-->
  
<li><a href="/patroninfo" >My Library Account</a></li>

<li  id="last">
<div><a href="/help">Help</a></div>
<ul>
<li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
<li><a href="/help#searching">Searching Tips</a></li>
<li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
<li><a href="/help#prefsearch">Saving your searches</a></li>
<li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
<li><a href="/help#renewals">Renewals</a></li>
</ul>
</li>

<!--<li >
<div><a href="#">Features</a></div>
<ul>
            <li><a href="<encore IP/iii/encore>">Search Encore</a></li>
            <li><a href="/iii/calendar/month">Program Calendar</a></li>
            
            <li><a href="/rpro">Research Pro</a></li>
            <li><a href="/search/y">Find e-resources</a></li>
            <li><a href="/illb">Interlibrary Loan</a></li>
</ul>
</li> -->
<!-- End dropdown menus -->    
</ul>
    
    
    
    
    
    
    
    
<!-- Garret: Responsive Dropdown Menu -->        
<div class="dropdown">
  <i onclick="responsiveDropdown()" class="dropbtn fa fa-bars" aria-hidden="true"></i>
  <div id="myDropdown" class="dropdown-content">
    <ul>
        <li>
            <div>
                <h4 onclick="toggle_visibility('newSearchDropDown');">New Search</h4>
                <ul id="newSearchDropDown">
                    <li><a href="/search/">Basic Search</a></li>
                    <li><a href="/search/X">Advanced Keyword</a></li>
    <li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
                    <li><a href="/search/t">Title</a></li>
                    <li><a href="/search/j">Journal Title</a></li>
                    <li><a href="/search/a">Author</a></li>
                    <li><a href="/search/d">Subject</a></li>
                    <li><a href="/search/c">LC Call Number</a></li>
                    <li><a href="/search/l">Local Call Number</a></li>
                    <li><a href="/search/g">Government Document Number</a></li>
                    <li><a href="/search/m">Dewey Number</a></li>
                    <li><a href="/search/i">ISBN/ISSN</a></li>
                    <li><a href="/search/o">OCLC # Number</a></li>
                    <li><a href="/search/q">Author and Title</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('libraryLinksDropDown');">Library Links</h4>
                <ul id="libraryLinksDropDown">
                    <li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
                    <li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
                    <li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
                    <li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
                    <li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
                    <li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
                    <li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('helpDropDown');">Help</h4>
                <ul id="helpDropDown">
                    <li><a href="/help">Help</a></li>
                    <li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
                    <li><a href="/help#searching">Searching Tips</a></li>
                    <li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
                    <li><a href="/help#prefsearch">Saving your searches</a></li>
                    <li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
                    <li><a href="/help#renewals">Renewals</a></li>
                </ul>
            </div>
        </li>
            <div>
                <!-- Class Needs To Be Added In The Next Line -->       
                <h4 id="closeDropDown" onclick="document.getElementById('myDropdown').style.display = 'none';"><i class="fa fa-times" aria-hidden="true"></i> Close</h4>
            </div>
    </ul>
  </div>
</div>    
    
<div id="myLibraryAccount">
    <a href="/patroninfo" ><i class="dropbtn fa fa-cog" aria-hidden="true"></i></a>  
</div>
    
    
 <!-- Garret: Responsive Dropdown Menu Javascript-->    
<script type="text/javascript">
    
function responsiveDropdown() {
        document.getElementById("myDropdown").style.display = 'block';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    
function toggle_visibility(id) {

   document.getElementById("newSearchDropDown").style.display = 'none';
   document.getElementById("libraryLinksDropDown").style.display = 'none';
   document.getElementById("helpDropDown").style.display = 'none';
    
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
    
</script>
    
    
    
    

<script type="text/javascript"><!--//--><![CDATA[//><!--

//Enable optional dropdown menu for additional navigation options.
if (document.all&&document.getElementById) {
  navRoot = document.getElementById("toplogoMoreNav");
  for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
      node.onmouseover=function() {
        this.className+=" over";
      }
      node.onmouseout=function() {
        this.className=this.className.replace(" over", "");
      }
    }
  }
}

//--><!]]></script>

</div><!--myLibrary-->
<div class="topNavClear"></div>

<!-- Removed. LKW <div class="searchNav">
<script language="JavaScript"> 

function GotoURL() { 
//top.location.href = dl.specializedSearch.options[dl.specializedSearch.selectedIndex].value;
window.location.assign(document.getElementById("specializedSearch").value);
return false;
} 
// 
</script>-->
<!--
<div id="searchNavMenu">
<select name="specializedSearch" id="specializedSearch">
<option selected="selected" value=" ">(More Searches)</option>
<option value="/search/X">Advanced Keyword</option>
<option value="/search/t">Title</option>
<option value="/search/j">Journal Title</option>
<option value="/search/a">Author</option>
<option value="/search/d">Subject</option>
<option value="/search/c">LC Call Number</option>
<option value="/search/l">Local Call Number</option>
<option value="/search/g">Government Document Number</option>
<option value="/search/m">Dewey Number</option>
<option value="/search/i">ISBN/ISSN</option>
<option value="/search/o">OCLC Number</option>
<option value="/search/q">Author and Title</option>
<option value="/search/p">Instructor</option>
<option value="/search/r">Course</option> 
</select>
<input type="image" src="/screens/ico_go_uncw.gif" class="searchNavBut" value="Go" onclick="GotoURL();" >
</div>

</div>--><!--searchNav-->
<div class="clear"></div>
<div class="pageContent"><!-- content container -->
<a name="content" id="content"></a>
<!--end toplogo_s4.html-->

<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&amp;searchscope=4&amp;SORT=D&amp;m=a&amp;m=c&amp;m=h&amp;b=wg&amp;b=wj&amp;b=wr&amp;b=wf&amp;b=wh&amp;b=wb&amp;b=wc&amp;b=we&amp;b=wi&amp;b=wl&amp;b=wn&amp;b=ws&amp;b=wu&amp;b=wv&amp;b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
<noscript>
<h2>Search history function requires JavaScript.</h2>
</noscript>
</form>
</div>

<!-- BEGIN BROWSE SCREEN TABLE -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="browseScreen">
<!-- BEGIN SEARCH WIDGET -->
<div align="center">
<tr align="center" valign="middle">
<td valign="middle" colspan="2">
<div  class="browseSearchtool">
<script type="text/JavaScript">
<!-- Hide the JS
var savedScope;
var savedTag;
var savedSearch;
var sortButtonText = null;
var savedExactSearch = null;
var sortButtonEvent = null;
var sortExactBrowseURL = null;
var sortTypes = new Array();
var sortLabels = new Array();
sortTypes[0] = "t";
sortLabels[0] = "Title";
sortTypes[1] = "a";
sortLabels[1] = "Author";
sortTypes[2] = "c";
sortLabels[2] = "Year";
sortTypes[3] = "r";
sortLabels[3] = "Reverse Year";
sortTypes[4] = "n";
sortLabels[4] = "Call Number";
sortTypes[5] = "m";
sortLabels[5] = "Material Type";
sortLabels[6] = "System Sorted";
sortTypes[6] = "-";
var sortSelectedValue = "6";
var nonSortTags = "XYZprWw"
// Unhide the JS -->
</script>
<form name="searchtool" target="_self" action="/search~S4/" method='GET'>
      <label for="searchtype" style="display:none;">SearchType</label> <select name="searchtype" id="searchtype" onChange="initSort()">
        <option value="X" selected="selected"> KEYWORD</option>
        <option value="t"> TITLE</option>
        <option value="j"> JOURNAL TITLE</option>
        <option value="a"> AUTHOR</option>
        <option value="d"> SUBJECT</option>
        <option value="c"> CALL NO</option>
        <option value="g"> GOVT DOC #</option>
        <option value="l"> LOCAL CALL NO</option>
      </select>
      &nbsp;
      <label for="searcharg" style="display:none;">Search</label><input type="text" name="searcharg" id="searcharg" size="30" onchange='return searchtoolSubmitAction()'maxlength="75" value="hi" />
      &nbsp;

<span id="sort_cell">
</span>

<script type="text/JavaScript">
<!-- Hide the JS
initSort();
// Unhide the JS -->
</script>
      <input type="hidden" name="SORT" value="DZ" /><input type="hidden" name="extended" value="0" />      <input type="submit" name="SUBMIT" value="Search" onclick='return searchtoolSubmitAction();' />
<div>
      <input type="checkbox" name="availlim" value="1"  /> <span class="availLimMessage">Limit search to available items</span><br/>
</div>
<div>
      <input type="hidden" name="searchlimits" value="m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb" />
      <input type="hidden" name="searchorigarg" value="Xhi&SORT=D" />
</div>
</form>
<div  class="browseSearchtoolMessage">      <i>Limited to:</i> Material Type "BOOK" <i> or</i>  "MUSIC SCORE" <i> or</i>  "EBOOKS" <i> and</i> Location "General Collection" <i> or</i>  "Juvenile Collection" <i> or</i>  "Audiobooks" <i> or</i>  "Reference Collection" <i> or</i>  "New and Popular Collection" <i> or</i>  "Atlases and Maps" <i> or</i>  "Curriculum Materials Center" <i> or</i>  "UNCW Ed Lab" <i> or</i>  "Index Collection" <i> or</i>  "UNCW CTE" <i> or</i>  "Special Collections SENC" <i> or</i>  "Special Collections" <i> or</i>  "University Archives" <i> or</i>  "Course Reserves" <i> or</i>  "eBooks" <i> and</i>  <i>226 results found. </i>Sorted by  <strong>relevance</strong>  | <a href="/search~S4/X?(hi)&searchscope=4&SORT=DX&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">date</a>  | <a href="/search~S4/X?(hi)&searchscope=4&SORT=AX&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">title</a> .
</div>
<div></div></div>

</td>
</tr>
</div>
<!-- END SEARCH WIDGET -->

<!-- BEGIN BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/13%2C226%2C226%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/25%2C226%2C226%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/37%2C226%2C226%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/49%2C226%2C226%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/61%2C226%2C226%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/73%2C226%2C226%2CB/browse">7</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/85%2C226%2C226%2CB/browse">8</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/97%2C226%2C226%2CB/browse">9</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/109%2C226%2C226%2CB/browse">10</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/121%2C226%2C226%2CB/browse">11</a>
...
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/217%2C226%2C226%2CB/browse">19</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/13%2C226%2C226%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BROWSE PAGER -->

<!-- BEGIN BROWSE SCREEN LEFT CELL: BROWSELIST/BRIEFCIT AREA -->
<tr><td>
<table border="0" cellpadding="0" width="100%">
<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<form method="POST" action="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/browse" name="export_form" id="export_form" >
<input type="hidden" name="jumpref" value="X%28hi%29">
<input type="hidden" id="save_func" name="save_func" value=""/>
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn1' id='save_page_btn1' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
<span name='mylist_btn1' id='mylist_btn1' style='visibility: visible' ><a href="#" onclick="save_to_mylist();">
<span class="button"><img src="/screens/ico_saveMylists.gif" alt=""><span class="buttonText">Save Marked to My Lists</span></span></a>
</span>
</td></tr>


</td>
</tr>
<tr  class="browseHeader">
<td align="center" class="browseHeaderData">
KEYWORDS (1-12 of 226)
</td>
</tr>
<!-- Right Result rank 1 -->
<tr  class="browseSuperEntry browseEntryRelGroup1"><td colspan="1"><img src="/screens/relevance5.gif" alt="Most relevant">&nbsp;<h1 class="browseSuperEntryTitle">Most relevant titles</h1>&nbsp;entries 1-21</td></tr>
<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_1'></a> 1<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2499425" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=9780545166683/index.html&client=uncwh&type=rn12&upc=&oclc=816499033&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=9780545166683/SC.GIF&client=uncwh&upc=&oclc=816499033&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&1%2C1%2C">Hi, Koo! : a year of seasons</a></h2>
<br >
Muth, Jon J<br >
New York : Scholastic Press, 2014
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;<a href="/screens/floor_cmc.html">UNCW Ed Lab Juvenile</a> 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lSI+POE+Mut+12998/lsi+poe+mut+12998/-3,-1,,B/browse">SI POE Mut 12998</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Juvenile Easy 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lM/lm/-3,-1,,B/browse">M</a> <!-- field v --><!-- field # -->c.2</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_2'></a> 2<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2431836" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=0545124085/index.html&client=uncwh&type=rn12&upc=&oclc=795009394&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=0545124085/SC.GIF&client=uncwh&upc=&oclc=795009394&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&2%2C2%2C">Hi-lo comprehension-building passages : mini-mysteries : 15 reproducible passages with comprehension questions that  guide students to infer, visualize, summarize, predict, and more</a></h2>
<br >
Doyle, Bill H., 1968-<br >
New York : Scholastic, c2013
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;<a href="/screens/floor_cmc.html">Curriculum Materials Center - General</a> 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lD.9+E.2+SCHO48+2013+H54/ld+9+e+2+scho48+2013+h54/-3,-1,,B/browse">D.9 E.2 SCHO48 2013 H54</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_3'></a> 3<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2452350" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=9783642246357/index.html&client=uncwh&type=rn12&upc=9786613698193&oclc=794925355&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=9783642246357/SC.GIF&client=uncwh&upc=9786613698193&oclc=794925355&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&3%2C3%2C">Managing creativity in science and hi-tech</a></h2>
<br >
Kay, Ronald, Dr<br >
Berlin ; London : Springer, 2012
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_4'></a> 4<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2706290" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=868945022&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=868945022&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&4%2C4%2C">Hi Iþm ... Pirate</a></h2>
<br >
Lopetegui, José A<br >
[Álava] : Editorial Saure, [2011]
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_5'></a> 5<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2651851" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=671741245&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=671741245&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&5%2C5%2C">Hi-de-ho the life of Cab Calloway</a></h2>
<br >
Shipton, Alyn<br >
Oxford : Oxford University Press, 2010
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_6'></a> 6<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2625551" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=646793658&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=646793658&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&6%2C6%2C">Liam says "Hi" learning to greet a friend</a></h2>
<br >
Banks, Jane Whelen<br >
London ; Philadelphia, PA : Jessica Kingsley Publishers, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_7'></a> 7<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2225280" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=9780511658334/index.html&client=uncwh&type=rn12&upc=&oclc=ebs562595548&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=9780511658334/SC.GIF&client=uncwh&upc=&oclc=ebs562595548&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&7%2C7%2C">Tales of hi and bye greeting and parting rituals around the world</a></h2>
<br >
Lundmark, Torbjörn<br >
Cambridge ; Port Melbourne : Cambridge University Press, 2009
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_8'></a> 8<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2623355" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=646747682&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=646747682&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&8%2C8%2C">Library hi tech. Volume 26, Number 1, Information orgnaization futures</a></h2>
<br >
<br >
[Bradford, England] : Emerald, 2008
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_9'></a> 9<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2620715" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=712977413&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=712977413&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&9%2C9%2C">Library hi tech. Volume 25, Number 4, Special sections on accessibility [and] OPAC</a></h2>
<br >
<br >
Bradford : Emerald Insight, c2007
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_10'></a> 10<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2221899" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=9780439694988/index.html&client=uncwh&type=rn12&upc=&oclc=124043893&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=9780439694988/SC.GIF&client=uncwh&upc=&oclc=124043893&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&10%2C10%2C">Hi-lo nonfiction passages for struggling readers : 80 high-interest/low-readability passages with comprehension questions and mini-lessons for teaching key reading strategies</a></h2>
<br >
<br >
New York : Scholastic, c2006
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;<a href="/screens/floor_cmc.html">Curriculum Materials Center - General</a> 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lD.5+E.211+SCH4-5+2006+H54/ld+5+e+211+sch4+5+2006+h54/-3,-1,,B/browse">D.5 E.211 SCH4-5 2006 H54</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_11'></a> 11<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2019981" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_book.gif" alt="BOOK"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=0439639034/index.html&client=uncwh&type=rn12&upc=9780439639033&oclc=56560661&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=0439639034/SC.GIF&client=uncwh&upc=9780439639033&oclc=56560661&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&11%2C11%2C">Hi! Fly Guy</a></h2>
<br >
Arnold, Tedd<br >
New York : Scholastic, c2005
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;<a href="/screens/floor_cmc.html">UNCW Ed Lab Juvenile</a> 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lYR+Arn+1484/lyr+arn+1484/-3,-1,,B/browse">YR Arn 1484</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Juvenile Easy 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/lA/la/-3,-1,,B/browse">A</a> <!-- field v --><!-- field # -->c.2</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_12'></a> 12<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2596334" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_ebook.gif" alt="EBOOKS"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=80240226&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=80240226&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&12%2C12%2C">Library hi tech. Vol. 23, No. 1, UNLV libraries : four years later (part 1)</a></h2>
<br >
<br >
Bradford, England : Emerald Group Publishing, c2005
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn2' id='save_page_btn2' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
</form>

<form action="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/browse/indexsort=D" method="POST">
<input type="HIDDEN" name="jumpref" value="X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/1%2C226%2C226%2CB/browse">
<script type="text/JavaScript">

function iiiDoSubmit_1()
{
//getFormHandleForm() is in common.js
var obj = getFormHandleForm(1);
obj.submit();
}
</script>
<input type="hidden" id="iiiFormHandle_1"/>
<a href="#" onclick="iiiDoSubmit_1();"><div onmousedown="this.className='pressedState';" onmouseout="this.className='';" onmouseup="this.className='';"><div class="buttonSpriteDiv"><span class="buttonSpriteSpan1"><span class="buttonSpriteSpan2">Locate in results</span></span></div></div></a>



<script type="text/JavaScript">

//getFormHandleForm() is in common.js
var evtobj = getFormHandleForm(1);
if (document.layers)
    {
    document.captureEvents(Event.KEYUP);
    }
document.onkeyup = function(evt)
{
if (!evt) evt = window.event;
var keyCode;
if (evt.which) keyCode = evt.which;
else if (evt.keyCode) keyCode = evt.keyCode;
var targ;
if (evt.target) targ = evt.target;
else if (evt.srcElement) targ = evt.srcElement;
if (targ.nodeType == 3) //for Safari bug
    targ = targ.parentNode;
if (targ.form)
    {
    targ = targ.form;
    //alert('targ='+targ+'  evtobj='+evtobj);
    if (keyCode == 13 && targ == evtobj)
        {
        iiiDoSubmit_1();
        }
    }
};

</script>
<input type="TEXT" name="jumpto" value="226" size="3" maxlength="3">
</form>

</td></tr>


</td>
</tr>
</table>
<!-- END BROWSELIST/BRIEFCIT AREA -->
</td>
<!-- END BROWSE SCREEN LEFT CELL -->

</tr>

<!-- BEGIN BOTTOM BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/13%2C226%2C226%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/25%2C226%2C226%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/37%2C226%2C226%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/49%2C226%2C226%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/61%2C226%2C226%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/73%2C226%2C226%2CB/browse">7</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/85%2C226%2C226%2CB/browse">8</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/97%2C226%2C226%2CB/browse">9</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/109%2C226%2C226%2CB/browse">10</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/121%2C226%2C226%2CB/browse">11</a>
...
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/217%2C226%2C226%2CB/browse">19</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb/X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)/13%2C226%2C226%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BOTTOM BROWSE PAGER -->
</table>
<!-- END BROWSE SCREEN TABLE -->
<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&amp;searchscope=4&amp;SORT=D&amp;m=a&amp;m=c&amp;m=h&amp;b=wg&amp;b=wj&amp;b=wr&amp;b=wf&amp;b=wh&amp;b=wb&amp;b=wc&amp;b=we&amp;b=wi&amp;b=wl&amp;b=wn&amp;b=ws&amp;b=wu&amp;b=wv&amp;b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
</form>
</div>


<!-- begin botlogo.html file -->
<!-- Rel 2009B Example Set -->
<!-- Updated: Sept 2009 -->
</div><!-- pageContent  -->
<div style="clear:both"></div>
</div><!-- fullPage -->
</div><!-- min-height -->

<!--import jquery code-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">

$ ("table.bibLinks a").on('click', function(){

                var analytics_bibLinks = $(this).text();

                _gaq.push(['_trackEvent', "Bib Records", 'Clicked BibLink', analytics_bibLinks]);

});

</script>

<!--begin google analytics tracking code-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5263020-17', 'uncw.edu');
  ga('send', 'pageview');

</script>

<!--end google analytics tracking code-->

<!--The following code opens a span, hides what is in that span (the Innovative credit statement), but never closes the span.  
The InnovativeCredit span is now included in this un-displayed span and is invisible.-->
<span style="display:none">

<!-- end botlogo.html file -->

</body>
</html>
`
    expect(extract(html)).toEqual(bundle)
  })
})

describe('extract tries to pull the expected data from an unreliable source', () => {
  test('videos-music example', () => {
    const bundle = [
      {
        title: 'Hi-Tech Tattoo For Your Workouts',
        author: '',
        citation: 'New York, N.Y. : Infobase, [2014], c2013',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&1%2C1%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=100057383&issn='
      },
      {
        title: 'Anyay hi anyay',
        author: '',
        citation: 'Mumbai, India : Star Entertainment, [2000?]',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&2%2C2%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=501029231&issn='
      },
      {
        title: 'Delegate to Congress Joseph R. Farrington (R-HI) (1953)',
        author: '',
        citation: '[United States] : Columbia Broadcasting System, 1953',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&3%2C3%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=677927371&issn='
      },
      {
        title: 'Delegate to Congress Joseph R. Farrington (R-HI) (1952)',
        author: '',
        citation: '[United States] : Columbia Broadcasting System, 1952',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&4%2C4%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=677927577&issn='
      },
      {
        title: 'MIRA Rehab a tale of hi-tech physiotherapy',
        author: 'Mihaiu, Cosmin, (MIRA Rehab, UK)',
        citation: 'London : Henry Stewart Talks, 2017',
        url: 'https://libcat.uncw.edu/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&5%2C5%2C',
        image: 'https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=4434&issn='
      }
    ]
    const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html lang="en">
<head>
<title>University of North Carolina Wilmington                                  / UNCW</title>
<base target="_self"/>
<link rel="stylesheet" type="text/css" href="/scripts/ProStyles.css" />
<link rel="stylesheet" type="text/css" href="/screens/styles_uncw.css" />
<link rel="shortcut icon" type="ximage/icon" href="/screens/favicon.ico" />
<script type="text/javascript" src="/scripts/common.js">
</script>
<script type="text/javascript" src="/scripts/webbridge.js">
</script>
<script type="text/javascript" src="/scripts/elcontent.js">
</script>

<script>var trackOutboundLink = function(url) {   ga('send', 'event', 'outbound', 'click', url, {     'transport': 'beacon',     'hitCallback': function(){document.location = url;}   });}</script><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous"><meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4"><link rel="stylesheet" type="text/css" href="/screens/styles_print.css" media="print"><script type="text/javascript" src="/screens/bibdisplay.js"></script><link rel="stylesheet" type="text/css" href="/screens/sms.css" /><script type=”text/javascript” src='/screens/sms.js'></script><script type=”text/javascript” src='/screens/jquery_mods.js'></script><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script><script>$(document).ready(function(){var url=$(".bibLinks a").attr("href");var outbound=$(".bibLinks a").attr("onclick");var check=outbound.substring(0,11);var scooter="trackOutboundLink('"+url+"');";if (check=="window.open"){$(".bibLinks a").attr("onclick",scooter);$(".bibLinks a[href^='http://']").attr("target","_blank");} });</script>
</head>
<body bgcolor="#FFFFFF" >
<!-- begin toplogo_s4.html file -->
<!--gc--> 
<!-- Rel 2009B Example Set -->
<!-- Updated: 06 Oct 2010; 08 Feb 2011 -->
<script type="text/javascript">
if (document.body){document.body.className = "bodybg";}
</script>
<script type="text/javascript" src='/screens/sms.js'> </script>

<div class="minHeight">
<div class="fullPage">

<div id="skipNav"><a href="#content" tabindex="1">Skip to content</a></div>
<div class="topLogo">

<!-- Move all navigation to one row below graphic. LKW 
<div class="topLinks">
<ul id="topLinksList">
<li><a href="/patroninfo" tabindex="120">Login</a></li>
<li><a href="/help" tabindex="115">Help</a></li>
<li><a href="#" onClick="window.print();" tabindex="110"><span class="buttonTopLinks"><img src="/screens/ico_printer.gif" alt=""><span class="buttonTopLinksText">Print</span></span></a></li>
<li><a href="/search/" tabindex="105">New Search</a></li>
</ul>
</div>-->

<div class="topLogoSmall">
<!--<a href="/search" tabindex="10"><img src="/screens/UNCWlogo.jpg"  width="483" height="75" alt="Library Catalog Home" title="Library Catalog Home"></a>-->
<a href="https://library.uncw.edu" tabindex="10"><img src="/screens/UNCWlogo.jpg" width="350" height="62"  alt="Library  Home" title="Library Home"></a>

</div>

</div><!--topLogo-->

<!--for text instead of image logo:
<div class="topLogoSmall">
<h2 class="topLogoText">Library Name</h2>
</div>
-->

<div class="topMyLibrary">
<!--<div id="topMyLibraryHeader"><h1>My Library</h1></div>-->

<ul id="toplogoMoreNav">
<!-- Toplogo alt links. -->
<!--<li><a href="/acquire">Suggest a purchase</a></li>
<li><a href="/suggest">Leave Comments</a></li>
-->

<!-- Dropdown menus -->
  
<li id="first"><div><a href="/search/">New Search</a></div>
<ul><li><a href="/search/">Basic Search</a></li>
<li> <a href="/search/X">Advanced Keyword</a></li>
<li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
<li> <a href="/search/t">Title</a></li>
<li> <a href="/search/j">Journal Title</a></li>
<li> <a href="/search/a">Author</a></li>
<li> <a href="/search/d">Subject</a></li>
<li> <a href="/search/c">LC Call Number</a></li>
<li> <a href="/search/l">Local Call Number</a></li>
<li> <a href="/search/g">Government Document Number</a></li>
<li> <a href="/search/m">Dewey Number</a></li>
<li> <a href="/search/i">ISBN/ISSN</a></li>
<li> <a href="/search/o">OCLC # Number</a></li>
<li> <a href="/search/q">Author and Title</a></li></ul></li>

<li><div><a href="">Library Links</a></div>
<ul>
<li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
<li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
<li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
<li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
<li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
<li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
<li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
      
</ul>
</li>
  
<!--<li ><a href="http://library.uncw.edu/" target="_new">Library Home</a></li>-->
  
<li><a href="/patroninfo" >My Library Account</a></li>

<li  id="last">
<div><a href="/help">Help</a></div>
<ul>
<li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
<li><a href="/help#searching">Searching Tips</a></li>
<li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
<li><a href="/help#prefsearch">Saving your searches</a></li>
<li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
<li><a href="/help#renewals">Renewals</a></li>
</ul>
</li>

<!--<li >
<div><a href="#">Features</a></div>
<ul>
            <li><a href="<encore IP/iii/encore>">Search Encore</a></li>
            <li><a href="/iii/calendar/month">Program Calendar</a></li>
            
            <li><a href="/rpro">Research Pro</a></li>
            <li><a href="/search/y">Find e-resources</a></li>
            <li><a href="/illb">Interlibrary Loan</a></li>
</ul>
</li> -->
<!-- End dropdown menus -->    
</ul>
    
    
    
    
    
    
    
    
<!-- Garret: Responsive Dropdown Menu -->        
<div class="dropdown">
  <i onclick="responsiveDropdown()" class="dropbtn fa fa-bars" aria-hidden="true"></i>
  <div id="myDropdown" class="dropdown-content">
    <ul>
        <li>
            <div>
                <h4 onclick="toggle_visibility('newSearchDropDown');">New Search</h4>
                <ul id="newSearchDropDown">
                    <li><a href="/search/">Basic Search</a></li>
                    <li><a href="/search/X">Advanced Keyword</a></li>
    <li><a href="https://course-reserves.libapps.uncw.edu/">Course Reserves</a></li>
                    <li><a href="/search/t">Title</a></li>
                    <li><a href="/search/j">Journal Title</a></li>
                    <li><a href="/search/a">Author</a></li>
                    <li><a href="/search/d">Subject</a></li>
                    <li><a href="/search/c">LC Call Number</a></li>
                    <li><a href="/search/l">Local Call Number</a></li>
                    <li><a href="/search/g">Government Document Number</a></li>
                    <li><a href="/search/m">Dewey Number</a></li>
                    <li><a href="/search/i">ISBN/ISSN</a></li>
                    <li><a href="/search/o">OCLC # Number</a></li>
                    <li><a href="/search/q">Author and Title</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('libraryLinksDropDown');">Library Links</h4>
                <ul id="libraryLinksDropDown">
                    <li><a href="http://library.uncw.edu/" target="_new">UNCW Library Home Page</a></li>
                    <li><a href="http://library.uncw.edu/hours" target="_new">Hours</a></li>
                    <li><a href="http://library.uncw.edu/articles" target="_new">Articles & eResources</a></li>
                    <li><a href="http://library.uncw.edu/reserves" target="_new">Course Reserves</a></li>
                    <li><a href="http://library.uncw.edu/new_titles" target="_new">New Titles</a></li>
                    <li><a href="/screens/catalogs.html">Other Library Catalogs</a></li>
                    <li><a href="http://library.uncw.edu/forms/purchase_suggestion" target="_new">Suggest a purchase</a></li>
                </ul>
            </div>
        </li>

        <li>
            <div>
                <h4 onclick="toggle_visibility('helpDropDown');">Help</h4>
                <ul id="helpDropDown">
                    <li><a href="/help">Help</a></li>
                    <li><a href="http://library.uncw.edu/ask" target="_new">Get Help by Email, Phone, Chat or Text</a></li>
                    <li><a href="/help#searching">Searching Tips</a></li>
                    <li><a href="/help#searchtips">Advanced Keyword Search Tips</a></li>
                    <li><a href="/help#prefsearch">Saving your searches</a></li>
                    <li><a href="http://library.uncw.edu/faq/borrowing_renewing_fines" target="_new">Borrowing, Renewing & Fines</a></li>
                    <li><a href="/help#renewals">Renewals</a></li>
                </ul>
            </div>
        </li>
            <div>
                <!-- Class Needs To Be Added In The Next Line -->       
                <h4 id="closeDropDown" onclick="document.getElementById('myDropdown').style.display = 'none';"><i class="fa fa-times" aria-hidden="true"></i> Close</h4>
            </div>
    </ul>
  </div>
</div>    
    
<div id="myLibraryAccount">
    <a href="/patroninfo" ><i class="dropbtn fa fa-cog" aria-hidden="true"></i></a>  
</div>
    
    
 <!-- Garret: Responsive Dropdown Menu Javascript-->    
<script type="text/javascript">
    
function responsiveDropdown() {
        document.getElementById("myDropdown").style.display = 'block';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    
function toggle_visibility(id) {

   document.getElementById("newSearchDropDown").style.display = 'none';
   document.getElementById("libraryLinksDropDown").style.display = 'none';
   document.getElementById("helpDropDown").style.display = 'none';
    
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
    
</script>
    
    
    
    

<script type="text/javascript"><!--//--><![CDATA[//><!--

//Enable optional dropdown menu for additional navigation options.
if (document.all&&document.getElementById) {
  navRoot = document.getElementById("toplogoMoreNav");
  for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
      node.onmouseover=function() {
        this.className+=" over";
      }
      node.onmouseout=function() {
        this.className=this.className.replace(" over", "");
      }
    }
  }
}

//--><!]]></script>

</div><!--myLibrary-->
<div class="topNavClear"></div>

<!-- Removed. LKW <div class="searchNav">
<script language="JavaScript"> 

function GotoURL() { 
//top.location.href = dl.specializedSearch.options[dl.specializedSearch.selectedIndex].value;
window.location.assign(document.getElementById("specializedSearch").value);
return false;
} 
// 
</script>-->
<!--
<div id="searchNavMenu">
<select name="specializedSearch" id="specializedSearch">
<option selected="selected" value=" ">(More Searches)</option>
<option value="/search/X">Advanced Keyword</option>
<option value="/search/t">Title</option>
<option value="/search/j">Journal Title</option>
<option value="/search/a">Author</option>
<option value="/search/d">Subject</option>
<option value="/search/c">LC Call Number</option>
<option value="/search/l">Local Call Number</option>
<option value="/search/g">Government Document Number</option>
<option value="/search/m">Dewey Number</option>
<option value="/search/i">ISBN/ISSN</option>
<option value="/search/o">OCLC Number</option>
<option value="/search/q">Author and Title</option>
<option value="/search/p">Instructor</option>
<option value="/search/r">Course</option> 
</select>
<input type="image" src="/screens/ico_go_uncw.gif" class="searchNavBut" value="Go" onclick="GotoURL();" >
</div>

</div>--><!--searchNav-->
<div class="clear"></div>
<div class="pageContent"><!-- content container -->
<a name="content" id="content"></a>
<!--end toplogo_s4.html-->

<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev">KEYWORD: (hi)
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&amp;searchscope=4&amp;SORT=D&amp;m=a&amp;m=c&amp;m=h&amp;b=wg&amp;b=wj&amp;b=wr&amp;b=wf&amp;b=wh&amp;b=wb&amp;b=wc&amp;b=we&amp;b=wi&amp;b=wl&amp;b=wn&amp;b=ws&amp;b=wu&amp;b=wv&amp;b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
<noscript>
<h2>Search history function requires JavaScript.</h2>
</noscript>
</form>
</div>

<!-- BEGIN BROWSE SCREEN TABLE -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="browseScreen">
<!-- BEGIN SEARCH WIDGET -->
<div align="center">
<tr align="center" valign="middle">
<td valign="middle" colspan="2">
<div  class="browseSearchtool">
<script type="text/JavaScript">
<!-- Hide the JS
var savedScope;
var savedTag;
var savedSearch;
var sortButtonText = null;
var savedExactSearch = null;
var sortButtonEvent = null;
var sortExactBrowseURL = null;
var sortTypes = new Array();
var sortLabels = new Array();
sortTypes[0] = "t";
sortLabels[0] = "Title";
sortTypes[1] = "a";
sortLabels[1] = "Author";
sortTypes[2] = "c";
sortLabels[2] = "Year";
sortTypes[3] = "r";
sortLabels[3] = "Reverse Year";
sortTypes[4] = "n";
sortLabels[4] = "Call Number";
sortTypes[5] = "m";
sortLabels[5] = "Material Type";
sortLabels[6] = "System Sorted";
sortTypes[6] = "-";
var sortSelectedValue = "6";
var nonSortTags = "XYZprWw"
// Unhide the JS -->
</script>
<form name="searchtool" target="_self" action="/search~S4/" method='GET'>
      <label for="searchtype" style="display:none;">SearchType</label> <select name="searchtype" id="searchtype" onChange="initSort()">
        <option value="X" selected="selected"> KEYWORD</option>
        <option value="t"> TITLE</option>
        <option value="j"> JOURNAL TITLE</option>
        <option value="a"> AUTHOR</option>
        <option value="d"> SUBJECT</option>
        <option value="c"> CALL NO</option>
        <option value="g"> GOVT DOC #</option>
        <option value="l"> LOCAL CALL NO</option>
      </select>
      &nbsp;
      <label for="searcharg" style="display:none;">Search</label><input type="text" name="searcharg" id="searcharg" size="30" onchange='return searchtoolSubmitAction()'maxlength="75" value="hi" />
      &nbsp;

<span id="sort_cell">
</span>

<script type="text/JavaScript">
<!-- Hide the JS
initSort();
// Unhide the JS -->
</script>
      <input type="hidden" name="SORT" value="DZ" /><input type="hidden" name="extended" value="0" />      <input type="submit" name="SUBMIT" value="Search" onclick='return searchtoolSubmitAction();' />
<div>
      <input type="checkbox" name="availlim" value="1"  /> <span class="availLimMessage">Limit search to available items</span><br/>
</div>
<div>
      <input type="hidden" name="searchlimits" value="m=g&b=wa&b=ev" />
      <input type="hidden" name="searchorigarg" value="Xhi&SORT=D" />
</div>
</form>
<div  class="browseSearchtoolMessage">      <i>Limited to:</i> Material Type "VIDEORECORDING" <i> and</i> Location "Videos and Music" <i> or</i>  "eVideos" <i> and</i>  <i>114 results found. </i>Sorted by  <strong>relevance</strong>  | <a href="/search~S4/X?(hi)&searchscope=4&SORT=DX&m=g&b=wa&b=ev">date</a>  | <a href="/search~S4/X?(hi)&searchscope=4&SORT=AX&m=g&b=wa&b=ev">title</a> .
</div>
<div></div></div>

</td>
</tr>
</div>
<!-- END SEARCH WIDGET -->

<!-- BEGIN BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/13%2C114%2C114%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/25%2C114%2C114%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/37%2C114%2C114%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/49%2C114%2C114%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/61%2C114%2C114%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/73%2C114%2C114%2CB/browse">7</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/85%2C114%2C114%2CB/browse">8</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/97%2C114%2C114%2CB/browse">9</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/109%2C114%2C114%2CB/browse">10</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/13%2C114%2C114%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BROWSE PAGER -->

<!-- BEGIN BROWSE SCREEN LEFT CELL: BROWSELIST/BRIEFCIT AREA -->
<tr><td>
<table border="0" cellpadding="0" width="100%">
<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<form method="POST" action="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/browse" name="export_form" id="export_form" >
<input type="hidden" name="jumpref" value="X%28hi%29">
<input type="hidden" id="save_func" name="save_func" value=""/>
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn1' id='save_page_btn1' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
<span name='mylist_btn1' id='mylist_btn1' style='visibility: visible' ><a href="#" onclick="save_to_mylist();">
<span class="button"><img src="/screens/ico_saveMylists.gif" alt=""><span class="buttonText">Save Marked to My Lists</span></span></a>
</span>
</td></tr>


</td>
</tr>
<tr  class="browseHeader">
<td align="center" class="browseHeaderData">
KEYWORDS (1-12 of 114)
</td>
</tr>
<!-- Right Result rank 1 -->
<tr  class="browseSuperEntry browseEntryRelGroup1"><td colspan="1"><img src="/screens/relevance5.gif" alt="Most relevant">&nbsp;<h1 class="browseSuperEntryTitle">Most relevant titles</h1>&nbsp;entries 1-4</td></tr>
<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_1'></a> 1<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3010453" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=100057383&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=100057383&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&1%2C1%2C">Hi-Tech Tattoo For Your Workouts</a></h2>
<br >
<br >
New York, N.Y. : Infobase, [2014], c2013
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_2'></a> 2<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2134978" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=501029231&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=501029231&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&2%2C2%2C">Anyay hi anyay</a></h2>
<br >
<br >
Mumbai, India : Star Entertainment, [2000?]
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Recreational DVDs 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/cPN1997.H5+A59+2000/cpn+1997+h5+a59+2000/-3,-1,,E/browse">PN1997.H5 A59 2000</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_3'></a> 3<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3255601" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=677927371&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=677927371&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&3%2C3%2C">Delegate to Congress Joseph R. Farrington (R-HI) (1953)</a></h2>
<br >
<br >
[United States] : Columbia Broadcasting System, 1953
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_4'></a> 4<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3255860" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=677927577&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=677927577&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&4%2C4%2C">Delegate to Congress Joseph R. Farrington (R-HI) (1952)</a></h2>
<br >
<br >
[United States] : Columbia Broadcasting System, 1952
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!-- Right Result rank 2 -->
<tr  class="browseSuperEntry browseEntryRelGroup2"><td colspan="1"><img src="/screens/relevance4.gif" alt="Highly relevant">&nbsp;<h1 class="browseSuperEntryTitle">Highly relevant titles</h1>&nbsp;entries 5-9</td></tr>
<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_5'></a> 5<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3236343" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=4434&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=4434&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&5%2C5%2C">MIRA Rehab a tale of hi-tech physiotherapy</a></h2>
<br >
Mihaiu, Cosmin, (MIRA Rehab, UK)<br >
London : Henry Stewart Talks, 2017
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_6'></a> 6<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b2468125" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=1586555200/index.html&client=uncwh&type=rn12&upc=631595041088&oclc=59225910&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=1586555200/SC.GIF&client=uncwh&upc=631595041088&oclc=59225910&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&6%2C6%2C">Chuyuso sŭpkyŏk sakŏn</a></h2>
<br >
<br >
[New York] : Tokyo Shock, 2004
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Recreational DVDs 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/cPN1997.K6+A882+2004/cpn+1997+k6+a882+2004/-3,-1,,E/browse">PN1997.K6 A882 2004</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_7'></a> 7<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b1880912" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=0767855876/index.html&client=uncwh&type=rn12&upc=043396055001&oclc=46648042&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=0767855876/SC.GIF&client=uncwh&upc=043396055001&oclc=46648042&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&7%2C7%2C">Whipped</a></h2>
<br >
<br >
Culver City, Calif. : Columbia TriStar Home Video, c2000
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Recreational DVDs 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/cPN1995.9.C55+W556+2000/cpn+1995.9+c55+w556+2000/-3,-1,,E/browse">PN1995.9.C55 W556 2000</a> <!-- field v --><!-- field # -->c.2</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_8'></a> 8<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b1837503" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=1565013913/index.html&client=uncwh&type=rn12&upc=&oclc=33880289&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=1565013913/SC.GIF&client=uncwh&upc=&oclc=33880289&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&8%2C8%2C">Steve Allen "Hi-ho Steverino"</a></h2>
<br >
<br >
New York, NY : A&E Home Video, c1994
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">
<table id='item_detail' width="100%" border="0" cellspacing="1" cellpadding="0" class="bibItems">
<tr  class="bibItemsHeader">
<th width="33%"  class="bibItemsHeader">
LOCATION
</th>
<th width="43%"  class="bibItemsHeader">
CALL #
</th>
<th width="24%"  class="bibItemsHeader">
STATUS
</th>
</tr>
<tr  class="bibItemsEntry">

<td width="33%" ><!-- field 1 -->&nbsp;Documentary VHS 
</td>
<td width="43%" ><!-- field C -->&nbsp;<a href="/search~S4?/cPN2287.A443+S748+1994/cpn+2287+a443+s748+1994/-3,-1,,E/browse">PN2287.A443 S748 1994</a> <!-- field v --><!-- field # -->&nbsp;</td>
<td width="24%" ><!-- field % -->&nbsp;AVAILABLE </td></tr>
</table>

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_9'></a> 9<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3254163" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=1014206976&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=1014206976&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&9%2C9%2C">Little sister what colour flower are you wearing in your hair?</a></h2>
<br >
<br >
London, England : Arts Council England, 1993
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!-- Right Result rank 3 -->
<tr  class="browseSuperEntry browseEntryRelGroup3"><td colspan="1"><img src="/screens/relevance3.gif" alt="Very relevant">&nbsp;<h1 class="browseSuperEntryTitle">Very relevant titles</h1>&nbsp;entries 10-114</td></tr>
<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_10'></a> 10<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3346834" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
&nbsp;</div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&10%2C10%2C">Unspoken</a></h2>
<br >
<br >
Video Project, 2018
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_11'></a> 11<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3217403" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
<a href="https://www.syndetics.com/index.aspx?isbn=/index.html&client=uncwh&type=rn12&upc=&oclc=1000151270&issn=" target="_parent"><img src="https://www.syndetics.com/index.aspx?isbn=/SC.GIF&client=uncwh&upc=&oclc=1000151270&issn=" border="0" alt="Book Cover"></a></div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&11%2C11%2C">Military Medicine Beyond the Battle Field</a></h2>
<br >
<br >
[Place of publication not identified] :  PBS,  [2016]
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<!--briefcit.html -->
<!-- Rel 2009B Example Set -->
<!-- This File Last Changed: 15 Oct 2009 -->
<tr>
<td class="briefcitCell">

<div class="briefcitRow">

<div class="briefcitLeft">
<div class="briefcitEntryNum">
<a name='anchor_12'></a> 12<!--this is customized <screens/briefcit.html>-->
</div>
<div class="briefcitMark">
<input type="checkbox" 
name="save" value="b3341760" >
<!--{orders}-->
</div>

<div class="briefcitMedia">
 <img src="/screens/media_projectedmedia_video.gif" alt="VIDEORECORDING"></div>

</div>


<div class="briefcitJacket">
&nbsp;</div>

<div class="briefcitDetail">

<div class="briefcitDetailMain">

<!--{nohitmsg}-->
<h2 class="briefcitTitle">
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/frameset&FF=X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&12%2C12%2C">Nazi Mega Weapons: Episode 3 - V2 Rocket</a></h2>
<br >
<br >
[San Francisco, California, USA] : Kanopy Streaming, 2016
  <!--{year}-->



<div ="briefcitBookcartMark">
 <!--{mark}-->
 <!--comment-->
</div>

<!--The Request feature was commented out here.  It is available with the full bib display. dmp 5/18/2011-->
<div class="briefcitRequest">
    <!--{request}-->
</div>
<span class="briefcitStatus">
</span>
<!-- the following DIV was commented out to collapse line spacing. dmp 8/11/2011 -->
<!-- re-instated for per librarian request. dmp  9/22/2011 -->
<!--commented out again to collapse line spacing. dmp 12/08/2011 -->
<!--<div class="briefcitActions">-->
  <!--{856link}-->
  <!--{ifmulti856}-->
  <!--&nbsp;-->
  <!--{more856}-->
  <!--{xif}-->
  <!--{962link}-->
  <!--{ifmulti962}-->
   <!--&nbsp;-->
  <!--{more962}-->
  <!--{xif}-->
  <!--</div>-->

</div>

<div class="briefcitItems">
    <!--<div class="briefcitItemsHeader"><h2>Copies</h2></div>-->
<div class="briefcitItemsMain">

</div>
</div>

</div>





<div class="briefcitClear"></div>

</div>
</td>
</tr>

<script>
<!-- The following lines added 6/6/2018-->

$('.bibItemsEntry').each(function(i, el) {
  if (String( $(el).children().first().text()).indexOf('Ed Lab') >= 0 ) {
    if (String($(el).children().last().text()).indexOf('(WCE ONLY)') < 0 ) {
        $(el).children().last().append(' (WCE ONLY)')
    }
  }
})
</script>

<tr align="CENTER" valign="MIDDLE">
<td colspan="5"  class="browseSaveJump" width="82%">
<a href="#" onclick="process_save(0);" style="text-decoration:none">
<span class="button"><img src="/screens/addMarked-list.gif" alt=""><span class="buttonText">Add Marked to Quick List</span></span></a>
<span name='save_page_btn2' id='save_page_btn2' style='visibility: visible' ><a href="#" onclick="process_save(1);" style="text-decoration:none">
<span class="button"><img src="/screens/ico_list_add.gif" alt=""><span class="buttonText">Add All On Page to Quick List</span></span></a>
</span>
</form>

<form action="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/browse/indexsort=D" method="POST">
<input type="HIDDEN" name="jumpref" value="X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/1%2C114%2C114%2CB/browse">
<script type="text/JavaScript">

function iiiDoSubmit_1()
{
//getFormHandleForm() is in common.js
var obj = getFormHandleForm(1);
obj.submit();
}
</script>
<input type="hidden" id="iiiFormHandle_1"/>
<a href="#" onclick="iiiDoSubmit_1();"><div onmousedown="this.className='pressedState';" onmouseout="this.className='';" onmouseup="this.className='';"><div class="buttonSpriteDiv"><span class="buttonSpriteSpan1"><span class="buttonSpriteSpan2">Locate in results</span></span></div></div></a>



<script type="text/JavaScript">

//getFormHandleForm() is in common.js
var evtobj = getFormHandleForm(1);
if (document.layers)
    {
    document.captureEvents(Event.KEYUP);
    }
document.onkeyup = function(evt)
{
if (!evt) evt = window.event;
var keyCode;
if (evt.which) keyCode = evt.which;
else if (evt.keyCode) keyCode = evt.keyCode;
var targ;
if (evt.target) targ = evt.target;
else if (evt.srcElement) targ = evt.srcElement;
if (targ.nodeType == 3) //for Safari bug
    targ = targ.parentNode;
if (targ.form)
    {
    targ = targ.form;
    //alert('targ='+targ+'  evtobj='+evtobj);
    if (keyCode == 13 && targ == evtobj)
        {
        iiiDoSubmit_1();
        }
    }
};

</script>
<input type="TEXT" name="jumpto" value="114" size="3" maxlength="3">
</form>

</td></tr>


</td>
</tr>
</table>
<!-- END BROWSELIST/BRIEFCIT AREA -->
</td>
<!-- END BROWSE SCREEN LEFT CELL -->

</tr>

<!-- BEGIN BOTTOM BROWSE PAGER -->
<!-- begin page widgit -->
<tr  class="browsePager"><td align="center"  class="browsePager" colspan="5">

Result Page&nbsp;&nbsp;&nbsp;<strong>1</strong>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/13%2C114%2C114%2CB/browse">2</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/25%2C114%2C114%2CB/browse">3</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/37%2C114%2C114%2CB/browse">4</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/49%2C114%2C114%2CB/browse">5</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/61%2C114%2C114%2CB/browse">6</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/73%2C114%2C114%2CB/browse">7</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/85%2C114%2C114%2CB/browse">8</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/97%2C114%2C114%2CB/browse">9</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/109%2C114%2C114%2CB/browse">10</a>
<a href="/search~S4?/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev/X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)/13%2C114%2C114%2CB/browse">Next</a>
<!-- end page widgit -->
</td>
</tr>
<!-- END BOTTOM BROWSE PAGER -->
</table>
<!-- END BROWSE SCREEN TABLE -->
<div align="center" class="navigationRow">
<form>
<a href="/search~S4/X?NOSRCH=(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&SUBKEY=(hi)"><span class="button"><img src="/screens/ico_magnifyingglass_modify.gif" alt=""><span class="buttonText">Modify Search</span></span></a>
<select name=HISTORY onChange="onSelectChange(this, '~S4')"><option value="">(Search History)</option>
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev">KEYWORD: (hi)
<OPTION VALUE="X(hi)&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&amp;searchscope=4&amp;SORT=D&amp;m=a&amp;m=c&amp;m=h&amp;b=wg&amp;b=wj&amp;b=wr&amp;b=wf&amp;b=wh&amp;b=wb&amp;b=wc&amp;b=we&amp;b=wi&amp;b=wl&amp;b=wn&amp;b=ws&amp;b=wu&amp;b=wv&amp;b=eb">KEYWORD: (hi)
<OPTION VALUE="X(hi)&SORT=D&b=wd&searchscope=4">KEYWORD: (hi)
<option value="+/search~S4/X?(hi)&searchscope=4&SORT=D&m=g&b=wa&b=ev&clear_history">(Clear Search History)</option>
<option value="+/">(End Search Session)</option>
</select>
</form>
</div>


<!-- begin botlogo.html file -->
<!-- Rel 2009B Example Set -->
<!-- Updated: Sept 2009 -->
</div><!-- pageContent  -->
<div style="clear:both"></div>
</div><!-- fullPage -->
</div><!-- min-height -->

<!--import jquery code-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">

$ ("table.bibLinks a").on('click', function(){

                var analytics_bibLinks = $(this).text();

                _gaq.push(['_trackEvent', "Bib Records", 'Clicked BibLink', analytics_bibLinks]);

});

</script>

<!--begin google analytics tracking code-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5263020-17', 'uncw.edu');
  ga('send', 'pageview');

</script>

<!--end google analytics tracking code-->

<!--The following code opens a span, hides what is in that span (the Innovative credit statement), but never closes the span.  
The InnovativeCredit span is now included in this un-displayed span and is invisible.-->
<span style="display:none">

<!-- end botlogo.html file -->

</body>
</html>
`
    expect(extract(html)).toEqual(bundle)
  })
})
