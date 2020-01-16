(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'org.bushe.swing.event.SwingEventService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ContainerEventServiceFinder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getEventService$java_awt_Component', function (component) {
while (component != null ){
if (Clazz.instanceOf(component, "org.bushe.swing.event.ContainerEventServiceSupplier")) {
return (component).getContainerEventService$();
}if (Clazz.instanceOf(component, "javax.swing.JPopupMenu")) {
component=(component).getInvoker$();
} else {
if (component.getParent$() == null ) {
if (Clazz.instanceOf(component, "javax.swing.RootPaneContainer")) {
component=(component).getRootPane$();
}if (!(Clazz.instanceOf(component, "javax.swing.JComponent"))) {
return null;
}var jComp=(component);
var eventService=jComp.getClientProperty$O("ContainerEventServiceFinder.createdService");
if (eventService == null ) {
eventService=Clazz.new_($I$(1,1));
jComp.putClientProperty$O$O("ContainerEventServiceFinder.createdService", eventService);
}return eventService;
} else {
component=component.getParent$();
}}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
