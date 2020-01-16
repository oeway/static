(function(){var P$=Clazz.newPackage("io.scif.common"),p$1={},I$=[[0,'org.scijava.log.StderrLogService','io.scif.common.IniList','StringBuffer','io.scif.common.IniTable','java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IniParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.commentDelimiter="#";
this.slashContinues=true;
}, 1);

C$.$fields$=[['Z',['slashContinues'],'S',['commentDelimiter'],'O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_log_LogService.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.$init$.apply(this);
this.log=log;
}, 1);

Clazz.newMeth(C$, 'setCommentDelimiter$S', function (delimiter) {
this.commentDelimiter=delimiter;
});

Clazz.newMeth(C$, 'setBackslashContinuesLine$Z', function (slashContinues) {
this.slashContinues=slashContinues;
});

Clazz.newMeth(C$, 'parseINI$S', function (path) {
return this.parseINI$java_io_BufferedReader(p$1.openTextResource$S.apply(this, [path]));
});

Clazz.newMeth(C$, 'parseINI$S$Class', function (path, c) {
return this.parseINI$java_io_BufferedReader(p$1.openTextResource$S$Class.apply(this, [path, c]));
});

Clazz.newMeth(C$, 'parseINI$java_io_BufferedReader', function ($in) {
var list=Clazz.new_($I$(2,1));
var attrs=null;
var chapter=null;
var no=1;
var sb=Clazz.new_($I$(3,1));
while (true){
var num=p$1.readLine$java_io_BufferedReader$StringBuffer.apply(this, [$in, sb]);
if (num == 0) break;
var line=sb.toString();
this.log.debug$O("Line " + no + ": " + line );
if (line.equals$O("")) {
no+=num;
continue;
}if (line.startsWith$S("{")) {
var end=line.length$();
if (line.endsWith$S("}")) end--;
chapter=line.substring$I$I(1, end);
continue;
}if (line.startsWith$S("[")) {
attrs=Clazz.new_($I$(4,1));
list.add$TE(attrs);
var end=line.length$();
if (line.endsWith$S("]")) end--;
var header=line.substring$I$I(1, end);
if (chapter != null ) header=chapter + ": " + header ;
attrs.put$TK$TV("header", header);
no+=num;
continue;
}var equals=line.indexOf$S("=");
if (equals < 0 || attrs == null  ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[no + ": bad line"]);
var key=line.substring$I$I(0, equals).trim$();
var value=line.substring$I(equals + 1).trim$();
attrs.put$TK$TV(key, value);
no+=num;
}
return list;
});

Clazz.newMeth(C$, 'openTextResource$S', function (path) {
return p$1.openTextResource$S$Class.apply(this, [path, Clazz.getClass(C$)]);
}, p$1);

Clazz.newMeth(C$, 'openTextResource$S$Class', function (path, c) {
try {
return Clazz.new_($I$(5,1).c$$java_io_Reader,[Clazz.new_($I$(6,1).c$$java_io_InputStream$S,[c.getResourceAsStream$S(path), "UTF-8"])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.error$O$Throwable("Could not open BufferedReader", e);
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'readLine$java_io_BufferedReader$StringBuffer', function ($in, sb) {
var no=0;
sb.setLength$I(0);
var blockText=false;
while (true){
var line=$in.readLine$();
if (line == null ) break;
no++;
if (this.commentDelimiter != null ) {
var comment=line.indexOf$S(this.commentDelimiter);
if (comment >= 0) line=line.substring$I$I(0, comment);
}if (!blockText) {
line=line.trim$();
}var slash=this.slashContinues && line.trim$().endsWith$S("\\") ;
blockText=this.slashContinues && line.trim$().endsWith$S("\\n") ;
if (blockText) {
line=line.substring$I$I(0, line.length$() - 2) + "\n";
} else if (slash) {
line=line.substring$I$I(0, line.length$() - 1).trim$() + " ";
}sb.append$S(line);
if (!slash && !blockText ) break;
}
return no;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
