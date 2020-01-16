(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.volatiles.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractVolatileBooleanArray", null, 'net.imglib2.img.basictypeaccess.array.AbstractBooleanArray', 'net.imglib2.img.basictypeaccess.volatiles.VolatileArrayDataAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isValid']]]

Clazz.newMeth(C$, 'c$$I$Z', function (numEntities, isValid) {
;C$.superclazz.c$$I.apply(this,[numEntities]);C$.$init$.apply(this);
this.isValid=isValid;
}, 1);

Clazz.newMeth(C$, 'c$$ZA$Z', function (data, isValid) {
;C$.superclazz.c$$ZA.apply(this,[data]);C$.$init$.apply(this);
this.isValid=isValid;
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return this.isValid;
});

Clazz.newMeth(C$, 'createArray$I', function (numEntities) {
return this.createArray$I$Z(numEntities, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
