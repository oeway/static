(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.message.ThreadDumpMessage','Thread','java.util.HashMap','org.apache.logging.log4j.message.BasicThreadInformation','java.util.ServiceLoader',['org.apache.logging.log4j.message.ThreadDumpMessage','.ThreadInfoFactory'],'org.apache.logging.log4j.status.StatusLogger',['org.apache.logging.log4j.message.ThreadDumpMessage','.BasicThreadInfoFactory'],'StringBuilder',['org.apache.logging.log4j.message.ThreadDumpMessage','.ThreadDumpMessageProxy']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThreadDumpMessage", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.apache.logging.log4j.message.Message', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['title','formattedMessage'],'O',['threads','java.util.Map']]
,['L',['serialVersionUID'],'O',['FACTORY','org.apache.logging.log4j.message.ThreadDumpMessage.ThreadInfoFactory']]]

Clazz.newMeth(C$, 'c$$S', function (title) {
;C$.$init$.apply(this);
this.title=title == null  ? "" : title;
this.threads=C$.getFactory$().createThreadInfo$();
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (formattedMsg, title) {
;C$.$init$.apply(this);
this.formattedMessage=formattedMsg;
this.title=title == null  ? "" : title;
}, 1);

Clazz.newMeth(C$, 'getFactory$', function () {
if (C$.FACTORY == null ) {
C$.FACTORY=C$.initFactory$ClassLoader(Clazz.getClass(C$).getClassLoader$());
}return C$.FACTORY;
}, 1);

Clazz.newMeth(C$, 'initFactory$ClassLoader', function (classLoader) {
var serviceLoader=$I$(5).load$Class$ClassLoader(Clazz.getClass($I$(6),['createThreadInfo$']), classLoader);
var result=null;
try {
var iterator=serviceLoader.iterator$();
while (result == null  && iterator.hasNext$() ){
result=iterator.next$();
}
} catch (unavailable) {
if (Clazz.exceptionOf(unavailable,"java.util.ServiceConfigurationError") || Clazz.exceptionOf(unavailable,"LinkageError") || Clazz.exceptionOf(unavailable,"Exception")){
$I$(7).getLogger$().info$S$O("ThreadDumpMessage uses BasicThreadInfoFactory: could not load extended ThreadInfoFactory: {}", unavailable.toString());
result=null;
} else {
throw unavailable;
}
}
return result == null  ? Clazz.new_($I$(8,1)) : result;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage != null ) {
return this.formattedMessage;
}var sb=Clazz.new_($I$(9,1).c$$I,[255]);
this.formatTo$StringBuilder(sb);
return sb.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (sb) {
sb.append$S(this.title);
if (this.title.length$() > 0) {
sb.append$C("\n");
}for (var entry, $entry = this.threads.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var info=entry.getKey$();
info.printThreadInfo$StringBuilder(sb);
info.printStack$StringBuilder$StackTraceElementA(sb, entry.getValue$());
sb.append$C("\n");
}
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.title == null  ? "" : this.title;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return null;
});

Clazz.newMeth(C$, 'writeReplace$', function () {
return Clazz.new_($I$(10,1).c$$org_apache_logging_log4j_message_ThreadDumpMessage,[this]);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (stream) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$1);

Clazz.newMeth(C$, 'getThrowable$', function () {
return null;
});
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.ThreadDumpMessage',null,['org.apache.logging.log4j.message.AsynchronouslyFormattable']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadDumpMessage, "ThreadDumpMessageProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['formattedMsg','title']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_ThreadDumpMessage', function (msg) {
;C$.$init$.apply(this);
this.formattedMsg=msg.getFormattedMessage$();
this.title=msg.title;
}, 1);

Clazz.newMeth(C$, 'readResolve$', function () {
return Clazz.new_($I$(1,1).c$$S$S,[this.formattedMsg, this.title]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ThreadDumpMessage, "ThreadInfoFactory", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadDumpMessage, "BasicThreadInfoFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.apache.logging.log4j.message.ThreadDumpMessage','org.apache.logging.log4j.message.ThreadDumpMessage.ThreadInfoFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createThreadInfo$', function () {
var map=$I$(2).getAllStackTraces$();
var threads=Clazz.new_(1,{V:"org.apache.logging.log4j.message.ThreadInformation",K:"StackTraceElement[]"},$I$(3,1).c$$I,[map.size$()]);
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
threads.put$TK$TV(Clazz.new_($I$(4,1).c$$Thread,[entry.getKey$()]), entry.getValue$());
}
return threads;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
