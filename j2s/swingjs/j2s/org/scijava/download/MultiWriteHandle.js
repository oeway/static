(function(){var P$=Clazz.newPackage("org.scijava.download"),I$=[[0,'java.util.ArrayList','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MultiWriteHandle", null, 'org.scijava.io.handle.AbstractDataHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['handles','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandleA', function (handles) {
Clazz.super_(C$, this);
this.handles=Clazz.new_(1,{E:"org.scijava.io.handle.DataHandle"},$I$(1,1).c$$java_util_Collection,[$I$(2).asList$TTA(handles)]);
}, 1);

Clazz.newMeth(C$, 'isReadable$', function () {
return false;
});

Clazz.newMeth(C$, 'isWritable$', function () {
var writable=true;
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) writable&=h.isWritable$();

return writable;
});

Clazz.newMeth(C$, 'exists$', function () {
var exists=true;
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) exists|=h.isWritable$();

return exists;
});

Clazz.newMeth(C$, 'lastModified$', function () {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) {
var lastModified=h.lastModified$();
if (lastModified != null ) return lastModified;
}
return null;
});

Clazz.newMeth(C$, 'checksum$', function () {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) {
var checksum=h.checksum$();
if (checksum != null ) return checksum;
}
return null;
});

Clazz.newMeth(C$, 'offset$', function () {
return this.handles.get$I(0).offset$();
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) h.seek$J(pos);

});

Clazz.newMeth(C$, 'length$', function () {
return this.handles.get$I(0).length$();
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) h.setLength$J(length);

});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getType$', function () {
return null;
});

Clazz.newMeth(C$, 'readByte$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'write$I', function (b) {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) h.write$I(b);

});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) h.write$BA$I$I(b, off, len);

});

Clazz.newMeth(C$, 'close$', function () {
for (var h, $h = this.handles.iterator$(); $h.hasNext$()&&((h=($h.next$())),1);) h.close$();

});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
