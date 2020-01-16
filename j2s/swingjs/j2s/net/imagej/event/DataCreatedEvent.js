(function(){var P$=Clazz.newPackage("net.imagej.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataCreatedEvent", null, 'org.scijava.object.event.ObjectCreatedEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','net.imagej.Data']]]

Clazz.newMeth(C$, 'c$$net_imagej_Data', function (data) {
;C$.superclazz.c$$O.apply(this,[data]);C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
return this.data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
