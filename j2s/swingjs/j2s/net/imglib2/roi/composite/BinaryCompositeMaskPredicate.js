(function(){var P$=Clazz.newPackage("net.imglib2.roi.composite"),I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "BinaryCompositeMaskPredicate", null, null, 'net.imglib2.roi.composite.CompositeMaskPredicate');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'operand$I', function (index) {
switch (index) {
case 0:
return this.arg0$();
case 1:
return this.arg1$();
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
});

Clazz.newMeth(C$, 'operands$', function () {
return $I$(1).asList$TTA([this.arg0$(), this.arg1$()]);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
