(function(){var P$=Clazz.newPackage("net.imglib2.converter.read"),I$=[[0,'net.imglib2.converter.read.ConvertedRealRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertedRealRandomAccessibleRealInterval", null, 'net.imglib2.AbstractWrappedRealInterval', ['net.imglib2.RealRandomAccessibleRealInterval', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['converter','net.imglib2.converter.Converter','converted','<B extends Type<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_RealRandomAccessibleRealInterval$net_imglib2_converter_Converter$TB'], function (source, converter, b) {
;C$.superclazz.c$$TI.apply(this,[source]);C$.$init$.apply(this);
this.converter=converter;
this.converted=b.copy$();
}, 1);

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(1,1).c$$net_imglib2_RealRandomAccess$net_imglib2_converter_Converter$TB,[this.sourceInterval.realRandomAccess$(), this.converter, this.converted]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(1,1).c$$net_imglib2_RealRandomAccess$net_imglib2_converter_Converter$TB,[this.sourceInterval.realRandomAccess$net_imglib2_RealInterval(interval), this.converter, this.converted]);
});

Clazz.newMeth(C$, 'getDestinationType$', function () {
return this.converted.copy$();
});

Clazz.newMeth(C$, 'getConverter$', function () {
return this.converter;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1