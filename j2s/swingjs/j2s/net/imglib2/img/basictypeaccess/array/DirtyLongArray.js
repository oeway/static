(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DirtyLongArray", null, 'net.imglib2.img.basictypeaccess.array.AbstractLongArray', 'net.imglib2.Dirty');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirty=false;
}, 1);

C$.$fields$=[['Z',['dirty']]]

Clazz.newMeth(C$, 'c$$I', function (numEntities) {
;C$.superclazz.c$$I.apply(this,[numEntities]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (data) {
;C$.superclazz.c$$JA.apply(this,[data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setValue$I$J', function (index, value) {
this.dirty=true;
this.data[index]=value;
});

Clazz.newMeth(C$, 'createArray$I', function (numEntities) {
return Clazz.new_(C$.c$$I,[numEntities]);
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