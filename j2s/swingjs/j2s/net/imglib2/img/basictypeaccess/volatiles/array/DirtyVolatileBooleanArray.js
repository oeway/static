(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.volatiles.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DirtyVolatileBooleanArray", null, 'net.imglib2.img.basictypeaccess.volatiles.array.AbstractVolatileBooleanArray', ['net.imglib2.img.basictypeaccess.volatiles.VolatileBooleanAccess', 'net.imglib2.Dirty']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirty=false;
}, 1);

C$.$fields$=[['Z',['dirty']]]

Clazz.newMeth(C$, 'c$$I$Z', function (numEntities, isValid) {
;C$.superclazz.c$$I$Z.apply(this,[numEntities, isValid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ZA$Z', function (data, isValid) {
;C$.superclazz.c$$ZA$Z.apply(this,[data, isValid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setValue$I$Z', function (index, value) {
this.dirty=true;
this.data[index]=value;
});

Clazz.newMeth(C$, 'createArray$I$Z', function (numEntities, isValid) {
return Clazz.new_(C$.c$$I$Z,[numEntities, isValid]);
});

Clazz.newMeth(C$, 'isDirty$', function () {
return this.dirty;
});

Clazz.newMeth(C$, 'setDirty$', function () {
this.dirty=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
