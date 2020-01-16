(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'java.awt.image.DataBufferShort']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SignedShortBuffer", null, 'java.awt.image.DataBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['helper','java.awt.image.DataBufferShort']]]

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$I$I.apply(this,[1, size]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$I,[size]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (size, numbanks) {
;C$.superclazz.c$$I$I$I.apply(this,[1, size, numbanks]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$I$I,[size, numbanks]);
}, 1);

Clazz.newMeth(C$, 'c$$HA$I', function (data, size) {
;C$.superclazz.c$$I$I.apply(this,[1, size]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$HA$I,[data, size]);
}, 1);

Clazz.newMeth(C$, 'c$$HA$I$I', function (data, size, offset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[1, size, 1, offset]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$HA$I$I,[data, size, offset]);
}, 1);

Clazz.newMeth(C$, 'c$$HAA$I', function (data, size) {
;C$.superclazz.c$$I$I$I.apply(this,[1, size, data.length]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$HAA$I,[data, size]);
}, 1);

Clazz.newMeth(C$, 'c$$HAA$I$IA', function (data, size, offsets) {
;C$.superclazz.c$$I$I$I$IA.apply(this,[1, size, data.length, offsets]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1).c$$HAA$I$IA,[data, size, offsets]);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.helper.getData$();
});

Clazz.newMeth(C$, 'getData$I', function (bank) {
return this.helper.getData$I(bank);
});

Clazz.newMeth(C$, 'getElem$I$I', function (bank, i) {
return this.helper.getElem$I$I(bank, i);
});

Clazz.newMeth(C$, 'setElem$I$I$I', function (bank, i, val) {
this.helper.setElem$I$I$I(bank, i, val);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
