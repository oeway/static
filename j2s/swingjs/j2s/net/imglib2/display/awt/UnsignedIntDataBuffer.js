(function(){var P$=Clazz.newPackage("net.imglib2.display.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnsignedIntDataBuffer", null, 'java.awt.image.DataBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['bankData','int[][]']]]

Clazz.newMeth(C$, 'c$$IA$I', function (dataArray, size) {
;C$.superclazz.c$$I$I.apply(this,[3, size]);C$.$init$.apply(this);
this.bankData=Clazz.array(Integer.TYPE, [1, null]);
this.bankData[0]=dataArray;
}, 1);

Clazz.newMeth(C$, 'c$$IAA$I', function (dataArray, size) {
;C$.superclazz.c$$I$I.apply(this,[3, size]);C$.$init$.apply(this);
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
var value=this.bankData[bank][i + this.getOffsets$()[bank]];
return ((value & 4294967295)|0);
});

Clazz.newMeth(C$, 'getElemFloat$I', function (i) {
return this.getElemFloat$I$I(0, i);
});

Clazz.newMeth(C$, 'getElemFloat$I$I', function (bank, i) {
return (this.getElem$I$I(bank, i) & 4294967295);
});

Clazz.newMeth(C$, 'getElemDouble$I', function (i) {
return this.getElemDouble$I$I(0, i);
});

Clazz.newMeth(C$, 'getElemDouble$I$I', function (bank, i) {
return (this.getElem$I$I(bank, i) & 4294967295);
});

Clazz.newMeth(C$, 'setElem$I$I', function (i, val) {
this.setElem$I$I$I(0, i, val);
});

Clazz.newMeth(C$, 'setElem$I$I$I', function (bank, i, val) {
this.bankData[bank][i + this.getOffsets$()[bank]]=val;
});

Clazz.newMeth(C$, 'setElemFloat$I$F', function (i, val) {
this.setElemFloat$I$I$F(0, i, val);
});

Clazz.newMeth(C$, 'setElemFloat$I$I$F', function (bank, i, val) {
this.bankData[bank][i + this.getOffsets$()[bank]]=(val|0);
});

Clazz.newMeth(C$, 'setElemDouble$I$D', function (i, val) {
this.setElemDouble$I$I$D(0, i, val);
});

Clazz.newMeth(C$, 'setElemDouble$I$I$D', function (bank, i, val) {
this.bankData[bank][i + this.getOffsets$()[bank]]=(val|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
