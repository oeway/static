(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultColumn", null, 'org.scijava.util.ObjectArray', 'org.scijava.table.Column');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['header'],'O',['$type','Class']]]

Clazz.newMeth(C$, 'c$$Class', function (type) {
;C$.superclazz.c$$Class.apply(this,[type]);C$.$init$.apply(this);
this.$type=type;
}, 1);

Clazz.newMeth(C$, 'c$$Class$S', function (type, header) {
;C$.superclazz.c$$Class.apply(this,[type]);C$.$init$.apply(this);
this.$type=type;
this.header=header;
}, 1);

Clazz.newMeth(C$, 'getHeader$', function () {
return this.header;
});

Clazz.newMeth(C$, 'setHeader$S', function (header) {
this.header=header;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.$type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
