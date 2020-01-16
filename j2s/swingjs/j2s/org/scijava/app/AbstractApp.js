(function(){var P$=Clazz.newPackage("org.scijava.app"),I$=[[0,'org.scijava.util.POM']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractApp", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.app.App');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','pom','org.scijava.util.POM','manifest','org.scijava.util.Manifest']]]

Clazz.newMeth(C$, 'getPOM$', function () {
if (this.pom == null ) {
this.pom=$I$(1).getPOM$Class$S$S(this.getClass$(), this.getGroupId$(), this.getArtifactId$());
}return this.pom;
});

Clazz.newMeth(C$, 'getManifest$', function () {
if (this.manifest == null ) {
{

}
}return this.manifest;
});

Clazz.newMeth(C$, 'about$', function () {
if (this.log != null ) this.log.info$O(this.getInfo$Z(false));
});
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
