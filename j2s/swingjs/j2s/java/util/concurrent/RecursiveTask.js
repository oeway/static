(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RecursiveTask", null, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['result','<V>']]]

Clazz.newMeth(C$, 'getRawResult$', function () {
return this.result;
});

Clazz.newMeth(C$, ['setRawResult$TV'], function (value) {
this.result=value;
});

Clazz.newMeth(C$, 'exec$', function () {
this.result=this.compute$();
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
