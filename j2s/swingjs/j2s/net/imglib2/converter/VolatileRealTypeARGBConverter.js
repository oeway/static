(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[[0,'net.imglib2.type.numeric.ARGBType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VolatileRealTypeARGBConverter", null, 'net.imglib2.converter.RealARGBConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['background','net.imglib2.type.numeric.ARGBType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_ARGBType', function (background) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.background=background;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_type_numeric_ARGBType.apply(this, [Clazz.new_($I$(1,1).c$$I,[-16777152])]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$net_imglib2_type_numeric_ARGBType', function (min, max, background) {
;C$.superclazz.c$$D$D.apply(this,[min, max]);C$.$init$.apply(this);
this.background=background;
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (min, max) {
C$.c$$D$D$net_imglib2_type_numeric_ARGBType.apply(this, [min, max, Clazz.new_($I$(1,1).c$$I,[-16777152])]);
}, 1);

Clazz.newMeth(C$, ['convert$net_imglib2_type_volatiles_VolatileRealType$net_imglib2_type_numeric_ARGBType','convert$','convert$TA$TB','convert$TR$net_imglib2_type_numeric_ARGBType'], function (input, output) {
if (input.isValid$()) C$.superclazz.prototype.convert$TR$net_imglib2_type_numeric_ARGBType.apply(this, [input, output]);
 else output.set$net_imglib2_type_numeric_ARGBType(this.background);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
