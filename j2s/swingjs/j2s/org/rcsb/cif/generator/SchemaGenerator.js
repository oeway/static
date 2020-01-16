(function(){var P$=Clazz.newPackage("org.rcsb.cif.generator"),p$1={},I$=[[0,'java.nio.file.Paths','java.util.StringJoiner','java.util.stream.Stream','java.util.stream.Collectors','java.util.regex.Pattern','org.rcsb.cif.api.CifBlock','org.rcsb.cif.api.BaseBlock','java.nio.file.Files','org.rcsb.cif.model.Category','org.rcsb.cif.model.BaseCategory','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','java.util.LinkedHashMap','org.rcsb.cif.CifIO','Thread','org.rcsb.cif.generator.CoordCol','org.rcsb.cif.generator.SchemaGenerator','org.rcsb.cif.generator.IntCol','org.rcsb.cif.generator.MatrixCol','org.rcsb.cif.generator.VectorCol','org.rcsb.cif.generator.EnumCol','org.rcsb.cif.generator.StrCol','org.rcsb.cif.generator.FloatCol','org.rcsb.cif.generator.ListCol','java.util.Collections','java.util.stream.IntStream','java.util.HashSet','org.rcsb.cif.generator.Table']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SchemaGenerator");
C$.OUTPUT_PATH=null;
C$.CLASS_MAP_LOOKUP=null;
C$.FORCE_INT_FIELDS=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.OUTPUT_PATH=$I$(1).get$S$SA("/Users/sebastian/model/", []);
C$.CLASS_MAP_LOOKUP=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
C$.FORCE_INT_FIELDS=$I$(3).of$TTA(["_atom_site.id", "_atom_site.auth_seq_id", "_pdbx_struct_mod_residue.auth_seq_id", "_struct_conf.beg_auth_seq_id", "_struct_conf.end_auth_seq_id", "_struct_conn.ptnr1_auth_seq_id", "_struct_conn.ptnr2_auth_seq_id", "_struct_sheet_range.beg_auth_seq_id", "_struct_sheet_range.end_auth_seq_id"]).collect$java_util_stream_Collector($I$(4).toList$());
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.schema=null;
this.categories=null;
this.links=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$.c$$SA,[["mmcif_pdbx_v50.dic", "chem_comp-extension.dic", "entity_branch-extension.dic", "ihm-extension.dic"]]);
}, 1);

Clazz.newMeth(C$, 'toClassName$S', function (rawName) {
var name=$I$(5).compile$S("_").splitAsStream$CharSequence(rawName).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda1*/(P$.SchemaGenerator$lambda1$||(P$.SchemaGenerator$lambda1$=(((P$.SchemaGenerator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return (s.substring$I$I(0, 1).toUpperCase$() + s.substring$I(1));});
})()
), Clazz.new_(P$.SchemaGenerator$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).joining$CharSequence("")).replaceAll$S$S("[/\\\\\\- \t`~!@#$%^&*()=+{}|;:\'\",<.>?]", "_").replaceAll$S$S("_+", "_").replace$CharSequence$CharSequence("[", "").replace$CharSequence$CharSequence("]", "");
if (name.endsWith$S("_")) {
name=name.substring$I$I(0, name.length$() - 1);
}if (name.equals$O("Class")) {
return "Clazz";
} else if (Character.isDigit$C(name.charAt$I(0))) {
return "_" + name;
}return name;
}, 1);

Clazz.newMeth(C$, 'writeClasses', function () {
p$1.writeBlockInterface$S$java_util_Map$java_nio_file_Path.apply(this, [Clazz.getClass($I$(6),['getAtomSite$','getAtomSiteAnisotrop$','getAtomSites$','getAtomSitesAlt$','getAtomSitesAltEns$','getAtomSitesAltGen$','getAtomSitesFootnote$','getAtomType$','getAudit$','getAuditAuthor$','getAuditConform$','getAuditContactAuthor$','getAuditLink$','getCell$','getCellMeasurement$','getCellMeasurementRefln$','getChemComp$','getChemCompAngle$','getChemCompAtom$','getChemCompBond$','getChemCompChir$','getChemCompChirAtom$','getChemCompLink$','getChemCompPlane$','getChemCompPlaneAtom$','getChemCompTor$','getChemCompTorValue$','getChemLink$','getChemLinkAngle$','getChemLinkBond$','getChemLinkChir$','getChemLinkChirAtom$','getChemLinkPlane$','getChemLinkPlaneAtom$','getChemLinkTor$','getChemLinkTorValue$','getChemical$','getChemicalConnAtom$','getChemicalConnBond$','getChemicalFormula$','getCitation$','getCitationAuthor$','getCitationEditor$','getComputing$','getDatabase$','getDatabase2$','getDatabasePDBCaveat$','getDatabasePDBMatrix$','getDatabasePDBRemark$','getDatabasePDBRev$','getDatabasePDBRevRecord$','getDatabasePDBTvect$','getDiffrn$','getDiffrnAttenuator$','getDiffrnDetector$','getDiffrnMeasurement$','getDiffrnOrientMatrix$','getDiffrnOrientRefln$','getDiffrnRadiation$','getDiffrnRadiationWavelength$','getDiffrnRefln$','getDiffrnReflns$','getDiffrnReflnsClass$','getDiffrnScaleGroup$','getDiffrnSource$','getDiffrnStandardRefln$','getDiffrnStandards$','getEm2dCrystalEntity$','getEm2dProjectionSelection$','getEm3dCrystalEntity$','getEm3dFitting$','getEm3dFittingList$','getEm3dReconstruction$','getEmAdmin$','getEmAssembly$','getEmAuthorList$','getEmBuffer$','getEmBufferComponent$','getEmCrystalFormation$','getEmCtfCorrection$','getEmDbReference$','getEmDbReferenceAuxiliary$','getEmDepositorInfo$','getEmDepui$','getEmDetector$','getEmDiffraction$','getEmDiffractionShell$','getEmDiffractionStats$','getEmEmbedding$','getEmEntityAssembly$','getEmEntityAssemblyMolwt$','getEmEntityAssemblyNaturalsource$','getEmEntityAssemblyRecombinant$','getEmEulerAngleAssignment$','getEmExperiment$','getEmFiducialMarkers$','getEmFigureDepositorInfo$','getEmFinalClassification$','getEmFocusedIonBeam$','getEmFscCurve$','getEmGridPretreatment$','getEmHelicalEntity$','getEmHighPressureFreezing$','getEmImageProcessing$','getEmImageRecording$','getEmImageScans$','getEmImaging$','getEmImagingOptics$','getEmInterpretFigure$','getEmLayerLines$','getEmLayerLinesDepositorInfo$','getEmMap$','getEmMapDepositorInfo$','getEmMaskDepositorInfo$','getEmObsolete$','getEmParticleSelection$','getEmSamplePreparation$','getEmSampleSupport$','getEmShadowing$','getEmSingleParticleEntity$','getEmSoftware$','getEmSpecimen$','getEmStaining$','getEmStartModel$','getEmStructureFactors$','getEmStructureFactorsDepositorInfo$','getEmSupersede$','getEmSupportFilm$','getEmTomography$','getEmTomographySpecimen$','getEmUltramicrotomy$','getEmVirusEntity$','getEmVirusNaturalHost$','getEmVirusShell$','getEmVitrification$','getEmVolumeSelection$','getEntity$','getEntityKeywords$','getEntityLink$','getEntityNameCom$','getEntityNameSys$','getEntityPoly$','getEntityPolySeq$','getEntitySrcGen$','getEntitySrcNat$','getEntry$','getEntryLink$','getExptl$','getExptlCrystal$','getExptlCrystalFace$','getExptlCrystalGrow$','getExptlCrystalGrowComp$','getGeom$','getGeomAngle$','getGeomBond$','getGeomContact$','getGeomHbond$','getGeomTorsion$','getIhm2demClassAverageFitting$','getIhm2demClassAverageRestraint$','getIhm3demRestraint$','getIhmCrossLinkList$','getIhmCrossLinkRestraint$','getIhmCrossLinkResult$','getIhmCrossLinkResultParameters$','getIhmDatasetExternalReference$','getIhmDatasetGroup$','getIhmDatasetList$','getIhmDatasetRelatedDbReference$','getIhmDerivedDistanceRestraint$','getIhmEnsembleInfo$','getIhmExternalFiles$','getIhmExternalReferenceInfo$','getIhmFeatureList$','getIhmGaussianObjEnsemble$','getIhmGaussianObjSite$','getIhmGeometricObjectAxis$','getIhmGeometricObjectCenter$','getIhmGeometricObjectDistanceRestraint$','getIhmGeometricObjectHalfTorus$','getIhmGeometricObjectList$','getIhmGeometricObjectPlane$','getIhmGeometricObjectSphere$','getIhmGeometricObjectTorus$','getIhmGeometricObjectTransformation$','getIhmHydroxylRadicalFpRestraint$','getIhmInterfaceResidueFeature$','getIhmLocalizationDensityFiles$','getIhmModelList$','getIhmModelRepresentation$','getIhmModelRepresentative$','getIhmModelingPostProcess$','getIhmModelingProtocol$','getIhmMultiStateModeling$','getIhmNonPolyFeature$','getIhmOrderedEnsemble$','getIhmPolyAtomFeature$','getIhmPolyResidueFeature$','getIhmPredictedContactRestraint$','getIhmPseudoSiteFeature$','getIhmRelatedDatasets$','getIhmResiduesNotModeled$','getIhmSasRestraint$','getIhmSphereObjSite$','getIhmStartingComparativeModels$','getIhmStartingComputationalModels$','getIhmStartingModelCoord$','getIhmStartingModelDetails$','getIhmStartingModelSeqDif$','getIhmStructAssembly$','getIhmStructAssemblyClass$','getIhmStructAssemblyClassList$','getIhmStructAssemblyDetails$','getJournal$','getJournalIndex$','getNdbOriginalNdbCoordinates$','getNdbStructConfNa$','getNdbStructFeatureNa$','getNdbStructNaBasePair$','getNdbStructNaBasePairStep$','getPdbxAtlas$','getPdbxAtomSiteAnisoTls$','getPdbxAudit$','getPdbxAuditAuthor$','getPdbxAuditConformExtension$','getPdbxAuditRevisionCategory$','getPdbxAuditRevisionDetails$','getPdbxAuditRevisionGroup$','getPdbxAuditRevisionHistory$','getPdbxAuditRevisionItem$','getPdbxAuditSupport$','getPdbxBondDistanceLimits$','getPdbxBranchScheme$','getPdbxBuffer$','getPdbxBufferComponents$','getPdbxChemCompAtomEdit$','getPdbxChemCompAtomFeature$','getPdbxChemCompAtomRelated$','getPdbxChemCompAudit$','getPdbxChemCompBondEdit$','getPdbxChemCompDepositorInfo$','getPdbxChemCompDescriptor$','getPdbxChemCompFeature$','getPdbxChemCompIdentifier$','getPdbxChemCompImport$','getPdbxChemCompInstanceDepositorInfo$','getPdbxChemCompModel$','getPdbxChemCompModelAtom$','getPdbxChemCompModelAudit$','getPdbxChemCompModelBond$','getPdbxChemCompModelDescriptor$','getPdbxChemCompModelFeature$','getPdbxChemCompModelReference$','getPdbxChemCompNonstandard$','getPdbxChemCompRelated$','getPdbxChemCompSubcomponentEntityList$','getPdbxChemCompSubcomponentStructConn$','getPdbxChemCompSynonyms$','getPdbxChemCompUploadDepositorInfo$','getPdbxColumninfo$','getPdbxConnect$','getPdbxConnectAtom$','getPdbxConnectModification$','getPdbxConnectType$','getPdbxConstruct$','getPdbxConstructFeature$','getPdbxContactAuthor$','getPdbxCoord$','getPdbxCoordinateModel$','getPdbxCrystalAlignment$','getPdbxDataProcessingCell$','getPdbxDataProcessingDetector$','getPdbxDataProcessingReflns$','getPdbxDataProcessingStatus$','getPdbxDatabaseMessage$','getPdbxDatabasePDBMaster$','getPdbxDatabasePDBObsSpr$','getPdbxDatabasePdbOmit$','getPdbxDatabaseProc$','getPdbxDatabaseRelated$','getPdbxDatabaseRemark$','getPdbxDatabaseStatus$','getPdbxDatabaseStatusHistory$','getPdbxDbref$','getPdbxDccDensity$','getPdbxDccDensityCorr$','getPdbxDccGeometry$','getPdbxDccMap$','getPdbxDccMapman$','getPdbxDccRsccMapman$','getPdbxDccRsccMapmanOverall$','getPdbxDepositGroup$','getPdbxDepositGroupIndex$','getPdbxDepositionMessageFileReference$','getPdbxDepositionMessageInfo$','getPdbxDepuiEntityFeatures$','getPdbxDepuiEntityStatusFlags$','getPdbxDepuiEntryDetails$','getPdbxDepuiStatusFlags$','getPdbxDepuiUpload$','getPdbxDepuiValidationStatusFlags$','getPdbxDiffrnReflnsShell$','getPdbxDistantSolventAtoms$','getPdbxDomain$','getPdbxDomainRange$','getPdbxDrugInfo$','getPdbxEntityAssembly$','getPdbxEntityBranch$','getPdbxEntityBranchLink$','getPdbxEntityBranchList$','getPdbxEntityDescriptor$','getPdbxEntityFuncBindMode$','getPdbxEntityFuncEnzyme$','getPdbxEntityFuncOther$','getPdbxEntityFuncRegulatory$','getPdbxEntityFuncStructural$','getPdbxEntityInstanceFeature$','getPdbxEntityName$','getPdbxEntityNameInstance$','getPdbxEntityNameTaxonomy$','getPdbxEntityNameTaxonomyTree$','getPdbxEntityNonpoly$','getPdbxEntityPolyCompLinkList$','getPdbxEntityPolyDomain$','getPdbxEntityPolyNaNonstandard$','getPdbxEntityPolyNaType$','getPdbxEntityPolyProteinClass$','getPdbxEntityProdProtocol$','getPdbxEntitySrcGenCharacter$','getPdbxEntitySrcGenChrom$','getPdbxEntitySrcGenClone$','getPdbxEntitySrcGenCloneLigation$','getPdbxEntitySrcGenCloneRecombination$','getPdbxEntitySrcGenDepositorInfo$','getPdbxEntitySrcGenExpress$','getPdbxEntitySrcGenExpressTimepoint$','getPdbxEntitySrcGenFract$','getPdbxEntitySrcGenLysis$','getPdbxEntitySrcGenProdDigest$','getPdbxEntitySrcGenProdOther$','getPdbxEntitySrcGenProdOtherParameter$','getPdbxEntitySrcGenProdPcr$','getPdbxEntitySrcGenProteolysis$','getPdbxEntitySrcGenPure$','getPdbxEntitySrcGenRefold$','getPdbxEntitySrcSyn$','getPdbxEntryDetails$','getPdbxExptlCrystalCryoTreatment$','getPdbxExptlCrystalGrowComp$','getPdbxExptlCrystalGrowSol$','getPdbxExptlPd$','getPdbxFamilyGroupIndex$','getPdbxFamilyPrdAudit$','getPdbxFeatureAssembly$','getPdbxFeatureDomain$','getPdbxFeatureEntry$','getPdbxFeatureMonomer$','getPdbxFeatureSequenceRange$','getPdbxHelicalSymmetry$','getPdbxHelicalSymmetryDepositorInfo$','getPdbxHybrid$','getPdbxInhibitorInfo$','getPdbxIonInfo$','getPdbxLinkedEntity$','getPdbxLinkedEntityInstanceList$','getPdbxLinkedEntityLinkList$','getPdbxLinkedEntityList$','getPdbxMissingAtomNonpoly$','getPdbxMissingAtomPoly$','getPdbxMissingResidueList$','getPdbxMolecule$','getPdbxMoleculeFeatures$','getPdbxMoleculeFeaturesDepositorInfo$','getPdbxNaStrandInfo$','getPdbxNaStructKeywds$','getPdbxNmrAssignedChemShiftList$','getPdbxNmrChemShiftExperiment$','getPdbxNmrChemShiftRef$','getPdbxNmrChemShiftReference$','getPdbxNmrChemShiftSoftware$','getPdbxNmrComputing$','getPdbxNmrConstraintFile$','getPdbxNmrConstraints$','getPdbxNmrDetails$','getPdbxNmrEnsemble$','getPdbxNmrEnsembleRms$','getPdbxNmrExptl$','getPdbxNmrExptlSample$','getPdbxNmrExptlSampleConditions$','getPdbxNmrForceConstants$','getPdbxNmrRefine$','getPdbxNmrRepresentative$','getPdbxNmrSampleDetails$','getPdbxNmrSoftware$','getPdbxNmrSoftwareTask$','getPdbxNmrSpectralDim$','getPdbxNmrSpectralPeakList$','getPdbxNmrSpectralPeakSoftware$','getPdbxNmrSpectrometer$','getPdbxNmrSystematicChemShiftOffset$','getPdbxNmrUpload$','getPdbxNonpolyScheme$','getPdbxNonstandardList$','getPdbxPdbCompnd$','getPdbxPdbSource$','getPdbxPhasingDm$','getPdbxPhasingDmShell$','getPdbxPhasingMADSet$','getPdbxPhasingMADSetShell$','getPdbxPhasingMADSetSite$','getPdbxPhasingMADShell$','getPdbxPhasingMR$','getPdbxPointSymmetry$','getPdbxPointSymmetryDepositorInfo$','getPdbxPolySeqScheme$','getPdbxPostProcessDetails$','getPdbxPostProcessStatus$','getPdbxPrdAudit$','getPdbxPrereleaseSeq$','getPdbxProteinInfo$','getPdbxReRefinement$','getPdbxReferenceEntityLink$','getPdbxReferenceEntityList$','getPdbxReferenceEntityNonpoly$','getPdbxReferenceEntityPoly$','getPdbxReferenceEntityPolyLink$','getPdbxReferenceEntityPolySeq$','getPdbxReferenceEntitySequence$','getPdbxReferenceEntitySrcNat$','getPdbxReferenceEntitySubcomponents$','getPdbxReferenceLinkedEntity$','getPdbxReferenceLinkedEntityCompLink$','getPdbxReferenceLinkedEntityCompList$','getPdbxReferenceLinkedEntityLink$','getPdbxReferenceMolecule$','getPdbxReferenceMoleculeAnnotation$','getPdbxReferenceMoleculeDetails$','getPdbxReferenceMoleculeFamily$','getPdbxReferenceMoleculeFeatures$','getPdbxReferenceMoleculeList$','getPdbxReferenceMoleculeRelatedStructures$','getPdbxReferenceMoleculeSynonyms$','getPdbxReferencePublicationList$','getPdbxRefine$','getPdbxRefineAuxFile$','getPdbxRefineComponent$','getPdbxRefineLsRestrNcs$','getPdbxRefineTls$','getPdbxRefineTlsGroup$','getPdbxReflnsTwin$','getPdbxRelatedExpDataSet$','getPdbxRemediationAtomSiteMapping$','getPdbxRmchOutlier$','getPdbxRmsDevsCovByMonomer$','getPdbxRmsDevsCovalent$','getPdbxRobotSystem$','getPdbxSGProject$','getPdbxSeqMapDepositorInfo$','getPdbxSequenceAnnotation$','getPdbxSequencePattern$','getPdbxSequenceRange$','getPdbxSerialCrystallographyDataReduction$','getPdbxSerialCrystallographyMeasurement$','getPdbxSerialCrystallographySampleDelivery$','getPdbxSerialCrystallographySampleDeliveryFixedTarget$','getPdbxSerialCrystallographySampleDeliveryInjection$','getPdbxSolnScatter$','getPdbxSolnScatterModel$','getPdbxSolventAtomSiteMapping$','getPdbxSolventInfo$','getPdbxSource$','getPdbxStereochemistry$','getPdbxStructAssembly$','getPdbxStructAssemblyAuthClassification$','getPdbxStructAssemblyAuthEvidence$','getPdbxStructAssemblyAuthEvidenceDepositorInfo$','getPdbxStructAssemblyDepositorInfo$','getPdbxStructAssemblyGen$','getPdbxStructAssemblyGenDepositorInfo$','getPdbxStructAssemblyProp$','getPdbxStructAssemblyPropDepositorInfo$','getPdbxStructAsymGen$','getPdbxStructBiolFunc$','getPdbxStructChemCompDiagnostics$','getPdbxStructChemCompFeature$','getPdbxStructConnAngle$','getPdbxStructEntityInst$','getPdbxStructGroupComponentRange$','getPdbxStructGroupComponents$','getPdbxStructGroupList$','getPdbxStructInfo$','getPdbxStructLegacyOperList$','getPdbxStructLink$','getPdbxStructModResidue$','getPdbxStructMsymGen$','getPdbxStructNcsVirusGen$','getPdbxStructOperList$','getPdbxStructOperListDepositorInfo$','getPdbxStructPackGen$','getPdbxStructRefSeqDeletion$','getPdbxStructRefSeqDepositorInfo$','getPdbxStructRefSeqDifDepositorInfo$','getPdbxStructRefSeqFeature$','getPdbxStructRefSeqFeatureProp$','getPdbxStructRefSeqInsertion$','getPdbxStructSheetHbond$','getPdbxStructSpecialSymmetry$','getPdbxSugarPhosphateGeometry$','getPdbxSummaryFlags$','getPdbxSupportingExpDataSet$','getPdbxTableinfo$','getPdbxTrnaInfo$','getPdbxUnobsOrZeroOccAtoms$','getPdbxUnobsOrZeroOccResidues$','getPdbxUnpair$','getPdbxValAngle$','getPdbxValBond$','getPdbxValChiral$','getPdbxValContact$','getPdbxValSymContact$','getPdbxValidateChiral$','getPdbxValidateCloseContact$','getPdbxValidateMainChainPlane$','getPdbxValidatePeptideOmega$','getPdbxValidatePlanes$','getPdbxValidatePlanesAtom$','getPdbxValidatePolymerLinkage$','getPdbxValidateRmsdAngle$','getPdbxValidateRmsdBond$','getPdbxValidateSymmContact$','getPdbxValidateTorsion$','getPdbxVersion$','getPdbxViewCategory$','getPdbxViewCategoryGroup$','getPdbxViewItem$','getPdbxVirtualAngle$','getPdbxVirtualBond$','getPdbxVirtualTorsion$','getPdbxXplorFile$','getPhasing$','getPhasingAveraging$','getPhasingIsomorphous$','getPhasingMAD$','getPhasingMADClust$','getPhasingMADExpt$','getPhasingMADRatio$','getPhasingMADSet$','getPhasingMIR$','getPhasingMIRDer$','getPhasingMIRDerRefln$','getPhasingMIRDerShell$','getPhasingMIRDerSite$','getPhasingMIRShell$','getPhasingSet$','getPhasingSetRefln$','getPubl$','getPublAuthor$','getPublBody$','getPublManuscriptIncl$','getRefine$','getRefineAnalyze$','getRefineBIso$','getRefineFunctMinimized$','getRefineHist$','getRefineLsClass$','getRefineLsRestr$','getRefineLsRestrNcs$','getRefineLsRestrType$','getRefineLsShell$','getRefineOccupancy$','getRefln$','getReflnSysAbs$','getReflns$','getReflnsClass$','getReflnsScale$','getReflnsShell$','getSaveFrames$','getSoftware$','getSpaceGroup$','getSpaceGroupSymop$','getStruct$','getStructAsym$','getStructBiol$','getStructBiolGen$','getStructBiolKeywords$','getStructBiolView$','getStructConf$','getStructConfType$','getStructConn$','getStructConnType$','getStructKeywords$','getStructMonDetails$','getStructMonNucl$','getStructMonProt$','getStructMonProtCis$','getStructNcsDom$','getStructNcsDomLim$','getStructNcsEns$','getStructNcsEnsGen$','getStructNcsOper$','getStructRef$','getStructRefSeq$','getStructRefSeqDif$','getStructSheet$','getStructSheetHbond$','getStructSheetOrder$','getStructSheetRange$','getStructSheetTopology$','getStructSite$','getStructSiteGen$','getStructSiteKeywords$','getStructSiteView$','getSymmetry$','getSymmetryEquiv$','getValenceParam$','getValenceRef$','saveFrames$']).getSimpleName$(), this.schema, C$.OUTPUT_PATH]);
p$1.writeBlockImpl$S$java_util_Map$java_nio_file_Path.apply(this, [Clazz.getClass($I$(7)).getSimpleName$(), this.schema, C$.OUTPUT_PATH]);
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(C$.OUTPUT_PATH.resolve$S("field-name-class-map.csv"), C$.CLASS_MAP_LOOKUP.toString().getBytes$(), []);
}, p$1);

Clazz.newMeth(C$, 'writeBlockInterface$S$java_util_Map$java_nio_file_Path', function (className, content, path) {
var output=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
output.add$CharSequence("package org.rcsb.cif.model;");
output.add$CharSequence("");
var getters=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
getters.add$CharSequence("    String getBlockHeader();");
getters.add$CharSequence("");
getters.add$CharSequence("    " + Clazz.getClass($I$(9),['columnNames$','columnNamesEncoded$','columns$','fillFloat$SA','get$','getCategoryName$','getColumn$S','getColumnNames$','getColumnNamesEncoded$','getRowCount$','isDefined$']).getSimpleName$() + " getCategory(String name);" );
getters.add$CharSequence("");
getters.add$CharSequence("    List<String> getCategoryNames();");
getters.add$CharSequence("");
getters.add$CharSequence("    List<" + Clazz.getClass($I$(6),['getAtomSite$','getAtomSiteAnisotrop$','getAtomSites$','getAtomSitesAlt$','getAtomSitesAltEns$','getAtomSitesAltGen$','getAtomSitesFootnote$','getAtomType$','getAudit$','getAuditAuthor$','getAuditConform$','getAuditContactAuthor$','getAuditLink$','getCell$','getCellMeasurement$','getCellMeasurementRefln$','getChemComp$','getChemCompAngle$','getChemCompAtom$','getChemCompBond$','getChemCompChir$','getChemCompChirAtom$','getChemCompLink$','getChemCompPlane$','getChemCompPlaneAtom$','getChemCompTor$','getChemCompTorValue$','getChemLink$','getChemLinkAngle$','getChemLinkBond$','getChemLinkChir$','getChemLinkChirAtom$','getChemLinkPlane$','getChemLinkPlaneAtom$','getChemLinkTor$','getChemLinkTorValue$','getChemical$','getChemicalConnAtom$','getChemicalConnBond$','getChemicalFormula$','getCitation$','getCitationAuthor$','getCitationEditor$','getComputing$','getDatabase$','getDatabase2$','getDatabasePDBCaveat$','getDatabasePDBMatrix$','getDatabasePDBRemark$','getDatabasePDBRev$','getDatabasePDBRevRecord$','getDatabasePDBTvect$','getDiffrn$','getDiffrnAttenuator$','getDiffrnDetector$','getDiffrnMeasurement$','getDiffrnOrientMatrix$','getDiffrnOrientRefln$','getDiffrnRadiation$','getDiffrnRadiationWavelength$','getDiffrnRefln$','getDiffrnReflns$','getDiffrnReflnsClass$','getDiffrnScaleGroup$','getDiffrnSource$','getDiffrnStandardRefln$','getDiffrnStandards$','getEm2dCrystalEntity$','getEm2dProjectionSelection$','getEm3dCrystalEntity$','getEm3dFitting$','getEm3dFittingList$','getEm3dReconstruction$','getEmAdmin$','getEmAssembly$','getEmAuthorList$','getEmBuffer$','getEmBufferComponent$','getEmCrystalFormation$','getEmCtfCorrection$','getEmDbReference$','getEmDbReferenceAuxiliary$','getEmDepositorInfo$','getEmDepui$','getEmDetector$','getEmDiffraction$','getEmDiffractionShell$','getEmDiffractionStats$','getEmEmbedding$','getEmEntityAssembly$','getEmEntityAssemblyMolwt$','getEmEntityAssemblyNaturalsource$','getEmEntityAssemblyRecombinant$','getEmEulerAngleAssignment$','getEmExperiment$','getEmFiducialMarkers$','getEmFigureDepositorInfo$','getEmFinalClassification$','getEmFocusedIonBeam$','getEmFscCurve$','getEmGridPretreatment$','getEmHelicalEntity$','getEmHighPressureFreezing$','getEmImageProcessing$','getEmImageRecording$','getEmImageScans$','getEmImaging$','getEmImagingOptics$','getEmInterpretFigure$','getEmLayerLines$','getEmLayerLinesDepositorInfo$','getEmMap$','getEmMapDepositorInfo$','getEmMaskDepositorInfo$','getEmObsolete$','getEmParticleSelection$','getEmSamplePreparation$','getEmSampleSupport$','getEmShadowing$','getEmSingleParticleEntity$','getEmSoftware$','getEmSpecimen$','getEmStaining$','getEmStartModel$','getEmStructureFactors$','getEmStructureFactorsDepositorInfo$','getEmSupersede$','getEmSupportFilm$','getEmTomography$','getEmTomographySpecimen$','getEmUltramicrotomy$','getEmVirusEntity$','getEmVirusNaturalHost$','getEmVirusShell$','getEmVitrification$','getEmVolumeSelection$','getEntity$','getEntityKeywords$','getEntityLink$','getEntityNameCom$','getEntityNameSys$','getEntityPoly$','getEntityPolySeq$','getEntitySrcGen$','getEntitySrcNat$','getEntry$','getEntryLink$','getExptl$','getExptlCrystal$','getExptlCrystalFace$','getExptlCrystalGrow$','getExptlCrystalGrowComp$','getGeom$','getGeomAngle$','getGeomBond$','getGeomContact$','getGeomHbond$','getGeomTorsion$','getIhm2demClassAverageFitting$','getIhm2demClassAverageRestraint$','getIhm3demRestraint$','getIhmCrossLinkList$','getIhmCrossLinkRestraint$','getIhmCrossLinkResult$','getIhmCrossLinkResultParameters$','getIhmDatasetExternalReference$','getIhmDatasetGroup$','getIhmDatasetList$','getIhmDatasetRelatedDbReference$','getIhmDerivedDistanceRestraint$','getIhmEnsembleInfo$','getIhmExternalFiles$','getIhmExternalReferenceInfo$','getIhmFeatureList$','getIhmGaussianObjEnsemble$','getIhmGaussianObjSite$','getIhmGeometricObjectAxis$','getIhmGeometricObjectCenter$','getIhmGeometricObjectDistanceRestraint$','getIhmGeometricObjectHalfTorus$','getIhmGeometricObjectList$','getIhmGeometricObjectPlane$','getIhmGeometricObjectSphere$','getIhmGeometricObjectTorus$','getIhmGeometricObjectTransformation$','getIhmHydroxylRadicalFpRestraint$','getIhmInterfaceResidueFeature$','getIhmLocalizationDensityFiles$','getIhmModelList$','getIhmModelRepresentation$','getIhmModelRepresentative$','getIhmModelingPostProcess$','getIhmModelingProtocol$','getIhmMultiStateModeling$','getIhmNonPolyFeature$','getIhmOrderedEnsemble$','getIhmPolyAtomFeature$','getIhmPolyResidueFeature$','getIhmPredictedContactRestraint$','getIhmPseudoSiteFeature$','getIhmRelatedDatasets$','getIhmResiduesNotModeled$','getIhmSasRestraint$','getIhmSphereObjSite$','getIhmStartingComparativeModels$','getIhmStartingComputationalModels$','getIhmStartingModelCoord$','getIhmStartingModelDetails$','getIhmStartingModelSeqDif$','getIhmStructAssembly$','getIhmStructAssemblyClass$','getIhmStructAssemblyClassList$','getIhmStructAssemblyDetails$','getJournal$','getJournalIndex$','getNdbOriginalNdbCoordinates$','getNdbStructConfNa$','getNdbStructFeatureNa$','getNdbStructNaBasePair$','getNdbStructNaBasePairStep$','getPdbxAtlas$','getPdbxAtomSiteAnisoTls$','getPdbxAudit$','getPdbxAuditAuthor$','getPdbxAuditConformExtension$','getPdbxAuditRevisionCategory$','getPdbxAuditRevisionDetails$','getPdbxAuditRevisionGroup$','getPdbxAuditRevisionHistory$','getPdbxAuditRevisionItem$','getPdbxAuditSupport$','getPdbxBondDistanceLimits$','getPdbxBranchScheme$','getPdbxBuffer$','getPdbxBufferComponents$','getPdbxChemCompAtomEdit$','getPdbxChemCompAtomFeature$','getPdbxChemCompAtomRelated$','getPdbxChemCompAudit$','getPdbxChemCompBondEdit$','getPdbxChemCompDepositorInfo$','getPdbxChemCompDescriptor$','getPdbxChemCompFeature$','getPdbxChemCompIdentifier$','getPdbxChemCompImport$','getPdbxChemCompInstanceDepositorInfo$','getPdbxChemCompModel$','getPdbxChemCompModelAtom$','getPdbxChemCompModelAudit$','getPdbxChemCompModelBond$','getPdbxChemCompModelDescriptor$','getPdbxChemCompModelFeature$','getPdbxChemCompModelReference$','getPdbxChemCompNonstandard$','getPdbxChemCompRelated$','getPdbxChemCompSubcomponentEntityList$','getPdbxChemCompSubcomponentStructConn$','getPdbxChemCompSynonyms$','getPdbxChemCompUploadDepositorInfo$','getPdbxColumninfo$','getPdbxConnect$','getPdbxConnectAtom$','getPdbxConnectModification$','getPdbxConnectType$','getPdbxConstruct$','getPdbxConstructFeature$','getPdbxContactAuthor$','getPdbxCoord$','getPdbxCoordinateModel$','getPdbxCrystalAlignment$','getPdbxDataProcessingCell$','getPdbxDataProcessingDetector$','getPdbxDataProcessingReflns$','getPdbxDataProcessingStatus$','getPdbxDatabaseMessage$','getPdbxDatabasePDBMaster$','getPdbxDatabasePDBObsSpr$','getPdbxDatabasePdbOmit$','getPdbxDatabaseProc$','getPdbxDatabaseRelated$','getPdbxDatabaseRemark$','getPdbxDatabaseStatus$','getPdbxDatabaseStatusHistory$','getPdbxDbref$','getPdbxDccDensity$','getPdbxDccDensityCorr$','getPdbxDccGeometry$','getPdbxDccMap$','getPdbxDccMapman$','getPdbxDccRsccMapman$','getPdbxDccRsccMapmanOverall$','getPdbxDepositGroup$','getPdbxDepositGroupIndex$','getPdbxDepositionMessageFileReference$','getPdbxDepositionMessageInfo$','getPdbxDepuiEntityFeatures$','getPdbxDepuiEntityStatusFlags$','getPdbxDepuiEntryDetails$','getPdbxDepuiStatusFlags$','getPdbxDepuiUpload$','getPdbxDepuiValidationStatusFlags$','getPdbxDiffrnReflnsShell$','getPdbxDistantSolventAtoms$','getPdbxDomain$','getPdbxDomainRange$','getPdbxDrugInfo$','getPdbxEntityAssembly$','getPdbxEntityBranch$','getPdbxEntityBranchLink$','getPdbxEntityBranchList$','getPdbxEntityDescriptor$','getPdbxEntityFuncBindMode$','getPdbxEntityFuncEnzyme$','getPdbxEntityFuncOther$','getPdbxEntityFuncRegulatory$','getPdbxEntityFuncStructural$','getPdbxEntityInstanceFeature$','getPdbxEntityName$','getPdbxEntityNameInstance$','getPdbxEntityNameTaxonomy$','getPdbxEntityNameTaxonomyTree$','getPdbxEntityNonpoly$','getPdbxEntityPolyCompLinkList$','getPdbxEntityPolyDomain$','getPdbxEntityPolyNaNonstandard$','getPdbxEntityPolyNaType$','getPdbxEntityPolyProteinClass$','getPdbxEntityProdProtocol$','getPdbxEntitySrcGenCharacter$','getPdbxEntitySrcGenChrom$','getPdbxEntitySrcGenClone$','getPdbxEntitySrcGenCloneLigation$','getPdbxEntitySrcGenCloneRecombination$','getPdbxEntitySrcGenDepositorInfo$','getPdbxEntitySrcGenExpress$','getPdbxEntitySrcGenExpressTimepoint$','getPdbxEntitySrcGenFract$','getPdbxEntitySrcGenLysis$','getPdbxEntitySrcGenProdDigest$','getPdbxEntitySrcGenProdOther$','getPdbxEntitySrcGenProdOtherParameter$','getPdbxEntitySrcGenProdPcr$','getPdbxEntitySrcGenProteolysis$','getPdbxEntitySrcGenPure$','getPdbxEntitySrcGenRefold$','getPdbxEntitySrcSyn$','getPdbxEntryDetails$','getPdbxExptlCrystalCryoTreatment$','getPdbxExptlCrystalGrowComp$','getPdbxExptlCrystalGrowSol$','getPdbxExptlPd$','getPdbxFamilyGroupIndex$','getPdbxFamilyPrdAudit$','getPdbxFeatureAssembly$','getPdbxFeatureDomain$','getPdbxFeatureEntry$','getPdbxFeatureMonomer$','getPdbxFeatureSequenceRange$','getPdbxHelicalSymmetry$','getPdbxHelicalSymmetryDepositorInfo$','getPdbxHybrid$','getPdbxInhibitorInfo$','getPdbxIonInfo$','getPdbxLinkedEntity$','getPdbxLinkedEntityInstanceList$','getPdbxLinkedEntityLinkList$','getPdbxLinkedEntityList$','getPdbxMissingAtomNonpoly$','getPdbxMissingAtomPoly$','getPdbxMissingResidueList$','getPdbxMolecule$','getPdbxMoleculeFeatures$','getPdbxMoleculeFeaturesDepositorInfo$','getPdbxNaStrandInfo$','getPdbxNaStructKeywds$','getPdbxNmrAssignedChemShiftList$','getPdbxNmrChemShiftExperiment$','getPdbxNmrChemShiftRef$','getPdbxNmrChemShiftReference$','getPdbxNmrChemShiftSoftware$','getPdbxNmrComputing$','getPdbxNmrConstraintFile$','getPdbxNmrConstraints$','getPdbxNmrDetails$','getPdbxNmrEnsemble$','getPdbxNmrEnsembleRms$','getPdbxNmrExptl$','getPdbxNmrExptlSample$','getPdbxNmrExptlSampleConditions$','getPdbxNmrForceConstants$','getPdbxNmrRefine$','getPdbxNmrRepresentative$','getPdbxNmrSampleDetails$','getPdbxNmrSoftware$','getPdbxNmrSoftwareTask$','getPdbxNmrSpectralDim$','getPdbxNmrSpectralPeakList$','getPdbxNmrSpectralPeakSoftware$','getPdbxNmrSpectrometer$','getPdbxNmrSystematicChemShiftOffset$','getPdbxNmrUpload$','getPdbxNonpolyScheme$','getPdbxNonstandardList$','getPdbxPdbCompnd$','getPdbxPdbSource$','getPdbxPhasingDm$','getPdbxPhasingDmShell$','getPdbxPhasingMADSet$','getPdbxPhasingMADSetShell$','getPdbxPhasingMADSetSite$','getPdbxPhasingMADShell$','getPdbxPhasingMR$','getPdbxPointSymmetry$','getPdbxPointSymmetryDepositorInfo$','getPdbxPolySeqScheme$','getPdbxPostProcessDetails$','getPdbxPostProcessStatus$','getPdbxPrdAudit$','getPdbxPrereleaseSeq$','getPdbxProteinInfo$','getPdbxReRefinement$','getPdbxReferenceEntityLink$','getPdbxReferenceEntityList$','getPdbxReferenceEntityNonpoly$','getPdbxReferenceEntityPoly$','getPdbxReferenceEntityPolyLink$','getPdbxReferenceEntityPolySeq$','getPdbxReferenceEntitySequence$','getPdbxReferenceEntitySrcNat$','getPdbxReferenceEntitySubcomponents$','getPdbxReferenceLinkedEntity$','getPdbxReferenceLinkedEntityCompLink$','getPdbxReferenceLinkedEntityCompList$','getPdbxReferenceLinkedEntityLink$','getPdbxReferenceMolecule$','getPdbxReferenceMoleculeAnnotation$','getPdbxReferenceMoleculeDetails$','getPdbxReferenceMoleculeFamily$','getPdbxReferenceMoleculeFeatures$','getPdbxReferenceMoleculeList$','getPdbxReferenceMoleculeRelatedStructures$','getPdbxReferenceMoleculeSynonyms$','getPdbxReferencePublicationList$','getPdbxRefine$','getPdbxRefineAuxFile$','getPdbxRefineComponent$','getPdbxRefineLsRestrNcs$','getPdbxRefineTls$','getPdbxRefineTlsGroup$','getPdbxReflnsTwin$','getPdbxRelatedExpDataSet$','getPdbxRemediationAtomSiteMapping$','getPdbxRmchOutlier$','getPdbxRmsDevsCovByMonomer$','getPdbxRmsDevsCovalent$','getPdbxRobotSystem$','getPdbxSGProject$','getPdbxSeqMapDepositorInfo$','getPdbxSequenceAnnotation$','getPdbxSequencePattern$','getPdbxSequenceRange$','getPdbxSerialCrystallographyDataReduction$','getPdbxSerialCrystallographyMeasurement$','getPdbxSerialCrystallographySampleDelivery$','getPdbxSerialCrystallographySampleDeliveryFixedTarget$','getPdbxSerialCrystallographySampleDeliveryInjection$','getPdbxSolnScatter$','getPdbxSolnScatterModel$','getPdbxSolventAtomSiteMapping$','getPdbxSolventInfo$','getPdbxSource$','getPdbxStereochemistry$','getPdbxStructAssembly$','getPdbxStructAssemblyAuthClassification$','getPdbxStructAssemblyAuthEvidence$','getPdbxStructAssemblyAuthEvidenceDepositorInfo$','getPdbxStructAssemblyDepositorInfo$','getPdbxStructAssemblyGen$','getPdbxStructAssemblyGenDepositorInfo$','getPdbxStructAssemblyProp$','getPdbxStructAssemblyPropDepositorInfo$','getPdbxStructAsymGen$','getPdbxStructBiolFunc$','getPdbxStructChemCompDiagnostics$','getPdbxStructChemCompFeature$','getPdbxStructConnAngle$','getPdbxStructEntityInst$','getPdbxStructGroupComponentRange$','getPdbxStructGroupComponents$','getPdbxStructGroupList$','getPdbxStructInfo$','getPdbxStructLegacyOperList$','getPdbxStructLink$','getPdbxStructModResidue$','getPdbxStructMsymGen$','getPdbxStructNcsVirusGen$','getPdbxStructOperList$','getPdbxStructOperListDepositorInfo$','getPdbxStructPackGen$','getPdbxStructRefSeqDeletion$','getPdbxStructRefSeqDepositorInfo$','getPdbxStructRefSeqDifDepositorInfo$','getPdbxStructRefSeqFeature$','getPdbxStructRefSeqFeatureProp$','getPdbxStructRefSeqInsertion$','getPdbxStructSheetHbond$','getPdbxStructSpecialSymmetry$','getPdbxSugarPhosphateGeometry$','getPdbxSummaryFlags$','getPdbxSupportingExpDataSet$','getPdbxTableinfo$','getPdbxTrnaInfo$','getPdbxUnobsOrZeroOccAtoms$','getPdbxUnobsOrZeroOccResidues$','getPdbxUnpair$','getPdbxValAngle$','getPdbxValBond$','getPdbxValChiral$','getPdbxValContact$','getPdbxValSymContact$','getPdbxValidateChiral$','getPdbxValidateCloseContact$','getPdbxValidateMainChainPlane$','getPdbxValidatePeptideOmega$','getPdbxValidatePlanes$','getPdbxValidatePlanesAtom$','getPdbxValidatePolymerLinkage$','getPdbxValidateRmsdAngle$','getPdbxValidateRmsdBond$','getPdbxValidateSymmContact$','getPdbxValidateTorsion$','getPdbxVersion$','getPdbxViewCategory$','getPdbxViewCategoryGroup$','getPdbxViewItem$','getPdbxVirtualAngle$','getPdbxVirtualBond$','getPdbxVirtualTorsion$','getPdbxXplorFile$','getPhasing$','getPhasingAveraging$','getPhasingIsomorphous$','getPhasingMAD$','getPhasingMADClust$','getPhasingMADExpt$','getPhasingMADRatio$','getPhasingMADSet$','getPhasingMIR$','getPhasingMIRDer$','getPhasingMIRDerRefln$','getPhasingMIRDerShell$','getPhasingMIRDerSite$','getPhasingMIRShell$','getPhasingSet$','getPhasingSetRefln$','getPubl$','getPublAuthor$','getPublBody$','getPublManuscriptIncl$','getRefine$','getRefineAnalyze$','getRefineBIso$','getRefineFunctMinimized$','getRefineHist$','getRefineLsClass$','getRefineLsRestr$','getRefineLsRestrNcs$','getRefineLsRestrType$','getRefineLsShell$','getRefineOccupancy$','getRefln$','getReflnSysAbs$','getReflns$','getReflnsClass$','getReflnsScale$','getReflnsShell$','getSaveFrames$','getSoftware$','getSpaceGroup$','getSpaceGroupSymop$','getStruct$','getStructAsym$','getStructBiol$','getStructBiolGen$','getStructBiolKeywords$','getStructBiolView$','getStructConf$','getStructConfType$','getStructConn$','getStructConnType$','getStructKeywords$','getStructMonDetails$','getStructMonNucl$','getStructMonProt$','getStructMonProtCis$','getStructNcsDom$','getStructNcsDomLim$','getStructNcsEns$','getStructNcsEnsGen$','getStructNcsOper$','getStructRef$','getStructRefSeq$','getStructRefSeqDif$','getStructSheet$','getStructSheetHbond$','getStructSheetOrder$','getStructSheetRange$','getStructSheetTopology$','getStructSite$','getStructSiteGen$','getStructSiteKeywords$','getStructSiteView$','getSymmetry$','getSymmetryEquiv$','getValenceParam$','getValenceRef$','saveFrames$']).getSimpleName$() + "> getSaveFrames();" );
getters.add$CharSequence("");
for (var entry, $entry = content.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var categoryName=entry.getKey$();
var category=entry.getValue$();
var categoryClassName=C$.toClassName$S(categoryName);
getters.add$CharSequence("    /**");
var description=$I$(5).compile$S("\n").splitAsStream$CharSequence(category.getDescription$()).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda2*/(P$.SchemaGenerator$lambda2$||(P$.SchemaGenerator$lambda2$=(((P$.SchemaGenerator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return ("     * " + s);});
})()
), Clazz.new_(P$.SchemaGenerator$lambda2.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).joining$CharSequence("\n"));
getters.add$CharSequence(description);
getters.add$CharSequence("     * @return " + categoryClassName);
getters.add$CharSequence("     */");
getters.add$CharSequence("    " + "org.rcsb.cif.model" + ".generated." + categoryClassName + " get" + categoryClassName + "();" );
getters.add$CharSequence("");
}
output.add$CharSequence("import javax.annotation.Generated;");
output.add$CharSequence("import java.util.List;");
output.add$CharSequence("");
output.add$CharSequence("@Generated(\"org.rcsb.cif.generator.SchemaGenerator\")");
output.add$CharSequence("public interface " + className + " {" );
output.add$CharSequence(getters.toString() + "}");
output.add$CharSequence("");
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(path.resolve$S(className + ".java"), output.toString().getBytes$(), []);
}, p$1);

Clazz.newMeth(C$, 'writeBlockImpl$S$java_util_Map$java_nio_file_Path', function (className, content, path) {
var output=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
output.add$CharSequence("package org.rcsb.cif.model;");
output.add$CharSequence("");
var getters=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
var builder=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
var categoryBuilder=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
for (var entry, $entry = content.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var categoryName=entry.getKey$();
var category=entry.getValue$();
var categoryClassName=C$.toClassName$S(categoryName);
getters.add$CharSequence("    public " + "org.rcsb.cif.model" + ".generated." + categoryClassName + " get" + categoryClassName + "() {" );
getters.add$CharSequence("        return (" + "org.rcsb.cif.model" + ".generated." + categoryClassName + ") categories.computeIfAbsent(\"" + categoryName + "\"," );
getters.add$CharSequence("                " + "org.rcsb.cif.model" + ".generated." + categoryClassName + "::new);" );
getters.add$CharSequence("    }");
getters.add$CharSequence("");
p$1.writeCategory$S$S$org_rcsb_cif_generator_Table$java_nio_file_Path$S$S$java_util_StringJoiner.apply(this, [category.getDescription$(), categoryClassName, entry.getValue$(), path, categoryName, categoryClassName, categoryBuilder]);
builder.add$CharSequence("    public CategoryBuilder." + categoryClassName + "Builder enter" + categoryClassName + "() {" );
builder.add$CharSequence("        return new CategoryBuilder." + categoryClassName + "Builder(this);" );
builder.add$CharSequence("    }");
builder.add$CharSequence("");
}
output.add$CharSequence("import org.rcsb.cif.model.BaseCifBlock;");
output.add$CharSequence("import org.rcsb.cif.model.Category;");
output.add$CharSequence("");
output.add$CharSequence("import javax.annotation.Generated;");
output.add$CharSequence("import java.util.ArrayList;");
output.add$CharSequence("import java.util.Map;");
output.add$CharSequence("");
output.add$CharSequence("@Generated(\"org.rcsb.cif.generator.SchemaGenerator\")");
output.add$CharSequence("public class " + className + " implements " + Clazz.getClass($I$(6),['getAtomSite$','getAtomSiteAnisotrop$','getAtomSites$','getAtomSitesAlt$','getAtomSitesAltEns$','getAtomSitesAltGen$','getAtomSitesFootnote$','getAtomType$','getAudit$','getAuditAuthor$','getAuditConform$','getAuditContactAuthor$','getAuditLink$','getCell$','getCellMeasurement$','getCellMeasurementRefln$','getChemComp$','getChemCompAngle$','getChemCompAtom$','getChemCompBond$','getChemCompChir$','getChemCompChirAtom$','getChemCompLink$','getChemCompPlane$','getChemCompPlaneAtom$','getChemCompTor$','getChemCompTorValue$','getChemLink$','getChemLinkAngle$','getChemLinkBond$','getChemLinkChir$','getChemLinkChirAtom$','getChemLinkPlane$','getChemLinkPlaneAtom$','getChemLinkTor$','getChemLinkTorValue$','getChemical$','getChemicalConnAtom$','getChemicalConnBond$','getChemicalFormula$','getCitation$','getCitationAuthor$','getCitationEditor$','getComputing$','getDatabase$','getDatabase2$','getDatabasePDBCaveat$','getDatabasePDBMatrix$','getDatabasePDBRemark$','getDatabasePDBRev$','getDatabasePDBRevRecord$','getDatabasePDBTvect$','getDiffrn$','getDiffrnAttenuator$','getDiffrnDetector$','getDiffrnMeasurement$','getDiffrnOrientMatrix$','getDiffrnOrientRefln$','getDiffrnRadiation$','getDiffrnRadiationWavelength$','getDiffrnRefln$','getDiffrnReflns$','getDiffrnReflnsClass$','getDiffrnScaleGroup$','getDiffrnSource$','getDiffrnStandardRefln$','getDiffrnStandards$','getEm2dCrystalEntity$','getEm2dProjectionSelection$','getEm3dCrystalEntity$','getEm3dFitting$','getEm3dFittingList$','getEm3dReconstruction$','getEmAdmin$','getEmAssembly$','getEmAuthorList$','getEmBuffer$','getEmBufferComponent$','getEmCrystalFormation$','getEmCtfCorrection$','getEmDbReference$','getEmDbReferenceAuxiliary$','getEmDepositorInfo$','getEmDepui$','getEmDetector$','getEmDiffraction$','getEmDiffractionShell$','getEmDiffractionStats$','getEmEmbedding$','getEmEntityAssembly$','getEmEntityAssemblyMolwt$','getEmEntityAssemblyNaturalsource$','getEmEntityAssemblyRecombinant$','getEmEulerAngleAssignment$','getEmExperiment$','getEmFiducialMarkers$','getEmFigureDepositorInfo$','getEmFinalClassification$','getEmFocusedIonBeam$','getEmFscCurve$','getEmGridPretreatment$','getEmHelicalEntity$','getEmHighPressureFreezing$','getEmImageProcessing$','getEmImageRecording$','getEmImageScans$','getEmImaging$','getEmImagingOptics$','getEmInterpretFigure$','getEmLayerLines$','getEmLayerLinesDepositorInfo$','getEmMap$','getEmMapDepositorInfo$','getEmMaskDepositorInfo$','getEmObsolete$','getEmParticleSelection$','getEmSamplePreparation$','getEmSampleSupport$','getEmShadowing$','getEmSingleParticleEntity$','getEmSoftware$','getEmSpecimen$','getEmStaining$','getEmStartModel$','getEmStructureFactors$','getEmStructureFactorsDepositorInfo$','getEmSupersede$','getEmSupportFilm$','getEmTomography$','getEmTomographySpecimen$','getEmUltramicrotomy$','getEmVirusEntity$','getEmVirusNaturalHost$','getEmVirusShell$','getEmVitrification$','getEmVolumeSelection$','getEntity$','getEntityKeywords$','getEntityLink$','getEntityNameCom$','getEntityNameSys$','getEntityPoly$','getEntityPolySeq$','getEntitySrcGen$','getEntitySrcNat$','getEntry$','getEntryLink$','getExptl$','getExptlCrystal$','getExptlCrystalFace$','getExptlCrystalGrow$','getExptlCrystalGrowComp$','getGeom$','getGeomAngle$','getGeomBond$','getGeomContact$','getGeomHbond$','getGeomTorsion$','getIhm2demClassAverageFitting$','getIhm2demClassAverageRestraint$','getIhm3demRestraint$','getIhmCrossLinkList$','getIhmCrossLinkRestraint$','getIhmCrossLinkResult$','getIhmCrossLinkResultParameters$','getIhmDatasetExternalReference$','getIhmDatasetGroup$','getIhmDatasetList$','getIhmDatasetRelatedDbReference$','getIhmDerivedDistanceRestraint$','getIhmEnsembleInfo$','getIhmExternalFiles$','getIhmExternalReferenceInfo$','getIhmFeatureList$','getIhmGaussianObjEnsemble$','getIhmGaussianObjSite$','getIhmGeometricObjectAxis$','getIhmGeometricObjectCenter$','getIhmGeometricObjectDistanceRestraint$','getIhmGeometricObjectHalfTorus$','getIhmGeometricObjectList$','getIhmGeometricObjectPlane$','getIhmGeometricObjectSphere$','getIhmGeometricObjectTorus$','getIhmGeometricObjectTransformation$','getIhmHydroxylRadicalFpRestraint$','getIhmInterfaceResidueFeature$','getIhmLocalizationDensityFiles$','getIhmModelList$','getIhmModelRepresentation$','getIhmModelRepresentative$','getIhmModelingPostProcess$','getIhmModelingProtocol$','getIhmMultiStateModeling$','getIhmNonPolyFeature$','getIhmOrderedEnsemble$','getIhmPolyAtomFeature$','getIhmPolyResidueFeature$','getIhmPredictedContactRestraint$','getIhmPseudoSiteFeature$','getIhmRelatedDatasets$','getIhmResiduesNotModeled$','getIhmSasRestraint$','getIhmSphereObjSite$','getIhmStartingComparativeModels$','getIhmStartingComputationalModels$','getIhmStartingModelCoord$','getIhmStartingModelDetails$','getIhmStartingModelSeqDif$','getIhmStructAssembly$','getIhmStructAssemblyClass$','getIhmStructAssemblyClassList$','getIhmStructAssemblyDetails$','getJournal$','getJournalIndex$','getNdbOriginalNdbCoordinates$','getNdbStructConfNa$','getNdbStructFeatureNa$','getNdbStructNaBasePair$','getNdbStructNaBasePairStep$','getPdbxAtlas$','getPdbxAtomSiteAnisoTls$','getPdbxAudit$','getPdbxAuditAuthor$','getPdbxAuditConformExtension$','getPdbxAuditRevisionCategory$','getPdbxAuditRevisionDetails$','getPdbxAuditRevisionGroup$','getPdbxAuditRevisionHistory$','getPdbxAuditRevisionItem$','getPdbxAuditSupport$','getPdbxBondDistanceLimits$','getPdbxBranchScheme$','getPdbxBuffer$','getPdbxBufferComponents$','getPdbxChemCompAtomEdit$','getPdbxChemCompAtomFeature$','getPdbxChemCompAtomRelated$','getPdbxChemCompAudit$','getPdbxChemCompBondEdit$','getPdbxChemCompDepositorInfo$','getPdbxChemCompDescriptor$','getPdbxChemCompFeature$','getPdbxChemCompIdentifier$','getPdbxChemCompImport$','getPdbxChemCompInstanceDepositorInfo$','getPdbxChemCompModel$','getPdbxChemCompModelAtom$','getPdbxChemCompModelAudit$','getPdbxChemCompModelBond$','getPdbxChemCompModelDescriptor$','getPdbxChemCompModelFeature$','getPdbxChemCompModelReference$','getPdbxChemCompNonstandard$','getPdbxChemCompRelated$','getPdbxChemCompSubcomponentEntityList$','getPdbxChemCompSubcomponentStructConn$','getPdbxChemCompSynonyms$','getPdbxChemCompUploadDepositorInfo$','getPdbxColumninfo$','getPdbxConnect$','getPdbxConnectAtom$','getPdbxConnectModification$','getPdbxConnectType$','getPdbxConstruct$','getPdbxConstructFeature$','getPdbxContactAuthor$','getPdbxCoord$','getPdbxCoordinateModel$','getPdbxCrystalAlignment$','getPdbxDataProcessingCell$','getPdbxDataProcessingDetector$','getPdbxDataProcessingReflns$','getPdbxDataProcessingStatus$','getPdbxDatabaseMessage$','getPdbxDatabasePDBMaster$','getPdbxDatabasePDBObsSpr$','getPdbxDatabasePdbOmit$','getPdbxDatabaseProc$','getPdbxDatabaseRelated$','getPdbxDatabaseRemark$','getPdbxDatabaseStatus$','getPdbxDatabaseStatusHistory$','getPdbxDbref$','getPdbxDccDensity$','getPdbxDccDensityCorr$','getPdbxDccGeometry$','getPdbxDccMap$','getPdbxDccMapman$','getPdbxDccRsccMapman$','getPdbxDccRsccMapmanOverall$','getPdbxDepositGroup$','getPdbxDepositGroupIndex$','getPdbxDepositionMessageFileReference$','getPdbxDepositionMessageInfo$','getPdbxDepuiEntityFeatures$','getPdbxDepuiEntityStatusFlags$','getPdbxDepuiEntryDetails$','getPdbxDepuiStatusFlags$','getPdbxDepuiUpload$','getPdbxDepuiValidationStatusFlags$','getPdbxDiffrnReflnsShell$','getPdbxDistantSolventAtoms$','getPdbxDomain$','getPdbxDomainRange$','getPdbxDrugInfo$','getPdbxEntityAssembly$','getPdbxEntityBranch$','getPdbxEntityBranchLink$','getPdbxEntityBranchList$','getPdbxEntityDescriptor$','getPdbxEntityFuncBindMode$','getPdbxEntityFuncEnzyme$','getPdbxEntityFuncOther$','getPdbxEntityFuncRegulatory$','getPdbxEntityFuncStructural$','getPdbxEntityInstanceFeature$','getPdbxEntityName$','getPdbxEntityNameInstance$','getPdbxEntityNameTaxonomy$','getPdbxEntityNameTaxonomyTree$','getPdbxEntityNonpoly$','getPdbxEntityPolyCompLinkList$','getPdbxEntityPolyDomain$','getPdbxEntityPolyNaNonstandard$','getPdbxEntityPolyNaType$','getPdbxEntityPolyProteinClass$','getPdbxEntityProdProtocol$','getPdbxEntitySrcGenCharacter$','getPdbxEntitySrcGenChrom$','getPdbxEntitySrcGenClone$','getPdbxEntitySrcGenCloneLigation$','getPdbxEntitySrcGenCloneRecombination$','getPdbxEntitySrcGenDepositorInfo$','getPdbxEntitySrcGenExpress$','getPdbxEntitySrcGenExpressTimepoint$','getPdbxEntitySrcGenFract$','getPdbxEntitySrcGenLysis$','getPdbxEntitySrcGenProdDigest$','getPdbxEntitySrcGenProdOther$','getPdbxEntitySrcGenProdOtherParameter$','getPdbxEntitySrcGenProdPcr$','getPdbxEntitySrcGenProteolysis$','getPdbxEntitySrcGenPure$','getPdbxEntitySrcGenRefold$','getPdbxEntitySrcSyn$','getPdbxEntryDetails$','getPdbxExptlCrystalCryoTreatment$','getPdbxExptlCrystalGrowComp$','getPdbxExptlCrystalGrowSol$','getPdbxExptlPd$','getPdbxFamilyGroupIndex$','getPdbxFamilyPrdAudit$','getPdbxFeatureAssembly$','getPdbxFeatureDomain$','getPdbxFeatureEntry$','getPdbxFeatureMonomer$','getPdbxFeatureSequenceRange$','getPdbxHelicalSymmetry$','getPdbxHelicalSymmetryDepositorInfo$','getPdbxHybrid$','getPdbxInhibitorInfo$','getPdbxIonInfo$','getPdbxLinkedEntity$','getPdbxLinkedEntityInstanceList$','getPdbxLinkedEntityLinkList$','getPdbxLinkedEntityList$','getPdbxMissingAtomNonpoly$','getPdbxMissingAtomPoly$','getPdbxMissingResidueList$','getPdbxMolecule$','getPdbxMoleculeFeatures$','getPdbxMoleculeFeaturesDepositorInfo$','getPdbxNaStrandInfo$','getPdbxNaStructKeywds$','getPdbxNmrAssignedChemShiftList$','getPdbxNmrChemShiftExperiment$','getPdbxNmrChemShiftRef$','getPdbxNmrChemShiftReference$','getPdbxNmrChemShiftSoftware$','getPdbxNmrComputing$','getPdbxNmrConstraintFile$','getPdbxNmrConstraints$','getPdbxNmrDetails$','getPdbxNmrEnsemble$','getPdbxNmrEnsembleRms$','getPdbxNmrExptl$','getPdbxNmrExptlSample$','getPdbxNmrExptlSampleConditions$','getPdbxNmrForceConstants$','getPdbxNmrRefine$','getPdbxNmrRepresentative$','getPdbxNmrSampleDetails$','getPdbxNmrSoftware$','getPdbxNmrSoftwareTask$','getPdbxNmrSpectralDim$','getPdbxNmrSpectralPeakList$','getPdbxNmrSpectralPeakSoftware$','getPdbxNmrSpectrometer$','getPdbxNmrSystematicChemShiftOffset$','getPdbxNmrUpload$','getPdbxNonpolyScheme$','getPdbxNonstandardList$','getPdbxPdbCompnd$','getPdbxPdbSource$','getPdbxPhasingDm$','getPdbxPhasingDmShell$','getPdbxPhasingMADSet$','getPdbxPhasingMADSetShell$','getPdbxPhasingMADSetSite$','getPdbxPhasingMADShell$','getPdbxPhasingMR$','getPdbxPointSymmetry$','getPdbxPointSymmetryDepositorInfo$','getPdbxPolySeqScheme$','getPdbxPostProcessDetails$','getPdbxPostProcessStatus$','getPdbxPrdAudit$','getPdbxPrereleaseSeq$','getPdbxProteinInfo$','getPdbxReRefinement$','getPdbxReferenceEntityLink$','getPdbxReferenceEntityList$','getPdbxReferenceEntityNonpoly$','getPdbxReferenceEntityPoly$','getPdbxReferenceEntityPolyLink$','getPdbxReferenceEntityPolySeq$','getPdbxReferenceEntitySequence$','getPdbxReferenceEntitySrcNat$','getPdbxReferenceEntitySubcomponents$','getPdbxReferenceLinkedEntity$','getPdbxReferenceLinkedEntityCompLink$','getPdbxReferenceLinkedEntityCompList$','getPdbxReferenceLinkedEntityLink$','getPdbxReferenceMolecule$','getPdbxReferenceMoleculeAnnotation$','getPdbxReferenceMoleculeDetails$','getPdbxReferenceMoleculeFamily$','getPdbxReferenceMoleculeFeatures$','getPdbxReferenceMoleculeList$','getPdbxReferenceMoleculeRelatedStructures$','getPdbxReferenceMoleculeSynonyms$','getPdbxReferencePublicationList$','getPdbxRefine$','getPdbxRefineAuxFile$','getPdbxRefineComponent$','getPdbxRefineLsRestrNcs$','getPdbxRefineTls$','getPdbxRefineTlsGroup$','getPdbxReflnsTwin$','getPdbxRelatedExpDataSet$','getPdbxRemediationAtomSiteMapping$','getPdbxRmchOutlier$','getPdbxRmsDevsCovByMonomer$','getPdbxRmsDevsCovalent$','getPdbxRobotSystem$','getPdbxSGProject$','getPdbxSeqMapDepositorInfo$','getPdbxSequenceAnnotation$','getPdbxSequencePattern$','getPdbxSequenceRange$','getPdbxSerialCrystallographyDataReduction$','getPdbxSerialCrystallographyMeasurement$','getPdbxSerialCrystallographySampleDelivery$','getPdbxSerialCrystallographySampleDeliveryFixedTarget$','getPdbxSerialCrystallographySampleDeliveryInjection$','getPdbxSolnScatter$','getPdbxSolnScatterModel$','getPdbxSolventAtomSiteMapping$','getPdbxSolventInfo$','getPdbxSource$','getPdbxStereochemistry$','getPdbxStructAssembly$','getPdbxStructAssemblyAuthClassification$','getPdbxStructAssemblyAuthEvidence$','getPdbxStructAssemblyAuthEvidenceDepositorInfo$','getPdbxStructAssemblyDepositorInfo$','getPdbxStructAssemblyGen$','getPdbxStructAssemblyGenDepositorInfo$','getPdbxStructAssemblyProp$','getPdbxStructAssemblyPropDepositorInfo$','getPdbxStructAsymGen$','getPdbxStructBiolFunc$','getPdbxStructChemCompDiagnostics$','getPdbxStructChemCompFeature$','getPdbxStructConnAngle$','getPdbxStructEntityInst$','getPdbxStructGroupComponentRange$','getPdbxStructGroupComponents$','getPdbxStructGroupList$','getPdbxStructInfo$','getPdbxStructLegacyOperList$','getPdbxStructLink$','getPdbxStructModResidue$','getPdbxStructMsymGen$','getPdbxStructNcsVirusGen$','getPdbxStructOperList$','getPdbxStructOperListDepositorInfo$','getPdbxStructPackGen$','getPdbxStructRefSeqDeletion$','getPdbxStructRefSeqDepositorInfo$','getPdbxStructRefSeqDifDepositorInfo$','getPdbxStructRefSeqFeature$','getPdbxStructRefSeqFeatureProp$','getPdbxStructRefSeqInsertion$','getPdbxStructSheetHbond$','getPdbxStructSpecialSymmetry$','getPdbxSugarPhosphateGeometry$','getPdbxSummaryFlags$','getPdbxSupportingExpDataSet$','getPdbxTableinfo$','getPdbxTrnaInfo$','getPdbxUnobsOrZeroOccAtoms$','getPdbxUnobsOrZeroOccResidues$','getPdbxUnpair$','getPdbxValAngle$','getPdbxValBond$','getPdbxValChiral$','getPdbxValContact$','getPdbxValSymContact$','getPdbxValidateChiral$','getPdbxValidateCloseContact$','getPdbxValidateMainChainPlane$','getPdbxValidatePeptideOmega$','getPdbxValidatePlanes$','getPdbxValidatePlanesAtom$','getPdbxValidatePolymerLinkage$','getPdbxValidateRmsdAngle$','getPdbxValidateRmsdBond$','getPdbxValidateSymmContact$','getPdbxValidateTorsion$','getPdbxVersion$','getPdbxViewCategory$','getPdbxViewCategoryGroup$','getPdbxViewItem$','getPdbxVirtualAngle$','getPdbxVirtualBond$','getPdbxVirtualTorsion$','getPdbxXplorFile$','getPhasing$','getPhasingAveraging$','getPhasingIsomorphous$','getPhasingMAD$','getPhasingMADClust$','getPhasingMADExpt$','getPhasingMADRatio$','getPhasingMADSet$','getPhasingMIR$','getPhasingMIRDer$','getPhasingMIRDerRefln$','getPhasingMIRDerShell$','getPhasingMIRDerSite$','getPhasingMIRShell$','getPhasingSet$','getPhasingSetRefln$','getPubl$','getPublAuthor$','getPublBody$','getPublManuscriptIncl$','getRefine$','getRefineAnalyze$','getRefineBIso$','getRefineFunctMinimized$','getRefineHist$','getRefineLsClass$','getRefineLsRestr$','getRefineLsRestrNcs$','getRefineLsRestrType$','getRefineLsShell$','getRefineOccupancy$','getRefln$','getReflnSysAbs$','getReflns$','getReflnsClass$','getReflnsScale$','getReflnsShell$','getSaveFrames$','getSoftware$','getSpaceGroup$','getSpaceGroupSymop$','getStruct$','getStructAsym$','getStructBiol$','getStructBiolGen$','getStructBiolKeywords$','getStructBiolView$','getStructConf$','getStructConfType$','getStructConn$','getStructConnType$','getStructKeywords$','getStructMonDetails$','getStructMonNucl$','getStructMonProt$','getStructMonProtCis$','getStructNcsDom$','getStructNcsDomLim$','getStructNcsEns$','getStructNcsEnsGen$','getStructNcsOper$','getStructRef$','getStructRefSeq$','getStructRefSeqDif$','getStructSheet$','getStructSheetHbond$','getStructSheetOrder$','getStructSheetRange$','getStructSheetTopology$','getStructSite$','getStructSiteGen$','getStructSiteKeywords$','getStructSiteView$','getSymmetry$','getSymmetryEquiv$','getValenceParam$','getValenceRef$','saveFrames$']).getSimpleName$() + " {" );
output.add$CharSequence("    public " + className + "(Map<String, Category> categories, String header) {" );
output.add$CharSequence("        super(categories, header, new ArrayList<>());");
output.add$CharSequence("    }");
output.add$CharSequence("");
output.add$CharSequence(getters.toString() + "}");
output.add$CharSequence("");
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(path.resolve$S("BlockBuilder.java"), builder.toString().getBytes$(), []);
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(path.resolve$S("CategoryBuilder.java"), categoryBuilder.toString().getBytes$(), []);
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(path.resolve$S(className + ".java"), output.toString().getBytes$(), []);
}, p$1);

Clazz.newMeth(C$, 'writeCategory$S$S$org_rcsb_cif_generator_Table$java_nio_file_Path$S$S$java_util_StringJoiner', function (categoryDescription, className, content, path, categoryName, categoryClassName, categoryBuilder) {
if (!$I$(8).exists$java_nio_file_Path$java_nio_file_LinkOptionA(path, [])) {
$I$(8).createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(path, []);
}var generatedPath=path.resolve$S("generated");
if (!$I$(8).exists$java_nio_file_Path$java_nio_file_LinkOptionA(generatedPath, [])) {
$I$(8).createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(generatedPath, []);
}C$.CLASS_MAP_LOOKUP.add$CharSequence(categoryName + " " + "org.rcsb.cif.model.generated" + "." + className );
var output=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
output.add$CharSequence("package org.rcsb.cif.model.generated;");
output.add$CharSequence("");
output.add$CharSequence("import org.rcsb.cif.model.*;");
output.add$CharSequence("");
output.add$CharSequence("import javax.annotation.Generated;");
output.add$CharSequence("import java.util.Map;");
output.add$CharSequence("");
output.add$CharSequence("/**");
categoryDescription=$I$(5).compile$S("\n").splitAsStream$CharSequence(categoryDescription).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda3*/(P$.SchemaGenerator$lambda3$||(P$.SchemaGenerator$lambda3$=(((P$.SchemaGenerator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return (" * " + s);});
})()
), Clazz.new_(P$.SchemaGenerator$lambda3.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).joining$CharSequence("\n"));
output.add$CharSequence(categoryDescription);
output.add$CharSequence(" */");
output.add$CharSequence("@Generated(\"org.rcsb.cif.generator.SchemaGenerator\")");
output.add$CharSequence("public class " + className + " extends " + Clazz.getClass($I$(10)).getSimpleName$() + " {" );
var getters=Clazz.new_($I$(2,1).c$$CharSequence,["\n"]);
categoryBuilder.add$CharSequence("");
categoryBuilder.add$CharSequence("    public static class " + categoryClassName + "Builder extends CategoryBuilder {" );
categoryBuilder.add$CharSequence("        private static final String CATEGORY_NAME = \"" + categoryName + "\";" );
categoryBuilder.add$CharSequence("");
categoryBuilder.add$CharSequence("        public " + categoryClassName + "Builder(BlockBuilder parent) {" );
categoryBuilder.add$CharSequence("            super(CATEGORY_NAME, parent);");
categoryBuilder.add$CharSequence("        }");
for (var entry, $entry = content.getColumns$().entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var columnName=entry.getKey$();
var column=entry.getValue$();
var columnClassName=C$.toClassName$S(columnName);
var baseClassName=p$1.getBaseClass$S.apply(this, [column.getType$()]);
getters.add$CharSequence("    /**");
var description=$I$(5).compile$S("\n").splitAsStream$CharSequence(column.getDescription$()).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda4*/(P$.SchemaGenerator$lambda4$||(P$.SchemaGenerator$lambda4$=(((P$.SchemaGenerator$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return ("     * " + s);});
})()
), Clazz.new_(P$.SchemaGenerator$lambda4.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).joining$CharSequence("\n"));
getters.add$CharSequence(description);
getters.add$CharSequence("     * @return " + baseClassName);
getters.add$CharSequence("     */");
getters.add$CharSequence("    public " + baseClassName + " get" + columnClassName + "() {" );
getters.add$CharSequence("        return (" + baseClassName + ") (isText ? textFields.computeIfAbsent(\"" + columnName + "\", " + baseClassName + "::new) :" );
getters.add$CharSequence("                getBinaryColumn(\"" + columnName + "\"));" );
getters.add$CharSequence("    }");
getters.add$CharSequence("");
C$.CLASS_MAP_LOOKUP.add$CharSequence(categoryName + "." + columnName + " " + baseClassName );
categoryBuilder.add$CharSequence("");
categoryBuilder.add$CharSequence("        public " + baseClassName + "Builder<" + categoryClassName + "Builder> enter" + columnClassName + "() {" );
categoryBuilder.add$CharSequence("            return new " + p$1.getBaseClass$S.apply(this, [column.getType$()]) + "Builder<>(CATEGORY_NAME, \"" + columnName + "\", this);" );
categoryBuilder.add$CharSequence("        }");
}
output.add$CharSequence("    public " + className + "(String name, Map<String, Column> columns) {" );
output.add$CharSequence("        super(name, columns);");
output.add$CharSequence("    }");
output.add$CharSequence("");
output.add$CharSequence("    public " + className + "(String name, int rowCount, Object[] encodedColumns) {" );
output.add$CharSequence("        super(name, rowCount, encodedColumns);");
output.add$CharSequence("    }");
output.add$CharSequence("");
output.add$CharSequence("    public " + className + "(String name) {" );
output.add$CharSequence("        super(name);");
output.add$CharSequence("    }");
output.add$CharSequence("");
output.add$CharSequence(getters.toString() + "}");
output.add$CharSequence("");
categoryBuilder.add$CharSequence("    }");
$I$(8).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(path.resolve$S("generated").resolve$S(className + ".java"), output.toString().getBytes$(), []);
}, p$1);

Clazz.newMeth(C$, 'getBaseClass$S', function (type) {
var clazz;
switch (type) {
case "coord":
clazz=Clazz.getClass($I$(11));
break;
case "enum":
clazz=Clazz.getClass($I$(12));
break;
case "float":
clazz=Clazz.getClass($I$(11));
break;
case "int":
clazz=Clazz.getClass($I$(13));
break;
case "list":
clazz=Clazz.getClass($I$(12));
break;
case "matrix":
clazz=Clazz.getClass($I$(11));
break;
case "str":
clazz=Clazz.getClass($I$(12));
break;
case "vector":
clazz=Clazz.getClass($I$(11));
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown type " + type]);
}
return clazz.getSimpleName$();
}, p$1);

Clazz.newMeth(C$, 'c$$SA', function (resource) {
;C$.$init$.apply(this);
this.schema=Clazz.new_($I$(14,1));
this.categories=Clazz.new_($I$(14,1));
this.links=Clazz.new_($I$(14,1));
for (var res, $res = 0, $$res = resource; $res<$$res.length&&((res=($$res[$res])),1);$res++) {
System.out.println$S(res);
var cifFile=$I$(15).readFromInputStream$java_io_InputStream($I$(16).currentThread$().getContextClassLoader$().getResourceAsStream$S(res));
p$1.getCategoryMetadata$org_rcsb_cif_api_CifFile.apply(this, [cifFile]);
p$1.buildListOfLinksBetweenCategories$org_rcsb_cif_api_CifFile.apply(this, [cifFile]);
}
p$1.getFieldData.apply(this, []);
p$1.writeClasses.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getFieldData', function () {
this.categories.forEach$java_util_function_BiConsumer(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda5*/(P$.SchemaGenerator$lambda5$||(P$.SchemaGenerator$lambda5$=(((P$.SchemaGenerator$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (fullName, saveFrame) {
var header=saveFrame.getBlockHeader$();
var categoryName=header.substring$I$I(1, header.contains$CharSequence(".") ? header.indexOf$S(".") : header.length$());
var itemName=header.substring$I(header.contains$CharSequence(".") ? header.indexOf$S(".") + 1 : 1);
var fields=this.b$['org.rcsb.cif.generator.SchemaGenerator'].schema.get$O(categoryName).getColumns$();
var description=p$1.getDescription$org_rcsb_cif_api_CifBlock.apply(this.b$['org.rcsb.cif.generator.SchemaGenerator'], [saveFrame]);
var subCategory=p$1.getSubCategory$org_rcsb_cif_api_CifBlock.apply(this.b$['org.rcsb.cif.generator.SchemaGenerator'], [saveFrame]);
if ("cartesian_coordinate".equals$O(subCategory) || "fractional_coordinate".equals$O(subCategory) ) {
fields.put$TK$TV(itemName, Clazz.new_($I$(17,1).c$$S,[description]));
} else if ($I$(18).FORCE_INT_FIELDS.contains$O(header)) {
fields.put$TK$TV(itemName, Clazz.new_($I$(19,1).c$$S,[description]));
} else if ("matrix".equals$O(subCategory)) {
fields.put$TK$TV(itemName, Clazz.new_($I$(20,1).c$$S,[description]));
} else if ("vector".equals$O(subCategory)) {
fields.put$TK$TV(itemName, Clazz.new_($I$(21,1).c$$S,[description]));
} else {
if (itemName.matches$S("\\[[1-3]]\\[[1-3]]")) {
fields.put$TK$TV(itemName, Clazz.new_($I$(20,1).c$$S,[description]));
} else if (itemName.matches$S("\\[[1-3]]")) {
fields.put$TK$TV(itemName, Clazz.new_($I$(21,1).c$$S,[description]));
} else {
var code=p$1.getCode$org_rcsb_cif_api_CifBlock.apply(this.b$['org.rcsb.cif.generator.SchemaGenerator'], [saveFrame]);
if (code.size$() > 0) {
var fieldType=p$1.getFieldType$S$S$java_util_List.apply(this.b$['org.rcsb.cif.generator.SchemaGenerator'], [code.get$I(0), description, code.subList$I$I(1, code.size$())]);
fields.put$TK$TV(itemName, fieldType);
}}}});
})()
), Clazz.new_(P$.SchemaGenerator$lambda5.$init$, [this, null]))))));
}, p$1);

Clazz.newMeth(C$, 'getFieldType$S$S$java_util_List', function (type, description, values) {
switch (type) {
case "code":
case "ucode":
case "line":
case "uline":
case "text":
case "char":
case "uchar3":
case "uchar1":
case "boolean":
return values.size$() > 0 ? Clazz.new_($I$(22,1).c$$java_util_List$S$S,[values, "str", description]) : Clazz.new_($I$(23,1).c$$S,[description]);
case "aliasname":
case "name":
case "idname":
case "any":
case "atcode":
case "fax":
case "phone":
case "email":
case "code30":
case "seq-one-letter-code":
case "author":
case "orcid_id":
case "sequence_dep":
case "pdb_id":
case "emd_id":
case "yyyy-mm-dd":
case "yyyy-mm-dd:hh:mm":
case "yyyy-mm-dd:hh:mm-flex":
case "int-range":
case "float-range":
case "binary":
case "operation_expression":
case "point_symmetry":
case "4x3_matrix":
case "3x4_matrices":
case "point_group":
case "point_group_helical":
case "symmetry_operation":
case "date_dep":
case "url":
case "symop":
return Clazz.new_($I$(23,1).c$$S,[description]);
case "int":
case "non_negative_int":
case "positive_int":
return values.size$() > 0 ? Clazz.new_($I$(22,1).c$$java_util_List$S$S,[values, "int", description]) : Clazz.new_($I$(19,1).c$$S,[description]);
case "float":
return Clazz.new_($I$(24,1).c$$S,[description]);
case "ec-type":
case "ucode-alphanum-csv":
case "id_list":
return Clazz.new_($I$(25,1).c$$S$S$S,["str", ",", description]);
default:
return Clazz.new_($I$(23,1).c$$S,[description]);
}
}, p$1);

Clazz.newMeth(C$, 'getCode$org_rcsb_cif_api_CifBlock', function (saveFrame) {
var code=p$1.getField$S$S$org_rcsb_cif_api_CifBlock.apply(this, ["item_type", "code", saveFrame]);
if (code.isDefined$() && code.getRowCount$() > 0 ) {
return $I$(3).concat$java_util_stream_Stream$java_util_stream_Stream($I$(3).of$TT(code.getStringData$I(0)), p$1.getEnums$org_rcsb_cif_api_CifBlock.apply(this, [saveFrame])).collect$java_util_stream_Collector($I$(4).toList$());
} else {
return $I$(26).emptyList$();
}}, p$1);

Clazz.newMeth(C$, 'getEnums$org_rcsb_cif_api_CifBlock', function (saveFrame) {
var value=p$1.getField$S$S$org_rcsb_cif_api_CifBlock.apply(this, ["item_enumeration", "value", saveFrame]);
if (value != null ) {
return $I$(27).range$I$I(0, value.getRowCount$()).mapToObj$java_util_function_IntFunction((function($$){((P$.SchemaGenerator$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.model.Column*/$$.getStringData$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.SchemaGenerator$lambda6.$init$, [this, null])})(value));
} else {
return $I$(3).empty$();
}}, p$1);

Clazz.newMeth(C$, 'getSubCategory$org_rcsb_cif_api_CifBlock', function (saveFrame) {
try {
var value=p$1.getField$S$S$org_rcsb_cif_api_CifBlock.apply(this, ["item_sub_category", "id", saveFrame]);
return value.getStringData$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
return "";
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getDescription$org_rcsb_cif_api_CifBlock', function (saveFrame) {
var value=p$1.getField$S$S$org_rcsb_cif_api_CifBlock.apply(this, ["item_description", "description", saveFrame]);
var escapedDescription=p$1.escape$S.apply(this, [value.getStringData$I(0)]);
return $I$(5).compile$S("\n").splitAsStream$CharSequence(escapedDescription).map$java_util_function_Function((function($$){((P$.SchemaGenerator$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName java.lang.String*/t.trim$.apply(t,[])});
})()
)); return Clazz.new_(P$.SchemaGenerator$lambda7.$init$, [this, null])})(String)).collect$java_util_stream_Collector($I$(4).joining$CharSequence("\n")).replaceAll$S$S("(\\[[1-3]])+ element", "elements").replaceAll$S$S("(\\[[1-3]])+", "");
}, p$1);

Clazz.newMeth(C$, 'getField$S$S$org_rcsb_cif_api_CifBlock', function (category, field, saveFrame) {
var cat=saveFrame.getCategory$S(category);
if (cat.isDefined$()) {
return cat.getColumn$S(field);
} else {
var linkName=this.links.get$O(saveFrame.getBlockHeader$());
var block=this.categories.get$O(linkName);
if (block != null ) {
return p$1.getField$S$S$org_rcsb_cif_api_CifBlock.apply(this, [category, field, block]);
} else {
return null;
}}}, p$1);

Clazz.newMeth(C$, 'buildListOfLinksBetweenCategories$org_rcsb_cif_api_CifFile', function (cifFile) {
cifFile.getBlocks$().get$I(0).getSaveFrames$().stream$().filter$java_util_function_Predicate(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda8*/(P$.SchemaGenerator$lambda8$||(P$.SchemaGenerator$lambda8$=(((P$.SchemaGenerator$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (saveFrame) { return (saveFrame.getBlockHeader$().startsWith$S("_"));});
})()
), Clazz.new_(P$.SchemaGenerator$lambda8.$init$, [this, null])))))).forEach$java_util_function_Consumer(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda9*/(P$.SchemaGenerator$lambda9$||(P$.SchemaGenerator$lambda9$=(((P$.SchemaGenerator$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (saveFrame) {
this.b$['org.rcsb.cif.generator.SchemaGenerator'].categories.put$TK$TV(saveFrame.getBlockHeader$(), saveFrame);
var item_linked=saveFrame.getCategory$S("item_linked");
if (item_linked == null ) {
return;
}var child_name=item_linked.getColumn$S("child_name");
var parent_name=item_linked.getColumn$S("parent_name");
for (var i=0; i < item_linked.getRowCount$(); i++) {
var childName=child_name.getStringData$I(i);
var parentName=parent_name.getStringData$I(i);
this.b$['org.rcsb.cif.generator.SchemaGenerator'].links.put$TK$TV(childName, parentName);
}
});
})()
), Clazz.new_(P$.SchemaGenerator$lambda9.$init$, [this, null]))))));
}, p$1);

Clazz.newMeth(C$, 'getCategoryMetadata$org_rcsb_cif_api_CifFile', function (cifFile) {
cifFile.getBlocks$().get$I(0).getSaveFrames$().stream$().filter$java_util_function_Predicate(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda10*/(P$.SchemaGenerator$lambda10$||(P$.SchemaGenerator$lambda10$=(((P$.SchemaGenerator$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (saveFrame) { return (!saveFrame.getBlockHeader$().startsWith$S("_"));});
})()
), Clazz.new_(P$.SchemaGenerator$lambda10.$init$, [this, null])))))).forEach$java_util_function_Consumer(/*addLambdaReuse org.rcsb.cif.generator.SchemaGenerator$lambda12*/(P$.SchemaGenerator$lambda12$||(P$.SchemaGenerator$lambda12$=(((P$.SchemaGenerator$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (saveFrame) {
var categoryKeyNames=Clazz.new_($I$(28,1));
var cifColumn=saveFrame.getCategory$S("category_key").getColumn$S("name");
for (var i=0; i < cifColumn.getRowCount$(); i++) {
categoryKeyNames.add$TE(cifColumn.getStringData$I(i));
}
var rawDescription=saveFrame.getCategory$S("category").getColumn$S("description").getStringData$I(0);
var escapedDescription=p$1.escape$S.apply(this.b$['org.rcsb.cif.generator.SchemaGenerator'], [rawDescription]);
var description=$I$(5).compile$S("\n").splitAsStream$CharSequence(escapedDescription).map$java_util_function_Function((function($$){((P$.SchemaGenerator$lambda11$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "SchemaGenerator$lambda11$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName java.lang.String*/t.trim$.apply(t,[])});
})()
)); return Clazz.new_(P$.SchemaGenerator$lambda11$lambda12.$init$, [this, null])})(String)).collect$java_util_stream_Collector($I$(4).joining$CharSequence("\n"));
this.b$['org.rcsb.cif.generator.SchemaGenerator'].schema.put$TK$TV(saveFrame.getBlockHeader$(), Clazz.new_($I$(29,1).c$$S$java_util_Set$java_util_Map,[description, categoryKeyNames, Clazz.new_($I$(14,1))]));
});
})()
), Clazz.new_(P$.SchemaGenerator$lambda12.$init$, [this, null]))))));
}, p$1);

Clazz.newMeth(C$, 'escape$S', function (description) {
return description.replace$CharSequence$CharSequence("&", "&amp;").replace$CharSequence$CharSequence(">", "&gt;").replace$CharSequence$CharSequence("<", "&lt;");
}, p$1);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:28 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
