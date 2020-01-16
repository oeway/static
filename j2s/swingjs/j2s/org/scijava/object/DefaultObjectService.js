(function(){var P$=Clazz.newPackage("org.scijava.object"),I$=[[0,'org.scijava.object.event.ObjectsAddedEvent','org.scijava.object.event.ObjectsRemovedEvent','org.scijava.object.ObjectIndex']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultObjectService", null, 'org.scijava.service.AbstractService', 'org.scijava.object.ObjectService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','objectIndex','org.scijava.object.ObjectIndex']]]

Clazz.newMeth(C$, 'eventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.objectIndex;
});

Clazz.newMeth(C$, 'getObjects$Class', function (type) {
var list=this.objectIndex.get$Class(type);
var result=list;
return result;
});

Clazz.newMeth(C$, 'addObject$O', function (obj) {
this.objectIndex.add$TE(obj);
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$O,[obj]));
});

Clazz.newMeth(C$, 'removeObject$O', function (obj) {
this.objectIndex.remove$O(obj);
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$O,[obj]));
});

Clazz.newMeth(C$, 'initialize$', function () {
this.objectIndex=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1).c$$Class,[Clazz.getClass(java.lang.Object)]);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_object_event_ObjectCreatedEvent', function (event) {
this.addObject$O(event.getObject$());
});

Clazz.newMeth(C$, 'onEvent$org_scijava_object_event_ObjectDeletedEvent', function (event) {
this.removeObject$O(event.getObject$());
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.object.DefaultObjectService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_object_event_ObjectCreatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_object_event_ObjectDeletedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
