(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[[0,'java.util.Date','java.util.Collections','java.util.LinkedList','java.io.StringWriter','java.io.PrintWriter','org.scijava.log.LogLevel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogMessage");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['level'],'S',['message'],'O',['source','org.scijava.log.LogSource','throwable','Throwable','time','java.util.Date','attachments','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogSource$I$O$Throwable', function (source, level, message, throwable) {
;C$.$init$.apply(this);
this.source=source;
this.attachments=null;
this.level=level;
this.message=message == null  ? null : message.toString();
this.throwable=throwable;
this.time=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_log_LogSource$I$O', function (source, level, msg) {
C$.c$$org_scijava_log_LogSource$I$O$Throwable.apply(this, [source, level, msg, null]);
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return this.source;
});

Clazz.newMeth(C$, 'level$', function () {
return this.level;
});

Clazz.newMeth(C$, 'text$', function () {
return this.message;
});

Clazz.newMeth(C$, 'throwable$', function () {
return this.throwable;
});

Clazz.newMeth(C$, 'time$', function () {
return this.time;
});

Clazz.newMeth(C$, 'attachments$', function () {
if (this.attachments == null ) return $I$(2).emptyList$();
return $I$(2).unmodifiableCollection$java_util_Collection(this.attachments);
});

Clazz.newMeth(C$, 'attach$O', function (value) {
if (this.attachments == null ) this.attachments=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
this.attachments.add$TE(value);
});

Clazz.newMeth(C$, 'toString', function () {
var sw=Clazz.new_($I$(4,1));
var printer=Clazz.new_($I$(5,1).c$$java_io_Writer,[sw]);
printer.print$S("[" + $I$(6).prefix$I(this.level$()) + "] " );
printer.println$S(this.text$());
if (this.throwable$() != null ) {
this.throwable$().printStackTrace$java_io_PrintWriter(printer);
}return sw.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
