(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[[0,'java.util.Arrays','org.scijava.io.location.DummyLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DummyHandle", null, 'org.scijava.io.handle.AbstractDataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['offset','length']]]

Clazz.newMeth(C$, 'isReadable$', function () {
return true;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return true;
});

Clazz.newMeth(C$, 'exists$', function () {
return true;
});

Clazz.newMeth(C$, 'offset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
if (pos > this.length$()) this.setLength$J(pos);
this.offset=pos;
});

Clazz.newMeth(C$, 'length$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'readByte$', function () {
var r=this.available$J(1);
if (r <= 0) return $b$[0] = -1, $b$[0];
this.offset++;
return $b$[0] = 0, $b$[0];
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
var r=(this.available$J(len)|0);
this.offset+=r;
$I$(1).fill$BA$I$I$B(b, off, off + r, ($b$[0] = 0, $b$[0]));
return r;
});

Clazz.newMeth(C$, 'write$I', function (v) {
this.ensureWritable$J(1);
this.offset++;
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.ensureWritable$J(len);
this.offset+=len;
});

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2));
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.handle.DummyHandle',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.handle.DataHandle.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
