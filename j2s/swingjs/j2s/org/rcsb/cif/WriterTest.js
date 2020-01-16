(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},I$=[[0,'org.rcsb.cif.CifIO','java.util.regex.Pattern','org.rcsb.cif.model.builder.CifBuilder','java.io.ByteArrayInputStream','org.rcsb.cif.model.builder.CategoryBuilder','org.rcsb.cif.model.builder.FloatColumnBuilder','org.rcsb.cif.TestHelper','org.rcsb.cif.CifOptions','java.nio.file.Paths']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WriterTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testNumberFormat$', function () {
var inputStream=P$.TestHelper.getInputStream$S("cif/1a2c.cif");
var cifFile=$I$(1).readFromInputStream$java_io_InputStream(inputStream);
var output= String.instantialize($I$(1).writeText$org_rcsb_cif_api_CifFile(cifFile));
$I$(2).compile$S("\n").splitAsStream$CharSequence(output).filter$java_util_function_Predicate(/*addLambdaReuse org.rcsb.cif.WriterTest$lambda1*/(P$.WriterTest$lambda1$||(P$.WriterTest$lambda1$=(((P$.WriterTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (line) { return (line.startsWith$S("ATOM"));});
})()
), Clazz.new_(P$.WriterTest$lambda1.$init$, [this, null])))))).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.WriterTest$lambda2*/(P$.WriterTest$lambda2$||(P$.WriterTest$lambda2$=(((P$.WriterTest$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (line) { return (line.split$S("\\s+"));});
})()
), Clazz.new_(P$.WriterTest$lambda2.$init$, [this, null])))))).forEach$java_util_function_Consumer(/*addLambdaReuse org.rcsb.cif.WriterTest$lambda3*/(P$.WriterTest$lambda3$||(P$.WriterTest$lambda3$=(((P$.WriterTest$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (split) {
org.junit.Assert.assertEquals$J$J(3, split[10].split$S("\\.")[1].length$());
org.junit.Assert.assertEquals$J$J(3, split[11].split$S("\\.")[1].length$());
org.junit.Assert.assertEquals$J$J(3, split[12].split$S("\\.")[1].length$());
org.junit.Assert.assertEquals$J$J(2, split[13].split$S("\\.")[1].length$());
if (split[14].contains$CharSequence(".")) {
org.junit.Assert.assertTrue$Z(split[14].split$S("\\.")[1].length$() <= 6);
}});
})()
), Clazz.new_(P$.WriterTest$lambda3.$init$, [this, null]))))));
});

Clazz.newMeth(C$, 'testNumberFormatOfBuiltCifFile$', function () {
var cifFile;
var output= String.instantialize($I$(1).writeText$org_rcsb_cif_api_CifFile(cifFile));
$I$(2).compile$S("\n").splitAsStream$CharSequence(output).filter$java_util_function_Predicate(/*addLambdaReuse org.rcsb.cif.WriterTest$lambda4*/(P$.WriterTest$lambda4$||(P$.WriterTest$lambda4$=(((P$.WriterTest$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (line) {
try {
Double.parseDouble$S(line);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.WriterTest$lambda4.$init$, [this, null])))))).map$java_util_function_Function((function($$){((P$.WriterTest$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName java.lang.String*/t.trim$.apply(t,[])});
})()
)); return Clazz.new_(P$.WriterTest$lambda5.$init$, [this, null])})(String)).forEach$java_util_function_Consumer(/*addLambdaReuse org.rcsb.cif.WriterTest$lambda6*/(P$.WriterTest$lambda6$||(P$.WriterTest$lambda6$=(((P$.WriterTest$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "WriterTest$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (number) { return (org.junit.Assert.assertEquals$J$J(2, number.split$S("\\.")[1].length$()));});
})()
), Clazz.new_(P$.WriterTest$lambda6.$init$, [this, null]))))));
});

Clazz.newMeth(C$, 'shouldReturnIntAndFloatColumn$', function () {
var categoryBuilder=Clazz.new_($I$(3,1)).enterBlock$S("test").enterCategory$S("test");
var ints;
var floats;
ints.add$IA([1, 2, 3]);
floats.add$DA([-1.234, 3.1415, 42]);
var cifFile=categoryBuilder.leaveCategory$().leaveBlock$().leaveFile$();
var binary=$I$(1).writeBinary$org_rcsb_cif_api_CifFile(cifFile);
var text=$I$(1).writeText$org_rcsb_cif_api_CifFile(cifFile);
var binaryFile=$I$(1).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[binary]));
var textFile=$I$(1).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[text]));
var binaryCategory=binaryFile.getFirstBlock$().getCategory$S("test");
var textCategory=textFile.getFirstBlock$().getCategory$S("test");
var binaryIntColumn=binaryCategory.getColumn$S("ints");
var binaryFloatColumn=binaryCategory.getColumn$S("floats");
var textIntColumn=textCategory.getColumn$S("ints");
var textFloatColumn=textCategory.getColumn$S("floats");
org.junit.Assert.assertNotNull$O(binaryIntColumn);
org.junit.Assert.assertNotNull$O(binaryFloatColumn);
org.junit.Assert.assertNotNull$O(textIntColumn);
org.junit.Assert.assertNotNull$O(textFloatColumn);
});

Clazz.newMeth(C$, 'testClassInferenceOfBuiltCifFile$', function () {
var cifFile=Clazz.new_($I$(3,1)).enterBlock$S("test").enterAtomSite$().enterBIsoOrEquiv$().add$DA([1, 2, 3.456789012345, 0.33333333333299997]).leaveColumn$().leaveCategory$().leaveBlock$().leaveFile$();
org.junit.Assert.assertTrue$Z(Clazz.instanceOf(cifFile.getFirstBlock$().getCategory$S("atom_site"), "org.rcsb.cif.model.generated.AtomSite"));
org.junit.Assert.assertTrue$Z(Clazz.instanceOf(cifFile.getFirstBlock$().getCategory$S("atom_site").getColumn$S("B_iso_or_equiv"), "org.rcsb.cif.model.FloatColumn"));
var atom_site=Clazz.new_($I$(5,1).c$$S$org_rcsb_cif_model_builder_BlockBuilder,["atom_site", null]).build$();
org.junit.Assert.assertTrue$Z(Clazz.instanceOf(atom_site, "org.rcsb.cif.model.generated.AtomSite"));
var cartnX=Clazz.new_($I$(6,1).c$$S$S$TP,["atom_site", "Cartn_x", null]).build$();
org.junit.Assert.assertNotNull$O(cartnX);
});

Clazz.newMeth(C$, 'writeText$', function () {
for (var id, $id = $I$(7).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.writeText$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'writeText$S', function (testCase) {
var original= String.instantialize($I$(7).getBytes$S("cif/" + testCase + ".cif" ));
var inputStream=$I$(7).getInputStream$S("cif/" + testCase + ".cif" );
var text=$I$(1).readFromInputStream$java_io_InputStream(inputStream);
var copy= String.instantialize($I$(1).writeText$org_rcsb_cif_api_CifFile(text));
P$.TestHelper.assertEqualsLoosely$S$S(original, copy);
}, p$1);

Clazz.newMeth(C$, 'writeBinary$', function () {
for (var id, $id = $I$(7).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.writeBinary$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'writeBinary$S', function (testCase) {
var original=$I$(7).getBytes$S("snapshot/" + testCase + ".bcif" );
var originalGzip=$I$(7).getBytes$S("snapshot/" + testCase + ".bcif.gz" );
var inputStream=$I$(7).getInputStream$S("snapshot/" + testCase + ".bcif" );
var binary=$I$(1).readFromInputStream$java_io_InputStream(inputStream);
var output=$I$(1).writeBinary$org_rcsb_cif_api_CifFile(binary);
var outputGzip=$I$(1).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(binary, $I$(8).builder$().gzip$Z(true).build$());
org.junit.Assert.assertEquals$S$O$O("failed for " + testCase,  String.instantialize(original),  String.instantialize(output));
org.junit.Assert.assertEquals$S$O$O("failed (gzip) for " + testCase,  String.instantialize(originalGzip),  String.instantialize(outputGzip));
org.junit.Assert.assertArrayEquals$S$BA$BA("binary write output does not match snapshot of output - did the implementation change? if so, update snapshot files in snapshot/", original, output);
org.junit.Assert.assertArrayEquals$S$BA$BA("binary write output does not match snapshot of output - did the implementation change? if so, update snapshot files in snapshot/", originalGzip, outputGzip);
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (args) {
for (var id, $id = $I$(7).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var inputStream=$I$(7).getInputStream$S("cif/" + id + ".cif" );
var data=$I$(1).readFromInputStream$java_io_InputStream(inputStream);
var options=$I$(8).builder$().categoryBlacklist$SA(["coordinate_server_result", "coordinate_server_query_params", "coordinate_server_stats"]).build$();
var optionsGzip=$I$(8).builder$().categoryBlacklist$SA(["coordinate_server_result", "coordinate_server_query_params", "coordinate_server_stats"]).gzip$Z(true).build$();
$I$(1).writeText$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(data, $I$(9).get$S$SA("/Users/sebastian/snapshot/", []).resolve$S(id + ".cif"), options);
$I$(1).writeText$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(data, $I$(9).get$S$SA("/Users/sebastian/snapshot/", []).resolve$S(id + ".cif.gz"), optionsGzip);
$I$(1).writeBinary$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(data, $I$(9).get$S$SA("/Users/sebastian/snapshot/", []).resolve$S(id + ".bcif"), options);
$I$(1).writeBinary$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(data, $I$(9).get$S$SA("/Users/sebastian/snapshot/", []).resolve$S(id + ".bcif.gz"), optionsGzip);
}
}, 1);
C$.__ANN__ = [[['M:testNumberFormat','void'],['@Test']],
  [['M:testNumberFormatOfBuiltCifFile','.'],['@Test']],
  [['M:shouldReturnIntAndFloatColumn','.'],['@Test']],
  [['M:testClassInferenceOfBuiltCifFile','.'],['@Test']],
  [['M:writeText','.'],['@Test']],
  [['M:writeBinary','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
