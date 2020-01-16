(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,['net.imglib2.outofbounds.OutOfBoundsMirrorFactory','.Boundary'],'net.imglib2.outofbounds.OutOfBoundsMirrorSingleBoundary','net.imglib2.outofbounds.OutOfBoundsMirrorDoubleBoundary']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsMirrorFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.outofbounds.OutOfBoundsFactory');
C$.$classes$=[['Boundary',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['boundary','net.imglib2.outofbounds.OutOfBoundsMirrorFactory.Boundary']]]

Clazz.newMeth(C$, 'c$$net_imglib2_outofbounds_OutOfBoundsMirrorFactory_Boundary', function (boundary) {
;C$.$init$.apply(this);
this.boundary=boundary;
}, 1);

Clazz.newMeth(C$, ['create$TF','create$'], function (f) {
if (this.boundary === $I$(1).SINGLE ) return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$TF,[f]);
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$TF,[f]);
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.OutOfBoundsMirrorFactory, "Boundary", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SINGLE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "DOUBLE", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
