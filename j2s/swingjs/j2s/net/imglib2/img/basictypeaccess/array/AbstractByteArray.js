(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractByteArray", null, null, ['net.imglib2.img.basictypeaccess.ByteAccess', 'net.imglib2.img.basictypeaccess.array.ArrayDataAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$I', function (numEntities) {
;C$.$init$.apply(this);
this.data=Clazz.array(Byte.TYPE, [numEntities]);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
return $b$[0] = this.data[index], $b$[0];
});

Clazz.newMeth(C$, 'setValue$I$B', function (index, value) {
this.data[index]=(value|0);
});

Clazz.newMeth(C$, 'getCurrentStorageArray$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getArrayLength$', function () {
return this.data.length;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
