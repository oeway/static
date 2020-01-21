(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[[0,'org.scijava.io.ByteArrayByteBank']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BytesLocation", null, 'org.scijava.io.location.AbstractLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['bytes','org.scijava.io.ByteBank']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_ByteBank', function (bytes) {
Clazz.super_(C$, this);
this.bytes=bytes;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
Clazz.super_(C$, this);
this.bytes=Clazz.new_($I$(1,1).c$$I,[initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_util_ByteArray', function (bytes) {
Clazz.super_(C$, this);
this.bytes=Clazz.new_($I$(1,1).c$$org_scijava_util_ByteArray,[bytes]);
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name || 'Location.defaultName';
});

Clazz.newMeth(C$, 'c$$BA', function (bytes) {
Clazz.super_(C$, this);
this.bytes=Clazz.new_($I$(1,1).c$$BA,[bytes]);
}, 1);

Clazz.newMeth(C$, 'c$$S$BA', function (name, bytes) {
Clazz.super_(C$, this);
this.name = name;
this.bytes=Clazz.new_($I$(1,1).c$$BA,[bytes]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I', function (bytes, offset, length) {
Clazz.super_(C$, this);
this.bytes=Clazz.new_($I$(1,1).c$$I,[length]);
this.bytes.setBytes$J$BA$I$I(0, bytes, offset, length);
}, 1);

Clazz.newMeth(C$, 'getByteBank$', function () {
return this.bytes;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return System.identityHashCode$O(this);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
