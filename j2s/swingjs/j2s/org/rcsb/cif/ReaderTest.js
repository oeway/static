(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},I$=[[0,'org.rcsb.cif.TestHelper','org.rcsb.cif.CifIO','org.rcsb.cif.CifOptions',['org.rcsb.cif.CifOptions','.CifOptionsBuilder','.FileFormat']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReaderTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testGzipReadingBehavior$', function () {
for (var id, $id = $I$(1).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.testGzipReadingBehavior$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'testGzipReadingBehavior$S', function (testCase) {
var binaryGz=$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("bcif/" + testCase + ".bcif.gz" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), binaryGz.getFirstBlock$().getEntry$().getId$().get$I(0));
var binary=$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("bcif/" + testCase + ".bcif" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), binary.getFirstBlock$().getEntry$().getId$().get$I(0));
var textGz=$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("cif/" + testCase + ".cif.gz" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), textGz.getFirstBlock$().getEntry$().getId$().get$I(0));
var text=$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("cif/" + testCase + ".cif" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), text.getFirstBlock$().getEntry$().getId$().get$I(0));
}, p$1);

Clazz.newMeth(C$, 'parseBinary$', function () {
for (var testCase, $testCase = $I$(1).TEST_CASES.entrySet$().iterator$(); $testCase.hasNext$()&&((testCase=($testCase.next$())),1);) {
var inputStream=$I$(1).getInputStream$S("bcif/" + testCase.getKey$() + ".bcif" );
p$1.checkParsedEntity$org_rcsb_cif_api_CifFile$java_util_List.apply(this, [$I$(2).readFromInputStream$java_io_InputStream(inputStream), testCase.getValue$()]);
}
});

Clazz.newMeth(C$, 'parseText$', function () {
for (var testCase, $testCase = $I$(1).TEST_CASES.entrySet$().iterator$(); $testCase.hasNext$()&&((testCase=($testCase.next$())),1);) {
var inputStream=$I$(1).getInputStream$S("cif/" + testCase.getKey$() + ".cif" );
p$1.checkParsedEntity$org_rcsb_cif_api_CifFile$java_util_List.apply(this, [$I$(2).readFromInputStream$java_io_InputStream(inputStream), testCase.getValue$()]);
}
});

Clazz.newMeth(C$, 'checkParsedEntity$org_rcsb_cif_api_CifFile$java_util_List', function (cifFile, testData) {
var data=cifFile.getFirstBlock$();
var _atom_site=data.getAtomSite$();
var firstCoordinate=_atom_site.getCartnX$().get$I(0);
org.junit.Assert.assertEquals$S$D$D$D("coordinate parsing corrupted", (testData.get$I(0)).objectValue$(), firstCoordinate, 0.001);
var label_seq_id=_atom_site.getLabelSeqId$();
label_seq_id.values$().max$().ifPresent$java_util_function_IntConsumer(((P$.ReaderTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReaderTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) { return (org.junit.Assert.assertEquals$S$J$J("sequence id parsing corrupted", ((this.$finals$.testData.get$I(1)).objectValue$()|0), i));});
})()
), Clazz.new_(P$.ReaderTest$lambda1.$init$, [this, {testData:testData}])));
var stringValue=data.getEntry$().getId$().get$I(0);
org.junit.Assert.assertEquals$S$O$O("id parsing corrupted", testData.get$I(2), stringValue);
}, p$1);

Clazz.newMeth(C$, 'shouldReportExceptionForEmptyBinaryFile$', function () {
$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("bcif/0emp.bcif"));
});

Clazz.newMeth(C$, 'shouldReportExceptionForEmptyTextFile$', function () {
$I$(2).readFromInputStream$java_io_InputStream($I$(1).getInputStream$S("cif/0emp.cif"));
});

Clazz.newMeth(C$, 'shouldHonorFileFormatAndFailWhenMismatching1$', function () {
$I$(2).readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions($I$(1).getInputStream$S("bcif/1a2c.bcif"), $I$(3).builder$().fileFormatHint$org_rcsb_cif_CifOptions_CifOptionsBuilder_FileFormat($I$(4).BCIF_GZIPPED).build$());
});

Clazz.newMeth(C$, 'shouldHonorFileFormatAndFailWhenMismatching2$', function () {
$I$(2).readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions($I$(1).getInputStream$S("bcif/1a2c.bcif"), $I$(3).builder$().fileFormatHint$org_rcsb_cif_CifOptions_CifOptionsBuilder_FileFormat($I$(4).CIF_PLAIN).build$());
});
C$.__ANN__ = [[['M:testGzipReadingBehavior','void'],['@Test']],
  [['M:parseBinary','.'],['@Test']],
  [['M:parseText','.'],['@Test']],
  [['M:shouldReportExceptionForEmptyBinaryFile','.'],['@Test(expected="org.rcsb.cif.ParsingException.class" )']],
  [['M:shouldReportExceptionForEmptyTextFile','.'],['@Test(expected="org.rcsb.cif.ParsingException.class" )']],
  [['M:shouldHonorFileFormatAndFailWhenMismatching1','.'],['@Test(expected="org.rcsb.cif.ParsingException.class" )']],
  [['M:shouldHonorFileFormatAndFailWhenMismatching2','.'],['@Test(expected="org.rcsb.cif.ParsingException.class" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
