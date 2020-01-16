(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntervalQuantizationEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.min=0;
this.max=0;
this.numSteps=0;
this.srcType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (min, max, numSteps) {
C$.c$$I$I$I$I.apply(this, [min, max, numSteps, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (min, max, numSteps, srcType) {
;C$.$init$.apply(this);
this.min=min;
this.max=max;
this.numSteps=numSteps;
this.srcType=srcType;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I$I$I$I.apply(this, [((encoding.get$O("min")).objectValue$()|0), ((encoding.get$O("max")).objectValue$()|0), ((encoding.get$O("numSteps")).objectValue$()|0), ((encoding.get$O("srcType")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'getNumSteps$', function () {
return this.numSteps;
});

Clazz.newMeth(C$, 'getSrcType$', function () {
return this.srcType;
});

Clazz.newMeth(C$, 'setSrcType$I', function (srcType) {
this.srcType=srcType;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "IntervalQuantization";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_Int32Array','decode$TE'], function (current) {
return $I$(1).INTERVAL_QUANTIZATION_CODEC.decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_IntervalQuantizationEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "IntervalQuantizationEncoding{min=" + this.min + ", max=" + this.max + ", numSteps=" + this.numSteps + ", srcType=" + this.srcType + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
