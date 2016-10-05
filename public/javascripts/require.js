$(document).ready(function() {
  var counter = 1;
  $(" #addBatsmanRowTeamOne ").click(function () {
    var table = document.getElementById("#teamOneBatsmanTable");
    var $clone = $(" table#teamOneBatsmanTable tr:last ").clone().insertAfter(" table#teamOneBatsmanTable tr:last ").show();
    $clone.find("#teamOneBatsmanname").attr("id", "#teamOneBatsmanname"+counter).attr("name", "#teamOneBatsmanname"+counter).val('');
    $clone.find("#teamOneBatsmanstatus").attr("id", "#teamOneBatsmanstatus"+counter).attr("name", "#teamOneBatsmanstatus"+counter).val('');
    $clone.find("#teamOneBatsmanruns").attr("id", "#teamOneBatsmanruns"+counter).attr("name", "#teamOneBatsmanruns"+counter).val('');
    $clone.find("#teamOneBatsmanballsfaced").attr("id", "#teamOneBatsmanballsfaced"+counter).attr("name", "#teamOneBatsmanballsfaced"+counter).val('');
    $clone.find("#teamOneBatsmanfours").attr("id", "#teamOneBatsmanfours"+counter).attr("name", "#teamOneBatsmanfours"+counter).val('');
    $clone.find("#teamOneBatsmansixes").attr("id", "#teamOneBatsmansixes"+counter).attr("name", "#teamOneBatsmansixes"+counter).val('');
    counter++
  });
  });

$(document).ready(function() {
  $(" #addBatsmanRowTeamTwo ").click(function () {
    $(" table#teamTwoBatsmanTable tr:last ").clone().insertAfter(" table#teamTwoBatsmanTable tr:last ");
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmanname").val('');
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmanstatus").val('');
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmanruns").val('');
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmanballsfaced").val('');
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmanfours").val('');
    $(" table#teamTwoBatsmanTable tr:last #teamTwoBatsmansixes").val('');
  });
});

$(document).ready(function() {
  $(" #addBowlerRowTeamOne ").click(function () {
    $(" table#teamOneBowlerTable tr:last ").clone().insertAfter(" table#teamOneBowlerTable tr:last ");
    $(" table#teamOneBowlerTable tr:last #teamOnebowlername").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlerovers").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlermadian").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlerrunsgiven").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlerwicket").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlernballs").val('');
    $(" table#teamOneBowlerTable tr:last #teamOnebowlerwides").val('');
  });
});

$(document).ready(function() {
  $(" #addBowlerRowTeamTwo ").click(function () {
    $(" table#teamTwoBowlerTable tr:last ").clone().insertAfter(" table#teamTwoBowlerTable tr:last ");
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlername ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlerovers ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlermadian ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlerrunsgiven ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlerwicket ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlernballs ").val('');
    $(" table#teamTwoBowlerTable tr:last #teamTwobowlerwides ").val('');
  });
});
//$(document).ready(function() {
//  $('[data-toggle="datepicker"]').datepicker();
//});

$(function() {
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy'
  });
});
//function addrows(button, tablename){
//  $(button).click(function () {
//  $(tablename).each(function () {
//    var tds = '<tr>';
//    jQuery.each($('tr:last td', this), function () {
//      tds += '<td>' + $(this).html() + '</td>';
//    });
//    tds += '</tr>';
//    if ($('tbody', this).length > 0) {
//      $('tbody', this).append(tds);
//    } else {
//      $(this).append(tds);
//    }
//  });
//});}