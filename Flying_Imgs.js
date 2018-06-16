
var timeout = 40;

var grphcs = new Array()

Image0 = new Image(); Image0.src = grphcs[0] = "Images/Coming_SoonZR.png";
Image1 = new Image(); Image1.src = grphcs[1] = "Images/Coming_SoonZG.png";
Image2 = new Image(); Image2.src = grphcs[2] = "Images/Coming_SoonZB.png";
Image3 = new Image(); Image3.src = grphcs[3] = "Images/Coming_SoonZBr.png";
Image4 = new Image(); Image4.src = grphcs[4] = "Images/Coming_SoonZGy.png"; 
Image5 = new Image(); Image5.src = grphcs[5] = "Images/Coming_SoonZYl.png";

/*
var grphcs = new Array(
"Images/Coming_SoonСR.png",
"Images/Coming_SoonСG.png";
"Images/Coming_SoonСB.png";
"Images/Coming_SoonCBr.png";
"Images/Coming_SoonCGy.png"; 
"Images/Coming_SoonCY.png";
);*/

// alert(grphcs.length);

Amount=1; // Количество элементов на экране, выдаются Amount штук из диапазона [1, graphcs] на всю работу.

Ypos  = new Array(); 
Xpos  = new Array(); 
Speed = new Array(); 
Step  = new Array(); 
Cstep = new Array(); 
ns    = (document.layers)?1:0; // Netscape
ns6   = (document.getElementById&&!document.all)?1:0; // Netscape 6

//alert("Netscape=" + ns + " Netscape6=" + ns6);

if (ns) // Это Netscape! -- у него тег Layer
{ 
  for (i = 0; i < Amount; i++)
  { 
    var P = Math.floor(Math.random() * grphcs.length); 
//  alert("P=" + P);
    rndPic = grphcs[P]; // Произвольное изображение из набора
    document.write("<LAYER id = 'sn" + i + "' LEFT=0 TOP=0><img src=" + rndPic + "></LAYER>"); 
  } 
} 
else
{ 
  document.write('<div style="position:absolute; top:0px; left:0px"><div style="position:relative">'); 
  for (i = 0; i < Amount; i++)
  { 
    var P = Math.floor(Math.random() * grphcs.length); 
//  alert("P="+P);
    rndPic = grphcs[Math.floor(Math.random() * grphcs.length)]; 
//alert(rndPic);
    document.write('<img id="si' + i + '" src="' + rndPic + '" style="position:absolute; top:0px; left:0px">'); 
  } 
  document.write('</div></div>'); 
} 

WinHeight = (ns||ns6)?window.innerHeight:window.document.body.clientHeight; 
WinWidth  = (ns||ns6)?window.innerWidth-70:window.document.body.clientWidth; 

for (i=0; i < Amount; i++)
{ 
  Ypos[i]  = Math.round(Math.random() * WinHeight); 
  Xpos[i]  = Math.round(Math.random() * WinWidth); 
  Speed[i] = Math.random() * 5 +3; // Скрость движения 5+3
  Cstep[i] = 1; // 1
  Step[i]  = Math.random() * 0.1 + 0.05; //0.15
} 

// =====================================================================================

function fall()
{
  var WinHeight	= (ns||ns6)?window.innerHeight:  window.document.body.clientHeight; 
  var WinWidth	= (ns||ns6)?window.innerWidth-70:window.document.body.clientWidth; 
  var hscrll	= (ns||ns6)?window.pageYOffset:  document.body.scrollTop; 
  var wscrll	= (ns||ns6)?window.pageXOffset:  document.body.scrollLeft; 

  for (i=0; i < Amount; i++)
  {
    sy = Speed[i] * Math.sin(90 * Math.PI/180); 
    sx = Speed[i] * Math.cos(Cstep[i]); 
    Ypos[i] += sy; 
    Xpos[i] += sx; 

    if (Ypos[i] > WinHeight)
    {
      Ypos[i]  = -60; // -60
      Xpos[i]  = Math.round(Math.random() * WinWidth); 
      Speed[i] = Math.random() * 5 + 3; // 5, 3
    } 

    if (ns)
    { 
      document.layers['sn' + i].left = Xpos[i]; 
      document.layers['sn' + i].top  = Ypos[i] + hscrll; 
    } 
    else
    if (ns6)
    { 
      document.getElementById("si" + i).style.left = Math.min(WinWidth,Xpos[i]); 
      document.getElementById("si" + i).style.top  = Ypos[i] + hscrll; 
    } 
    else
    { 
      eval("document.all.si" + i).style.left = Xpos[i]; 
      eval("document.all.si" + i).style.top  = Ypos[i] + hscrll; 
    } 
    Cstep[i] += Step[i]; 
  } 

  setTimeout('fall()', timeout);
} 

// =====================================================================================