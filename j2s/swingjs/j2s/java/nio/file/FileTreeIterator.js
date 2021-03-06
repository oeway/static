(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={},I$=[[0,'java.nio.file.FileTreeWalker','java.util.Arrays',['java.nio.file.FileTreeWalker','.EventType']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileTreeIterator", null, null, ['java.util.Iterator', 'java.io.Closeable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['walker','java.nio.file.FileTreeWalker','next','java.nio.file.FileTreeWalker.Event']]]

Clazz.newMeth(C$, 'c$$java_nio_file_Path$I$java_nio_file_FileVisitOptionA', function (start, maxDepth, options) {
;C$.$init$.apply(this);
this.walker=Clazz.new_($I$(1,1).c$$java_util_Collection$I,[$I$(2).asList$TTA(options), maxDepth]);
this.next=this.walker.walk$java_nio_file_Path(start);
Clazz.assert(C$, this, function(){return this.next.type$() === $I$(3).ENTRY  || this.next.type$() === $I$(3).START_DIRECTORY  });
var ioe=this.next.ioeException$();
if (ioe != null ) throw ioe;
}, 1);

Clazz.newMeth(C$, 'fetchNextIfNeeded', function () {
if (this.next == null ) {
var ev=this.walker.next$();
while (ev != null ){
var ioe=ev.ioeException$();
if (ioe != null ) throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[ioe]);
if (ev.type$() !== $I$(3).END_DIRECTORY ) {
this.next=ev;
return;
}ev=this.walker.next$();
}
}}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.walker.isOpen$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
p$1.fetchNextIfNeeded.apply(this, []);
return this.next != null ;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.walker.isOpen$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
p$1.fetchNextIfNeeded.apply(this, []);
if (this.next == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var result=this.next;
this.next=null;
return result;
});

Clazz.newMeth(C$, 'close$', function () {
this.walker.close$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
