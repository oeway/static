(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IIOByteBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset','length'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$BA$I$I', function (data, offset, length) {
;C$.$init$.apply(this);
this.data=data;
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$BA', function (data) {
this.data=data;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$I', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
this.length=length;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
