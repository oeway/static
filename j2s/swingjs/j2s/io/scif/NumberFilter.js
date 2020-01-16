(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NumberFilter", null, null, 'java.io.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['pre','post']]]

Clazz.newMeth(C$, 'c$$S$S', function (pre, post) {
;C$.$init$.apply(this);
this.pre=pre;
this.post=post;
}, 1);

Clazz.newMeth(C$, 'getNumber$S', function (name) {
if (!name.startsWith$S(this.pre) || !name.endsWith$S(this.post) ) return null;
var ndx=this.pre.length$();
var end=name.length$() - this.post.length$();
try {
return  new Integer(name.substring$I$I(ndx, end));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException") || Clazz.exceptionOf(exc,"IndexOutOfBoundsException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'accept$S', function (name) {
return this.getNumber$S(name) != null ;
});

Clazz.newMeth(C$, ['accept$java_io_File','accept$'], function (pathname) {
return this.accept$S(pathname.getName$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
