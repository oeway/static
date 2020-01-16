(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SignedByteBuffer", null, 'java.awt.image.DataBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['bankData','byte[][]']]]

Clazz.newMeth(C$, 'c$$BA$I', function (dataArray, size) {
;C$.superclazz.c$$I$I.apply(this,[0, size]);C$.$init$.apply(this);
this.bankData=Clazz.array(Byte.TYPE, [1, null]);
this.bankData[0]=dataArray;
}, 1);

Clazz.newMeth(C$, 'c$$BAA$I', function (dataArray, size) {
;C$.superclazz.c$$I$I.apply(this,[0, size]);C$.$init$.apply(this);
this.bankData=dataArray;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.bankData[0];
});

Clazz.newMeth(C$, 'getData$I', function (bank) {
return this.bankData[bank];
});

Clazz.newMeth(C$, 'getElem$I', function (i) {
return this.getElem$I$I(0, i);
});

Clazz.newMeth(C$, 'getElem$I$I', function (bank, i) {
return this.bankData[bank][i + this.getOffsets$()[bank]];
});

Clazz.newMeth(C$, 'setElem$I$I', function (i, val) {
this.setElem$I$I$I(0, i, val);
});

Clazz.newMeth(C$, 'setElem$I$I$I', function (bank, i, val) {
this.bankData[bank][i + this.getOffsets$()[bank]]=((val|0)|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
