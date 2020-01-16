(function(){var P$=Clazz.newPackage("org.scijava.io"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "ByteBank");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getBytes$J$BA', function (startPos, bytes) {
return this.getBytes$J$BA$I$I(startPos, bytes, 0, bytes.length);
});

Clazz.newMeth(C$, 'toByteArray$J$I', function (offset, len) {
if (offset < 0 || len < 0  || offset + len > this.size$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range"]);
}var bytes=Clazz.array(Byte.TYPE, [len]);
this.getBytes$J$BA(offset, bytes);
return bytes;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
var max=this.size$();
if (max > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Byte bank is too large to store into a single byte[]"]);
}return this.toByteArray$J$I(0, (max|0));
});

Clazz.newMeth(C$, 'appendBytes$BA$I', function (bytes, length) {
this.appendBytes$BA$I$I(bytes, 0, length);
});

Clazz.newMeth(C$, 'appendBytes$BA$I$I', function (bytes, offset, length) {
this.setBytes$J$BA$I$I(this.size$(), bytes, offset, length);
});

Clazz.newMeth(C$, 'checkReadPos$J$J', function (start, end) {
this.basicRangeCheck$J$J(start, end);
if (start > this.size$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Requested position: " + start + " is outside the buffer: " + this.size$() ]);
}});

Clazz.newMeth(C$, 'checkWritePos$J$J', function (start, end) {
if (start > this.size$() + 1) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Requested start position: " + start + " would leave a hole in the buffer, largest legal position is: " + this.size$() ]);
}if (end < start) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range, end is smaller than start!"]);
}if (end > this.getMaxBufferSize$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Requested position " + end + " is larger than the maximal buffer size: " + this.getMaxBufferSize$() ]);
}});

Clazz.newMeth(C$, 'basicRangeCheck$J$J', function (start, end) {
if (start > this.size$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Requested position: " + start + " is outside the buffer: " + this.size$() ]);
}if (end < start) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range, end is smaller than start!"]);
}});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
