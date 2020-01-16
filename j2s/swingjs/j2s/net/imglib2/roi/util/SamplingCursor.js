(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SamplingCursor", null, 'net.imglib2.converter.AbstractConvertedCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['target','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Cursor$net_imglib2_RandomAccess', function (source, target) {
;C$.superclazz.c$$net_imglib2_Cursor.apply(this,[source]);C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.target.setPosition$net_imglib2_Localizable(this.source);
return this.target.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_Cursor$net_imglib2_RandomAccess,[this.source.copyCursor$(), this.target.copyRandomAccess$()]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
