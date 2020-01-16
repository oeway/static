(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,['.','.ImgTestHelper'],'net.imglib2.view.ExtendedRandomAccessibleInterval','net.imglib2.outofbounds.OutOfBoundsPeriodicFactory','java.util.Random']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgTestHelper");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DIM=Clazz.array(Long.TYPE, -2, [Clazz.array(Long.TYPE, -1, [127]), Clazz.array(Long.TYPE, -1, [288]), Clazz.array(Long.TYPE, -1, [135, 111]), Clazz.array(Long.TYPE, -1, [172, 131]), Clazz.array(Long.TYPE, -1, [15, 13, 33]), Clazz.array(Long.TYPE, -1, [110, 38, 30]), Clazz.array(Long.TYPE, -1, [109, 34, 111]), Clazz.array(Long.TYPE, -1, [12, 43, 92, 10]), Clazz.array(Long.TYPE, -1, [21, 34, 29, 13]), Clazz.array(Long.TYPE, -1, [5, 12, 30, 4, 21]), Clazz.array(Long.TYPE, -1, [14, 21, 13, 9, 12])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['DIM','long[][]']]]

Clazz.newMeth(C$, 'dims$', function () {
return $I$(1).DIM.clone$();
}, 1);

Clazz.newMeth(C$, 'testImg$JA$net_imglib2_img_ImgFactory$net_imglib2_img_ImgFactory', function (size, factory1, factory2) {
var img1=factory1.create$JA(size);
var img2=factory2.create$JA(size);
var numDimensions=img1.numDimensions$();
var reference=_.ImgTestHelper.createReference$net_imglib2_img_Img(img1);
var cursor1=img1.cursor$();
var cursor2=img2.cursor$();
while (cursor1.hasNext$()){
cursor1.fwd$();
cursor2.fwd$();
cursor2.get$().set$net_imglib2_type_numeric_real_FloatType(cursor1.get$());
}
cursor1.reset$();
cursor2.reset$();
while (cursor2.hasNext$()){
cursor1.fwd$();
cursor2.fwd$();
cursor1.get$().set$net_imglib2_type_numeric_real_FloatType(cursor2.get$());
}
var localizableCursor1=img1.localizingCursor$();
var positionable2=img2.randomAccess$();
var i=0;
while (localizableCursor1.hasNext$()){
localizableCursor1.fwd$();
++i;
if (i % 2 == 0) positionable2.setPosition$net_imglib2_Localizable(localizableCursor1);
 else positionable2.setPosition$net_imglib2_Localizable(localizableCursor1);
var t2=positionable2.get$();
var t1=localizableCursor1.get$();
t2.set$net_imglib2_type_numeric_real_FloatType(t1);
}
var extendedImg2=Clazz.new_(1,{F:"net.imglib2.type.numeric.real.FloatType",T:"net.imglib2.img.Img"},$I$(2,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[img2, Clazz.new_(1,{F:"net.imglib2.type.numeric.real.FloatType",T:"net.imglib2.img.Img"},$I$(3,1))]);
var outsideCursor2=extendedImg2.randomAccess$();
localizableCursor1.reset$();
var pos=Clazz.array(Integer.TYPE, [numDimensions]);
i=0;
var direction=1;
try {
while (localizableCursor1.hasNext$()){
localizableCursor1.fwd$();
localizableCursor1.localize$IA(pos);
++i;
var distance=i % 5;
direction*=-1;
pos[i % numDimensions]+=img1.dimension$I(i % numDimensions) * distance * direction ;
if (i % 7 == 0) outsideCursor2.setPosition$IA(pos);
 else outsideCursor2.setPosition$IA(pos);
var t1=localizableCursor1.get$();
var t2=outsideCursor2.get$();
t1.set$net_imglib2_type_numeric_real_FloatType(t2);
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
System.err.println$CA();
e.printStackTrace$();
System.exit$I(1);
} else {
throw e;
}
}
var success=_.ImgTestHelper.test$net_imglib2_img_Img$FA(img1, reference);
return success;
}, 1);

Clazz.newMeth(C$, 'createReference$net_imglib2_img_Img', function (img) {
var rnd=Clazz.new_($I$(4,1).c$$J,[1241234]);
var reference=Clazz.array(Float.TYPE, [(img.size$()|0)]);
var cursor=img.cursor$();
var i=0;
while (cursor.hasNext$()){
cursor.fwd$();
var value=rnd.nextFloat$();
reference[i++]=value;
cursor.get$().set$F(value);
}
return reference;
}, 1);

Clazz.newMeth(C$, 'test$net_imglib2_img_Img$FA', function (img, reference) {
var allEqual=true;
var cursor=img.cursor$();
var i=0;
while (cursor.hasNext$()){
cursor.fwd$();
allEqual&=cursor.get$().get$() == reference[i++] ;
}
return allEqual;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:17 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
