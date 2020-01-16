(function(){var P$=Clazz.newPackage("org.scijava.task"),I$=[[0,'org.scijava.task.DefaultTask']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTaskService", null, 'org.scijava.service.AbstractService', 'org.scijava.task.TaskService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','eventService','org.scijava.event.EventService']]]

Clazz.newMeth(C$, 'createTask$S', function (name) {
var task=Clazz.new_($I$(1,1).c$$org_scijava_thread_ThreadService$org_scijava_event_EventService,[this.threadService, this.eventService]);
task.setName$S(name);
return task;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.task.DefaultTaskService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
