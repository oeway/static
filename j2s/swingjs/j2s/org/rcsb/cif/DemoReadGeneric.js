(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},p$2={},I$=[[0,'org.rcsb.cif.CifIO',['org.rcsb.cif.DemoReadGeneric','.StreamParser'],['org.rcsb.cif.DemoReadGeneric','.TextParser'],'java.io.FileInputStream','java.io.File','java.io.ByteArrayInputStream','java.io.BufferedInputStream','java.net.URL','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DemoReadGeneric", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.j2sHeadless=false;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.j2sHeadless=true;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var pdbId="3j9m";
try {
var t0=System.nanoTime$();
try {
Clazz.getClass($I$(1)).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
} else {
throw e;
}
}
C$.reportTime$J$S(t0, "Loading Cif options");
C$.parse$S$I(pdbId, 1056);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
System.out.println$S("Demo complete");
}, 1);

Clazz.newMeth(C$, 'parse$S$I', function (pdbId, mode) {
var useStream=((mode & 1024) == 1024);
if (useStream) {
Clazz.new_($I$(2,1).c$$S$I,[pdbId, mode]).parseTest$I(mode);
} else {
Clazz.new_($I$(3,1).c$$S,[pdbId]).parseTest$I(mode);
}}, 1);

Clazz.newMeth(C$, 'process$org_rcsb_cif_generic_CifFile$I', function (cifFile, mode) {
var silent=((mode & 1024) == 1024);
var parseBinary=((mode & 1) == 1);
var type=(parseBinary ? "binary " : "text ");
var t0=System.nanoTime$();
var t1=0;
var ;
var atomSite;
var nAtoms=atomSite.getRowCount$();
if (!silent) System.out.println$S("nAtoms=" + nAtoms);
var useFunctional=false;
if (useFunctional) {
t1=System.nanoTime$();
var cx=(atomSite.getColumn$S("cartn_x"));
var cy=(atomSite.getColumn$S("cartn_y"));
var cz=(atomSite.getColumn$S("cartn_z"));
var averageCartnX=cx.values$().average$();
if (!silent) {
t1=C$.reportTime$J$S(t1, "functional average nAtoms=" + nAtoms);
System.out.print$S(type);
averageCartnX.ifPresent$java_util_function_DoubleConsumer((function($$){((P$.DemoReadGeneric$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DemoReadGeneric$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.QualifiedName java.io.PrintStream*/$$.println$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.DemoReadGeneric$lambda1.$init$, [this, null])})(System.out));
}} else {
var aatoms=atomSite.fillFloat$SA(Clazz.array(String, -1, ["cartn_x", "cartn_y", "cartn_z"]));
var sum=0;
for (var i=nAtoms; --i >= 0; ) sum += aatoms[0][i];

var ave=(nAtoms == 0 ? 0 : sum / nAtoms);
if (!silent) {
t1=C$.reportTime$J$S(t1, "for-loop average nAtoms=" + nAtoms);
System.out.print$S(type);
System.out.println$D(ave);
}}if (!silent) t0=C$.reportTime$J$S(t0, "parse " + (parseBinary ? "BINARY" : "TEXT"));
}, 1);

Clazz.newMeth(C$, 'getByteStreamFor$S$I', function (pdbId, mode) {
var isBinary=((mode & 1) == 1);
var isLocal=((mode & 2048) == 2048);
var o;
var is=(isLocal ? Clazz.new_($I$(4,1).c$$java_io_File,[(o=Clazz.new_($I$(5,1).c$$S,["c:/temp/" + pdbId + (isBinary ? ".b" : ".") + "cif" ]))]) : ((o=C$.getURL$S$Z(pdbId, isBinary))).openStream$());
System.out.println$S("Reading data from " + o);
return Clazz.new_($I$(6,1).c$$BA,[C$.getStreamAsBytes$java_io_BufferedInputStream(Clazz.new_($I$(7,1).c$$java_io_InputStream,[is]))]);
}, 1);

Clazz.newMeth(C$, 'getURL$S$Z', function (pdbId, isBinary) {
return (isBinary ? Clazz.new_($I$(8,1).c$$S,["https://www.ebi.ac.uk/pdbe/coordinates/" + pdbId + "/full?encoding=bcif" ]) : Clazz.new_($I$(8,1).c$$S,["https://www.ebi.ac.uk/pdbe/coordinates/" + pdbId + "/full?encoding=cif" ]));
}, 1);

Clazz.newMeth(C$, 'reportTime$J$I$S', function (t0, n, msg) {
var now=System.nanoTime$();
System.out.println$S(((now - t0)/n / 1000000 |0) + "\tniter=" + n + "\t" + msg);
return now;
}, 1);

Clazz.newMeth(C$, 'reportTime$J$S', function (t0, msg) {
var now=System.nanoTime$();
System.out.println$S(((now - t0)/1000000|0) + "\t" + msg);
return now;
}, 1);

Clazz.newMeth(C$, 'gcTime$J', function (tgc) {
var tg=System.nanoTime$();
System.gc$();
return tgc + System.nanoTime$() - tg;
}, 1);

Clazz.newMeth(C$, 'getStreamAsBytes$java_io_BufferedInputStream', function (bis) {
var buf=Clazz.array(Byte.TYPE, [1024]);
var bytes=Clazz.array(Byte.TYPE, [4096]);
var len=0;
var totalLen=0;
while ((len=bis.read$BA$I$I(buf, 0, 1024)) > 0){
totalLen+=len;
if (totalLen >= bytes.length) bytes=$I$(9).copyOf$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
}
bis.close$();
return $I$(9).copyOf$BA$I(bytes, totalLen);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DemoReadGeneric, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parseTest$I', function (mode) {
p$1.test$I.apply(this, [1 | mode]);
});

Clazz.newMeth(C$, 'test$I', function (mode) {
var parseBinary=((mode & 1) == 1);
var type=(parseBinary ? "binary" : "text");
var t0;
var tgc;
this.setMode$I(mode);
this.parse$I(mode);
this.parse$I(mode);
this.parse$I(mode);
System.out.println$S("------");
t0=System.nanoTime$();
tgc=0;
for (var i=0; i < 10; i++) {
tgc=P$.DemoReadGeneric.gcTime$J(tgc);
this.parse$I(mode);
}
P$.DemoReadGeneric.reportTime$J$I$S(t0 + tgc, 10, "------PARSE " + type + " (-GC)" );
t0=P$.DemoReadGeneric.reportTime$J$I$S(t0, 10, "------PARSE " + type);
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DemoReadGeneric, "StreamParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.rcsb.cif.DemoReadGeneric','.Parser']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inputStream=null;
this.pdbId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (pdbId, mode) {
Clazz.super_(C$, this);
this.pdbId=pdbId;
}, 1);

Clazz.newMeth(C$, 'loadStream$S$I', function (pdbId, mode) {
var isBinary=((mode & 1) == 1);
var testTransfer=((mode & 64) == 64);
var type=(isBinary ? "binary" : "text");
var t0=System.nanoTime$();
var t1=System.nanoTime$();
var is=P$.DemoReadGeneric.getByteStreamFor$S$I(pdbId, mode);
if (testTransfer) {
t1=P$.DemoReadGeneric.reportTime$J$S(t1, type + " transfer from " + P$.DemoReadGeneric.getURL$S$Z(pdbId, isBinary) );
is=P$.DemoReadGeneric.getByteStreamFor$S$I(pdbId, mode);
t1=P$.DemoReadGeneric.reportTime$J$S(t1, type + " transfer from " + P$.DemoReadGeneric.getURL$S$Z(pdbId, isBinary) );
is=P$.DemoReadGeneric.getByteStreamFor$S$I(pdbId, mode);
t1=P$.DemoReadGeneric.reportTime$J$S(t1, type + " transfer from " + P$.DemoReadGeneric.getURL$S$Z(pdbId, isBinary) );
t0=P$.DemoReadGeneric.reportTime$J$I$S(t0, 3, type + " transfer from " + P$.DemoReadGeneric.getURL$S$Z(pdbId, isBinary) );
} else {
t0=P$.DemoReadGeneric.reportTime$J$S(t0, type + " len=" + is.available$() + " transfer from " + P$.DemoReadGeneric.getURL$S$Z(pdbId, isBinary) );
}return is;
}, p$2);

Clazz.newMeth(C$, 'setMode$I', function (mode) {
try {
this.inputStream=p$2.loadStream$S$I.apply(this, [this.pdbId, mode]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parse$I', function (mode) {
var silent=((mode & 1024) == 1024);
var parseBinary=((mode & 1) == 1);
var getAllData=((mode & 16) == 16);
var process=((mode & 32) == 32);
var t0=System.nanoTime$();
var t1;
this.inputStream.reset$();
var cifFile;
if (!silent) t0=P$.DemoReadGeneric.reportTime$J$S(t0, "parseStream " + (parseBinary ? "BINARY " : "TEXT ") + this.getClass$().getSimpleName$() );
if (getAllData) {
System.out.println$S("getting data");
}if (process) {
silent=true;
t1=(silent ? 0 : System.nanoTime$());
for (var i=0; i < 1; i++) P$.DemoReadGeneric.process$org_rcsb_cif_generic_CifFile$I(cifFile, mode | 1024);

t1=(silent ? 0 : P$.DemoReadGeneric.reportTime$J$I$S(t1, 1, "processStream " + (parseBinary ? "BINARY " : "TEXT ") + this.getClass$().getSimpleName$() ));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DemoReadGeneric, "TextParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.rcsb.cif.DemoReadGeneric','.Parser']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pdbId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (pdbId) {
Clazz.super_(C$, this);
this.pdbId=pdbId;
}, 1);

Clazz.newMeth(C$, 'parse$I', function (mode) {
var silent=((mode & 1024) == 1024);
var parseBinary=((mode & 1) == 1);
var getAllData=((mode & 16) == 16);
var process=((mode & 32) == 32);
var t0=System.nanoTime$();
var cifFile;
if (!silent) t0=P$.DemoReadGeneric.reportTime$J$S(t0, "parseStream " + (parseBinary ? "BINARY " : "TEXT ") + this.getClass$().getSimpleName$() );
if (getAllData) {
System.out.println$S("getting data");
}if (process) {
P$.DemoReadGeneric.process$org_rcsb_cif_generic_CifFile$I(cifFile, mode);
}});

Clazz.newMeth(C$, 'setMode$I', function (mode) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:23 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
