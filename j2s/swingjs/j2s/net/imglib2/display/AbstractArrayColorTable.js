(function(){var P$=Clazz.newPackage("net.imglib2.display"),I$=[[0,'net.imglib2.type.numeric.ARGBType','net.imglib2.util.Binning']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractArrayColorTable", null, null, 'net.imglib2.display.ArrayColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['values','_.T[]']]]

Clazz.newMeth(C$, ['c$$TTA'], function (values) {
;C$.$init$.apply(this);
this.values=values;
}, 1);

Clazz.newMeth(C$, 'getValues$', function () {
return this.values.clone$();
});

Clazz.newMeth(C$, 'argb$I', function (i) {
var r=this.values.length > 0 ? this.get$I$I(0, i) : 0;
var g=this.values.length > 1 ? this.get$I$I(1, i) : 0;
var b=this.values.length > 2 ? this.get$I$I(2, i) : 0;
var a=this.values.length > 3 ? this.get$I$I(3, i) : 255;
return $I$(1).rgba$I$I$I$I(r, g, b, a);
});

Clazz.newMeth(C$, 'lookupARGB$D$D$D', function (min, max, value) {
var bins=this.getLength$();
var bin=$I$(2).valueToBin$I$D$D$D(bins, min, max, value);
return this.argb$I(bin);
});

Clazz.newMeth(C$, 'getComponentCount$', function () {
return this.values.length;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
