(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'java.util.LinkedList','org.rcsb.cif.binary.data.Int8Array','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Uint8Array", null, 'org.rcsb.cif.binary.data.AbstractEncodedData', 'org.rcsb.cif.binary.data.UnsignedIntArray');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (data) {
C$.c$$IA$java_util_LinkedList.apply(this, [data, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$IA$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
return $I$(2).int8ToByteArray$IA(this.getData$());
});

Clazz.newMeth(C$, 'getNumberOfBytes$', function () {
return 1;
});

Clazz.newMeth(C$, 'getType$', function () {
return 4;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + ": " + $I$(3).toString$IA(this.getData$()) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
