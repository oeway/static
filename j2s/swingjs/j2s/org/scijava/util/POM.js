(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'Thread','java.util.ArrayList','org.scijava.util.IteratorPlus','org.scijava.util.FileUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "POM", null, 'org.scijava.util.XML', ['Comparable', 'org.scijava.Versioned']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['version']]]

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
;C$.superclazz.c$$java_io_File.apply(this,[file]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParentGroupId$', function () {
return this.cdata$S("//project/parent/groupId");
});

Clazz.newMeth(C$, 'getParentArtifactId$', function () {
return this.cdata$S("//project/parent/artifactId");
});

Clazz.newMeth(C$, 'getParentVersion$', function () {
return this.cdata$S("//project/parent/version");
});

Clazz.newMeth(C$, 'getGroupId$', function () {
var groupId=this.cdata$S("//project/groupId");
if (groupId != null ) return groupId;
return this.getParentGroupId$();
});

Clazz.newMeth(C$, 'getArtifactId$', function () {
return this.cdata$S("//project/artifactId");
});

Clazz.newMeth(C$, 'getProjectName$', function () {
return this.cdata$S("//project/name");
});

Clazz.newMeth(C$, 'getProjectDescription$', function () {
return this.cdata$S("//project/description");
});

Clazz.newMeth(C$, 'getProjectURL$', function () {
return this.cdata$S("//project/url");
});

Clazz.newMeth(C$, 'getProjectInceptionYear$', function () {
return this.cdata$S("//project/inceptionYear");
});

Clazz.newMeth(C$, 'getOrganizationName$', function () {
return this.cdata$S("//project/organization/name");
});

Clazz.newMeth(C$, 'getOrganizationURL$', function () {
return this.cdata$S("//project/organization/url");
});

Clazz.newMeth(C$, 'getSCMConnection$', function () {
return this.cdata$S("//project/scm/connection");
});

Clazz.newMeth(C$, 'getSCMDeveloperConnection$', function () {
return this.cdata$S("//project/scm/developerConnection");
});

Clazz.newMeth(C$, 'getSCMTag$', function () {
return this.cdata$S("//project/scm/tag");
});

Clazz.newMeth(C$, 'getSCMURL$', function () {
return this.cdata$S("//project/scm/url");
});

Clazz.newMeth(C$, 'getIssueManagementSystem$', function () {
return this.cdata$S("//project/issueManagement/system");
});

Clazz.newMeth(C$, 'getIssueManagementURL$', function () {
return this.cdata$S("//project/issueManagement/url");
});

Clazz.newMeth(C$, 'getCIManagementSystem$', function () {
return this.cdata$S("//project/ciManagement/system");
});

Clazz.newMeth(C$, 'getCIManagementURL$', function () {
return this.cdata$S("//project/ciManagement/url");
});

Clazz.newMeth(C$, ['compareTo$org_scijava_util_POM','compareTo$','compareTo$TT'], function (pom) {
var gid=this.getGroupId$().compareTo$S(pom.getGroupId$());
if (gid != 0) return gid;
var aid=this.getArtifactId$().compareTo$S(pom.getArtifactId$());
if (aid != 0) return aid;
return C$.compareVersions$S$S(this.getVersion$(), pom.getVersion$());
});

Clazz.newMeth(C$, 'getVersion$', function () {
if (this.version == null ) {
{
if (this.version == null ) {
this.version=this.cdata$S("//project/version");
if (this.version == null ) this.version=this.getParentVersion$();
}}}return this.version;
});

Clazz.newMeth(C$, 'getPOM$Class', function (c) {
return C$.getPOM$Class$S$S(c, null, null);
}, 1);

Clazz.newMeth(C$, 'getPOM$Class$S$S', function (c, groupId, artifactId) {
{

}
return null;
}, 1);

Clazz.newMeth(C$, 'getAllPOMs$', function () {
var pomPrefix="META-INF/maven/";
var classLoader=$I$(1).currentThread$().getContextClassLoader$();
var resources;
try {
resources=classLoader.getResources$S("META-INF/maven/");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
return null;
} else {
throw exc;
}
}
var poms=Clazz.new_(1,{E:"org.scijava.util.POM"},$I$(2,1));
for (var resource, $resource = Clazz.new_(1,{E:"java.net.URL"},$I$(3,1).c$$java_util_Enumeration,[resources]).iterator$(); $resource.hasNext$()&&((resource=($resource.next$())),1);) {
for (var url, $url = $I$(4).listContents$java_net_URL(resource).iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
if (url.getPath$().endsWith$S("/pom.xml")) {
try {
poms.add$TE(Clazz.new_(C$.c$$java_net_URL,[url]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var exc = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var exc = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var exc = e$$;
{
}
} else {
throw e$$;
}
}
}}
}
return poms;
}, 1);

Clazz.newMeth(C$, 'compareVersions$S$S', function (v1, v2) {
var t1=v1.split$S("[^\\w]");
var t2=v2.split$S("[^\\w]");
var size=Math.min(t1.length, t2.length);
for (var i=0; i < size; i++) {
try {
var n1=Long.parseLong$S(t1[i]);
var n2=Long.parseLong$S(t2[i]);
if (n1 < n2) return -1;
if (n1 > n2) return 1;
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
var result=t1[i].compareTo$S(t2[i]);
if (result != 0) return result;
} else {
throw exc;
}
}
}
if (t1.length == t2.length) return 0;
if (v1.startsWith$S(v2) && v1.charAt$I(v2.length$()) == "-" ) {
return -1;
}if (v2.startsWith$S(v1) && v2.charAt$I(v1.length$()) == "-" ) {
return 1;
}return t1.length < t2.length ? -1 : 1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
