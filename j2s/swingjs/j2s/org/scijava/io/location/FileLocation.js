(function(){var P$=Clazz.newPackage("org.scijava.io.location"),p$1={},I$=[[0,'java.util.Objects','java.io.File','java.util.Collections','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileLocation", null, 'org.scijava.io.location.AbstractLocation', 'org.scijava.io.location.BrowsableLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['file','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
Clazz.super_(C$, this);
$I$(1).requireNonNull$TT(file);
this.file=file;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (path) {
C$.c$$java_io_File.apply(this, [Clazz.new_($I$(2,1).c$$S,[path])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URI', function (path) {
C$.c$$java_io_File.apply(this, [Clazz.new_($I$(2,1).c$$java_net_URI,[path])]);
}, 1);

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'getURI$', function () {
return this.getFile$().toURI$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.file.getName$();
});

Clazz.newMeth(C$, 'parent$', function () {
return Clazz.new_(C$.c$$java_io_File,[this.file.getParentFile$()]);
});

Clazz.newMeth(C$, 'children$', function () {
p$1.validateDirectory.apply(this, []);
var files=this.file.listFiles$();
if (files == null ) return $I$(3).emptySet$();
var out=Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(4,1).c$$I,[files.length]);
for (var child, $child = 0, $$child = files; $child<$$child.length&&((child=($$child[$child])),1);$child++) {
out.add$TE(Clazz.new_(C$.c$$java_io_File,[child]));
}
return out;
});

Clazz.newMeth(C$, 'sibling$S', function (path) {
return Clazz.new_(C$.c$$java_io_File,[Clazz.new_($I$(2,1).c$$java_io_File$S,[this.file.getParentFile$(), path])]);
});

Clazz.newMeth(C$, 'child$S', function (name) {
p$1.validateDirectory.apply(this, []);
return Clazz.new_(C$.c$$java_io_File,[Clazz.new_($I$(2,1).c$$java_io_File$S,[this.file, name])]);
});

Clazz.newMeth(C$, 'isDirectory$', function () {
return this.file.isDirectory$();
});

Clazz.newMeth(C$, 'validateDirectory', function () {
if (this.isDirectory$()) return;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This location does not point to a directory!"]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
