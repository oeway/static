(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractInputPanel", null, null, 'org.scijava.widget.InputPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.widgets=Clazz.new_(1,{K:"String",V:"org.scijava.widget.InputWidget"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['widgets','java.util.Map']]]

Clazz.newMeth(C$, 'addWidget$org_scijava_widget_InputWidget', function (widget) {
this.widgets.put$TK$TV(widget.get$().getItem$().getName$(), widget);
});

Clazz.newMeth(C$, 'getWidget$S', function (name) {
return this.widgets.get$O(name);
});

Clazz.newMeth(C$, 'getValue$S', function (name) {
return this.widgets.get$O(name).getValue$();
});

Clazz.newMeth(C$, 'getWidgetCount$', function () {
return this.widgets.size$();
});

Clazz.newMeth(C$, 'hasWidgets$', function () {
return this.widgets.size$() > 0;
});

Clazz.newMeth(C$, 'isMessageOnly$', function () {
var messageCount=0;
for (var widget, $widget = this.widgets.values$().iterator$(); $widget.hasNext$()&&((widget=($widget.next$())),1);) {
if (widget.isMessage$()) messageCount++;
}
return messageCount == this.getWidgetCount$();
});

Clazz.newMeth(C$, 'refresh$', function () {
for (var w, $w = this.widgets.values$().iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) {
w.refreshWidget$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
