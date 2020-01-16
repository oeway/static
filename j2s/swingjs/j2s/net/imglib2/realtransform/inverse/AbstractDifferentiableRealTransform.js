(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),I$=[[0,'net.imglib2.realtransform.AffineTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractDifferentiableRealTransform", null, null, 'net.imglib2.realtransform.inverse.DifferentiableRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'directionToward$DA$DA$DA', function (displacement, x, y) {
C$.directionToward$net_imglib2_realtransform_AffineTransform$DA$DA$DA(this.jacobian$DA(x), displacement, x, y);
});

Clazz.newMeth(C$, 'directionToward$net_imglib2_realtransform_AffineTransform$DA$DA$DA', function (jacobian, displacement, x, y) {
var err=Clazz.array(Double.TYPE, [x.length]);
for (var i=0; i < x.length; i++) err[i]=y[i] - x[i];

var dir=Clazz.array(Double.TYPE, [x.length]);
C$.matrixTranspose$net_imglib2_realtransform_AffineTransform(jacobian).apply$DA$DA(err, dir);
var norm=0.0;
for (var i=0; i < dir.length; i++) norm += (dir[i] * dir[i]);

norm=Math.sqrt(norm);
for (var i=0; i < dir.length; i++) dir[i] /= norm;

System.arraycopy$O$I$O$I$I(dir, 0, displacement, 0, dir.length);
}, 1);

Clazz.newMeth(C$, 'matrixTranspose$net_imglib2_realtransform_AffineTransform', function (a) {
var nd=a.numDimensions$();
var aT=Clazz.new_($I$(1,1).c$$I,[nd]);
var mtx=Clazz.array(Double.TYPE, [nd, nd + 1]);
for (var i=0; i < nd; i++) for (var j=0; j < nd; j++) mtx[j][i]=a.get$I$I(i, j);


aT.set$DAA(mtx);
return aT;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
