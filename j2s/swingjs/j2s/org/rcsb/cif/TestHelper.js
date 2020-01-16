(function(){var P$=Clazz.newPackage("org.rcsb.cif"),I$=[[0,'java.util.stream.Stream','java.util.stream.Collectors','java.util.regex.Pattern','Thread','java.util.Objects','java.io.ByteArrayOutputStream','org.rcsb.cif.binary.data.EncodedDataFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestHelper");
C$.TEST_CASES=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.TEST_CASES=$I$(1).of$TTA([$I$(1).of$TTA(["1acj", new Double(-12.503), new Integer(535), "1ACJ"]).collect$java_util_stream_Collector($I$(2).toList$()), $I$(1).of$TTA(["1j59", new Double(-5.513), new Integer(207), "1J59"]).collect$java_util_stream_Collector($I$(2).toList$()), $I$(1).of$TTA(["1pga", new Double(26.778), new Integer(56), "1PGA"]).collect$java_util_stream_Collector($I$(2).toList$()), $I$(1).of$TTA(["4cxl", new Double(-13.933), new Integer(29), "4CXL"]).collect$java_util_stream_Collector($I$(2).toList$()), $I$(1).of$TTA(["5zmz", new Double(10.752), new Integer(4), "5ZMZ"]).collect$java_util_stream_Collector($I$(2).toList$())]).collect$java_util_stream_Collector($I$(2).toMap$java_util_function_Function$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.TestHelper$lambda1*/(P$.TestHelper$lambda1$||(P$.TestHelper$lambda1$=(((P$.TestHelper$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestHelper$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (l) { return (l.get$I(0));});
})()
), Clazz.new_(P$.TestHelper$lambda1.$init$, [this, null]))))), /*addLambdaReuse org.rcsb.cif.TestHelper$lambda2*/(P$.TestHelper$lambda2$||(P$.TestHelper$lambda2$=(((P$.TestHelper$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestHelper$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (l) { return (l.subList$I$I(1, l.size$()));});
})()
), Clazz.new_(P$.TestHelper$lambda2.$init$, [this, null])))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'assertEqualsLoosely$S$S', function (expected, actual) {
var exp=$I$(3).compile$S("\\s+").splitAsStream$CharSequence(expected).collect$java_util_stream_Collector($I$(2).toList$());
var act=$I$(3).compile$S("\\s+").splitAsStream$CharSequence(actual).collect$java_util_stream_Collector($I$(2).toList$());
if (exp.size$() != act.size$()) {
org.junit.Assert.assertEquals$O$O(String.join$CharSequence$Iterable("\n", exp), String.join$CharSequence$Iterable("\n", act));
}for (var i=0; i < exp.size$(); i++) {
var e=exp.get$I(i);
var a=act.get$I(i);
try {
var i1=Integer.parseInt$S(e);
var i2=Integer.parseInt$S(a);
org.junit.Assert.assertEquals$J$J(i1, i2);
} catch (exp1) {
if (Clazz.exceptionOf(exp1,"NumberFormatException")){
try {
var d1=Double.parseDouble$S(e);
var d2=Double.parseDouble$S(a);
org.junit.Assert.assertEquals$D$D$D(d1, d2, 0.001);
} catch (exp2) {
if (Clazz.exceptionOf(exp2,"NumberFormatException")){
org.junit.Assert.assertEquals$O$O(e.replace$CharSequence$CharSequence("\'", "").replace$CharSequence$CharSequence("\"", ""), a.replace$CharSequence$CharSequence("\'", "").replace$CharSequence$CharSequence("\"", ""));
} else {
throw exp2;
}
}
} else {
throw exp1;
}
}
}
}, 1);

Clazz.newMeth(C$, 'getInputStream$S', function (localPath) {
var inputStream=$I$(4).currentThread$().getContextClassLoader$().getResourceAsStream$S(localPath);
var re=inputStream == null  ? Clazz.getClass(C$).getResourceAsStream$S(localPath) : inputStream;
$I$(5).requireNonNull$TT$S(re, "Could not load test resource " + localPath);
return re;
}, 1);

Clazz.newMeth(C$, 'getBytes$S', function (localPath) {
var byteArrayOutputStream=Clazz.new_($I$(6,1));
var bytesRead;
var buffer=Clazz.array(Byte.TYPE, [1024]);
var inputStream=C$.getInputStream$S(localPath);
while ((bytesRead=inputStream.read$BA$I$I(buffer, 0, buffer.length)) != -1){
byteArrayOutputStream.write$BA$I$I(buffer, 0, bytesRead);
}
byteArrayOutputStream.flush$();
var byteArray=byteArrayOutputStream.toByteArray$();
byteArrayOutputStream.close$();
inputStream.close$();
return byteArray;
}, 1);

Clazz.newMeth(C$, 'convertToIntArray$BA', function (bytes) {
var out=Clazz.array(Integer.TYPE, [bytes.length]);
for (var i=0; i < out.length; i++) {
out[i]=bytes[i] & 255;
}
return out;
}, 1);

Clazz.newMeth(C$, 'convertToIntArray$S', function (hex) {
return $I$(3).compile$S(" ").splitAsStream$CharSequence(hex).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.TestHelper$lambda3*/(P$.TestHelper$lambda3$||(P$.TestHelper$lambda3$=(((P$.TestHelper$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestHelper$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return ("0x" + s);});
})()
), Clazz.new_(P$.TestHelper$lambda3.$init$, [this, null])))))).mapToInt$java_util_function_ToIntFunction(/*addLambdaReuse org.rcsb.cif.TestHelper$lambda4*/(P$.TestHelper$lambda4$||(P$.TestHelper$lambda4$=((function($$){((P$.TestHelper$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestHelper$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return /*addmeth isclasstarget true classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName java.lang.Integer*/$$.decode$S.apply(null,[t])});
})()
)); return Clazz.new_(P$.TestHelper$lambda4.$init$, [this, null])})(Integer))))).toArray$();
}, 1);

Clazz.newMeth(C$, 'shouldAcquireInputStream$', function () {
org.junit.Assert.assertNotNull$S$O("Could not acquire inputstream of local resource", C$.getInputStream$S("cif/1pga.cif"));
});

Clazz.newMeth(C$, 'messagePackToUint8Array$', function () {
var id="1j59.bcif";
org.junit.Assert.assertNotNull$O($I$(7).byteArray$BA(C$.getBytes$S("bcif/" + id)).toUint8Array$java_util_LinkedList(null).getData$());
});
C$.__ANN__ = [[['M:shouldAcquireInputStream','void'],['@Test']],
  [['M:messagePackToUint8Array','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
