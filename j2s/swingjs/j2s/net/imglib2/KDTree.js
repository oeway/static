(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'java.util.ArrayDeque','java.util.ArrayList','net.imglib2.util.KthElement',['net.imglib2.KDTree','.DimComparator'],['net.imglib2.KDTree','.ValueNode'],['net.imglib2.KDTree','.SamplerNode'],['net.imglib2.KDTree','.KDTreeCursor']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KDTree", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.EuclideanSpace', 'net.imglib2.IterableRealInterval']);
C$.$classes$=[['ValueNode',28],['SamplerNode',28],['DimComparator',25],['KDTreeCursor',17]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'L',['size'],'O',['root','net.imglib2.KDTreeNode','min','double[]','+max']]]

Clazz.newMeth(C$, 'c$$java_util_List$java_util_List', function (values, positions) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return values.size$() == positions.size$()});
this.n=positions.get$I(0).numDimensions$();
this.size=positions.size$();
Clazz.assert(C$, this, function(){return (C$.verifyDimensions$java_util_List$I(positions, this.n))});
this.min=Clazz.array(Double.TYPE, [this.n]);
this.max=Clazz.array(Double.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.min[d]=1.7976931348623157E308;
this.max[d]=-1.7976931348623157E308;
}
for (var position, $position = positions.iterator$(); $position.hasNext$()&&((position=($position.next$())),1);) {
for (var d=0; d < this.n; ++d) {
var x=position.getDoublePosition$I(d);
if (x < this.min[d] ) this.min[d]=x;
if (x > this.max[d] ) this.max[d]=x;
}
}
if (values === positions ) {
if (Clazz.instanceOf(positions, "java.util.RandomAccess")) this.root=this.makeNode$java_util_List$I$I$I(positions, 0, positions.size$() - 1, 0);
 else this.root=this.makeNode$java_util_ListIterator$java_util_ListIterator$I(positions.listIterator$(), positions.listIterator$I(positions.size$()), 0);
} else {
var permutation=Clazz.array(Integer.TYPE, [positions.size$()]);
for (var k=0; k < permutation.length; ++k) permutation[k]=k;

if (Clazz.instanceOf(positions, "java.util.RandomAccess")) this.root=this.makeNode$java_util_List$I$I$I$java_util_List$IA(positions, 0, positions.size$() - 1, 0, values, permutation);
 else this.root=this.makeNode$java_util_ListIterator$java_util_ListIterator$I$java_util_List$IA(positions.listIterator$(), positions.listIterator$I(positions.size$()), 0, values, permutation);
}}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_IterableRealInterval', function (interval) {
;C$.$init$.apply(this);
this.n=interval.numDimensions$();
this.size=interval.size$();
this.min=Clazz.array(Double.TYPE, [this.n]);
interval.realMin$DA(this.min);
this.max=Clazz.array(Double.TYPE, [this.n]);
interval.realMax$DA(this.max);
var values=Clazz.new_(1,{E:"net.imglib2.RealCursor"},$I$(2,1).c$$I,[(interval.size$()|0)]);
var cursor=interval.localizingCursor$();
while (cursor.hasNext$()){
cursor.next$();
values.add$TE(cursor.copyCursor$());
}
this.root=this.makeSamplerNode$java_util_List$I$I$I(values, 0, values.size$() - 1, 0);
}, 1);

Clazz.newMeth(C$, 'verifyDimensions$java_util_List$I', function (positions, n) {
for (var position, $position = positions.iterator$(); $position.hasNext$()&&((position=($position.next$())),1);) if (position.numDimensions$() != n) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'makeNode$java_util_List$I$I$I$java_util_List$IA', function (positions, i, j, d, values, permutation) {
if (j > i) {
var k=i + ((j - i)/2|0);
$I$(3).kthElement$I$I$I$java_util_List$IA$java_util_Comparator(i, j, k, positions, permutation, Clazz.new_(1,{L:"Object"},$I$(4,1).c$$I,[d]));
var dChild=(d + 1 == this.n) ? 0 : d + 1;
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[values.get$I(permutation[k]), positions.get$I(k), d, this.makeNode$java_util_List$I$I$I$java_util_List$IA(positions, i, k - 1, dChild, values, permutation), this.makeNode$java_util_List$I$I$I$java_util_List$IA(positions, k + 1, j, dChild, values, permutation)]);
} else if (j == i) {
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[values.get$I(permutation[i]), positions.get$I(i), d, null, null]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeNode$java_util_ListIterator$java_util_ListIterator$I$java_util_List$IA', function (first, last, d, values, permutation) {
var i=first.nextIndex$();
var j=last.previousIndex$();
if (j > i) {
var k=i + ((j - i)/2|0);
$I$(3).kthElement$java_util_ListIterator$java_util_ListIterator$I$IA$java_util_Comparator(first, last, k, permutation, Clazz.new_(1,{L:"Object"},$I$(4,1).c$$I,[d]));
first.previous$();
var current=first.next$();
var dChild=(d + 1 == this.n) ? 0 : d + 1;
for (var c=j - last.previousIndex$(); c > 0; --c) last.next$();

var right=this.makeNode$java_util_ListIterator$java_util_ListIterator$I$java_util_List$IA(first, last, dChild, values, permutation);
for (var c=first.nextIndex$() - i; c > 0; --c) first.previous$();

for (var c=last.nextIndex$() - k; c > 0; --c) last.previous$();

var left=this.makeNode$java_util_ListIterator$java_util_ListIterator$I$java_util_List$IA(first, last, dChild, values, permutation);
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[values.get$I(permutation[k]), current, d, left, right]);
} else if (j == i) {
var current=first.next$();
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[values.get$I(permutation[i]), current, d, null, null]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeNode$java_util_List$I$I$I', function (elements, i, j, d) {
if (j > i) {
var k=i + ((j - i)/2|0);
$I$(3).kthElement$I$I$I$java_util_List$java_util_Comparator(i, j, k, elements, Clazz.new_(1,{L:"Object"},$I$(4,1).c$$I,[d]));
var dChild=(d + 1 == this.n) ? 0 : d + 1;
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[elements.get$I(k), elements.get$I(k), d, this.makeNode$java_util_List$I$I$I(elements, i, k - 1, dChild), this.makeNode$java_util_List$I$I$I(elements, k + 1, j, dChild)]);
} else if (j == i) {
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[elements.get$I(i), elements.get$I(i), d, null, null]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeNode$java_util_ListIterator$java_util_ListIterator$I', function (first, last, d) {
var i=first.nextIndex$();
var j=last.previousIndex$();
if (j > i) {
var k=i + ((j - i)/2|0);
$I$(3).kthElement$java_util_ListIterator$java_util_ListIterator$I$java_util_Comparator(first, last, k, Clazz.new_(1,{L:"Object"},$I$(4,1).c$$I,[d]));
first.previous$();
var current=first.next$();
var dChild=(d + 1 == this.n) ? 0 : d + 1;
for (var c=j - last.previousIndex$(); c > 0; --c) last.next$();

var right=this.makeNode$java_util_ListIterator$java_util_ListIterator$I(first, last, dChild);
for (var c=first.nextIndex$() - i; c > 0; --c) first.previous$();

for (var c=last.nextIndex$() - k; c > 0; --c) last.previous$();

var left=this.makeNode$java_util_ListIterator$java_util_ListIterator$I(first, last, dChild);
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[current, current, d, left, right]);
} else if (j == i) {
var current=first.next$();
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode,[current, current, d, null, null]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeSamplerNode$java_util_List$I$I$I', function (elements, i, j, d) {
if (j > i) {
var k=i + ((j - i)/2|0);
$I$(3).kthElement$I$I$I$java_util_List$java_util_Comparator(i, j, k, elements, Clazz.new_(1,{L:"net.imglib2.RealCursor"},$I$(4,1).c$$I,[d]));
var dChild=(d + 1 == this.n) ? 0 : d + 1;
return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_Sampler$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_SamplerNode$net_imglib2_KDTree_SamplerNode,[elements.get$I(k), elements.get$I(k), d, this.makeSamplerNode$java_util_List$I$I$I(elements, i, k - 1, dChild), this.makeSamplerNode$java_util_List$I$I$I(elements, k + 1, j, dChild)]);
} else if (j == i) {
return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_Sampler$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_SamplerNode$net_imglib2_KDTree_SamplerNode,[elements.get$I(i), elements.get$I(i), d, null, null]);
} else {
return null;
}});

Clazz.newMeth(C$, 'getRoot$', function () {
return this.root;
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'toString$net_imglib2_KDTreeNode$S', function (left, indent) {
if (left == null ) return "";
return indent + "- " + left.toString() + "\n" + this.toString$net_imglib2_KDTreeNode$S(left.left, indent + "  ") + this.toString$net_imglib2_KDTreeNode$S(left.right, indent + "  ") ;
});

Clazz.newMeth(C$, 'toString', function () {
return this.toString$net_imglib2_KDTreeNode$S(this.root, "");
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.min[d];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (m) {
m.setPosition$DA(this.min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (m) {
m.setPosition$DA(this.max);
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(7,1).c$$net_imglib2_KDTree, [this, null, this]);
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(7,1).c$$net_imglib2_KDTree, [this, null, this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(7,1).c$$net_imglib2_KDTree, [this, null, this]);
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.iterator$().next$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.KDTree, "ValueNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.KDTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<T>']]]

Clazz.newMeth(C$, ['c$$TT$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_ValueNode$net_imglib2_KDTree_ValueNode'], function (value, position, dimension, left, right) {
;C$.superclazz.c$$net_imglib2_RealLocalizable$I$net_imglib2_KDTreeNode$net_imglib2_KDTreeNode.apply(this,[position, dimension, left, right]);C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree_ValueNode', function (node) {
;C$.superclazz.c$$net_imglib2_KDTreeNode.apply(this,[node]);C$.$init$.apply(this);
this.value=node.value;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.value;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_KDTree_ValueNode,[this]);
});

Clazz.newMeth(C$, 'toString', function () {
return "node " + this.getSplitDimension$() + " ? " + new Double(this.getSplitCoordinate$()).toString() + " | " + this.value ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KDTree, "SamplerNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.KDTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sampler','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Sampler$net_imglib2_RealLocalizable$I$net_imglib2_KDTree_SamplerNode$net_imglib2_KDTree_SamplerNode', function (sampler, position, dimension, left, right) {
;C$.superclazz.c$$net_imglib2_RealLocalizable$I$net_imglib2_KDTreeNode$net_imglib2_KDTreeNode.apply(this,[position, dimension, left, right]);C$.$init$.apply(this);
this.sampler=sampler;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree_SamplerNode', function (node) {
;C$.superclazz.c$$net_imglib2_KDTreeNode.apply(this,[node]);C$.$init$.apply(this);
this.sampler=node.sampler.copy$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.sampler.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_KDTree_SamplerNode,[this]);
});

Clazz.newMeth(C$, 'toString', function () {
return "node " + this.getSplitDimension$() + " ? " + new Double(this.getSplitCoordinate$()).toString() + " | " + this.sampler.get$() ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KDTree, "DimComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['d']]]

Clazz.newMeth(C$, 'c$$I', function (d) {
;C$.$init$.apply(this);
this.d=d;
}, 1);

Clazz.newMeth(C$, ['compare$TL$TL','compare$','compare$TT$TT'], function (o1, o2) {
var diff=o1.getFloatPosition$I(this.d) - o2.getFloatPosition$I(this.d);
return (diff < 0 ) ? -1 : (diff > 0  ? 1 : 0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KDTree, "KDTreeCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RealCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['tree','net.imglib2.KDTree','nodes','java.util.ArrayDeque','currentNode','net.imglib2.KDTreeNode']]]

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree', function (kdtree) {
;C$.$init$.apply(this);
this.tree=kdtree;
var capacity=2 + ((Math.log(kdtree.size$()) / Math.log(2))|0);
this.nodes=Clazz.new_(1,{E:"net.imglib2.KDTreeNode"},$I$(1,1).c$$I,[capacity]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree_KDTreeCursor', function (c) {
;C$.$init$.apply(this);
this.tree=c.tree;
this.nodes=c.nodes.clone$();
this.currentNode=c.currentNode;
}, 1);

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.currentNode.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.currentNode.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.currentNode.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.currentNode.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.n;
});

Clazz.newMeth(C$, 'get$', function () {
return this.currentNode.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_KDTree_KDTreeCursor, [this, null, this]);
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var i=0; i < steps; ++i) this.fwd$();

});

Clazz.newMeth(C$, 'fwd$', function () {
if (this.nodes.isEmpty$()) this.currentNode=null;
 else {
this.currentNode=this.nodes.pop$();
if (this.currentNode.left != null ) this.nodes.push$TE(this.currentNode.left);
if (this.currentNode.right != null ) this.nodes.push$TE(this.currentNode.right);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.nodes.clear$();
this.nodes.push$TE(this.tree.getRoot$());
this.currentNode=null;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return !this.nodes.isEmpty$();
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
