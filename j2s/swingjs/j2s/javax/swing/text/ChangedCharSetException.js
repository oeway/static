(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChangedCharSetException", null, 'java.io.IOException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['charSetKey'],'S',['charSetSpec']]]

Clazz.newMeth(C$, 'c$$S$Z', function (charSetSpec, charSetKey) {
Clazz.super_(C$, this);
this.charSetSpec=charSetSpec;
this.charSetKey=charSetKey;
}, 1);

Clazz.newMeth(C$, 'getCharSetSpec$', function () {
return this.charSetSpec;
});

Clazz.newMeth(C$, 'keyEqualsCharSet$', function () {
return this.charSetKey;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
