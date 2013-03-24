for(var i = 0; i < 358; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToPanelStateChangeFunction['u3'] = function() {
var e = windowEvent;

if (((GetPanelState('u3')) == ('pd1u3')) && ((GetGlobalVariableValue('IsFirstLogin')) == (''))) {
function waitu4aee3015cb064fe5b3bb62f18f0dace61() {

	SetPanelState('u3', 'pd2u3','swing','up',1000,'swing','up',1000);
}
setTimeout(waitu4aee3015cb064fe5b3bb62f18f0dace61, 2000);

}
else
if (((GetPanelState('u3')) == ('pd1u3')) && ((GetGlobalVariableValue('IsFirstLogin')) == ('否'))) {
function waitu55ef1e1b193b44f6b0f3011ff6cc011c1() {

	SetPanelState('u3', 'pd6u3','swing','up',1000,'swing','up',1000);
}
setTimeout(waitu55ef1e1b193b44f6b0f3011ff6cc011c1, 2000);

}
else
if ((GetPanelState('u3')) == ('pd6u3')) {

SetGlobalVariableValue('IsFirstLogin', '否');

}

}

widgetIdToShowFunction['u38'] = function() {
var e = windowEvent;

if (true) {

                                DisableImageWidget('u26');
                                DisableImageWidget('u20');
}

}

widgetIdToHideFunction['u38'] = function() {
var e = windowEvent;

if (true) {

                                EnableImageWidget('u26');
                                EnableImageWidget('u20');
}

}

widgetIdToShowFunction['u133'] = function() {
var e = windowEvent;

if (true) {

                                DisableImageWidget('u98');
                                DisableImageWidget('u107');
	var obj1 = document.getElementById("u104");
    obj1.disabled = true;

}

}

widgetIdToHideFunction['u133'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u104");
    obj1.disabled = false;

                                EnableImageWidget('u107');
                                EnableImageWidget('u98');
}

}

widgetIdToShowFunction['u29'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u25");
    obj1.disabled = true;

                                DisableImageWidget('u26');
                                DisableImageWidget('u20');
}

}

widgetIdToHideFunction['u29'] = function() {
var e = windowEvent;

if (true) {

                                EnableImageWidget('u20');
	var obj1 = document.getElementById("u25");
    obj1.disabled = false;

                                EnableImageWidget('u26');
}

}

widgetIdToShowFunction['u235'] = function() {
var e = windowEvent;

if (true) {

                                DisableImageWidget('u199');
                                DisableImageWidget('u201');
                                DisableImageWidget('u285');
}

}

widgetIdToHideFunction['u235'] = function() {
var e = windowEvent;

if (true) {

                                EnableImageWidget('u199');
                                EnableImageWidget('u201');
                                EnableImageWidget('u285');
}

}

if (bIE) document.getElementById('u293').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u293'); });
else {
    document.getElementById('u293').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u293'); }, true);
    document.getElementById('u293').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u293'); }, true);
}

widgetIdToDragFunction['u293'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u294',widgetDragInfo.xDelta,0,'none',500);

}

}

widgetIdToDragDropFunction['u293'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u303'), GetWidgetRectangles('u288'))) {

	MoveWidgetTo('u294', GetNum('-640'), GetNum('0'),'swing',500);

}
else
if (IsOver(GetWidgetRectangles('u305'), GetWidgetRectangles('u288'))) {

	MoveWidgetTo('u294', GetNum('-1280'), GetNum('0'),'swing',500);

}
else
if (IsOver(GetWidgetRectangles('u307'), GetWidgetRectangles('u288'))) {

	MoveWidgetTo('u294', GetNum('-1920'), GetNum('0'),'swing',500);

}
else
if (IsOver(GetWidgetRectangles('u308'), GetWidgetRectangles('u287'))) {

	MoveWidgetTo('u294', GetNum('-1280'), GetNum('0'),'swing',500);

}
else
if (IsOver(GetWidgetRectangles('u306'), GetWidgetRectangles('u287'))) {

	MoveWidgetTo('u294', GetNum('-640'), GetNum('0'),'swing',500);

}
else
if (IsOver(GetWidgetRectangles('u304'), GetWidgetRectangles('u287'))) {

	MoveWidgetTo('u294', GetNum('0'), GetNum('0'),'swing',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u294','swing',500);

}

}

widgetIdToShowFunction['u203'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u197");
    obj1.disabled = true;

	var obj1 = document.getElementById("u198");
    obj1.disabled = true;

                                DisableImageWidget('u199');
                                DisableImageWidget('u201');
                                DisableImageWidget('u285');
}

}

widgetIdToHideFunction['u203'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u197");
    obj1.disabled = false;

	var obj1 = document.getElementById("u198");
    obj1.disabled = false;

                                EnableImageWidget('u199');
                                EnableImageWidget('u201');
                                EnableImageWidget('u285');
}

}

widgetIdToShowFunction['u226'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u197");
    obj1.disabled = true;

	var obj1 = document.getElementById("u198");
    obj1.disabled = true;

                                DisableImageWidget('u199');
                                DisableImageWidget('u201');
                                DisableImageWidget('u285');
}

}

widgetIdToHideFunction['u226'] = function() {
var e = windowEvent;

if (true) {

	var obj1 = document.getElementById("u197");
    obj1.disabled = false;

	var obj1 = document.getElementById("u198");
    obj1.disabled = false;

                                EnableImageWidget('u199');
                                EnableImageWidget('u201');
                                EnableImageWidget('u285');
}

}

widgetIdToShowFunction['u110'] = function() {
var e = windowEvent;

if (true) {

                                DisableImageWidget('u98');
	var obj1 = document.getElementById("u103");
    obj1.disabled = true;

	var obj1 = document.getElementById("u104");
    obj1.disabled = true;

                                DisableImageWidget('u107');
}

}

widgetIdToHideFunction['u110'] = function() {
var e = windowEvent;

if (true) {

                                EnableImageWidget('u98');
	var obj1 = document.getElementById("u103");
    obj1.disabled = false;

	var obj1 = document.getElementById("u104");
    obj1.disabled = false;

                                EnableImageWidget('u107');
}

}
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u36'] = 'top';document.getElementById('u216_img').tabIndex = 0;

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	SetPanelVisibility('u203','hidden','none',500);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u139'] = 'top';document.getElementById('u201_img').tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelState('u3', 'pd4u3','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u269'] = 'center';u331.tabIndex = 0;

u331.style.cursor = 'pointer';
$axure.eventManager.click('u331', function(e) {

if (true) {

	SetPanelState('u326', 'pd0u326','none','',500,'none','',500);

}
});
gv_vAlignTable['u331'] = 'top';gv_vAlignTable['u321'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u46'] = 'center';document.getElementById('u285_img').tabIndex = 0;

u285.style.cursor = 'pointer';
$axure.eventManager.click('u285', function(e) {

if (true) {

	SetPanelState('u226', 'pd0u226','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u162'] = 'center';u357.tabIndex = 0;

u357.style.cursor = 'pointer';
$axure.eventManager.click('u357', function(e) {

if (true) {

	SetPanelState('u326', 'pd2u326','none','',500,'none','',500);

}
});
gv_vAlignTable['u357'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u329'] = 'top';document.getElementById('u229_img').tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	SetPanelVisibility('u226','hidden','none',500);

	SetPanelState('u3', 'pd4u3','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u283'] = 'center';document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelState('u3', 'pd4u3','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u49'] = 'center';u355.tabIndex = 0;

u355.style.cursor = 'pointer';
$axure.eventManager.click('u355', function(e) {

if (true) {

	SetPanelState('u326', 'pd1u326','none','',500,'none','',500);

}
});
gv_vAlignTable['u355'] = 'top';
$axure.eventManager.focus('u25', function(e) {

if ((GetWidgetText('u25')) != ('填写验证码')) {

	SetPanelState('u38', 'pd1u38','none','',500,'swing','up',500);

}
else
if ((GetWidgetText('u25')) == ('填写验证码')) {

SetWidgetFormText('u25', '');

	SetPanelState('u38', 'pd1u38','none','',500,'swing','up',500);

}
});

$axure.eventManager.blur('u25', function(e) {

if ((GetWidgetValueLength('u25')) == ('0')) {

SetWidgetFormText('u25', '填写验证码');

	SetPanelVisibility('u38','hidden','none',500);

}
else
if ((GetWidgetValueLength('u25')) > Number('0')) {

	SetPanelVisibility('u38','hidden','none',500);

}
});
document.getElementById('u309_img').tabIndex = 0;

u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

	SetPanelState('u3', 'pd3u3','swing','up',500,'swing','up',500);

}
});
gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u281'] = 'top';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u267'] = 'top';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u315'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u319'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u58'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u29','hidden','none',500);

}
});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u130'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u3', 'pd3u3','swing','down',500,'fade','',1000);

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u210'] = 'top';u325.tabIndex = 0;

u325.style.cursor = 'pointer';
$axure.eventManager.click('u325', function(e) {

if (true) {

	SetPanelState('u3', 'pd0u3','none','',500,'none','',500);

	SetPanelState('u317', 'pd0u317','none','',500,'none','',500);

}
});
document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if ((GetWidgetValueLength('u103')) != ('11')) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
else
if ((GetWidgetText('u103')) != ('18321695382')) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
else
if ((GetWidgetText('u103')) == ('18321695382')) {

	SetPanelState('u3', 'pd5u3','none','',500,'swing','left',500);

}
});
gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u106'] = 'top';document.getElementById('u223_img').tabIndex = 0;

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	SetPanelVisibility('u203','hidden','none',500);

}
});
gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u340'] = 'top';gv_vAlignTable['u237'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u354'] = 'top';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u353'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u13'] = 'center';document.getElementById('u208_img').tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	SetPanelVisibility('u203','hidden','none',500);

}
});
gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u271'] = 'center';
$axure.eventManager.focus('u103', function(e) {

if (true) {

SetWidgetFormText('u103', '');

	SetPanelState('u133', 'pd1u133','none','',500,'swing','up',500);

}
});

$axure.eventManager.blur('u103', function(e) {

if ((GetWidgetValueLength('u103')) == ('0')) {

SetWidgetFormText('u103', '你本人的手机号');

	SetPanelVisibility('u133','hidden','none',500);

}
else
if ((GetWidgetValueLength('u103')) > Number('0')) {

	SetPanelVisibility('u133','hidden','none',500);

}
});
u339.tabIndex = 0;

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

	SetPanelState('u326', 'pd0u326','none','',500,'none','',500);

}
});
gv_vAlignTable['u339'] = 'top';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u351'] = 'top';document.getElementById('u199_img').tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (((GetWidgetValueLength('u197')) == ('0')) || ((GetWidgetText('u197')) == ('陌陌号/手机号'))) {

	SetPanelState('u203', 'pd0u203','none','',500,'none','',500);

}
else
if (((GetWidgetValueLength('u198')) == ('0')) || ((GetWidgetText('u198')) == ('请填写密码'))) {

	SetPanelState('u203', 'pd1u203','none','',500,'none','',500);

}
else
if (((GetWidgetText('u197')) != ('18321695382')) && ((GetWidgetText('u198')) != ('111'))) {

	SetPanelState('u203', 'pd2u203','none','',500,'none','',500);

}
else
if (((GetWidgetText('u197')) == ('18321695382')) && ((GetWidgetText('u198')) == ('111'))) {

	SetPanelState('u3', 'pd6u3','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u92'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if ((GetWidgetText('u25')) == ('12345')) {

	SetPanelState('u3', 'pd6u3','none','',500,'swing','up',500);

}
else
if ((GetWidgetText('u25')) != ('12345')) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

}
});
gv_vAlignTable['u338'] = 'top';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u116'] = 'center';document.getElementById('u233_img').tabIndex = 0;

u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

	SetPanelVisibility('u226','hidden','none',500);

}
});
gv_vAlignTable['u350'] = 'top';u347.tabIndex = 0;

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

	SetPanelState('u326', 'pd2u326','none','',500,'none','',500);

}
});
gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u247'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u310'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u40'] = 'center';u324.tabIndex = 0;

u324.style.cursor = 'pointer';
$axure.eventManager.click('u324', function(e) {

if (true) {

	SetPanelState('u3', 'pd1u3','fade','',1000,'swing','down',1000);

}
});
gv_vAlignTable['u243'] = 'center';
$axure.eventManager.focus('u198', function(e) {

if ((GetWidgetText('u198')) != ('请填写密码')) {

	SetPanelState('u235', 'pd0u235','none','',500,'swing','up',500);

}
else
if ((GetWidgetText('u198')) == ('请填写密码')) {

SetWidgetFormText('u198', '');

	SetPanelState('u235', 'pd0u235','none','',500,'swing','up',500);

}
});

$axure.eventManager.blur('u198', function(e) {

if ((GetWidgetValueLength('u198')) != ('0')) {

	SetPanelVisibility('u235','hidden','none',500);

}
else
if ((GetWidgetValueLength('u198')) == ('0')) {

SetWidgetFormText('u198', '请填写密码');

	SetPanelVisibility('u235','hidden','none',500);

}
});
gv_vAlignTable['u69'] = 'center';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u3', 'pd3u3','none','',500,'swing','down',500);

}
});
gv_vAlignTable['u344'] = 'center';gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u337'] = 'top';gv_vAlignTable['u256'] = 'top';document.getElementById('u129_img').tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u141'] = 'center';
$axure.eventManager.focus('u197', function(e) {

if ((GetWidgetText('u197')) != ('友联号/手机号')) {

	SetPanelState('u235', 'pd0u235','none','',500,'swing','up',500);

}
else
if ((GetWidgetText('u197')) == ('友联号/手机号')) {

SetWidgetFormText('u197', '');

	SetPanelState('u235', 'pd0u235','none','',500,'swing','up',500);

}
});

$axure.eventManager.blur('u197', function(e) {

if ((GetWidgetValueLength('u197')) != ('0')) {

	SetPanelVisibility('u235','hidden','none',500);

}
else
if ((GetWidgetValueLength('u197')) == ('0')) {

SetWidgetFormText('u197', '友联号/手机号');

	SetPanelVisibility('u235','hidden','none',500);

}
});
gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u335'] = 'center';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u102'] = 'center';