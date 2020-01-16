(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),p$1={},I$=[[0,'java.util.TreeSet',['org.apache.logging.log4j.util.PropertySource','.Comparator'],'java.util.concurrent.ConcurrentHashMap','org.apache.logging.log4j.util.PropertyFilePropertySource','org.apache.logging.log4j.util.LoaderUtil','java.util.ServiceLoader','org.apache.logging.log4j.util.PropertySource',['org.apache.logging.log4j.util.PropertySource','.Util'],'java.util.Collections',['org.apache.logging.log4j.util.PropertiesUtil','.Environment'],'org.apache.logging.log4j.util.PropertiesPropertySource','java.util.Properties','org.apache.logging.log4j.util.LowLevelLogUtil','java.nio.charset.Charset','java.util.ArrayList','java.util.ResourceBundle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PropertiesUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOG4J_PROPERTIES=Clazz.new_(C$.c$$S,["log4j2.component.properties"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['environment','org.apache.logging.log4j.util.PropertiesUtil.Environment']]
,['S',['LOG4J_PROPERTIES_FILE_NAME','LOG4J_SYSTEM_PROPERTIES_FILE_NAME','SYSTEM'],'O',['LOG4J_PROPERTIES','org.apache.logging.log4j.util.PropertiesUtil']]]

Clazz.newMeth(C$, 'c$$java_util_Properties', function (props) {
;C$.$init$.apply(this);
this.environment=Clazz.new_($I$(10,1).c$$org_apache_logging_log4j_util_PropertySource,[Clazz.new_($I$(11,1).c$$java_util_Properties,[props])]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (propertiesFileName) {
;C$.$init$.apply(this);
this.environment=Clazz.new_($I$(10,1).c$$org_apache_logging_log4j_util_PropertySource,[Clazz.new_($I$(4,1).c$$S,[propertiesFileName])]);
}, 1);

Clazz.newMeth(C$, 'loadClose$java_io_InputStream$O', function ($in, source) {
var props=Clazz.new_($I$(12,1));
if (null != $in ) {
try {
props.load$java_io_InputStream($in);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(13).logException$S$Throwable("Unable to read " + source, e);
} else {
throw e;
}
} finally {
try {
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(13).logException$S$Throwable("Unable to close " + source, e);
} else {
throw e;
}
}
}
}return props;
}, 1);

Clazz.newMeth(C$, 'getProperties$', function () {
return C$.LOG4J_PROPERTIES;
}, 1);

Clazz.newMeth(C$, 'hasProperty$S', function (name) {
return p$1.containsKey$S.apply(this.environment, [name]);
});

Clazz.newMeth(C$, 'getBooleanProperty$S', function (name) {
return this.getBooleanProperty$S$Z(name, false);
});

Clazz.newMeth(C$, 'getBooleanProperty$S$Z', function (name, defaultValue) {
var prop=this.getStringProperty$S(name);
return prop == null  ? defaultValue : "true".equalsIgnoreCase$S(prop);
});

Clazz.newMeth(C$, 'getBooleanProperty$S$Z$Z', function (name, defaultValueIfAbsent, defaultValueIfPresent) {
var prop=this.getStringProperty$S(name);
return prop == null  ? defaultValueIfAbsent : prop.isEmpty$() ? defaultValueIfPresent : "true".equalsIgnoreCase$S(prop);
});

Clazz.newMeth(C$, 'getCharsetProperty$S', function (name) {
return this.getCharsetProperty$S$java_nio_charset_Charset(name, $I$(14).defaultCharset$());
});

Clazz.newMeth(C$, 'getCharsetProperty$S$java_nio_charset_Charset', function (name, defaultValue) {
var charsetName=this.getStringProperty$S(name);
if (charsetName == null ) {
return defaultValue;
}if ($I$(14).isSupported$S(charsetName)) {
return $I$(14).forName$S(charsetName);
}var bundle=C$.getCharsetsResourceBundle$();
if (bundle.containsKey$S(name)) {
var mapped=bundle.getString$S(name);
if ($I$(14).isSupported$S(mapped)) {
return $I$(14).forName$S(mapped);
}}$I$(13).log$S("Unable to get Charset '" + charsetName + "' for property '" + name + "', using default " + defaultValue + " and continuing." );
return defaultValue;
});

Clazz.newMeth(C$, 'getDoubleProperty$S$D', function (name, defaultValue) {
var prop=this.getStringProperty$S(name);
if (prop != null ) {
try {
return Double.parseDouble$S(prop);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
return defaultValue;
} else {
throw ignored;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'getIntegerProperty$S$I', function (name, defaultValue) {
var prop=this.getStringProperty$S(name);
if (prop != null ) {
try {
return Integer.parseInt$S(prop);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
return defaultValue;
} else {
throw ignored;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'getLongProperty$S$J', function (name, defaultValue) {
var prop=this.getStringProperty$S(name);
if (prop != null ) {
try {
return Long.parseLong$S(prop);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"Exception")){
return defaultValue;
} else {
throw ignored;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'getStringProperty$S', function (name) {
return p$1.get$S.apply(this.environment, [name]);
});

Clazz.newMeth(C$, 'getStringProperty$S$S', function (name, defaultValue) {
var prop=this.getStringProperty$S(name);
return (prop == null ) ? defaultValue : prop;
});

Clazz.newMeth(C$, 'getSystemProperties$', function () {
try {
return Clazz.new_($I$(12,1).c$$java_util_Properties,[System.getProperties$()]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
$I$(13).logException$S$Throwable("Unable to access system properties.", ex);
return Clazz.new_($I$(12,1));
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'reload$', function () {
p$1.reload.apply(this.environment, []);
});

Clazz.newMeth(C$, 'extractSubset$java_util_Properties$S', function (properties, prefix) {
var subset=Clazz.new_($I$(12,1));
if (prefix == null  || prefix.length$() == 0 ) {
return subset;
}var prefixToMatch=prefix.charAt$I(prefix.length$() - 1) != "." ? prefix + '.' : prefix;
var keys=Clazz.new_(1,{E:"String"},$I$(15,1));
for (var key, $key = properties.stringPropertyNames$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.startsWith$S(prefixToMatch)) {
subset.setProperty$S$S(key.substring$I(prefixToMatch.length$()), properties.getProperty$S(key));
keys.add$TE(key);
}}
for (var key, $key = keys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
properties.remove$O(key);
}
return subset;
}, 1);

Clazz.newMeth(C$, 'getCharsetsResourceBundle$', function () {
return $I$(16).getBundle$S("Log4j-charsets");
}, 1);

Clazz.newMeth(C$, 'partitionOnCommonPrefixes$java_util_Properties', function (properties) {
var parts=Clazz.new_(1,{V:"String",K:"java.util.Properties"},$I$(3,1));
for (var key, $key = properties.stringPropertyNames$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var prefix=key.substring$I$I(0, key.indexOf$I("."));
if (!parts.containsKey$O(prefix)) {
parts.put$TK$TV(prefix, Clazz.new_($I$(12,1)));
}parts.get$O(prefix).setProperty$S$S(key.substring$I(key.indexOf$I(".") + 1), properties.getProperty$S(key));
}
return parts;
}, 1);

Clazz.newMeth(C$, 'isOsWindows$', function () {
return this.getStringProperty$S$S("os.name", "").startsWith$S("Windows");
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertiesUtil, "Environment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sources=Clazz.new_(1,{E:"org.apache.logging.log4j.util.PropertySource"},$I$(1,1).c$$java_util_Comparator,[Clazz.new_($I$(2,1))]);
this.literal=Clazz.new_(1,{V:"CharSequence",K:"String"},$I$(3,1));
this.normalized=Clazz.new_(1,{V:"CharSequence",K:"String"},$I$(3,1));
this.tokenized=Clazz.new_(1,{V:"java.util.List",K:"String"},$I$(3,1));
}, 1);

C$.$fields$=[['O',['sources','java.util.Set','literal','java.util.Map','+normalized','+tokenized']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_util_PropertySource', function (propertySource) {
;C$.$init$.apply(this);
var sysProps=Clazz.new_($I$(4,1).c$$S,["log4j2.system.properties"]);
try {
sysProps.forEach$org_apache_logging_log4j_util_BiConsumer(((P$.PropertiesUtil$Environment$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesUtil$Environment$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.apache.logging.log4j.util.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$S$S','accept$','accept$TK$TV'], function (key, value) {
if (System.getProperty$S(key) == null ) {
System.setProperty$S$S(key, value);
}});
})()
), Clazz.new_(P$.PropertiesUtil$Environment$1.$init$, [this, null])));
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
this.sources.add$TE(propertySource);
for (var classLoader, $classLoader = 0, $$classLoader = $I$(5).getClassLoaders$(); $classLoader<$$classLoader.length&&((classLoader=($$classLoader[$classLoader])),1);$classLoader++) {
try {
for (var source, $source = $I$(6).load$Class$ClassLoader(Clazz.getClass($I$(7),['forEach$org_apache_logging_log4j_util_BiConsumer','getNormalForm$Iterable','getPriority$']), classLoader).iterator$(); $source.hasNext$()&&((source=($source.next$())),1);) {
this.sources.add$TE(source);
}
} catch (ex) {
}
}
p$1.reload.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'reload', function () {
this.literal.clear$();
this.normalized.clear$();
this.tokenized.clear$();
for (var source, $source = this.sources.iterator$(); $source.hasNext$()&&((source=($source.next$())),1);) {
source.forEach$org_apache_logging_log4j_util_BiConsumer(((P$.PropertiesUtil$Environment$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PropertiesUtil$Environment$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.apache.logging.log4j.util.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$S$S','accept$','accept$TK$TV'], function (key, value) {
if (key != null  && value != null  ) {
this.b$['org.apache.logging.log4j.util.PropertiesUtil.Environment'].literal.put$TK$TV(key, value);
var tokens=$I$(8).tokenize$CharSequence(key);
if (tokens.isEmpty$()) {
this.b$['org.apache.logging.log4j.util.PropertiesUtil.Environment'].normalized.put$TK$TV(this.$finals$.source.getNormalForm$Iterable($I$(9).singleton$TT(key)), value);
} else {
this.b$['org.apache.logging.log4j.util.PropertiesUtil.Environment'].normalized.put$TK$TV(this.$finals$.source.getNormalForm$Iterable(tokens), value);
this.b$['org.apache.logging.log4j.util.PropertiesUtil.Environment'].tokenized.put$TK$TV(tokens, value);
}}});
})()
), Clazz.new_(P$.PropertiesUtil$Environment$2.$init$, [this, {source:source}])));
}
}, p$1);

Clazz.newMeth(C$, 'hasSystemProperty$S', function (key) {
try {
return System.getProperties$().containsKey$O(key);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"SecurityException")){
return false;
} else {
throw ignored;
}
}
}, 1);

Clazz.newMeth(C$, 'get$S', function (key) {
if (this.normalized.containsKey$O(key)) {
return this.normalized.get$O(key);
}if (this.literal.containsKey$O(key)) {
return this.literal.get$O(key);
}if (C$.hasSystemProperty$S(key)) {
return System.getProperty$S(key);
}return this.tokenized.get$O($I$(8).tokenize$CharSequence(key));
}, p$1);

Clazz.newMeth(C$, 'containsKey$S', function (key) {
return this.normalized.containsKey$O(key) || this.literal.containsKey$O(key) || C$.hasSystemProperty$S(key) || this.tokenized.containsKey$O($I$(8).tokenize$CharSequence(key))  ;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
