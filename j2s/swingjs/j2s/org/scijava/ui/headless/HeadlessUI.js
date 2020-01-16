(function(){var P$=Clazz.newPackage("org.scijava.ui.headless"),I$=[[0,'org.scijava.util.ListUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeadlessUI", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.ui.UserInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['visible']]]

Clazz.newMeth(C$, 'show$', function () {
this.visible=true;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'show$S$O', function (name, o) {
this.log$().info$O(name + " = " + o );
});

Clazz.newMeth(C$, 'show$org_scijava_display_Display', function (display) {
this.log$().info$O(display.getName$() + " = " + $I$(1).string$java_util_List$Z(display, false) );
});

Clazz.newMeth(C$, 'createDisplayWindow$org_scijava_display_Display', function (display) {
return null;
});

Clazz.newMeth(C$, 'dialogPrompt$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType', function (message, title, messageType, optionType) {
return null;
});

Clazz.newMeth(C$, 'chooseFile$S$java_io_File$S', function (title, file, style) {
return null;
});

Clazz.newMeth(C$, 'showContextMenu$S$org_scijava_display_Display$I$I', function (menuRoot, display, x, y) {
});

Clazz.newMeth(C$, 'saveLocation$', function () {
});

Clazz.newMeth(C$, 'restoreLocation$', function () {
});

Clazz.newMeth(C$, 'requiresEDT$', function () {
return false;
});

Clazz.newMeth(C$, 'dispose$', function () {
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.headless.HeadlessUI',null,['org.scijava.plugin.Plugin']],['type="org.scijava.ui.UserInterface.class" name="headless" priority="-10000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
