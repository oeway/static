(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnWTFilter", null, null, 'io.scif.jj2000.j2k.wavelet.WaveletFilter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Ffilters", "[<tile-component idx>] <id> [ [<tile-component idx>] <id> ...]", "Specifies which filters to use for specified tile-component.\n<tile-component idx>: see general note\n<id>: \',\' separates horizontal and vertical filters, \':\' separates decomposition levels filters. JPEG 2000 part I only supports w5x3 and w9x7 filters.", null])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'getLPSynWaveForm$FA$FA', function ($in, out) {
return C$.upsampleAndConvolve$FA$FA$FA($in, this.getLPSynthesisFilter$(), out);
});

Clazz.newMeth(C$, 'getHPSynWaveForm$FA$FA', function ($in, out) {
return C$.upsampleAndConvolve$FA$FA$FA($in, this.getHPSynthesisFilter$(), out);
});

Clazz.newMeth(C$, 'upsampleAndConvolve$FA$FA$FA', function ($in, wf, out) {
var i;
var k;
var j;
var tmp;
var maxi;
var maxk;
if ($in == null ) {
$in=Clazz.array(Float.TYPE, [1]);
$in[0]=1.0;
}if (out == null ) {
out=Clazz.array(Float.TYPE, [$in.length * 2 + wf.length - 2]);
}for (i=0, maxi=$in.length * 2 + wf.length - 2; i < maxi; i++) {
tmp=0.0;
k=((i - wf.length + 2)/2|0);
if (k < 0) k=0;
maxk=(i/2|0) + 1;
if (maxk > $in.length) maxk=$in.length;
for (j=2 * k - i + wf.length - 1; k < maxk; k++, j+=2) {
tmp += $in[k] * wf[j];
}
out[i]=tmp;
}
return out;
}, 1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
