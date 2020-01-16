(function(){var P$=Clazz.newPackage("net.imagej.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DatasetDeletedEvent", null, 'net.imagej.event.DataDeletedEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataset','net.imagej.Dataset']]]

Clazz.newMeth(C$, 'c$$net_imagej_Dataset', function (dataset) {
;C$.superclazz.c$$net_imagej_Data.apply(this,[dataset]);C$.$init$.apply(this);
this.dataset=dataset;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
return this.dataset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
