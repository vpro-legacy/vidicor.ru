//alert("******************************* Clients_Org.js *******************************");

var sliderwidth  = '50%';	// Ширина поля прокрутки
var sliderheight = 100;		// Высота поля прокрутки
var slidespeed   = 20;		// СКОРОСТЬ ПРОКРУТКИ

try { document.constructor.prototype.__defineGetter__('all', function() { return document.getElementsByTagName('*'); } ); }

catch (err) {};

//Specify the slider's images
var slide = '<nobr>';
  slide += ' <A href="http://rt.ru/">			<img src="http://vidicor.ru/images/rostelecom.jpg" height="80" title="ОАО <Ростелеком>">	</a>';
  slide += ' <a href="http://itar-tass.com">		<img src="http://vidicor.ru/images/itar-tass_120x60.JPG" height="80" title="ИТАР-ТАСС">	</a>';
  slide += ' <a href="http://www.interfax.ru/">		<img src="http://vidicor.ru/images/interfax.gif" height="80" title="Интерфакс, Интерфакс-Урал">	</a>';
  slide += ' <a href="http://rosnano.ru">		<img src="http://vidicor.ru/images/logo-rosnano.jpg" height="80" title="Роснано">	</a>';
  slide += ' <a href="http://formika.ru/">		<img src="http://vidicor.ru/images/formika.png" height="80" title="Формика Экспо" border="1">	</a>';
  slide += ' <A href="http://lbz.ru/news/videoafisha-izdatelstva-binom-laboratorija-znanij-92">	<img src="http://metodist.lbz.ru/images/main/ny.jpg" height="80" title="Издательство «Бином. Лаборатория знаний»">	</a>';
//  slide += ' <A href="http://sgaf.ru">			<img src="http://filarmonia.e-burg.ru/_makeup/logo.gif" height="80" title="Свердловская государственная академическая филармония" border="0"/>	</a>';
  slide += ' <A href="http://video-online.su/">		<img src="http://vidicor.ru/images/smartservices.png" height="80" title="Смарт Сервис" border="0"/>	</a>';
  slide += ' <A href="http://www.ras.ru/index.aspx">	<img src="http://www.ras.ru/images/ban2.gif" height="80" title="Российская академия наук" border="0">	</a>';
  slide += ' <a href="http://www.msu.ru/news/pub-lectures/">	<img src="http://www.msu.ru/img/msulogo.gif" height="80"title="Московский государственный унимерситет им. М.В.Ломоносова">	</a>';
  slide += ' <a href="http://elementy.ru/">		<img src="http://elementy.ru/images/eltdesign/title.gif" height="80" title="ЭЛЕМЕНТЫ большой науки">	</a>';
  slide += ' <a href="http://bonum.info">		<img src="http://vidicor.ru/images/Bonum.jpg" height="80" title="НПРЦ Бонум">	</a>';
  slide += ' <a href="http://www.plasticcosmet.ru/">	<img src="http://vidicor.ru/images/IPSC.jpg" height="80"title="Институт пластической хирургии и косметологии МЗРФ">	</a>';
  slide += ' <a href="http://www.linerolight.co.il">	<img src="http://linerolight.co.il/wp-content/uploads/2014/01/linerolight-logo.png" height="80" title="Linero Light">	</a>';
  slide += ' <a href="http://www.ach.gov.ru">		<img src="http://vidicor.ru/images/schet_palata.jpg" height="80" title="Счетная палата Российской Федерации">	</a>';
  slide += ' <a href="http://www.scat-tv.ru">		<img src="http://vidicor.ru/images/skat.png" height="80"title="Телерадиокомпания `СКАТ`, г.Самара">	</a>';
  slide += ' <a href="http://www.er-tv.ru/">		<img src="http://vidicor.ru/images/er-tv.png" height="80"title="Государственный телеканал Красноярского края `Енисей-Регион`">	</a>';
  slide += ' <a href="http://edinros.ru"> 		<img src="http://vidicor.ru/images/edinros.jpg" height="80" title="ЦИК политической партии `Единая Россия`">	</a>';
  slide += ' <a href="http://iblf.ru"> 			<img src="http://eng.iblf.ru/images/logo/iblf-logo.gif" height="80" title="Российское партнерство по развитию ответственного бизнеса">	</a>';
  slide += ' <a href="http://ru.intel.com/20years/"> 	<img src="http://www.intel.com/sites/sitewide/HAT/40recode/pix/main-logo.png" height="80" title="--- Intel ---">	</a>';
  slide += ' <a href="http://www.npo.usm.ru/usm/main/main.do"> <img src="http://vidicor.ru/images/usm.gif" height="80" title="НПО Уралсистем">	</a>';
  slide += ' <a href="http://www.avalcom.ru/?id=161">	<img src="http://vidicor.ru/images/NMC.gif" height="80" title="Нерюнгринская мониторинговая компания"> </a>';
  slide += ' <a href="http://www.ntiim.ru">		<img src="http://vidicor.ru/images/ntiim.png" height="80" title="Нижнетагильский институт испытания металлов"> </a>';
  slide += ' <a href="http://www.svoblsud.ru">		<img src="http://vidicor.ru/images/svoblsud.png" height="80" title="Свердловский областной суд"> </a>';
  slide += ' <a href="http://www.relero.ru/">		<img src="http://vidicor.ru/images/ReleroS3.jpg" height="80" title="Омский радиозавод им.А.С.Попова">	</a>';
  slide += ' <a href="http://rusat.ru/main.html?he_id=670">	<img src="http://vidicor.ru/images/intechComm.gif" height="80" title="InTech Communications">	</a>';
  slide += ' <a href="http://www.alconlabs.com">		<img src="http://vidicor.ru/images/alconlabs.jpg" height="80" title="AlconLabs -- A global healthcare company">	</a>';
  slide += ' <a href="http://www.amik.ru/"> 		<img src="http://vidicor.ru/images/kvn.jpg" height="80" title="Международный союз КВН">	</a>';
  slide += ' <a href="http://www.uralspas.ru/">		<img src="http://vidicor.ru/images/VGSChUrala.jpg" height="80" title="Военизированная горно-спасательная часть Урала">	</a>';
  slide += ' <a href="http://www.gorodfm.ru">		<img src="http://vidicor.ru/images/Studio_Ekat.jpg" height="80" title="Радио Екатеринбурга `Студия Город` -- передача из студии в РПЦ ведется через систему `Vidicor`">	</a>';
  slide += ' <a href="http://www.ekburg.ru/softmajor2.php">	<img src="http://vidicor.ru/images/e02.gif" height="80" title="МУ `Столица Урала`">	</a>';
  slide += ' <a href="http://www.nobelbiocare.com">	<img src="http://www1.nobelbiocare.com/Images/nobel_logo_tcm55-13848.jpg" height="80" title="Nobel Biocare">	</a>';
  slide += ' <a href="http://www.divs.ru/">		<img src="http://vidicor.ru/images/divs.gif" height="80" title="Дворец игровых видов спорта `Уралочка`"> </a>';
  slide += ' <A href="http://www.tpprf.ru">		<img src="http://vidicor.ru/images/TPPRF.png" height="80" title="Торгово-промышленная палата Российской федерации">	</a>';
  slide += ' <a href="http://wwintellect.ru">		<img src="http://vidicor.ru/images/Intellect_ross.jpg" height="80" title="Всемирный форум "Интеллектуальная Россия"">	</a>';
  slide += ' <a href="http://www.rsvpu.ru/">		<img src="http://urorao.rsvpu.ru/images/rsvpu.jpg" height="80" title="Росийский государственный профессионально-педагогический университет">	</a>';
  slide += ' <a href="http://tass-ural.ru/press/video">	<img src="http://vidicor.ru/images/tass_100.gif" height="80" title="ИТАР-ТАСС-Урал">	</a>';
  slide += ' <a href="http://guraran.ru/">		<img src="http://guraran.ru/images/logo.gif" height="80" title="Российская академия ракетных и артиллерийских наук (РАРАН) ">	</a>';
  slide += ' <a href="http://www.bashkirenergo.ru/">	<img src="http://vidicor.ru/images/BashkirEnergo.png" height="80" title="ОАО БашкирЭнерго">	</a>';
  slide += ' <a href="http://www.energo.grodno.by/">	<img src="http://www.energo.grodno.by/sites/default/files/ge_theme_logo.gif" height="80" title="ГродноЭнерго">	</a>';
  slide += ' <A href="http://www.eyeclinic.ru">		<img src="http://vidicor.ru/images/eyeclinic.png" height="80" title="МНТК «Микрохирургия глаза», Екатеринбург">	</a>';
slide += "</nobr>";
//alert(slide);

//if (document.all)
{
  //dynamically write out the marquee tag
  // Тег <marquee> создает бегущую строку на странице.
  document.write('<marquee id="ieslider" scrollAmount = slidespeed style="width:' + sliderwidth + 'px"></marquee>');
  var el = document.getElementById('ieslider');
  if (el) el.innerHTML = slide;

  //stop marquee when mouse is over it
  document.getElementById('ieslider').onmouseover=new Function("document.getElementById('ieslider').scrollAmount = 0");
  //re-enable marquee when mouse is out;
  document.getElementById('ieslider').onmouseout=new Function("if (document.readyState=='complete') document.getElementById('ieslider').scrollAmount = slidespeed");
}


//regenerate2();


function regenerate()
{
window.location.reload()
}


function regenerate2()
{
  if (document.layers)
  {
    document.ns_slider01.visibility = "show";
    setTimeout("window.onresize=regenerate", 450);
    intializeslide();
  }
  //if (document.all)
  ieslider.scrollAmount = slidespeed;
}


//NS specific function for initializing slider upon page load
function intializeslide()
{
  document.ns_slider01.document.ns_slider02. document.write('<nobr>' + slide + '</nobr>');
  document.ns_slider01.document.ns_slider02.document.close();
  thelength=document.ns_slider01. document.ns_slider02.document.width;
  scrollslide();
}


//NS specific function for sliding slideshow
function scrollslide()
{
  if (document.getElementById('ns_slider01').document.getElementById('ns_slider02').top >= thelength*(-1))
  {
    document.getElementById('ns_slider01').document.getElementById('ns_slider02').top-=slidespeed;
    setTimeout("scrollslide()", 100);
  }
  else
  {
    document.getElementById('ns_slider01').document.getElementById('ns_slider02').top=sliderwidth;
    scrollslide();
  }
}