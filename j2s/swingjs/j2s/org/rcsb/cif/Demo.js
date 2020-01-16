(function(){var P$=Clazz.newPackage("org.rcsb.cif"),I$=[[0,'org.rcsb.cif.CifIO','java.net.URL','org.rcsb.cif.model.builder.CifBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Demo");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
C$.parseFile$();
System.out.println$();
}, 1);

Clazz.newMeth(C$, 'parseFile$', function () {
var pdbId="1acj";
var parseBinary=true;
var cifFile;
if (parseBinary) {
cifFile=$I$(1).readFromURL$java_net_URL(Clazz.new_($I$(2,1).c$$S,["https://www.ebi.ac.uk/pdbe/coordinates/" + pdbId + "/full?encoding=bcif" ]));
} else {
cifFile=$I$(1).readFromURL$java_net_URL(Clazz.new_($I$(2,1).c$$S,["https://files.rcsb.org/download/" + pdbId + ".cif" ]));
}var data=cifFile.getFirstBlock$();
var atomSite=data.getAtomSite$();
var cartnX=atomSite.getCartnX$();
var entryId=data.getEntry$().getId$().get$I(0);
System.out.println$S(entryId);
var averageCartnX=cartnX.values$().average$();
averageCartnX.ifPresent$java_util_function_DoubleConsumer((function($$){((P$.Demo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Demo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.QualifiedName java.io.PrintStream*/$$.println$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.Demo$lambda1.$init$, [this, null])})(System.out));
var lastLabelSeqId=atomSite.getLabelSeqId$().values$().max$();
lastLabelSeqId.ifPresent$java_util_function_IntConsumer((function($$){((P$.Demo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Demo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.QualifiedName java.io.PrintStream*/$$.println$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.Demo$lambda2.$init$, [this, null])})(System.out));
var groupPdb=data.getAtomSite$().getGroupPDB$().values$().findFirst$();
groupPdb.ifPresent$java_util_function_Consumer((function($$){((P$.Demo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Demo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.QualifiedName java.io.PrintStream*/$$.println$S.apply($$,[t])});
})()
)); return Clazz.new_(P$.Demo$lambda3.$init$, [this, null])})(System.out));
}, 1);

Clazz.newMeth(C$, 'buildModel$', function () {
var cifFile=Clazz.new_($I$(3,1)).enterBlock$S("1EXP").enterEntry$().enterId$().add$SA(["1EXP"]).leaveColumn$().leaveCategory$().enterAtomSite$().enterCartnX$().add$DA([1.0, -2.4, 4.5]).markNextUnknown$().add$DA([-3.14, 5.0]).leaveColumn$().enterCartnY$().add$DA([0.0, -1.0, 2.72]).markNextNotPresent$().add$DA([42, 100]).leaveColumn$().leaveCategory$().leaveBlock$().leaveFile$();
System.out.println$S( String.instantialize($I$(1).writeText$org_rcsb_cif_api_CifFile(cifFile)));
System.out.println$S(cifFile.getFirstBlock$().getEntry$().getId$().get$I(0));
cifFile.getFirstBlock$().getAtomSite$().getCartnX$().values$().forEach$java_util_function_DoubleConsumer((function($$){((P$.Demo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Demo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.QualifiedName java.io.PrintStream*/$$.println$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.Demo$lambda4.$init$, [this, null])})(System.out));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:23 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
