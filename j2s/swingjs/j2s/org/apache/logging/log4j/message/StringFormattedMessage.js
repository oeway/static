(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.status.StatusLogger','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringFormattedMessage", null, null, 'org.apache.logging.log4j.message.Message');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(1).getLogger$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['messagePattern','formattedMessage'],'O',['argArray','Object[]','stringArgs','String[]','throwable','Throwable','locale','java.util.Locale']]
,['I',['HASHVAL'],'L',['serialVersionUID'],'O',['LOGGER','org.apache.logging.log4j.Logger']]]

Clazz.newMeth(C$, 'c$$java_util_Locale$S$OA', function (locale, messagePattern, $arguments) {
;C$.$init$.apply(this);
this.locale=locale;
this.messagePattern=messagePattern;
this.argArray=$arguments;
if ($arguments != null  && $arguments.length > 0  && Clazz.instanceOf($arguments[$arguments.length - 1], "java.lang.Throwable") ) {
this.throwable=$arguments[$arguments.length - 1];
}}, 1);

Clazz.newMeth(C$, 'c$$S$OA', function (messagePattern, $arguments) {
C$.c$$java_util_Locale$S$OA.apply(this, [, messagePattern, $arguments]);
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage == null ) {
this.formattedMessage=this.formatMessage$S$OA(this.messagePattern, this.argArray);
}return this.formattedMessage;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.messagePattern;
});

Clazz.newMeth(C$, 'getParameters$', function () {
if (this.argArray != null ) {
return this.argArray;
}return this.stringArgs;
});

Clazz.newMeth(C$, 'formatMessage$S$OA', function (msgPattern, args) {
try {
return String.format$java_util_Locale$S$OA(this.locale, msgPattern, args);
} catch (ife) {
if (Clazz.exceptionOf(ife,"java.util.IllegalFormatException")){
C$.LOGGER.error$S$Throwable("Unable to format msg: " + msgPattern, ife);
return msgPattern;
} else {
throw ife;
}
}
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.messagePattern != null  ? !this.messagePattern.equals$O(that.messagePattern) : that.messagePattern != null ) {
return false;
}return $I$(2).equals$OA$OA(this.stringArgs, that.stringArgs);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=this.messagePattern != null  ? this.messagePattern.hashCode$() : 0;
result=31 * result + (this.stringArgs != null  ? $I$(2).hashCode$OA(this.stringArgs) : 0);
return result;
});

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

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
