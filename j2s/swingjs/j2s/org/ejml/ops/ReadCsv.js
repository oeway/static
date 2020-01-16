(function(){var P$=Clazz.newPackage("org.ejml.ops"),p$1={},I$=[[0,'java.io.BufferedReader','java.io.InputStreamReader','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReadCsv");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasComment=false;
this.lineNumber=0;
}, 1);

C$.$fields$=[['Z',['hasComment'],'C',['comment'],'I',['lineNumber'],'O',['$in','java.io.BufferedReader']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
;C$.$init$.apply(this);
this.$in=Clazz.new_($I$(1,1).c$$java_io_Reader,[Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in])]);
}, 1);

Clazz.newMeth(C$, 'setComment$C', function (comment) {
this.hasComment=true;
this.comment=comment;
});

Clazz.newMeth(C$, 'getLineNumber$', function () {
return this.lineNumber;
});

Clazz.newMeth(C$, 'getReader$', function () {
return this.$in;
});

Clazz.newMeth(C$, 'extractWords$', function () {
while (true){
this.lineNumber++;
var line=this.$in.readLine$();
if (line == null ) {
return null;
}if (this.hasComment) {
if (line.charAt$I(0) == this.comment) continue;
}return this.parseWords$S(line);
}
});

Clazz.newMeth(C$, 'parseWords$S', function (line) {
var words=Clazz.new_(1,{E:"String"},$I$(3,1));
var insideWord=!p$1.isSpace$C.apply(this, [line.charAt$I(0)]);
var last=0;
for (var i=0; i < line.length$(); i++) {
var c=line.charAt$I(i);
if (insideWord) {
if (p$1.isSpace$C.apply(this, [c])) {
words.add$TE(line.substring$I$I(last, i));
insideWord=false;
}} else {
if (!p$1.isSpace$C.apply(this, [c])) {
last=i;
insideWord=true;
}}}
if (insideWord) {
words.add$TE(line.substring$I(last));
}return words;
});

Clazz.newMeth(C$, 'isSpace$C', function (c) {
return c == " " || c == "\t" ;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
