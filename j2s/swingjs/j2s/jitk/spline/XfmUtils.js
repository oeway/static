(function(){var P$=Clazz.newPackage("jitk.spline"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XfmUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'genPtListScale$DAA$DA', function (srcPts, scales) {
var pts=Clazz.array(Double.TYPE, [srcPts.length, srcPts[0].length]);
for (var d=0; d < srcPts.length; d++) for (var n=0; n < srcPts[0].length; n++) {
pts[d][n]=scales[d] * srcPts[d][n];
}

return pts;
}, 1);

Clazz.newMeth(C$, 'genPtListScale$FAA$DA', function (srcPts, scales) {
var pts=Clazz.array(Float.TYPE, [srcPts.length, srcPts[0].length]);
for (var d=0; d < srcPts.length; d++) for (var n=0; n < srcPts[0].length; n++) {
pts[d][n]=(scales[d] * srcPts[d][n]);
}

return pts;
}, 1);

Clazz.newMeth(C$, 'genPtListAffine$DAA$DAA', function (srcPts, aff) {
var pts=Clazz.array(Double.TYPE, [srcPts.length, srcPts[0].length]);
for (var n=0; n < srcPts[0].length; n++) {
for (var i=0; i < srcPts.length; i++) for (var j=0; j < srcPts.length; j++) {
pts[i][n]=(aff[i][j] * srcPts[j][n]);
}

}
return pts;
}, 1);

Clazz.newMeth(C$, 'genPtListAffine$FAA$FAA', function (srcPts, aff) {
var pts=Clazz.array(Float.TYPE, [srcPts.length, srcPts[0].length]);
for (var n=0; n < srcPts[0].length; n++) {
for (var i=0; i < srcPts.length; i++) for (var j=0; j < srcPts.length; j++) {
pts[i][n]=(aff[i][j] * srcPts[j][n]);
}

}
return pts;
}, 1);

Clazz.newMeth(C$, 'maxError$DAA$DAA$jitk_spline_ThinPlateR2LogRSplineKernelTransform', function (sourcePoints, targetPoints, xfm) {
return C$.maxError$DAA$DAA$jitk_spline_ThinPlateR2LogRSplineKernelTransform$Z(sourcePoints, targetPoints, xfm, false);
}, 1);

Clazz.newMeth(C$, 'maxError$DAA$DAA$jitk_spline_ThinPlateR2LogRSplineKernelTransform$Z', function (sourcePoints, targetPoints, xfm, debug) {
var maxError=0.0;
var D=sourcePoints.length;
var N=sourcePoints[0].length;
var spt=Clazz.array(Double.TYPE, [sourcePoints.length]);
var tpt=Clazz.array(Double.TYPE, [sourcePoints.length]);
for (var i=0; i < N; i++) {
for (var n=0; n < D; n++) {
spt[n]=sourcePoints[n][i];
tpt[n]=targetPoints[n][i];
}
var result=xfm.apply$DA(spt);
var distance=C$.distance$DA$DA(tpt, result);
if (debug) System.out.println$S("distance at: " + i + " is " + new Double(distance).toString() );
if (distance > maxError ) maxError=distance;
}
return maxError;
}, 1);

Clazz.newMeth(C$, 'deepCopy$DAA', function ($in) {
var out=Clazz.array(Double.TYPE, [$in.length, $in[0].length]);
for (var i=0; i < $in.length; i++) for (var j=0; j < $in[0].length; j++) {
out[i][j]=$in[i][j];
}

return out;
}, 1);

Clazz.newMeth(C$, 'toDouble$FA', function ($in) {
var out=Clazz.array(Double.TYPE, [$in.length]);
for (var i=0; i < $in.length; i++) {
out[i]=$in[i];
}
return out;
}, 1);

Clazz.newMeth(C$, 'toFloat$DA', function ($in) {
var out=Clazz.array(Float.TYPE, [$in.length]);
for (var i=0; i < $in.length; i++) {
out[i]=$in[i];
}
return out;
}, 1);

Clazz.newMeth(C$, 'copy$FA$DA', function (src, dest) {
for (var i=0; i < src.length; i++) {
dest[i]=src[i];
}
}, 1);

Clazz.newMeth(C$, 'copy$DA$FA', function (src, dest) {
for (var i=0; i < src.length; i++) {
dest[i]=src[i];
}
}, 1);

Clazz.newMeth(C$, 'distance$DA$DA', function (p1, p2) {
var nd=p1.length;
var out=0.0;
for (var d=0; d < nd; d++) {
out += (p1[d] - p2[d]) * (p1[d] - p2[d]);
}
return Math.sqrt(out);
}, 1);

Clazz.newMeth(C$, 'subtract$DA$DA', function (p1, p2) {
var nd=p1.length;
var out=Clazz.array(Double.TYPE, [nd]);
for (var d=0; d < nd; d++) {
out[d]=p1[d] - p2[d];
}
return out;
}, 1);

Clazz.newMeth(C$, 'subtract$DA$DA$DA', function (p1, p2, out) {
var nd=out.length;
for (var d=0; d < nd; d++) {
out[d]=p1[d] - p2[d];
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$DAA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
for (var j=0; j < $in[0].length; j++) {
out += new Double($in[i][j]).toString() + " ";
}
out += "\n";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$DA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
out += new Double($in[i]).toString() + " ";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$ZA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
if ($in[i]) out += "1 ";
 else out += "0 ";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$FAA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
for (var j=0; j < $in[0].length; j++) {
out += new Float($in[i][j]).toString() + " ";
}
out += "\n";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$FA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
out += new Float($in[i]).toString() + " ";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$JAA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
for (var j=0; j < $in[0].length; j++) {
out += $in[i][j] + " ";
}
out += "\n";
}
return out;
}, 1);

Clazz.newMeth(C$, 'printArray$JA', function ($in) {
if ($in == null ) return "null";
var out="";
for (var i=0; i < $in.length; i++) {
out += $in[i] + " ";
}
return out;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
