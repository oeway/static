(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[[0,'net.imglib2.display.ColorTable8']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealLUTConverter", null, 'net.imglib2.display.AbstractLinearRange', 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lut=null;
}, 1);

C$.$fields$=[['O',['lut','net.imglib2.display.ColorTable']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$net_imglib2_display_ColorTable', function (min, max, lut) {
;C$.superclazz.c$$D$D.apply(this,[min, max]);C$.$init$.apply(this);
this.setLUT$net_imglib2_display_ColorTable(lut);
}, 1);

Clazz.newMeth(C$, 'getLUT$', function () {
return this.lut;
});

Clazz.newMeth(C$, 'setLUT$net_imglib2_display_ColorTable', function (lut) {
this.lut=lut == null  ? Clazz.new_($I$(1,1)) : lut;
});

Clazz.newMeth(C$, ['convert$TR$net_imglib2_type_numeric_ARGBType','convert$','convert$TA$TB'], function (input, output) {
var a=input.getRealDouble$();
var argb=this.lut.lookupARGB$D$D$D(this.min, this.max, a);
output.set$I(argb);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
