(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation"),I$=[[0,'javax.xml.bind.annotation.XmlNs','javax.xml.bind.annotation.XmlNsForm']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*@*/var C$=Clazz.newClass(P$, "XmlSchema", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() { var a=[];
a.push(['xmlns','javax.xml.bind.annotation.XmlNs[]',Clazz.array($I$(1), -1, [])]);
a.push(['namespace','String',""]);
a.push(['elementFormDefault','javax.xml.bind.annotation.XmlNsForm',$I$(2).UNSET]);
a.push(['attributeFormDefault','javax.xml.bind.annotation.XmlNsForm',$I$(2).UNSET]);
a.push(['location','String',"##generate"]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1