(function(){var P$=Clazz.newPackage("io.scif.common"),I$=[[0,'java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.FileOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IniWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'saveINI$io_scif_common_IniList$S', function (ini, path) {
this.saveINI$io_scif_common_IniList$S$Z(ini, path, true);
});

Clazz.newMeth(C$, 'saveINI$io_scif_common_IniList$S$Z', function (ini, path, append) {
var out=Clazz.new_($I$(1,1).c$$java_io_Writer,[Clazz.new_($I$(2,1).c$$java_io_OutputStream$S,[Clazz.new_($I$(3,1).c$$S$Z,[path, append]), "UTF-8"])]);
for (var table, $table = ini.iterator$(); $table.hasNext$()&&((table=($table.next$())),1);) {
var header=table.get$O("header");
out.write$S("[" + header + "]\n" );
for (var key, $key = table.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
out.write$S(key + " = " + table.get$O(key) + "\n" );
}
out.write$S("\n");
}
out.close$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
