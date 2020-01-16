(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.util.Manifest','org.scijava.util.POM']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VersionUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getVersion$Class', function (c) {
return C$.getVersion$Class$S$S(c, null, null);
}, 1);

Clazz.newMeth(C$, 'getVersion$Class$S$S', function (c, groupId, artifactId) {
{
return "unknown(SwingJS)";
}
}, 1);

Clazz.newMeth(C$, 'getVersionFromManifest$Class', function (c) {
var m=$I$(1).getManifest$Class(c);
return m == null  ? null : m.getVersion$();
}, 1);

Clazz.newMeth(C$, 'getVersionFromPOM$Class$S$S', function (c, groupId, artifactId) {
var pom=$I$(2).getPOM$Class$S$S(c, groupId, artifactId);
return pom == null  ? null : pom.getVersion$();
}, 1);

Clazz.newMeth(C$, 'getBuildNumber$Class', function (c) {
var m=$I$(1).getManifest$Class(c);
return m == null  ? null : m.getImplementationBuild$();
}, 1);

Clazz.newMeth(C$, 'compare$S$S', function (v1, v2) {
var t1=C$.splitDots$S(v1);
var t2=C$.splitDots$S(v2);
var count=Math.min(t1.length, t2.length);
for (var t=0; t < count; t++) {
var c=C$.compareToken$S$S(t1[t], t2[t]);
if (c != 0) return c;
}
if (t1.length == t2.length) return 0;
return t1.length < t2.length ? -1 : 1;
}, 1);

Clazz.newMeth(C$, 'splitDots$S', function (s) {
return s.isEmpty$() ? Clazz.array(String, [0]) : s.split$S$I("\\.", -1);
}, 1);

Clazz.newMeth(C$, 'compareToken$S$S', function (t1, t2) {
var i1=C$.digitIndex$S(t1);
var i2=C$.digitIndex$S(t2);
if (i1 > 0 && i2 > 0 ) {
var d1=Long.parseLong$S(t1.substring$I$I(0, i1));
var d2=Long.parseLong$S(t2.substring$I$I(0, i2));
if (d1 < d2) return -1;
if (d1 > d2) return 1;
}return t1.substring$I(i1).compareTo$S(t2.substring$I(i2));
}, 1);

Clazz.newMeth(C$, 'digitIndex$S', function (s) {
var index=0;
for (var i=0; i < s.length$(); i++) {
var ch=s.charAt$I(index);
if (ch < "0" || ch > "9" ) break;
index++;
}
return index;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
