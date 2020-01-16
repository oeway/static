(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ShortArray", null, 'net.imglib2.img.basictypeaccess.array.AbstractShortArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$data','short[]']]]

Clazz.newMeth(C$, 'c$$I', function (numEntities) {
;C$.superclazz.c$$I.apply(this,[numEntities]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA', function (data) {
;C$.superclazz.c$$HA.apply(this,[data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createArray$I', function (numEntities) {
return Clazz.new_(C$.c$$I,[numEntities]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
