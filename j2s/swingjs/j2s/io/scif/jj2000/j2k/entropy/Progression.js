(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy"),I$=[[0,'Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Progression", null, null, 'io.scif.jj2000.j2k.codestream.ProgressionType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['type','cs','ce','rs','re','lye']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I', function (type, cs, ce, rs, re, lye) {
;C$.$init$.apply(this);
this.type=type;
this.cs=cs;
this.ce=ce;
this.rs=rs;
this.re=re;
this.lye=lye;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var str="type= ";
switch (this.type) {
case 0:
str += "layer, ";
break;
case 1:
str += "res, ";
break;
case 2:
str += "res-pos, ";
break;
case 3:
str += "pos-comp, ";
break;
case 4:
str += "pos-comp, ";
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["Unknown progression type"]);
}
str += "comp.: " + this.cs + "-" + this.ce + ", " ;
str += "res.: " + this.rs + "-" + this.re + ", " ;
str += "layer: up to " + this.lye;
return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
