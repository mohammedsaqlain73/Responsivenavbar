we are first creating for mobile phones
-----------------------------------------------------------------------------------------------------------
for mobile devices ui is saqlain on the left and 3 line toggle om the right if you click the toggle opens side
bar having saqlain on top left and cross on right below it navbar items and theme chnage button
-----------------------------------------------------------------------------------------------------------
## 1.take a header tag.
## 2.under it create create a div named container.
## 3.inside that add logo or name using <a> tag which is on left in ui.
## 4.under same container create a div called navbar
## 5.under that navbar div create another div called navbar-top
## 6.The navbar top has  name or logo  and a button to close the side bar or overlay.
## 7.under the same navbar but outside of the navbar top create a ul having list items.
## 8.then outside of the ul tag under the same navbar create a button to change the theme.
## 9.then outside the navbar create a button toggle button to open overlay.
## 10. crate a empty div after it which will be overlay surface.
for all button we have used same class name btn so that we can style all button once.
-------------------------------------------------------------------------------------------------------------------------
## CSS
## BEFORE WE DIVE INTO THE CSS FIRST CLEAR THE CONCEPT OF BOX-SIZING.
BY DEFAULT IN CS WIDTH AND HEIGHT OF AN ELEMENT IN CSS CALCULATED AS
ACTUAL WIDTH:GIVEN WIDTH+PADDING+BORDER
ACTUAL HEIGHT:GIVENHEIGHT+PADDDING+BORDER
SO IF ADD WIDTH AND HEIGHT TO A ELEMENT IT WILL INTERNALLY ADD EXTRA THINGS AS ABOVE APPEARS MOREE THAN OF GIVEN.
## TO AVOID IT WE USE BOX-SIZING= BORDER-BOX
------------------------------------------------------------------------------------------------------------------------
## 1.BY DEFAULT THERE ARE BORDER MARGIN FIRST NULLIFY IT PRESENT EVERWHERE.
*, *::BEFORE,*::AFTER{
  MARGIN:0;
  PADDING:0;
  BOX-SIZING:BORDER-BOX;
}
## 2.remove the default points of ul list and border and background of button as well as button is inline element so start
## just after the nav top salqain make it block


 and anchor tag a {
  color:inherit; /*otherwise bydefault blue */
  text-decoration: none;
}
## 3. make for btn class
make font-size of button,then its font weight,then border:2px solid #fdff00; bg-color:black and text-color: #fdff00
the max-width is the max content of button. then on hover chanfe the color
## 4. then chnage the logo size
## 5.separate and color the header part.
position:absolute;//reference is main body not any element
top:0;
left:0;
bg-color:
width:100%
padding-block:20px
z-index:4(above the rest)
## 6.the logo and the navbar and closebtn arrage in col wise possible by using flex in header conatiner navbar top close not visibile due to black same for toggler navbar
## 7.we are making for the mobile so navbar should be close and on click the toggler it will open.
how to hide it.we can hide it with sending it -300x and visibility hidden
## 8.the navbar is hidden but we have to fix that navbar navbar-top left logo and right close.below it ul then li items downward and last change color
## 9.overlay is to fixed next its starting opacity is 0 then click goes to active state opacity becomes 0.8
------------------------------------------------------------------------------------------------------------------------------------
OVERALL-:
1. IN CSS FIRST MAKE THE HEADEDR
## .header{
 position:absolute;
  top:0;
  left:0;
  background-color:#000;
  width:100%;
  padding-block: 20px;
  z-index:4; ## TO PLACE ABOVE SURFACE
}
2. THEN THE CONTENTS OF THE HEADER ARE MADE TO APPEAR IN THE COLUMN MANNER USING THE FLEX APPLIED TO THE HEADERE CONATAINER.
 ## .header .container {
  display:flex;
  justify-content: space-around;
  align-items:center;
}
3. since i am making for mobile phones first navbar should be appear as sidebar.
## .navbar {
  position:fixed;
  top:0;
  left:-300px;/*making it move left 300px -ve*/
  color:#fdff00;
  background-color:#1f2329;
  max-width:300px;/*navbar width is 300px but not visible now as in left*/
  width:100%;
  height:100vh;
  padding:30px;
  padding-block-end:40px;
  display:flex;
  flex-direction:column;/*one below another*/
  gap:30px;
  z-index:2;/*not above the header*/
  visibility:hidden;
}
3. modifying the navbar contents(navbar top item logo and close should be side by side)
## .navbar-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
4. list item navbar items one below another
## .navbar-list{
  display:flex;
  flex-direction:column;/*one below another*/
  gap:15px;
}
5. most important is the overlay it is a black transparent area which is always 0% blur but when side navbar is open it is visible
a transparent screen above the entire main contents on it 300px is our sidebar
## .overlay {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background-color:#000;
  opacity:0;
  pointer-events:none;/*overlay is above but not visible due to 0 opacity.if we try to hover or click we will over overlay behind it
  page so it will prevent click so it is made so*/
}
to make it visible
## .navbar.active {
  visibility: visible;
  transform:translate(300px);
}
## .overlay.active{
  opacity:0.8;
  pointer-events:all;/*when it active behind it all become inactive only it is present*/
}
7. if someone click on toggler it actives sidenavbar and overlay and when someone click on overlay or the close button it closes
for this i have given  (data-navbar-toggler) to 3 of them.
i will add  event called click on three of them and a callbacklfunction.
to add  event i get the reference using
## document.querySelectorAll("[data-navbar-toggler]"); bcz of same property.
it return a array of elements having this name and using forEach adding event
## navTogglerElements.forEach( (btn) => {
  btn.addEventListener('click', handleToggleNavbar);
});
## this call back function will add or remove active class from navbar and overlay
function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}
----------------------------------------------------------------------------------------------------
1. first for 575px,then 768px,992px,1200px and then 1400px
  I.fix the conatiner
