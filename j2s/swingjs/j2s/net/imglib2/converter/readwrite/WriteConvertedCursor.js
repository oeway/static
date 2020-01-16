(function(){var P$=Clazz.newPackage("net.imglib2.converter.readwrite"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WriteConvertedCursor", null, 'net.imglib2.converter.AbstractConvertedCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['converter','net.imglib2.converter.readwrite.SamplerConverter','converted','<B>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Cursor$net_imglib2_converter_readwrite_SamplerConverter', function (source, converter) {
;C$.superclazz.c$$net_imglib2_Cursor.apply(this,[source]);C$.$init$.apply(this);
this.converter=converter;
this.converted=converter.convert$(source);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.converted;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{A:"Object",B:"Object"},C$.c$$net_imglib2_Cursor$net_imglib2_converter_readwrite_SamplerConverter,[this.source.copy$(), this.converter]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
