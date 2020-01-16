(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnitUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.BYTE_UNITS=Clazz.array(String, -1, ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]);
C$.LOG1024=Math.log(1024);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['LOG1024'],'O',['BYTE_UNITS','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAbbreviatedByteLabel$D', function (totBytes) {
if (totBytes < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bytes must be non-negative"]);
}if (totBytes == 0 ) return "0B";
var rawPow=((Math.log(totBytes) / C$.LOG1024)|0);
var pow=Math.min(rawPow, C$.BYTE_UNITS.length - 1);
var value=totBytes / Math.pow(1024.0, pow);
var format=C$.format$D(pow);
return String.format$S$OA(format, [new Double(value), C$.BYTE_UNITS[pow]]);
}, 1);

Clazz.newMeth(C$, 'format$D', function (power) {
return power == 0  ? "%.0f%s" : "%.1f%s";
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
