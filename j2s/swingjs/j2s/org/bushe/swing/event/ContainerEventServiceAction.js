(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'org.bushe.swing.event.ContainerEventServiceFinder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ContainerEventServiceAction", null, 'org.bushe.swing.event.EventServiceAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_ImageIcon', function (actionName, icon) {
;C$.superclazz.c$$S$javax_swing_ImageIcon.apply(this,[actionName, icon]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEventService$java_awt_event_ActionEvent', function (event) {
var comp=null;
try {
if (Clazz.instanceOf(event.getSource$(), "java.awt.Component")) {
comp=event.getSource$();
}if (comp == null ) {
if (this.getThrowsExceptionOnNullEventService$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["ActionEvent source was null, could not find event bus, must override getContainerEventService in action with id:" + this.getName$()]);
}} else {
return $I$(1).getEventService$java_awt_Component(comp);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassCastException")){
if (this.getThrowsExceptionOnNullEventService$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["ActionEvent source was not a component (" + (comp == null  ? "null" : comp.getClass$() + "") + "), must override getContainerEventService in action with id:" + this.getName$() , ex]);
}} else {
throw ex;
}
}
return null;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
