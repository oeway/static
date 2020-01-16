(function(){var P$=Clazz.newPackage("org.scijava.task.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TaskEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['task','org.scijava.task.Task']]]

Clazz.newMeth(C$, 'c$$org_scijava_task_Task', function (task) {
Clazz.super_(C$, this);
this.task=task;
}, 1);

Clazz.newMeth(C$, 'getTask$', function () {
return this.task;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\ttask = " + this.task ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
