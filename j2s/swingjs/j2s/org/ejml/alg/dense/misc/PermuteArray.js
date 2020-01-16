(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PermuteArray");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['level'],'O',['data','int[]','+iter','+valk','+ret']]]

Clazz.newMeth(C$, 'c$$I', function (N) {
;C$.$init$.apply(this);
this.level=0;
this.iter=Clazz.array(Integer.TYPE, [N]);
this.valk=Clazz.array(Integer.TYPE, [N]);
this.data=Clazz.array(Integer.TYPE, [N]);
this.ret=Clazz.array(Integer.TYPE, [N]);
for (var i=0; i < this.data.length; i++) {
this.data[i]=-1;
}
}, 1);

Clazz.newMeth(C$, 'sgn$', function () {
var total=0;
for (var i=0; i < this.ret.length; i++) {
var val=this.ret[i];
for (var j=i + 1; j < this.ret.length; j++) {
if (val > this.ret[j]) {
total++;
}}
}
if (total % 2 == 1) return -1;
return 1;
});

Clazz.newMeth(C$, 'fact$I', function (N) {
var ret=1;
while (N > 0){
ret*=N--;
}
return ret;
}, 1);

Clazz.newMeth(C$, 'createList$I', function (N) {
var data=Clazz.array(Integer.TYPE, [N]);
for (var i=0; i < data.length; i++) {
data[i]=-1;
}
var ret=Clazz.new_(1,{E:"int[]"},$I$(1,1));
C$.createList$IA$I$I$java_util_List(data, 0, -1, ret);
return ret;
}, 1);

Clazz.newMeth(C$, 'createList$IA$I$I$java_util_List', function (data, k, level, ret) {
data[k]=level;
if (level < data.length - 1) {
for (var i=0; i < data.length; i++) {
if (data[i] == -1) {
C$.createList$IA$I$I$java_util_List(data, i, level + 1, ret);
}}
} else {
var copy=Clazz.array(Integer.TYPE, [data.length]);
System.arraycopy$O$I$O$I$I(data, 0, copy, 0, data.length);
ret.add$TE(copy);
}data[k]=-1;
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var hasNewPerm=false;
 escape : while (this.level >= 0){
for (var i=this.iter[this.level]; i < this.data.length; i=this.iter[this.level]) {
this.iter[this.level]++;
if (this.data[i] == -1) {
this.level++;
this.data[i]=this.level - 1;
if (this.level >= this.data.length) {
hasNewPerm=true;
System.arraycopy$O$I$O$I$I(this.data, 0, this.ret, 0, this.ret.length);
this.level=this.level - 1;
this.data[i]=-1;
break escape;
} else {
this.valk[this.level]=i;
}}}
this.data[this.valk[this.level]]=-1;
this.iter[this.level]=0;
this.level=this.level - 1;
}
if (hasNewPerm) return this.ret;
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
