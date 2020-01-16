(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[[0,'org.scijava.widget.WidgetModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "InputWidget", null, null, ['org.scijava.plugin.WrapperPlugin', 'org.scijava.widget.UIComponent']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isLabeled$', function () {
return true;
});

Clazz.newMeth(C$, 'isMessage$', function () {
return false;
});

Clazz.newMeth(C$, ['supports$org_scijava_widget_WidgetModel','supports$TT'], function (model) {
return model.getPanel$().supports$org_scijava_widget_InputWidget(this);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1),['callback$','getChoices$','getItem$','getMax$','getMin$','getModule$','getObjectPool$','getPanel$','getSoftMax$','getSoftMin$','getStepSize$','getText$','getValue$','getWidgetLabel$','isBoolean$','isCharacter$','isInitialized$','isMessage$','isMultipleChoice$','isNumber$','isStyle$S','isText$','isType$Class','setInitialized$Z','setValue$O']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
