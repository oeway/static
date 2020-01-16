(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractScriptContext", null, null, 'javax.script.ScriptContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['reader','java.io.Reader','writer','java.io.Writer','+errorWriter']]]

Clazz.newMeth(C$, 'getReader$', function () {
return this.reader;
});

Clazz.newMeth(C$, 'getWriter$', function () {
return this.writer;
});

Clazz.newMeth(C$, 'getErrorWriter$', function () {
return this.errorWriter;
});

Clazz.newMeth(C$, 'setReader$java_io_Reader', function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'setWriter$java_io_Writer', function (writer) {
this.writer=writer;
});

Clazz.newMeth(C$, 'setErrorWriter$java_io_Writer', function (errorWriter) {
this.errorWriter=errorWriter;
});

Clazz.newMeth(C$, 'getAttribute$S', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAttribute$S$I', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAttributesScope$S', function (scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getBindings$I', function (scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getScopes$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAttribute$S$I', function (key, scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setAttribute$S$O$I', function (key, value, scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setBindings$javax_script_Bindings$I', function (bindings, scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
