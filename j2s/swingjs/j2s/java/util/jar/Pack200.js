(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[[0,'java.security.AccessController','sun.security.action.GetPropertyAction','com.sun.java.util.jar.pack.PackerImpl','com.sun.java.util.jar.pack.UnpackerImpl','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Pack200", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Packer',9],['Unpacker',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['packerImpl','Class','+unpackerImpl']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newPacker$', function () {
return C$.newInstance$S("java.util.jar.Pack200.Packer");
}, 1);

Clazz.newMeth(C$, 'newUnpacker$', function () {
return C$.newInstance$S("java.util.jar.Pack200.Unpacker");
}, 1);

Clazz.newMeth(C$, 'newInstance$S', function (prop) {
var implName="(unknown)";
try {
var impl=("java.util.jar.Pack200.Packer".equals$O(prop)) ? C$.packerImpl : C$.unpackerImpl;
if (impl == null ) {
implName=$I$(1).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(2,1).c$$S$S,[prop, ""]));
if (implName != null  && !implName.equals$O("") ) impl=Clazz.forName(implName);
 else if ("java.util.jar.Pack200.Packer".equals$O(prop)) impl=Clazz.getClass($I$(3));
 else impl=Clazz.getClass($I$(4));
}return impl.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
throw Clazz.new_($I$(5,1).c$$S$Throwable,["Class not found: " + implName + ":\ncheck property " + prop + " in your properties file." , e]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_($I$(5,1).c$$S$Throwable,["Could not instantiate: " + implName + ":\ncheck property " + prop + " in your properties file." , e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(5,1).c$$S$Throwable,["Cannot access class: " + implName + ":\ncheck property " + prop + " in your properties file." , e]);
}
} else {
throw e$$;
}
}
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Pack200, "Packer", function(){
});

C$.$static$ = function() {C$.$static$=0;
C$.SEGMENT_LIMIT="pack.segment.limit";
C$.KEEP_FILE_ORDER="pack.keep.file.order";
C$.EFFORT="pack.effort";
C$.DEFLATE_HINT="pack.deflate.hint";
C$.MODIFICATION_TIME="pack.modification.time";
C$.PASS_FILE_PFX="pack.pass.file.";
C$.UNKNOWN_ATTRIBUTE="pack.unknown.attribute";
C$.CLASS_ATTRIBUTE_PFX="pack.class.attribute.";
C$.FIELD_ATTRIBUTE_PFX="pack.field.attribute.";
C$.METHOD_ATTRIBUTE_PFX="pack.method.attribute.";
C$.CODE_ATTRIBUTE_PFX="pack.code.attribute.";
C$.PROGRESS="pack.progress";
C$.KEEP="keep";
C$.PASS="pass";
C$.STRIP="strip";
C$.ERROR="error";
C$.TRUE="true";
C$.FALSE="false";
C$.LATEST="latest";
}

C$.$fields$=[[]
,['S',['SEGMENT_LIMIT','KEEP_FILE_ORDER','EFFORT','DEFLATE_HINT','MODIFICATION_TIME','PASS_FILE_PFX','UNKNOWN_ATTRIBUTE','CLASS_ATTRIBUTE_PFX','FIELD_ATTRIBUTE_PFX','METHOD_ATTRIBUTE_PFX','CODE_ATTRIBUTE_PFX','PROGRESS','KEEP','PASS','STRIP','ERROR','TRUE','FALSE','LATEST']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Pack200, "Unpacker", function(){
});

C$.$static$ = function() {C$.$static$=0;
C$.KEEP="keep";
C$.TRUE="true";
C$.FALSE="false";
C$.DEFLATE_HINT="unpack.deflate.hint";
C$.PROGRESS="unpack.progress";
}

C$.$fields$=[[]
,['S',['KEEP','TRUE','FALSE','DEFLATE_HINT','PROGRESS']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});
};})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
