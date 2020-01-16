(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "InputPanel", null, null, 'org.scijava.widget.UIComponent');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'supports$org_scijava_widget_InputWidget', function (widget) {
var thisType=this.getWidgetComponentType$();
var thatType=widget.getComponentType$();
return thisType.isAssignableFrom$Class(thatType);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
