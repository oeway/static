(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'java.util.regex.Pattern','java.util.Arrays','java.text.MessageFormat','org.apache.logging.log4j.message.MessageFormatMessage','org.apache.logging.log4j.message.StringFormattedMessage','org.apache.logging.log4j.message.ParameterizedMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FormattedMessage", null, null, 'org.apache.logging.log4j.message.Message');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MSG_PATTERN=$I$(1).compile$S("%(\\d+\\$)?([-#+ 0,(\\<]*)?(\\d+)?(\\.\\d+)?([tT])?([a-zA-Z%])");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['messagePattern','formattedMessage'],'O',['argArray','Object[]','stringArgs','String[]','throwable','Throwable','message','org.apache.logging.log4j.message.Message','locale','java.util.Locale']]
,['I',['HASHVAL'],'L',['serialVersionUID'],'S',['FORMAT_SPECIFIER'],'O',['MSG_PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$$java_util_Locale$S$O', function (locale, messagePattern, arg) {
C$.c$$java_util_Locale$S$OA$Throwable.apply(this, [locale, messagePattern, Clazz.array(java.lang.Object, -1, [arg]), null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$O$O', function (locale, messagePattern, arg1, arg2) {
C$.c$$java_util_Locale$S$OA.apply(this, [locale, messagePattern, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$OA', function (locale, messagePattern, $arguments) {
C$.c$$java_util_Locale$S$OA$Throwable.apply(this, [locale, messagePattern, $arguments, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$OA$Throwable', function (locale, messagePattern, $arguments, throwable) {
;C$.$init$.apply(this);
this.locale=locale;
this.messagePattern=messagePattern;
this.argArray=$arguments;
this.throwable=throwable;
}, 1);

Clazz.newMeth(C$, 'c$$S$O', function (messagePattern, arg) {
C$.c$$S$OA$Throwable.apply(this, [messagePattern, Clazz.array(java.lang.Object, -1, [arg]), null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$O$O', function (messagePattern, arg1, arg2) {
C$.c$$S$OA.apply(this, [messagePattern, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$OA', function (messagePattern, $arguments) {
C$.c$$S$OA$Throwable.apply(this, [messagePattern, $arguments, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$OA$Throwable', function (messagePattern, $arguments, throwable) {
;C$.$init$.apply(this);
;
this.messagePattern=messagePattern;
this.argArray=$arguments;
this.throwable=throwable;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.messagePattern != null  ? !this.messagePattern.equals$O(that.messagePattern) : that.messagePattern != null ) {
return false;
}if (!$I$(2).equals$OA$OA(this.stringArgs, that.stringArgs)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.messagePattern;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage == null ) {
if (this.message == null ) {
this.message=this.getMessage$S$OA$Throwable(this.messagePattern, this.argArray, this.throwable);
}this.formattedMessage=this.message.getFormattedMessage$();
}return this.formattedMessage;
});

Clazz.newMeth(C$, 'getMessage$S$OA$Throwable', function (msgPattern, args, aThrowable) {
try {
var format=Clazz.new_($I$(3,1).c$$S,[msgPattern]);
var formats;
if (formats != null  && formats.length > 0 ) {
return Clazz.new_($I$(4,1).c$$java_util_Locale$S$OA,[this.locale, msgPattern, args]);
}} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
} else {
throw ignored;
}
}
try {
if (C$.MSG_PATTERN.matcher$CharSequence(msgPattern).find$()) {
return Clazz.new_($I$(5,1).c$$java_util_Locale$S$OA,[this.locale, msgPattern, args]);
}} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
} else {
throw ignored;
}
}
return Clazz.new_($I$(6,1).c$$S$OA$Throwable,[msgPattern, args, aThrowable]);
});

Clazz.newMeth(C$, 'getParameters$', function () {
if (this.argArray != null ) {
return this.argArray;
}return this.stringArgs;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
if (this.throwable != null ) {
return this.throwable;
}if (this.message == null ) {
this.message=this.getMessage$S$OA$Throwable(this.messagePattern, this.argArray, null);
}return this.message.getThrowable$();
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=this.messagePattern != null  ? this.messagePattern.hashCode$() : 0;
result=31 * result + (this.stringArgs != null  ? $I$(2).hashCode$OA(this.stringArgs) : 0);
return result;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
this.formattedMessage=$in.readUTF$();
this.messagePattern=$in.readUTF$();
var length=$in.readInt$();
this.stringArgs=Clazz.array(String, [length]);
for (var i=0; i < length; ++i) {
this.stringArgs[i]=$in.readUTF$();
}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.defaultWriteObject$();
this.getFormattedMessage$();
out.writeUTF$S(this.formattedMessage);
out.writeUTF$S(this.messagePattern);
out.writeInt$I(this.argArray.length);
this.stringArgs=Clazz.array(String, [this.argArray.length]);
var i=0;
for (var obj, $obj = 0, $$obj = this.argArray; $obj<$$obj.length&&((obj=($$obj[$obj])),1);$obj++) {
var string=String.valueOf$O(obj);
this.stringArgs[i]=string;
out.writeUTF$S(string);
++i;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
