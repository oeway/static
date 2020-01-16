(function(){var P$=Clazz.newPackage("org.scijava.io.handle");
/*i*/var C$=Clazz.newInterface(P$, "StreamHandle", null, null, 'org.scijava.io.handle.DataHandle');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'advance$J', function (bytes) {
this.setOffset$J(this.offset$() + bytes);
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
if (pos == this.offset$()) return;
if (pos > this.offset$()) {
this.jump$J(pos - this.offset$());
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Can\'t seek backwards through this StreamHandle"]);
}});

Clazz.newMeth(C$, 'jump$J', function (n) {
var remain=n;
while (remain > 0){
var r=this.in$().skip$J(remain);
if (r < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
remain-=r;
}
});

Clazz.newMeth(C$, 'ensureReadable$J', function (count) {
if (this.in$() == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is write-only."]);
P$.DataHandle.prototype.ensureReadable$J.apply(this, [count]);
});

Clazz.newMeth(C$, 'ensureWritable$J', function (count) {
if (this.out$() == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is read-only."]);
return P$.DataHandle.prototype.ensureWritable$J.apply(this, [count]);
});

Clazz.newMeth(C$, 'read$', function () {
this.ensureReadable$J(0);
var v=this.in$().read$();
if (v >= 0) this.advance$J(1);
return v;
});

Clazz.newMeth(C$, 'readByte$', function () {
var ch=this.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return $b$[0] = ((ch)|0), $b$[0];
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
var n=this.in$().read$BA$I$I(b, off, len);
if (n >= 0) this.advance$J(n);
return n;
});

Clazz.newMeth(C$, 'write$I', function (v) {
this.ensureWritable$J(1);
this.out$().write$I(v);
this.advance$J(1);
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
this.write$I(v);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
this.ensureWritable$J(len);
this.out$().write$BA$I$I(b, off, len);
this.advance$J(len);
});

Clazz.newMeth(C$, 'close$', function () {
try {
var $in=this.in$();
/*try*/ {
if ($in != null ) $in.close$();
}
}finally{/*res*/
try{$in&&$in.close$&&$in.close$()}catch(_){}}
try {
var out=this.out$();
/*try*/ {
if (out != null ) out.close$();
}
}finally{/*res*/
try{out&&out.close$&&out.close$()}catch(_){}}
});
};var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
