(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSTempFile", null, 'java.io.File');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isTempFile$', function () {
return true;
});

Clazz.newMeth(C$, 'c$$java_io_File$S', function (dir, name) {
;C$.superclazz.c$$java_io_File$S.apply(this,[dir, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'deleteOnExit$', function () {
});

Clazz.newMeth(C$, 'cacheBytes$', function () {
$I$(1).cacheFileData$S$O(this.path, this.秘bytes);
});

Clazz.newMeth(C$, 'setBytes$O', function (isOrBytes) {
if (Clazz.instanceOf(isOrBytes, "java.io.InputStream")) {
this.秘bytes=(isOrBytes.$in.$in || isOrBytes.$in).buf ||null;
} else if (Clazz.instanceOf(isOrBytes, Clazz.array(Byte.TYPE, -1))) {
this.秘bytes=isOrBytes ||null;
} else {
this.秘bytes=null;
}return this.秘bytes != null ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
