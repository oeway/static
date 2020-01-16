(function(){var P$=Clazz.newPackage("net.imglib2.loops"),I$=[[0,'net.imglib2.loops.ClassCopyProvider',['net.imglib2.loops.LoopUtils','.LineProcessor'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoopUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LineProcessor',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.factory=Clazz.new_(1,{T:"Runnable"},$I$(1,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(2)), Clazz.getClass(Runnable,['run$']), []]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['factory','net.imglib2.loops.ClassCopyProvider']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createLineLoop$net_imglib2_Positionable$J$I$Runnable', function (positionable, length, dimension, action) {
var key=$I$(3).asList$TTA([action.getClass$()]);
return C$.factory.newInstanceForKey$O$OA(key, [action, positionable, new Long(length), new Integer(dimension)]);
}, 1);

Clazz.newMeth(C$, 'createIntervalLoop$net_imglib2_Positionable$net_imglib2_Dimensions$Runnable', function (positionable, dimensions, action) {
for (var i=0; i < dimensions.numDimensions$(); i++) {
var dimension=dimensions.dimension$I(i);
if (dimension > 1) action=C$.createLineLoop$net_imglib2_Positionable$J$I$Runnable(positionable, dimension, i, action);
 else if (dimension <= 0) action=(P$.LoopUtils$lambda1$||(P$.LoopUtils$lambda1$=(((P$.LoopUtils$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LoopUtils$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
});
})()
), Clazz.new_(P$.LoopUtils$lambda1.$init$, [this, null])))));
}
return action;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopUtils, "LineProcessor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['dimension'],'L',['lineLength'],'O',['action','Runnable','positionable','net.imglib2.Positionable']]]

Clazz.newMeth(C$, 'c$$Runnable$net_imglib2_Positionable$J$I', function (action, positionable, length, dimension) {
;C$.$init$.apply(this);
this.action=action;
this.positionable=positionable;
this.lineLength=length;
this.dimension=dimension;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
for (var i=0; i < this.lineLength; i++) {
this.action.run$();
this.positionable.fwd$I(this.dimension);
}
this.positionable.move$J$I(-this.lineLength, this.dimension);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
