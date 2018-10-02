$(document).ready(onload);

function onload() {
	var content = $('#content').detach();
	$("body").append(getTemplateHtmlString());;
	$('#content_temp').replaceWith(content);
}

function getTemplateHtmlString() {
	return "\
	<div id='container'>\
		<div id='header'>\
			<div id='header_logo'/>\
			<div id='header_title'>\
				<h1>Информационная поддержка<br>жизненного цикла изделия</h1>\
				<h3>Информационная система</h3>\
			</div>\
		</div>\
		\
		<div class='site-navigation'>\
		<ul >\
		   <li class='firstelement'><a href='../main/index.html' >Главная</a></li>\
		   <li><a href='../articles/index.html' >ИПИ в Нижегородской области</a></li>\
		   <li><a>Лекции</a> \
			<ul id='ulik'>\
				<li><a href=../lections/lection1.htm>1.Концепция CALS-технологий (ИПИ)</a></li> \
				<li><a href=../lections/lection2.htm>2.Планирование ресурсов предприятия (Enterprise Resource Planning - ERP)</a></li> \
				<li><a href=../lections/lection3.htm>3.Управление взаимоотношениями с клиентами (Customer Relationship Management - CRM)</a></li> \
				<li><a href=../lections/lection4.htm>4.CAD/CAM/CAE</a> \
				<li><a href=../lections/lection5.htm>5.Технология управления данными об изделии (PDM)</a></li> \
				<li><a href=../lections/lection6.htm>6.Стандарт STEP</a></li> \
				<li><a href=../lections/lection7.htm>7.Язык EXPRESS</a></li> \
				<li><a href=../lections/lection8.htm>8.Методы реализации STEP</a></li> \
				<li><a href=../lections/lection9.htm>9.Стандарт обмена данными STEP</a></li> \
				<li><a href=../lections/lection10.htm>10.Интегрированная логистическая поддержка (ИЛП)</a></li> \
				<li><a href=../lections/lection11.htm>11.Интерактивные электронные технические руководства (ИЭТР)</a></li> \
				<li><a href=../lections/lection13.htm>12.Анализ состояния и развития CALS-технологий в мире и в России </a></li> \
				<li><a href=../lections/lection15.htm>13.Практические вопросы проектирования и производства изделий с применением CALS-технологий</a></li>\
				<li><a href=../lections/lection16.htm>14.Стандартизированные технологии представления данных и информационные модели</a></li> \
				<li><a href=../lections/lection17.htm>15.Средства и системы управления заданиями (системы WORKFLOW)</a></li> \
			 </ul>\
		   </li>\
		   <li><a>Тесты</a>\
		   <ul id='ulik'>\
				<li><a href=../tests/test1.htm>1.Концепция CALS-технологий (ИПИ)</a></li> \
				<li><a href=../tests/test2.htm>2.Планирование ресурсов предприятия (Enterprise Resource Planning - ERP)</a></li> \
				<li><a href=../tests/test3.htm>3.Управление взаимоотношениями с клиентами (Customer Relationship Management - CRM)</a></li> \
				<li><a href=../tests/test4.htm>4.CAD/CAM/CAE</a> \
				<li><a href=../tests/test5.htm>5.Технология управления данными об изделии (PDM)</a></li> \
				<li><a href=../tests/test6.htm>6.Стандарт STEP</a></li> \
				<li><a href=../tests/test7.htm>7.Язык EXPRESS</a></li> \
				<li><a href=../tests/test8.htm>8.Методы реализации STEP</a></li> \
				<li><a href=../tests/test9.htm>9.Стандарт обмена данными STEP</a></li> \
				<li><a href=../tests/test10.htm>10.Интегрированная логистическая поддержка (ИЛП)</a></li> \
				<li><a href=../tests/test11.htm>11.Интерактивные электронные технические руководства (ИЭТР)</a></li> \
				<li><a href=../tests/test13.htm>12.Анализ состояния и развития CALS-технологий в мире и в России </a></li> \
				<li><a href=../tests/test15.htm>13.Практические вопросы проектирования и производства изделий с применением CALS-технологий</a></li>\
				<li><a href=../tests/test16.htm>14.Стандартизированные технологии представления данных и информационные модели</a></li> \
				<li><a href=../tests/test17.htm>15.Средства и системы управления заданиями (системы WORKFLOW)</a></li> \
			 </ul>\</li>\
		   <li><a>Практика</a>\
					<ul id='ulik'>\
				<li><a href=../practice/lab1.htm>1.Передача модели изделия между САПР с помощью обменного файла STEP</a></li> \
				<li><a href=../practice/lab2.htm>2.Создание и использование хра­нилища электронной технической документации</a></li> \
				<li><a href=../practice/lab3.htm>3.Создание интерактивного электронного технического руководства</a></li> \
			 </ul>\
		   </li>\
		</ul>\
		</div>\
		\
		<div id='content_temp'>\
			<p>Если ты это видишь - что-то сломалось.</p>\
		</div>\
		\
		<div id='footer'>\
			<p>© НГТУ им. Р.Е. Алексеева, 2017</p>\
		</div>\
	</div>";
}