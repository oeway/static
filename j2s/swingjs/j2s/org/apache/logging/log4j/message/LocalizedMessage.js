(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.status.StatusLogger','org.apache.logging.log4j.message.FormattedMessage','java.util.ResourceBundle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LocalizedMessage", null, null, ['org.apache.logging.log4j.message.Message', 'org.apache.logging.log4j.message.LoggerNameAwareMessage']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(1).getLogger$();
}, 1);

C$.$fields$=[['S',['baseName','loggerName','key','formattedMessage'],'O',['resourceBundle','java.util.ResourceBundle','locale','java.util.Locale','logger','org.apache.logging.log4j.status.StatusLogger','stringArgs','String[]','argArray','Object[]','throwable','Throwable']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$OA', function (messagePattern, $arguments) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, null, messagePattern, $arguments]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$OA', function (baseName, key, $arguments) {
C$.c$$S$java_util_Locale$S$OA.apply(this, [baseName, null, key, $arguments]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$S$OA', function (bundle, key, $arguments) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, null, key, $arguments]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale$S$OA', function (baseName, locale, key, $arguments) {
;C$.$init$.apply(this);
this.key=key;
this.argArray=$arguments;
this.throwable=null;
this.baseName=baseName;
this.resourceBundle=null;
this.locale=locale;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$java_util_Locale$S$OA', function (bundle, locale, key, $arguments) {
;C$.$init$.apply(this);
this.key=key;
this.argArray=$arguments;
this.throwable=null;
this.baseName=null;
this.resourceBundle=bundle;
this.locale=locale;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$OA', function (locale, key, $arguments) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, locale, key, $arguments]);
}, 1);

Clazz.newMeth(C$, 'c$$S$O', function (messagePattern, arg) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, null, messagePattern, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$O', function (baseName, key, arg) {
C$.c$$S$java_util_Locale$S$OA.apply(this, [baseName, null, key, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$S', function (bundle, key) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, null, key, Clazz.array(java.lang.Object, -1, [])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$S$O', function (bundle, key, arg) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, null, key, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale$S$O', function (baseName, locale, key, arg) {
C$.c$$S$java_util_Locale$S$OA.apply(this, [baseName, locale, key, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$java_util_Locale$S$O', function (bundle, locale, key, arg) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, locale, key, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$O', function (locale, key, arg) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, locale, key, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$O$O', function (messagePattern, arg1, arg2) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, null, messagePattern, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$O$O', function (baseName, key, arg1, arg2) {
C$.c$$S$java_util_Locale$S$OA.apply(this, [baseName, null, key, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$S$O$O', function (bundle, key, arg1, arg2) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, null, key, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale$S$O$O', function (baseName, locale, key, arg1, arg2) {
C$.c$$S$java_util_Locale$S$OA.apply(this, [baseName, locale, key, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle$java_util_Locale$S$O$O', function (bundle, locale, key, arg1, arg2) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [bundle, locale, key, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$S$O$O', function (locale, key, arg1, arg2) {
C$.c$$java_util_ResourceBundle$java_util_Locale$S$OA.apply(this, [null, locale, key, Clazz.array(java.lang.Object, -1, [arg1, arg2])]);
}, 1);

Clazz.newMeth(C$, 'setLoggerName$S', function (name) {
this.loggerName=name;
});

Clazz.newMeth(C$, 'getLoggerName$', function () {
return this.loggerName;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage != null ) {
return this.formattedMessage;
}var bundle=this.resourceBundle;
if (bundle == null ) {
if (this.baseName != null ) {
bundle=this.getResourceBundle$S$java_util_Locale$Z(this.baseName, this.locale, false);
} else {
bundle=this.getResourceBundle$S$java_util_Locale$Z(this.loggerName, this.locale, true);
}}var myKey=this.getFormat$();
var msgPattern=(bundle == null  || !bundle.containsKey$S(myKey) ) ? myKey : bundle.getString$S(myKey);
var array=this.argArray == null  ? this.stringArgs : this.argArray;
var msg=Clazz.new_($I$(2,1).c$$S$OA,[msgPattern, array]);
this.formattedMessage=msg.getFormattedMessage$();
this.throwable=msg.getThrowable$();
return this.formattedMessage;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getParameters$', function () {
if (this.argArray != null ) {
return this.argArray;
}return this.stringArgs;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$, 'getResourceBundle$S$java_util_Locale$Z', function (rbBaseName, resourceBundleLocale, loop) {
var rb=null;
if (rbBaseName == null ) {
return null;
}try {
if (resourceBundleLocale != null ) {
rb=$I$(3).getBundle$S$java_util_Locale(rbBaseName, resourceBundleLocale);
} else {
rb=$I$(3).getBundle$S(rbBaseName);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.MissingResourceException")){
if (!loop) {
this.logger.debug$S("Unable to locate ResourceBundle " + rbBaseName);
return null;
}} else {
throw ex;
}
}
var substr=rbBaseName;
var i;
while (rb == null  && (i=substr.lastIndexOf$I(".")) > 0 ){
substr=substr.substring$I$I(0, i);
try {
if (resourceBundleLocale != null ) {
rb=$I$(3).getBundle$S$java_util_Locale(substr, resourceBundleLocale);
} else {
rb=$I$(3).getBundle$S(substr);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.MissingResourceException")){
this.logger.debug$S("Unable to locate ResourceBundle " + substr);
} else {
throw ex;
}
}
}
return rb;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.defaultWriteObject$();
this.getFormattedMessage$();
out.writeUTF$S(this.formattedMessage);
out.writeUTF$S(this.key);
out.writeUTF$S(this.baseName);
out.writeInt$I(this.argArray.length);
this.stringArgs=Clazz.array(String, [this.argArray.length]);
var i=0;
for (var obj, $obj = 0, $$obj = this.argArray; $obj<$$obj.length&&((obj=($$obj[$obj])),1);$obj++) {
this.stringArgs[i]=obj.toString();
++i;
}
out.writeObject$O(this.stringArgs);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
this.formattedMessage=$in.readUTF$();
this.key=$in.readUTF$();
this.baseName=$in.readUTF$();
$in.readInt$();
this.stringArgs=$in.readObject$();
this.logger=$I$(1).getLogger$();
this.resourceBundle=null;
this.argArray=null;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
