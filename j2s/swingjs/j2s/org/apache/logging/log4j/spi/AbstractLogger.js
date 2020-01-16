(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),p$1={},I$=[[0,'org.apache.logging.log4j.MarkerManager','org.apache.logging.log4j.message.ReusableMessageFactory','org.apache.logging.log4j.message.ParameterizedMessageFactory','org.apache.logging.log4j.message.DefaultFlowMessageFactory','ThreadLocal','org.apache.logging.log4j.status.StatusLogger','org.apache.logging.log4j.Level','org.apache.logging.log4j.util.Constants','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.message.MessageFactory','org.apache.logging.log4j.message.FlowMessageFactory','org.apache.logging.log4j.spi.MessageFactory2Adapter','org.apache.logging.log4j.util.Strings','org.apache.logging.log4j.message.SimpleMessage','org.apache.logging.log4j.message.ParameterizedMessage','StringBuilder','org.apache.logging.log4j.util.LambdaUtil','org.apache.logging.log4j.message.StringFormattedMessage','org.apache.logging.log4j.util.StackLocatorUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLogger", null, null, ['org.apache.logging.log4j.spi.ExtendedLogger', 'org.apache.logging.log4j.spi.LocationAwareLogger', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.FLOW_MARKER=$I$(1).getMarker$S("FLOW");
C$.ENTRY_MARKER=$I$(1).getMarker$S("ENTER").setParents$org_apache_logging_log4j_MarkerA([C$.FLOW_MARKER]);
C$.EXIT_MARKER=$I$(1).getMarker$S("EXIT").setParents$org_apache_logging_log4j_MarkerA([C$.FLOW_MARKER]);
C$.EXCEPTION_MARKER=$I$(1).getMarker$S("EXCEPTION");
C$.THROWING_MARKER=$I$(1).getMarker$S("THROWING").setParents$org_apache_logging_log4j_MarkerA([C$.EXCEPTION_MARKER]);
C$.CATCHING_MARKER=$I$(1).getMarker$S("CATCHING").setParents$org_apache_logging_log4j_MarkerA([C$.EXCEPTION_MARKER]);
C$.DEFAULT_MESSAGE_FACTORY_CLASS=C$.createClassForProperty$S$Class$Class("log4j2.messageFactory", Clazz.getClass($I$(2)), Clazz.getClass($I$(3)));
C$.DEFAULT_FLOW_MESSAGE_FACTORY_CLASS=C$.createFlowClassForProperty$S$Class("log4j2.flowMessageFactory", Clazz.getClass($I$(4)));
C$.FQCN=Clazz.getClass(C$).getName$();
C$.recursionDepthHolder=Clazz.new_(1,{T:"int[]"},$I$(5,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['name'],'O',['messageFactory','org.apache.logging.log4j.message.MessageFactory2','flowMessageFactory','org.apache.logging.log4j.message.FlowMessageFactory']]
,['L',['serialVersionUID'],'S',['FQCN','THROWING','CATCHING'],'O',['FLOW_MARKER','org.apache.logging.log4j.Marker','+ENTRY_MARKER','+EXIT_MARKER','+EXCEPTION_MARKER','+THROWING_MARKER','+CATCHING_MARKER','DEFAULT_MESSAGE_FACTORY_CLASS','Class','+DEFAULT_FLOW_MESSAGE_FACTORY_CLASS','recursionDepthHolder','ThreadLocal']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.name=this.getClass$().getName$();
this.messageFactory=C$.createDefaultMessageFactory$();
this.flowMessageFactory=C$.createDefaultFlowMessageFactory$();
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$S$org_apache_logging_log4j_message_MessageFactory.apply(this, [name, C$.createDefaultMessageFactory$()]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
;C$.$init$.apply(this);
this.name=name;
this.messageFactory=messageFactory == null  ? C$.createDefaultMessageFactory$() : C$.narrow$org_apache_logging_log4j_message_MessageFactory(messageFactory);
this.flowMessageFactory=C$.createDefaultFlowMessageFactory$();
}, 1);

Clazz.newMeth(C$, 'checkMessageFactory$org_apache_logging_log4j_spi_ExtendedLogger$org_apache_logging_log4j_message_MessageFactory', function (logger, messageFactory) {
var name=logger.getName$();
var loggerMessageFactory=logger.getMessageFactory$();
if (messageFactory != null  && !loggerMessageFactory.equals$O(messageFactory) ) {
$I$(6).getLogger$().warn$S$O$O$O("The Logger {} was created with the message factory {} and is now requested with the message factory {}, which may create log events with unexpected formatting.", name, loggerMessageFactory, messageFactory);
} else if (messageFactory == null  && !loggerMessageFactory.getClass$().equals$O(C$.DEFAULT_MESSAGE_FACTORY_CLASS) ) {
$I$(6).getLogger$().warn$S$O$O$O("The Logger {} was created with the message factory {} and is now requested with a null message factory (defaults to {}), which may create log events with unexpected formatting.", name, loggerMessageFactory, C$.DEFAULT_MESSAGE_FACTORY_CLASS.getName$());
}}, 1);

Clazz.newMeth(C$, 'catching$org_apache_logging_log4j_Level$Throwable', function (level, t) {
this.catching$S$org_apache_logging_log4j_Level$Throwable(C$.FQCN, level, t);
});

Clazz.newMeth(C$, 'catching$S$org_apache_logging_log4j_Level$Throwable', function (fqcn, level, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, C$.CATCHING_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, C$.CATCHING_MARKER, this.catchingMsg$Throwable(t), t]);
}});

Clazz.newMeth(C$, 'catching$Throwable', function (t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).ERROR, C$.CATCHING_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, $I$(7).ERROR, C$.CATCHING_MARKER, this.catchingMsg$Throwable(t), t]);
}});

Clazz.newMeth(C$, 'catchingMsg$Throwable', function (t) {
return this.messageFactory.newMessage$S("Catching");
});

Clazz.newMeth(C$, 'createClassForProperty$S$Class$Class', function (property, reusableParameterizedMessageFactoryClass, parameterizedMessageFactoryClass) {
try {
var fallback=$I$(8).ENABLE_THREADLOCALS ? reusableParameterizedMessageFactoryClass.getName$() : parameterizedMessageFactoryClass.getName$();
var clsName=$I$(9).getProperties$().getStringProperty$S$S(property, fallback);
return $I$(10).loadClass$S(clsName).asSubclass$Class(Clazz.getClass($I$(11),['newMessage$O','newMessage$S','newMessage$S$OA']));
} catch (t) {
return parameterizedMessageFactoryClass;
}
}, 1);

Clazz.newMeth(C$, 'createFlowClassForProperty$S$Class', function (property, defaultFlowMessageFactoryClass) {
try {
var clsName=$I$(9).getProperties$().getStringProperty$S$S(property, defaultFlowMessageFactoryClass.getName$());
return $I$(10).loadClass$S(clsName).asSubclass$Class(Clazz.getClass($I$(12),['newEntryMessage$org_apache_logging_log4j_message_Message','newExitMessage$O$org_apache_logging_log4j_message_Message','newExitMessage$org_apache_logging_log4j_message_EntryMessage','newExitMessage$O$org_apache_logging_log4j_message_EntryMessage']));
} catch (t) {
return defaultFlowMessageFactoryClass;
}
}, 1);

Clazz.newMeth(C$, 'createDefaultMessageFactory$', function () {
try {
var result=C$.DEFAULT_MESSAGE_FACTORY_CLASS.newInstance$();
return C$.narrow$org_apache_logging_log4j_message_MessageFactory(result);
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'narrow$org_apache_logging_log4j_message_MessageFactory', function (result) {
if (Clazz.instanceOf(result, "org.apache.logging.log4j.message.MessageFactory2")) {
return result;
}return Clazz.new_($I$(13,1).c$$org_apache_logging_log4j_message_MessageFactory,[result]);
}, 1);

Clazz.newMeth(C$, 'createDefaultFlowMessageFactory$', function () {
try {
return C$.DEFAULT_FLOW_MESSAGE_FACTORY_CLASS.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msg, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).DEBUG, marker, message, params);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).DEBUG, marker, message, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).DEBUG, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).DEBUG, null, msg, t);
});

Clazz.newMeth(C$, 'debug$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, null);
});

Clazz.newMeth(C$, 'debug$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, t);
});

Clazz.newMeth(C$, 'debug$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, null);
});

Clazz.newMeth(C$, 'debug$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, t);
});

Clazz.newMeth(C$, 'debug$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, null);
});

Clazz.newMeth(C$, 'debug$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).DEBUG, null, message, params);
});

Clazz.newMeth(C$, 'debug$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).DEBUG, null, message, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).DEBUG, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).DEBUG, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).DEBUG, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'debug$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).DEBUG, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).DEBUG, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).DEBUG, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).DEBUG, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'debug$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'debug$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).DEBUG, null, message, p0);
});

Clazz.newMeth(C$, 'debug$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1);
});

Clazz.newMeth(C$, 'debug$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'debug$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).DEBUG, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'enter$S$S$org_apache_logging_log4j_util_SupplierA', function (fqcn, format, paramSuppliers) {
var entryMsg=null;
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, entryMsg=this.entryMsg$S$org_apache_logging_log4j_util_SupplierA(format, paramSuppliers), null]);
}return entryMsg;
});

Clazz.newMeth(C$, 'enter$S$S$org_apache_logging_log4j_util_MessageSupplierA', function (fqcn, format, paramSuppliers) {
var entryMsg=null;
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, entryMsg=this.entryMsg$S$org_apache_logging_log4j_util_MessageSupplierA(format, paramSuppliers), null]);
}return entryMsg;
});

Clazz.newMeth(C$, 'enter$S$S$OA', function (fqcn, format, params) {
var entryMsg=null;
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, entryMsg=this.entryMsg$S$OA(format, params), null]);
}return entryMsg;
});

Clazz.newMeth(C$, 'enter$S$org_apache_logging_log4j_util_MessageSupplier', function (fqcn, msgSupplier) {
var message=null;
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, message=this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(msgSupplier.get$()), null]);
}return message;
});

Clazz.newMeth(C$, 'enter$S$org_apache_logging_log4j_message_Message', function (fqcn, message) {
var flowMessage=null;
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, flowMessage=this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(message), null]);
}return flowMessage;
});

Clazz.newMeth(C$, 'entry$', function () {
this.entry$S$OA(C$.FQCN, null);
});

Clazz.newMeth(C$, 'entry$OA', function (params) {
this.entry$S$OA(C$.FQCN, params);
});

Clazz.newMeth(C$, 'entry$S$OA', function (fqcn, params) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, C$.ENTRY_MARKER, null, null)) {
if (params == null ) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, this.entryMsg$S$org_apache_logging_log4j_util_SupplierA(null, null), null]);
} else {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.ENTRY_MARKER, this.entryMsg$S$OA(null, params), null]);
}}});

Clazz.newMeth(C$, 'entryMsg$S$OA', function (format, params) {
var count=params == null  ? 0 : params.length;
if (count == 0) {
if ($I$(14).isEmpty$CharSequence(format)) {
return this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(null);
}return this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(Clazz.new_($I$(15,1).c$$S,[format]));
}if (format != null ) {
return this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(Clazz.new_($I$(16,1).c$$S$OA,[format, params]));
}var sb=Clazz.new_($I$(17,1));
sb.append$S("params(");
for (var i=0; i < count; i++) {
if (i > 0) {
sb.append$S(", ");
}var parm=params[i];
sb.append$S(Clazz.instanceOf(parm, "org.apache.logging.log4j.message.Message") ? (parm).getFormattedMessage$() : String.valueOf$O(parm));
}
sb.append$C(")");
return this.flowMessageFactory.newEntryMessage$org_apache_logging_log4j_message_Message(Clazz.new_($I$(15,1).c$$CharSequence,[sb]));
});

Clazz.newMeth(C$, 'entryMsg$S$org_apache_logging_log4j_util_MessageSupplierA', function (format, paramSuppliers) {
var count=paramSuppliers == null  ? 0 : paramSuppliers.length;
var params=Clazz.array(java.lang.Object, [count]);
for (var i=0; i < count; i++) {
params[i]=paramSuppliers[i].get$();
params[i]=params[i] != null  ? (params[i]).getFormattedMessage$() : null;
}
return this.entryMsg$S$OA(format, params);
});

Clazz.newMeth(C$, 'entryMsg$S$org_apache_logging_log4j_util_SupplierA', function (format, paramSuppliers) {
var count=paramSuppliers == null  ? 0 : paramSuppliers.length;
var params=Clazz.array(java.lang.Object, [count]);
for (var i=0; i < count; i++) {
params[i]=paramSuppliers[i].get$();
if (Clazz.instanceOf(params[i], "org.apache.logging.log4j.message.Message")) {
params[i]=(params[i]).getFormattedMessage$();
}}
return this.entryMsg$S$OA(format, params);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).ERROR, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).ERROR, marker, msg, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).ERROR, marker, message, params);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).ERROR, marker, message, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).ERROR, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).ERROR, null, msg, t);
});

Clazz.newMeth(C$, 'error$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).ERROR, null, message, null);
});

Clazz.newMeth(C$, 'error$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).ERROR, null, message, t);
});

Clazz.newMeth(C$, 'error$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).ERROR, null, message, null);
});

Clazz.newMeth(C$, 'error$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).ERROR, null, message, t);
});

Clazz.newMeth(C$, 'error$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).ERROR, null, message, null);
});

Clazz.newMeth(C$, 'error$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).ERROR, null, message, params);
});

Clazz.newMeth(C$, 'error$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).ERROR, null, message, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).ERROR, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).ERROR, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).ERROR, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).ERROR, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).ERROR, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'error$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).ERROR, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).ERROR, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).ERROR, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).ERROR, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).ERROR, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).ERROR, marker, message, p0);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'error$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'error$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).ERROR, null, message, p0);
});

Clazz.newMeth(C$, 'error$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1);
});

Clazz.newMeth(C$, 'error$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'error$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).ERROR, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'exit$', function () {
this.exit$S$TR(C$.FQCN, null);
});

Clazz.newMeth(C$, 'exit$TR', function (result) {
return this.exit$S$TR(C$.FQCN, result);
});

Clazz.newMeth(C$, 'exit$S$TR', function (fqcn, result) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable($I$(7).TRACE, C$.EXIT_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.EXIT_MARKER, this.exitMsg$S$O(null, result), null]);
}return result;
});

Clazz.newMeth(C$, 'exit$S$S$TR', function (fqcn, format, result) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable($I$(7).TRACE, C$.EXIT_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, $I$(7).TRACE, C$.EXIT_MARKER, this.exitMsg$S$O(format, result), null]);
}return result;
});

Clazz.newMeth(C$, 'exitMsg$S$O', function (format, result) {
if (result == null ) {
if (format == null ) {
return this.messageFactory.newMessage$S("Exit");
}return this.messageFactory.newMessage$S("Exit: " + format);
}if (format == null ) {
return this.messageFactory.newMessage$S("Exit with(" + result + ')' );
}return this.messageFactory.newMessage$S$O("Exit: " + format, result);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).FATAL, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).FATAL, marker, msg, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).FATAL, marker, message, params);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).FATAL, marker, message, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).FATAL, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).FATAL, null, msg, t);
});

Clazz.newMeth(C$, 'fatal$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).FATAL, null, message, null);
});

Clazz.newMeth(C$, 'fatal$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).FATAL, null, message, t);
});

Clazz.newMeth(C$, 'fatal$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).FATAL, null, message, null);
});

Clazz.newMeth(C$, 'fatal$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).FATAL, null, message, t);
});

Clazz.newMeth(C$, 'fatal$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).FATAL, null, message, null);
});

Clazz.newMeth(C$, 'fatal$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).FATAL, null, message, params);
});

Clazz.newMeth(C$, 'fatal$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).FATAL, null, message, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).FATAL, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).FATAL, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).FATAL, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).FATAL, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).FATAL, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'fatal$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).FATAL, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).FATAL, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).FATAL, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).FATAL, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).FATAL, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).FATAL, marker, message, p0);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'fatal$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'fatal$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).FATAL, null, message, p0);
});

Clazz.newMeth(C$, 'fatal$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'fatal$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).FATAL, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'getMessageFactory$', function () {
return this.messageFactory;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).INFO, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).INFO, marker, msg, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).INFO, marker, message, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).INFO, marker, message, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).INFO, marker, message, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).INFO, marker, message, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).INFO, marker, message, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).INFO, marker, message, params);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).INFO, marker, message, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).INFO, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).INFO, null, msg, t);
});

Clazz.newMeth(C$, 'info$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).INFO, null, message, null);
});

Clazz.newMeth(C$, 'info$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).INFO, null, message, t);
});

Clazz.newMeth(C$, 'info$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).INFO, null, message, null);
});

Clazz.newMeth(C$, 'info$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).INFO, null, message, t);
});

Clazz.newMeth(C$, 'info$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).INFO, null, message, null);
});

Clazz.newMeth(C$, 'info$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).INFO, null, message, params);
});

Clazz.newMeth(C$, 'info$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).INFO, null, message, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).INFO, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).INFO, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).INFO, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).INFO, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).INFO, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'info$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).INFO, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).INFO, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).INFO, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).INFO, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).INFO, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).INFO, marker, message, p0);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'info$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'info$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).INFO, null, message, p0);
});

Clazz.newMeth(C$, 'info$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1);
});

Clazz.newMeth(C$, 'info$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'info$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).INFO, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'isDebugEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S($I$(7).DEBUG, null, null);
});

Clazz.newMeth(C$, 'isDebugEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).DEBUG, marker, null, null);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level', function (level) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, null, null, null);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker', function (level, marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, null, null);
});

Clazz.newMeth(C$, 'isErrorEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).ERROR, null, null, null);
});

Clazz.newMeth(C$, 'isErrorEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).ERROR, marker, null, null);
});

Clazz.newMeth(C$, 'isFatalEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).FATAL, null, null, null);
});

Clazz.newMeth(C$, 'isFatalEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).FATAL, marker, null, null);
});

Clazz.newMeth(C$, 'isInfoEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).INFO, null, null, null);
});

Clazz.newMeth(C$, 'isInfoEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).INFO, marker, null, null);
});

Clazz.newMeth(C$, 'isTraceEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, null, null, null);
});

Clazz.newMeth(C$, 'isTraceEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).TRACE, marker, null, null);
});

Clazz.newMeth(C$, 'isWarnEnabled$', function () {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).WARN, null, null, null);
});

Clazz.newMeth(C$, 'isWarnEnabled$org_apache_logging_log4j_Marker', function (marker) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable($I$(7).WARN, marker, null, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (level, marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, level, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (level, marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, level, marker, msg, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence', function (level, marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, level, marker, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (level, marker, message, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(level, marker, message, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, level, marker, message, t);
}});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O', function (level, marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, level, marker, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (level, marker, message, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, message, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, level, marker, message, t);
}});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (level, marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, level, marker, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (level, marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, level, marker, message, params);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (level, marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, level, marker, message, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_message_Message', function (level, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, level, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_message_Message$Throwable', function (level, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, level, null, msg, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$CharSequence', function (level, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, level, null, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$CharSequence$Throwable', function (level, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, level, null, message, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$O', function (level, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, level, null, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$O$Throwable', function (level, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, level, null, message, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S', function (level, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, level, null, message, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$OA', function (level, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, level, null, message, params);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$Throwable', function (level, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, level, null, message, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_util_Supplier', function (level, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, level, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_util_Supplier$Throwable', function (level, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, level, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (level, marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, level, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (level, marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, level, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (level, marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, level, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$org_apache_logging_log4j_util_SupplierA', function (level, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, level, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (level, marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, level, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (level, marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, level, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_util_MessageSupplier', function (level, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, level, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (level, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, level, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (level, marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, level, marker, message, p0);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (level, marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, level, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (level, marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (level, marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O', function (level, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, level, null, message, p0);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O', function (level, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, level, null, message, p0, p1);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O', function (level, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, level, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O', function (level, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$S$O$O$O$O$O$O$O$O$O$O', function (level, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, level, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, level, marker, msg, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(level, marker, msg, t)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, t]);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (fqcn, level, marker, msgSupplier, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, msgSupplier, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(fqcn, level, marker, msgSupplier, t);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (fqcn, level, marker, message, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, message, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(fqcn, level, marker, message, t);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (fqcn, level, marker, message, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(level, marker, message, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(fqcn, level, marker, message, t);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (fqcn, level, marker, msgSupplier, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, msgSupplier, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(fqcn, level, marker, msgSupplier, t);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (fqcn, level, marker, message) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S(level, marker, message)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S(fqcn, level, marker, message);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (fqcn, level, marker, message, paramSuppliers) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S(level, marker, message)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(fqcn, level, marker, message, paramSuppliers);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (fqcn, level, marker, message, params) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(level, marker, message, params)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(fqcn, level, marker, message, params);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (fqcn, level, marker, message, p0) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(level, marker, message, p0)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(fqcn, level, marker, message, p0);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (fqcn, level, marker, message, p0, p1) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(level, marker, message, p0, p1)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(fqcn, level, marker, message, p0, p1);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (fqcn, level, marker, message, p0, p1, p2) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(level, marker, message, p0, p1, p2)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(fqcn, level, marker, message, p0, p1, p2);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(level, marker, message, p0, p1, p2, p3)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4, p5);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
}});

Clazz.newMeth(C$, 'logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (fqcn, level, marker, message, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(level, marker, message, t)) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(fqcn, level, marker, message, t);
}});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (fqcn, level, marker, message, t) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, this.messageFactory.newMessage$CharSequence(message), t]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (fqcn, level, marker, message, t) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, this.messageFactory.newMessage$O(message), t]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (fqcn, level, marker, msgSupplier, t) {
var message=$I$(18).get$org_apache_logging_log4j_util_MessageSupplier(msgSupplier);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, message, (t == null  && message != null  ) ? message.getThrowable$() : t]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (fqcn, level, marker, msgSupplier, t) {
var message=$I$(18).getMessage$org_apache_logging_log4j_util_Supplier$org_apache_logging_log4j_message_MessageFactory(msgSupplier, this.messageFactory);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, message, (t == null  && message != null  ) ? message.getThrowable$() : t]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (fqcn, level, marker, message, t) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, this.messageFactory.newMessage$S(message), t]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (fqcn, level, marker, message) {
var msg=this.messageFactory.newMessage$S(message);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (fqcn, level, marker, message, params) {
var msg=this.messageFactory.newMessage$S$OA(message, params);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (fqcn, level, marker, message, p0) {
var msg=this.messageFactory.newMessage$S$O(message, p0);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (fqcn, level, marker, message, p0, p1) {
var msg=this.messageFactory.newMessage$S$O$O(message, p0, p1);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (fqcn, level, marker, message, p0, p1, p2) {
var msg=this.messageFactory.newMessage$S$O$O$O(message, p0, p1, p2);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3) {
var msg=this.messageFactory.newMessage$S$O$O$O$O(message, p0, p1, p2, p3);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O(message, p0, p1, p2, p3, p4);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (fqcn, level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
var msg=this.messageFactory.newMessage$S$O$O$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (fqcn, level, marker, message, paramSuppliers) {
var msg=this.messageFactory.newMessage$S$OA(message, $I$(18).getAll$org_apache_logging_log4j_util_SupplierA(paramSuppliers));
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, msg.getThrowable$()]);
});

Clazz.newMeth(C$, ['logMessage$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$StackTraceElement$org_apache_logging_log4j_message_Message$Throwable','logMessage$'], function (level, marker, fqcn, location, message, throwable) {
try {
C$.incrementRecursionDepth$();
this.log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$StackTraceElement$org_apache_logging_log4j_message_Message$Throwable(level, marker, fqcn, location, message, throwable);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
p$1.handleLogMessageException$Exception$S$org_apache_logging_log4j_message_Message.apply(this, [ex, fqcn, message]);
} else {
throw ex;
}
} finally {
C$.decrementRecursionDepth$();
$I$(2).release$org_apache_logging_log4j_message_Message(message);
}
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$StackTraceElement$org_apache_logging_log4j_message_Message$Throwable', function (level, marker, fqcn, location, message, throwable) {
this.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, level, marker, message, throwable);
});

Clazz.newMeth(C$, 'printf$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (level, marker, format, params) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(level, marker, format, params)) {
var msg=Clazz.new_($I$(19,1).c$$S$OA,[format, params]);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, level, marker, msg, msg.getThrowable$()]);
}});

Clazz.newMeth(C$, 'printf$org_apache_logging_log4j_Level$S$OA', function (level, format, params) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(level, null, format, params)) {
var msg=Clazz.new_($I$(19,1).c$$S$OA,[format, params]);
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, level, null, msg, msg.getThrowable$()]);
}});

Clazz.newMeth(C$, 'logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, level, marker, msg, throwable) {
try {
p$1.logMessageTrackRecursion$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, marker, msg, throwable]);
} finally {
$I$(2).release$org_apache_logging_log4j_message_Message(msg);
}
}, p$1);

Clazz.newMeth(C$, 'logMessageTrackRecursion$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, level, marker, msg, throwable) {
try {
C$.incrementRecursionDepth$();
p$1.tryLogMessage$S$StackTraceElement$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, p$1.getLocation$S.apply(this, [fqcn]), level, marker, msg, throwable]);
} finally {
C$.decrementRecursionDepth$();
}
}, p$1);

Clazz.newMeth(C$, 'getRecursionDepthHolder$', function () {
var result=C$.recursionDepthHolder.get$();
if (result == null ) {
result=Clazz.array(Integer.TYPE, [1]);
C$.recursionDepthHolder.set$TT(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'incrementRecursionDepth$', function () {
C$.getRecursionDepthHolder$()[0]++;
}, 1);

Clazz.newMeth(C$, 'decrementRecursionDepth$', function () {
var depth=C$.getRecursionDepthHolder$();
depth[0]--;
if (depth[0] < 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Recursion depth became negative: " + depth[0]]);
}}, 1);

Clazz.newMeth(C$, 'getRecursionDepth$', function () {
return C$.getRecursionDepthHolder$()[0];
}, 1);

Clazz.newMeth(C$, 'tryLogMessage$S$StackTraceElement$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, location, level, marker, msg, throwable) {
try {
this.log$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$StackTraceElement$org_apache_logging_log4j_message_Message$Throwable(level, marker, fqcn, location, msg, throwable);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.handleLogMessageException$Exception$S$org_apache_logging_log4j_message_Message.apply(this, [e, fqcn, msg]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getLocation$S', function (fqcn) {
return this.requiresLocation$() ? $I$(20).calcLocation$S(fqcn) : null;
}, p$1);

Clazz.newMeth(C$, 'handleLogMessageException$Exception$S$org_apache_logging_log4j_message_Message', function (exception, fqcn, msg) {
if (Clazz.instanceOf(exception, "org.apache.logging.log4j.LoggingException")) {
throw exception;
}var format=msg.getFormat$();
var formatLength=format == null  ? 4 : format.length$();
var sb=Clazz.new_($I$(17,1).c$$I,[formatLength + 100]);
sb.append$S(fqcn);
sb.append$S(" caught ");
sb.append$S(exception.getClass$().getName$());
sb.append$S(" logging ");
sb.append$S(msg.getClass$().getSimpleName$());
sb.append$S(": ");
sb.append$S(format);
$I$(6).getLogger$().warn$S$Throwable(sb.toString(), exception);
}, p$1);

Clazz.newMeth(C$, 'throwing$TT', function (t) {
return this.throwing$S$org_apache_logging_log4j_Level$TT(C$.FQCN, $I$(7).ERROR, t);
});

Clazz.newMeth(C$, 'throwing$org_apache_logging_log4j_Level$TT', function (level, t) {
return this.throwing$S$org_apache_logging_log4j_Level$TT(C$.FQCN, level, t);
});

Clazz.newMeth(C$, 'throwing$S$org_apache_logging_log4j_Level$TT', function (fqcn, level, t) {
if (this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, C$.THROWING_MARKER, null, null)) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [fqcn, level, C$.THROWING_MARKER, this.throwingMsg$Throwable(t), t]);
}return t;
});

Clazz.newMeth(C$, 'throwingMsg$Throwable', function (t) {
return this.messageFactory.newMessage$S("Throwing");
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).TRACE, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).TRACE, marker, msg, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).TRACE, marker, message, params);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).TRACE, marker, message, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).TRACE, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).TRACE, null, msg, t);
});

Clazz.newMeth(C$, 'trace$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).TRACE, null, message, null);
});

Clazz.newMeth(C$, 'trace$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).TRACE, null, message, t);
});

Clazz.newMeth(C$, 'trace$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).TRACE, null, message, null);
});

Clazz.newMeth(C$, 'trace$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).TRACE, null, message, t);
});

Clazz.newMeth(C$, 'trace$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).TRACE, null, message, null);
});

Clazz.newMeth(C$, 'trace$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).TRACE, null, message, params);
});

Clazz.newMeth(C$, 'trace$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).TRACE, null, message, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).TRACE, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).TRACE, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).TRACE, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).TRACE, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).TRACE, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'trace$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).TRACE, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).TRACE, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).TRACE, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).TRACE, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).TRACE, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).TRACE, marker, message, p0);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'trace$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'trace$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).TRACE, null, message, p0);
});

Clazz.newMeth(C$, 'trace$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1);
});

Clazz.newMeth(C$, 'trace$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'trace$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).TRACE, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'traceEntry$', function () {
return this.enter$S$S$OA(C$.FQCN, null, null);
});

Clazz.newMeth(C$, 'traceEntry$S$OA', function (format, params) {
return this.enter$S$S$OA(C$.FQCN, format, params);
});

Clazz.newMeth(C$, 'traceEntry$org_apache_logging_log4j_util_SupplierA', function (paramSuppliers) {
return this.enter$S$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, null, paramSuppliers);
});

Clazz.newMeth(C$, 'traceEntry$S$org_apache_logging_log4j_util_SupplierA', function (format, paramSuppliers) {
return this.enter$S$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, format, paramSuppliers);
});

Clazz.newMeth(C$, 'traceEntry$org_apache_logging_log4j_message_Message', function (message) {
return this.enter$S$org_apache_logging_log4j_message_Message(C$.FQCN, message);
});

Clazz.newMeth(C$, 'traceExit$', function () {
this.exit$S$S$TR(C$.FQCN, null, null);
});

Clazz.newMeth(C$, 'traceExit$TR', function (result) {
return this.exit$S$S$TR(C$.FQCN, null, result);
});

Clazz.newMeth(C$, 'traceExit$S$TR', function (format, result) {
return this.exit$S$S$TR(C$.FQCN, format, result);
});

Clazz.newMeth(C$, 'traceExit$org_apache_logging_log4j_message_EntryMessage', function (message) {
if (message != null  && this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable($I$(7).TRACE, C$.EXIT_MARKER, message, null) ) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, $I$(7).TRACE, C$.EXIT_MARKER, this.flowMessageFactory.newExitMessage$org_apache_logging_log4j_message_EntryMessage(message), null]);
}});

Clazz.newMeth(C$, 'traceExit$org_apache_logging_log4j_message_EntryMessage$TR', function (message, result) {
if (message != null  && this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable($I$(7).TRACE, C$.EXIT_MARKER, message, null) ) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, $I$(7).TRACE, C$.EXIT_MARKER, this.flowMessageFactory.newExitMessage$O$org_apache_logging_log4j_message_EntryMessage(result, message), null]);
}return result;
});

Clazz.newMeth(C$, 'traceExit$org_apache_logging_log4j_message_Message$TR', function (message, result) {
if (message != null  && this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable($I$(7).TRACE, C$.EXIT_MARKER, message, null) ) {
p$1.logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable.apply(this, [C$.FQCN, $I$(7).TRACE, C$.EXIT_MARKER, this.flowMessageFactory.newExitMessage$O$org_apache_logging_log4j_message_Message(result, message), null]);
}return result;
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message', function (marker, msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).WARN, marker, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (marker, msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).WARN, marker, msg, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$CharSequence', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).WARN, marker, message, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).WARN, marker, message, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$O', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).WARN, marker, message, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$O$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).WARN, marker, message, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S', function (marker, message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).WARN, marker, message, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$OA', function (marker, message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).WARN, marker, message, params);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$Throwable', function (marker, message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).WARN, marker, message, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_message_Message', function (msg) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).WARN, null, msg, msg != null  ? msg.getThrowable$() : null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_message_Message$Throwable', function (msg, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(7).WARN, null, msg, t);
});

Clazz.newMeth(C$, 'warn$CharSequence', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).WARN, null, message, null);
});

Clazz.newMeth(C$, 'warn$CharSequence$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(C$.FQCN, $I$(7).WARN, null, message, t);
});

Clazz.newMeth(C$, 'warn$O', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).WARN, null, message, null);
});

Clazz.newMeth(C$, 'warn$O$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(C$.FQCN, $I$(7).WARN, null, message, t);
});

Clazz.newMeth(C$, 'warn$S', function (message) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).WARN, null, message, null);
});

Clazz.newMeth(C$, 'warn$S$OA', function (message, params) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(C$.FQCN, $I$(7).WARN, null, message, params);
});

Clazz.newMeth(C$, 'warn$S$Throwable', function (message, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(C$.FQCN, $I$(7).WARN, null, message, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_util_Supplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).WARN, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_util_Supplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).WARN, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).WARN, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA', function (marker, message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).WARN, marker, message, paramSuppliers);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_Supplier$Throwable(C$.FQCN, $I$(7).WARN, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'warn$S$org_apache_logging_log4j_util_SupplierA', function (message, paramSuppliers) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$org_apache_logging_log4j_util_SupplierA(C$.FQCN, $I$(7).WARN, null, message, paramSuppliers);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier', function (marker, msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).WARN, marker, msgSupplier, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (marker, msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).WARN, marker, msgSupplier, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_util_MessageSupplier', function (msgSupplier) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).WARN, null, msgSupplier, null);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_util_MessageSupplier$Throwable', function (msgSupplier, t) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_util_MessageSupplier$Throwable(C$.FQCN, $I$(7).WARN, null, msgSupplier, t);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O', function (marker, message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).WARN, marker, message, p0);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O', function (marker, message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O', function (marker, message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O', function (marker, message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'warn$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'warn$S$O', function (message, p0) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(C$.FQCN, $I$(7).WARN, null, message, p0);
});

Clazz.newMeth(C$, 'warn$S$O$O', function (message, p0, p1) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1);
});

Clazz.newMeth(C$, 'warn$S$O$O$O', function (message, p0, p1, p2) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O', function (message, p0, p1, p2, p3) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'warn$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(C$.FQCN, $I$(7).WARN, null, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'requiresLocation$', function () {
return false;
});
C$.$getAnn$ = function(){ return [
[['M:logMessageSafely','void','logMessageSafely$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:logMessageTrackRecursion','.','logMessageTrackRecursion$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:tryLogMessage','.','tryLogMessage$S$StackTraceElement$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getLocation','StackTraceElement','getLocation$S',['org.apache.logging.log4j.util.PerformanceSensitive']],['']]]}
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
