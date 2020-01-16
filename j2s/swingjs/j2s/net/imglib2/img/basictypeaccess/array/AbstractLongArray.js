(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractLongArray", null, null, ['net.imglib2.img.basictypeaccess.LongAccess', 'net.imglib2.img.basictypeaccess.array.ArrayDataAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','long[]']]]

Clazz.newMeth(C$, 'c$$I', function (numEntities) {
;C$.$init$.apply(this);
this.data=Clazz.array(Long.TYPE, [numEntities]);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
return this.data[index];
});

Clazz.newMeth(C$, 'setValue$I$J', function (index, value) {
this.data[index]=value;
});

Clazz.newMeth(C$, 'getCurrentStorageArray$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getArrayLength$', function () {
return this.data.length;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
