(function(){var P$=java.util,I$=[[0,'java.util.Properties','java.util.HashMap','sun.util.ResourceBundleEnumeration']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PropertyResourceBundle", null, 'java.util.ResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream', function (stream) {
Clazz.super_(C$, this);
this.setStream$java_io_InputStream(stream);
}, 1);

Clazz.newMeth(C$, 'setStream$java_io_InputStream', function (stream) {
var properties=Clazz.new_($I$(1,1));
properties.load$java_io_InputStream(stream);
this.lookup=Clazz.new_($I$(2,1).c$$java_util_Map,[properties]);
return this;
});

Clazz.newMeth(C$, 'c$$java_io_Reader', function (reader) {
Clazz.super_(C$, this);
var properties=Clazz.new_($I$(1,1));
properties.load$java_io_Reader(reader);
this.lookup=Clazz.new_($I$(2,1).c$$java_util_Map,[properties]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'handleGetObject$S', function (key) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$', function () {
var parent=this.parent;
return Clazz.new_($I$(3,1).c$$java_util_Set$java_util_Enumeration,[this.lookup.keySet$(), (parent != null ) ? parent.getKeys$() : null]);
});

Clazz.newMeth(C$, 'handleKeySet$', function () {
return this.lookup.keySet$();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
