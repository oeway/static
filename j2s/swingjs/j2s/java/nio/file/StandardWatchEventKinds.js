(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,['java.nio.file.StandardWatchEventKinds','.StdWatchEventKind'],'java.nio.file.Path']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StandardWatchEventKinds", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StdWatchEventKind',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.OVERFLOW=Clazz.new_(1,{T:"java.lang.Object"},$I$(1,1).c$$S$Class,["OVERFLOW", Clazz.getClass(java.lang.Object)]);
C$.ENTRY_CREATE=Clazz.new_(1,{T:"java.nio.file.Path"},$I$(1,1).c$$S$Class,["ENTRY_CREATE", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])]);
C$.ENTRY_DELETE=Clazz.new_(1,{T:"java.nio.file.Path"},$I$(1,1).c$$S$Class,["ENTRY_DELETE", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])]);
C$.ENTRY_MODIFY=Clazz.new_(1,{T:"java.nio.file.Path"},$I$(1,1).c$$S$Class,["ENTRY_MODIFY", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['OVERFLOW','java.nio.file.WatchEvent.Kind','+ENTRY_CREATE','+ENTRY_DELETE','+ENTRY_MODIFY']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardWatchEventKinds, "StdWatchEventKind", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.nio.file.WatchEvent','java.nio.file.WatchEvent.Kind']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['name'],'O',['type','Class']]]

Clazz.newMeth(C$, 'c$$S$Class', function (name, type) {
;C$.$init$.apply(this);
this.name=name;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'name$', function () {
return this.name;
});

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
