(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.alg.dense.misc.UnrolledDeterminantFromMinor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DeterminantFromMinor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirty=false;
}, 1);

C$.$fields$=[['Z',['dirty'],'I',['width','minWidth','numOpen'],'O',['levelIndexes','int[]','levelResults','double[]','levelRemoved','int[]','+open','tempMat','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$I', function (width) {
C$.c$$I$I.apply(this, [width, 5]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (width, minWidth) {
;C$.$init$.apply(this);
if (minWidth > 5 || minWidth < 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No direct function for that width"]);
}if (width < minWidth) minWidth=width;
this.minWidth=minWidth;
this.width=width;
var numLevels=width - (minWidth - 2);
this.levelResults=Clazz.array(Double.TYPE, [numLevels]);
this.levelRemoved=Clazz.array(Integer.TYPE, [numLevels]);
this.levelIndexes=Clazz.array(Integer.TYPE, [numLevels]);
this.open=Clazz.array(Integer.TYPE, [width]);
this.tempMat=Clazz.new_($I$(1,1).c$$I$I,[minWidth - 1, minWidth - 1]);
}, 1);

Clazz.newMeth(C$, 'compute$org_ejml_data_RowD1Matrix64F', function (mat) {
if (this.width != mat.numCols || this.width != mat.numRows ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected matrix dimension"]);
}p$1.initStructures.apply(this, []);
var level=0;
while (true){
var levelWidth=this.width - level;
var levelIndex=this.levelIndexes[level];
if (levelIndex == levelWidth) {
if (level == 0) {
return this.levelResults[0];
}var prevLevelIndex=this.levelIndexes[level - 1]++;
var val=mat.get$I((level - 1) * this.width + this.levelRemoved[level - 1]);
if (prevLevelIndex % 2 == 0) {
this.levelResults[level - 1] += val * this.levelResults[level];
} else {
this.levelResults[level - 1] -= val * this.levelResults[level];
}p$1.putIntoOpen$I.apply(this, [level - 1]);
this.levelResults[level]=0;
this.levelIndexes[level]=0;
level--;
} else {
var excluded=p$1.openRemove$I.apply(this, [levelIndex]);
this.levelRemoved[level]=excluded;
if (levelWidth == this.minWidth) {
p$1.createMinor$org_ejml_data_RowD1Matrix64F.apply(this, [mat]);
var subresult=mat.get$I(level * this.width + this.levelRemoved[level]);
subresult *= $I$(2).det$org_ejml_data_RowD1Matrix64F(this.tempMat);
if (levelIndex % 2 == 0) {
this.levelResults[level] += subresult;
} else {
this.levelResults[level] -= subresult;
}p$1.putIntoOpen$I.apply(this, [level]);
this.levelIndexes[level]++;
} else {
level++;
}}}
});

Clazz.newMeth(C$, 'initStructures', function () {
for (var i=0; i < this.width; i++) {
this.open[i]=i;
}
this.numOpen=this.width;
if (this.dirty) {
for (var i=0; i < this.levelIndexes.length; i++) {
this.levelIndexes[i]=0;
this.levelResults[i]=0;
this.levelRemoved[i]=0;
}
}this.dirty=true;
}, p$1);

Clazz.newMeth(C$, 'openRemove$I', function (where) {
var val=this.open[where];
System.arraycopy$O$I$O$I$I(this.open, where + 1, this.open, where, (this.numOpen - where - 1 ));
this.numOpen--;
return val;
}, p$1);

Clazz.newMeth(C$, 'openAdd$I$I', function (where, val) {
for (var i=this.numOpen; i > where; i--) {
this.open[i]=this.open[i - 1];
}
this.numOpen++;
this.open[where]=val;
}, p$1);

Clazz.newMeth(C$, 'openAdd$I', function (val) {
this.open[this.numOpen++]=val;
}, p$1);

Clazz.newMeth(C$, 'putIntoOpen$I', function (level) {
var added=false;
for (var i=0; i < this.numOpen; i++) {
if (this.open[i] > this.levelRemoved[level]) {
added=true;
p$1.openAdd$I$I.apply(this, [i, this.levelRemoved[level]]);
break;
}}
if (!added) {
p$1.openAdd$I.apply(this, [this.levelRemoved[level]]);
}}, p$1);

Clazz.newMeth(C$, 'createMinor$org_ejml_data_RowD1Matrix64F', function (mat) {
var w=this.minWidth - 1;
var firstRow=(this.width - w) * this.width;
for (var i=0; i < this.numOpen; i++) {
var col=this.open[i];
var srcIndex=firstRow + col;
var dstIndex=i;
for (var j=0; j < w; j++) {
this.tempMat.set$I$D(dstIndex, mat.get$I(srcIndex));
dstIndex+=w;
srcIndex+=this.width;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
