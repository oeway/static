(function(){var P$=Clazz.newPackage("net.imglib2.converter.read"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConvertedRandomAccess", null, 'net.imglib2.converter.AbstractConvertedRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['converter','net.imglib2.converter.Converter','converted','<B extends Type<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccess$net_imglib2_converter_Converter$TB'], function (source, converter, b) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[source]);C$.$init$.apply(this);
this.converter=converter;
this.converted=b.copy$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.converter.convert$(this.source.get$(), this.converted);
return this.converted;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{A:"Object",B:"Object"},C$.c$$net_imglib2_RandomAccess$net_imglib2_converter_Converter$TB,[this.source.copyRandomAccess$(), this.converter, this.converted]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
