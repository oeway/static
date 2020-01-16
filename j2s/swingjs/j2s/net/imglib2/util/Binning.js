(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Binning");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'valueToBin$I$D$D$D', function (bins, min, max, value) {
var bin=C$.exclusiveValueToBin$I$D$D$D(bins, min, max, value);
bin=Math.max(bin, 0);
bin=Math.min(bin, bins - 1);
return bin;
}, 1);

Clazz.newMeth(C$, 'exclusiveValueToBin$I$D$D$D', function (bins, min, max, value) {
var bin;
if (max != min ) {
if (value != max ) {
var temp=(value - min) / (max - min);
bin=(Math.floor(temp * bins)|0);
} else {
bin=bins - 1;
}} else {
bin=(bins/2|0);
}return bin;
}, 1);

Clazz.newMeth(C$, 'edgeValuesPerBin$I$D$D', function (bins, min, max) {
var edgeValues=Clazz.array(Double.TYPE, [bins]);
for (var i=0; i < bins; ++i) {
edgeValues[i]=min + (max - min) * i / bins;
}
return edgeValues;
}, 1);

Clazz.newMeth(C$, 'centerValuesPerBin$I$D$D', function (bins, min, max) {
var edgeValues=C$.edgeValuesPerBin$I$D$D(bins, min, max);
var centerValues=Clazz.array(Double.TYPE, [bins]);
for (var i=0; i < bins - 1; ++i) {
centerValues[i]=(edgeValues[i] + edgeValues[i + 1]) / 2;
}
centerValues[bins - 1]=(edgeValues[bins - 1] + max) / 2;
return centerValues;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
