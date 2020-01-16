(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.status.StatusLogger','java.text.MessageFormat','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MessageFormatMessage", null, null, 'org.apache.logging.log4j.message.Message');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(1).getLogger$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['messagePattern','formattedMessage'],'O',['parameters','Object[]','serializedParameters','String[]','throwable','Throwable','locale','java.util.Locale']]
,['I',['HASHVAL'],'L',['serialVersionUID'],'O',['LOGGER','org.apache.logging.log4j.Logger']]]

Clazz.newMeth(C$, 'c$$java_util_Locale$S$OA', function (locale, messagePattern, parameters) {
;C$.$init$.apply(this);
this.locale=locale;
this.messagePattern=messagePattern;
this.parameters=parameters;
var length=parameters == null  ? 0 : parameters.length;
if (length > 0 && Clazz.instanceOf(parameters[length - 1], "java.lang.Throwable") ) {
this.throwable=parameters[length - 1];
}}, 1);

Clazz.newMeth(C$, 'c$$S$OA', function (messagePattern, parameters) {
C$.c$$java_util_Locale$S$OA.apply(this, [, messagePattern, parameters]);
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage == null ) {
this.formattedMessage=this.formatMessage$S$OA(this.messagePattern, this.parameters);
}return this.formattedMessage;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.messagePattern;
});

Clazz.newMeth(C$, 'getParameters$', function () {
if (this.parameters != null ) {
return this.parameters;
}return this.serializedParameters;
});

Clazz.newMeth(C$, 'formatMessage$S$OA', function (msgPattern, args) {
try {
var temp=Clazz.new_($I$(2,1).c$$S$java_util_Locale,[msgPattern, this.locale]);
return temp.format$O(args);
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
}return $I$(3).equals$OA$OA(this.serializedParameters, that.serializedParameters);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=this.messagePattern != null  ? this.messagePattern.hashCode$() : 0;
result=31 * result + (this.serializedParameters != null  ? $I$(3).hashCode$OA(this.serializedParameters) : 0);
return result;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
this.getFormattedMessage$();
out.writeUTF$S(this.formattedMessage);
out.writeUTF$S(this.messagePattern);
var length=this.parameters == null  ? 0 : this.parameters.length;
out.writeInt$I(length);
this.serializedParameters=Clazz.array(String, [length]);
if (length > 0) {
for (var i=0; i < length; i++) {
this.serializedParameters[i]=String.valueOf$O(this.parameters[i]);
out.writeUTF$S(this.serializedParameters[i]);
}
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
this.parameters=null;
this.throwable=null;
this.formattedMessage=$in.readUTF$();
this.messagePattern=$in.readUTF$();
var length=$in.readInt$();
this.serializedParameters=Clazz.array(String, [length]);
for (var i=0; i < length; ++i) {
this.serializedParameters[i]=$in.readUTF$();
}
}, p$1);

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
