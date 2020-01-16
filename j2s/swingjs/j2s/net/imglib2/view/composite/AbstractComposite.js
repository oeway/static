(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractComposite", null, null, 'net.imglib2.view.composite.Composite');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['d'],'O',['sourceAccess','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (sourceAccess) {
;C$.$init$.apply(this);
this.sourceAccess=sourceAccess;
this.d=sourceAccess.numDimensions$() - 1;
}, 1);

Clazz.newMeth(C$, ['get$J','get$'], function (i) {
this.sourceAccess.setPosition$J$I(i, this.d);
return this.sourceAccess.get$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
