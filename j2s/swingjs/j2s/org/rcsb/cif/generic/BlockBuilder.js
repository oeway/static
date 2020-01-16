(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'org.rcsb.cif.api.BaseBlock','org.rcsb.cif.generic.CategoryBuilder','org.rcsb.cif.model.ModelFactory',['org.rcsb.cif.generic.CategoryBuilder','.AtomSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSiteAnisotropBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSitesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSitesAltBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSitesAltEnsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSitesAltGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomSitesFootnoteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AtomTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AuditAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AuditConformBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AuditContactAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CellMeasurementBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CellMeasurementReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompChirBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompChirAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompPlaneBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompPlaneAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompTorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemCompTorValueBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkChirBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkChirAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkPlaneBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkPlaneAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkTorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemLinkTorValueBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemicalBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemicalConnAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemicalConnBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ChemicalFormulaBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CitationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CitationAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.CitationEditorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ComputingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabaseBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Database2Builder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBCaveatBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBMatrixBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBRemarkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBRevBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBRevRecordBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DatabasePDBTvectBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnAttenuatorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnDetectorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnMeasurementBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnOrientMatrixBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnOrientReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnRadiationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnRadiationWavelengthBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnReflnsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnScaleGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnSourceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnStandardReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnStandardsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityKeywordsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityNameComBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityNameSysBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityPolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntityPolySeqBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntryLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ExptlBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ExptlCrystalBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ExptlCrystalFaceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ExptlCrystalGrowBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ExptlCrystalGrowCompBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomContactBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomHbondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.GeomTorsionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.JournalBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.JournalIndexBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingAveragingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingIsomorphousBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMADBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMADClustBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMADExptBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMADRatioBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMADSetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRDerBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRDerReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRDerShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRDerSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingMIRShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingSetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PhasingSetReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PublBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PublAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PublBodyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PublManuscriptInclBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineAnalyzeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineBIsoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineFunctMinimizedBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineHistBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineLsRestrBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineLsRestrNcsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineLsRestrTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineLsShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineOccupancyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnSysAbsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnsScaleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnsShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.SoftwareBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructAsymBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructBiolBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructBiolGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructBiolKeywordsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructBiolViewBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructConfBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructConfTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructConnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructConnTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructKeywordsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructMonDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructMonNuclBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructMonProtBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructMonProtCisBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructNcsDomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructNcsDomLimBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructNcsEnsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructNcsEnsGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructNcsOperBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructRefBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructRefSeqBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructRefSeqDifBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSheetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSheetHbondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSheetOrderBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSheetRangeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSheetTopologyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSiteGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSiteKeywordsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.StructSiteViewBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.SymmetryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.SymmetryEquivBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.AuditLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.DiffrnReflnsClassBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.RefineLsClassBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ReflnsClassBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.SpaceGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.SpaceGroupSymopBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ValenceParamBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.ValenceRefBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxVersionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseMessageBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabasePDBObsSprBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseProcBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseRemarkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseStatusBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityNameBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPrereleaseSeqBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPolySeqSchemeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNonpolySchemeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructSheetHbondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxXplorFileBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineAuxFileBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseRelatedBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxExptlCrystalGrowCompBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxExptlCrystalGrowSolBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxExptlCrystalCryoTreatmentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineTlsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineTlsGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxContactAuthorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSGProjectBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAtomSiteAnisoTlsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSampleDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrExptlSampleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrExptlSampleConditionsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSpectrometerBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrExptlBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSoftwareBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrConstraintsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrEnsembleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrEnsembleRmsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrRepresentativeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrRefineBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrForceConstantsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.NdbStructConfNaBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.NdbStructFeatureNaBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.NdbStructNaBasePairBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.NdbStructNaBasePairStepBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.NdbOriginalNdbCoordinatesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityNonpolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingDmBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingDmShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingMADShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingMADSetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingMADSetShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingMADSetSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPhasingMRBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineComponentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityProdProtocolBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenProdOtherBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenProdOtherParameterBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenProdPcrBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenProdDigestBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenCloneBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenCloneLigationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenCloneRecombinationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenExpressBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenExpressTimepointBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenLysisBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenRefoldBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenProteolysisBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenChromBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenFractBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenPureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenCharacterBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConstructBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConstructFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRobotSystemBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxBufferBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxBufferComponentsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDomainBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDomainRangeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSequenceRangeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFeatureEntryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFeatureDomainBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFeatureSequenceRangeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFeatureAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFeatureMonomerBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxExptlPdBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReflnsTwinBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReRefinementBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyPropBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqFeaturePropBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructChemCompDiagnosticsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxCoordinateModelBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructChemCompFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDiffrnReflnsShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxBondDistanceLimitsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSolnScatterBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSolnScatterModelBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompDescriptorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompIdentifierBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompImportBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompAtomEditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompBondEditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompAuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateCloseContactBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateSymmContactBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateRmsdBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateRmsdAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateTorsionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidatePeptideOmegaBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateChiralBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidatePlanesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidatePlanesAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidateMainChainPlaneBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructConnAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxUnobsOrZeroOccResiduesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxUnobsOrZeroOccAtomsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntryDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructModResidueBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqInsertionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqDeletionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRemediationAtomSiteMappingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValidatePolymerLinkageBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxHelicalSymmetryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPointSymmetryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructEntityInstBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructOperListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAsymGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructMsymGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructLegacyOperListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompAtomFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeFamilyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityNonpolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityPolyLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityPolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntityPolySeqBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntitySequenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntitySrcNatBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeSynonymsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceEntitySubcomponentsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeAnnotationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeFeaturesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceMoleculeRelatedStructuresBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructGroupListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructGroupComponentsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructGroupComponentRangeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPrdAuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFamilyPrdAuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMoleculeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMoleculeFeaturesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxFamilyGroupIndexBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDistantSolventAtomsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructSpecialSymmetryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferencePublicationListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrAssignedChemShiftListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrChemShiftExperimentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrChemShiftRefBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrChemShiftReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrChemShiftSoftwareBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrConstraintFileBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSoftwareTaskBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSpectralDimBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSpectralPeakListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSpectralPeakSoftwareBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrSystematicChemShiftOffsetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrUploadBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditSupportBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompSubcomponentStructConnBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompSubcomponentEntityListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntitySrcNatBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EntitySrcGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcSynBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityPolyCompLinkListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxLinkedEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxLinkedEntityInstanceListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxLinkedEntityListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxLinkedEntityLinkListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityDescriptorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceLinkedEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceLinkedEntityCompListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceLinkedEntityCompLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxReferenceLinkedEntityLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRelatedExpDataSetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabaseStatusHistoryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEntityAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmVirusEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSamplePreparationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSampleSupportBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmBufferBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmVitrificationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmImagingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDetectorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmImageScansBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em2dProjectionSelectionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em3dReconstructionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em3dFittingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em3dFittingListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmHelicalEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmExperimentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSingleParticleEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmAdminBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmAuthorListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDbReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDbReferenceAuxiliaryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDepuiBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmObsoleteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSupersedeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEntityAssemblyMolwtBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEntityAssemblyNaturalsourceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEntityAssemblyRecombinantBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmVirusNaturalHostBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmVirusShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSpecimenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEmbeddingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmFiducialMarkersBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmFocusedIonBeamBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmGridPretreatmentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmUltramicrotomyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmHighPressureFreezingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmShadowingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmTomographySpecimenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmCrystalFormationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmStainingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSupportFilmBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmBufferComponentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDiffractionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDiffractionShellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDiffractionStatsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmTomographyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmImageRecordingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmImagingOpticsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmFinalClassificationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmStartModelBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmSoftwareBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmEulerAngleAssignmentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmCtfCorrectionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmVolumeSelectionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em3dCrystalEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Em2dCrystalEntityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmImageProcessingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmParticleSelectionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmMapBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmFscCurveBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmInterpretFigureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmLayerLinesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmStructureFactorsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmMapDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmMaskDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmFigureDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmLayerLinesDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.EmStructureFactorsDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSeqMapDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructRefSeqDifDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyPropDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyGenDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructOperListDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPointSymmetryDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxHelicalSymmetryDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyAuthEvidenceDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSolventAtomSiteMappingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMoleculeFeaturesDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompInstanceDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiStatusFlagsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiUploadBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiValidationStatusFlagsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompUploadDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiEntityStatusFlagsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiEntityFeaturesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepositionMessageInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepositionMessageFileReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepuiEntryDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDataProcessingStatusBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityInstanceFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntitySrcGenDepositorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelDescriptorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelAuditBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompModelReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxViewCategoryGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxViewCategoryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxViewItemBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxCoordBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConnectBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConnectTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConnectModificationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxConnectAtomBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabasePDBMasterBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDatabasePdbOmitBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDbrefBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDrugInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxInhibitorInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxIonInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxHybridBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNaStrandInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNonstandardListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPdbCompndBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPdbSourceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxProteinInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSolventInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSourceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructBiolFuncBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructPackGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxTrnaInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxUnpairBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRefineLsRestrNcsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructNcsVirusGenBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSequenceAnnotationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPostProcessDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxPostProcessStatusBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMissingResidueListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDataProcessingCellBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDataProcessingReflnsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDataProcessingDetectorBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompNonstandardBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityPolyProteinClassBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityNameTaxonomyTreeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityNameTaxonomyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityNameInstanceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxTableinfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxColumninfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValContactBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValSymContactBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRmchOutlierBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMissingAtomPolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxMissingAtomNonpolyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxValChiralBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAtlasBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSummaryFlagsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityFuncBindModeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityFuncEnzymeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityFuncRegulatoryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityFuncStructuralBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityFuncOtherBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityPolyDomainBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNaStructKeywdsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityPolyNaTypeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityPolyNaNonstandardBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxVirtualAngleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxVirtualBondBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxVirtualTorsionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSequencePatternBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStereochemistryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRmsDevsCovalentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxRmsDevsCovByMonomerBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSugarPhosphateGeometryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxNmrComputingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditConformExtensionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccMapmanBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccRsccMapmanBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccRsccMapmanOverallBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccDensityBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccGeometryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccDensityCorrBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDccMapBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepositGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxDepositGroupIndexBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyAuthEvidenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxStructAssemblyAuthClassificationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxCrystalAlignmentBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditRevisionHistoryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditRevisionGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditRevisionCategoryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditRevisionDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxAuditRevisionItemBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSupportingExpDataSetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSerialCrystallographyMeasurementBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryInjectionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryFixedTargetBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxSerialCrystallographyDataReductionBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompSynonymsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompRelatedBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxChemCompAtomRelatedBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityBranchListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityBranchLinkBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxEntityBranchBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.PdbxBranchSchemeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStartingModelDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStartingComparativeModelsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStartingComputationalModelsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStartingModelSeqDifBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmModelRepresentationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStructAssemblyBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStructAssemblyDetailsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStructAssemblyClassListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStructAssemblyClassBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmModelingProtocolBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmMultiStateModelingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmOrderedEnsembleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmModelingPostProcessBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmEnsembleInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmModelListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmModelRepresentativeBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmDatasetListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmDatasetGroupBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmRelatedDatasetsBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmDatasetRelatedDbReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmExternalReferenceInfoBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmExternalFilesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmDatasetExternalReferenceBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmLocalizationDensityFilesBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmPredictedContactRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmHydroxylRadicalFpRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmCrossLinkListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmCrossLinkRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmCrossLinkResultBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmCrossLinkResultParametersBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Ihm2demClassAverageRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Ihm2demClassAverageFittingBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.Ihm3demRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmSasRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmStartingModelCoordBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmSphereObjSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGaussianObjSiteBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGaussianObjEnsembleBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmResiduesNotModeledBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmFeatureListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmPseudoSiteFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmPolyAtomFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmPolyResidueFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmNonPolyFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmInterfaceResidueFeatureBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmDerivedDistanceRestraintBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectListBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectCenterBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectTransformationBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectSphereBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectTorusBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectHalfTorusBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectAxisBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectPlaneBuilder'],['org.rcsb.cif.generic.CategoryBuilder','.IhmGeometricObjectDistanceRestraintBuilder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockBuilder", null, ['org.rcsb.cif.model.Builder','.BlockBuilder']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$org_rcsb_cif_generic_CifBuilder', function (blockName, parent) {
;C$.superclazz.c$$S.apply(this, [blockName]);C$.$init$.apply(this);
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Map$S,[this.categories, "unknown"]);
});

Clazz.newMeth(C$, 'enterCategory$S', function (categoryName) {
return Clazz.new_($I$(2,1).c$$S$org_rcsb_cif_generic_BlockBuilder,[categoryName, this]);
});

Clazz.newMeth(C$, 'digest$org_rcsb_cif_generic_CategoryBuilder', function (categoryBuilder) {
var category=$I$(3).createCategoryText$S$java_util_Map(categoryBuilder.getCategoryName$(), categoryBuilder.getColumns$());
this.categories.put$TK$TV(categoryBuilder.getCategoryName$(), category);
return this;
});

Clazz.newMeth(C$, 'leaveBlock$', function () {
if (this.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot leave block with undefined parent file"]);
}return this.parent.digest$org_rcsb_cif_generic_BlockBuilder(this);
});

Clazz.newMeth(C$, 'enterAtomSite$', function () {
return Clazz.new_($I$(4,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSiteAnisotrop$', function () {
return Clazz.new_($I$(5,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSites$', function () {
return Clazz.new_($I$(6,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAlt$', function () {
return Clazz.new_($I$(7,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAltEns$', function () {
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAltGen$', function () {
return Clazz.new_($I$(9,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesFootnote$', function () {
return Clazz.new_($I$(10,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomType$', function () {
return Clazz.new_($I$(11,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAudit$', function () {
return Clazz.new_($I$(12,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditAuthor$', function () {
return Clazz.new_($I$(13,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditConform$', function () {
return Clazz.new_($I$(14,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditContactAuthor$', function () {
return Clazz.new_($I$(15,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCell$', function () {
return Clazz.new_($I$(16,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCellMeasurement$', function () {
return Clazz.new_($I$(17,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCellMeasurementRefln$', function () {
return Clazz.new_($I$(18,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemComp$', function () {
return Clazz.new_($I$(19,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompAngle$', function () {
return Clazz.new_($I$(20,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompAtom$', function () {
return Clazz.new_($I$(21,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompBond$', function () {
return Clazz.new_($I$(22,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompChir$', function () {
return Clazz.new_($I$(23,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompChirAtom$', function () {
return Clazz.new_($I$(24,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompLink$', function () {
return Clazz.new_($I$(25,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompPlane$', function () {
return Clazz.new_($I$(26,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompPlaneAtom$', function () {
return Clazz.new_($I$(27,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompTor$', function () {
return Clazz.new_($I$(28,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompTorValue$', function () {
return Clazz.new_($I$(29,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLink$', function () {
return Clazz.new_($I$(30,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkAngle$', function () {
return Clazz.new_($I$(31,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkBond$', function () {
return Clazz.new_($I$(32,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkChir$', function () {
return Clazz.new_($I$(33,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkChirAtom$', function () {
return Clazz.new_($I$(34,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkPlane$', function () {
return Clazz.new_($I$(35,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkPlaneAtom$', function () {
return Clazz.new_($I$(36,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkTor$', function () {
return Clazz.new_($I$(37,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkTorValue$', function () {
return Clazz.new_($I$(38,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemical$', function () {
return Clazz.new_($I$(39,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalConnAtom$', function () {
return Clazz.new_($I$(40,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalConnBond$', function () {
return Clazz.new_($I$(41,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalFormula$', function () {
return Clazz.new_($I$(42,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitation$', function () {
return Clazz.new_($I$(43,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitationAuthor$', function () {
return Clazz.new_($I$(44,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitationEditor$', function () {
return Clazz.new_($I$(45,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterComputing$', function () {
return Clazz.new_($I$(46,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabase$', function () {
return Clazz.new_($I$(47,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabase2$', function () {
return Clazz.new_($I$(48,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBCaveat$', function () {
return Clazz.new_($I$(49,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBMatrix$', function () {
return Clazz.new_($I$(50,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRemark$', function () {
return Clazz.new_($I$(51,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRev$', function () {
return Clazz.new_($I$(52,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRevRecord$', function () {
return Clazz.new_($I$(53,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBTvect$', function () {
return Clazz.new_($I$(54,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrn$', function () {
return Clazz.new_($I$(55,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnAttenuator$', function () {
return Clazz.new_($I$(56,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnDetector$', function () {
return Clazz.new_($I$(57,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnMeasurement$', function () {
return Clazz.new_($I$(58,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnOrientMatrix$', function () {
return Clazz.new_($I$(59,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnOrientRefln$', function () {
return Clazz.new_($I$(60,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRadiation$', function () {
return Clazz.new_($I$(61,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRadiationWavelength$', function () {
return Clazz.new_($I$(62,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRefln$', function () {
return Clazz.new_($I$(63,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnReflns$', function () {
return Clazz.new_($I$(64,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnScaleGroup$', function () {
return Clazz.new_($I$(65,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnSource$', function () {
return Clazz.new_($I$(66,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnStandardRefln$', function () {
return Clazz.new_($I$(67,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnStandards$', function () {
return Clazz.new_($I$(68,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntity$', function () {
return Clazz.new_($I$(69,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityKeywords$', function () {
return Clazz.new_($I$(70,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityLink$', function () {
return Clazz.new_($I$(71,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityNameCom$', function () {
return Clazz.new_($I$(72,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityNameSys$', function () {
return Clazz.new_($I$(73,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityPoly$', function () {
return Clazz.new_($I$(74,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityPolySeq$', function () {
return Clazz.new_($I$(75,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntry$', function () {
return Clazz.new_($I$(76,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntryLink$', function () {
return Clazz.new_($I$(77,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptl$', function () {
return Clazz.new_($I$(78,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystal$', function () {
return Clazz.new_($I$(79,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalFace$', function () {
return Clazz.new_($I$(80,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalGrow$', function () {
return Clazz.new_($I$(81,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalGrowComp$', function () {
return Clazz.new_($I$(82,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeom$', function () {
return Clazz.new_($I$(83,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomAngle$', function () {
return Clazz.new_($I$(84,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomBond$', function () {
return Clazz.new_($I$(85,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomContact$', function () {
return Clazz.new_($I$(86,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomHbond$', function () {
return Clazz.new_($I$(87,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomTorsion$', function () {
return Clazz.new_($I$(88,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterJournal$', function () {
return Clazz.new_($I$(89,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterJournalIndex$', function () {
return Clazz.new_($I$(90,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasing$', function () {
return Clazz.new_($I$(91,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingAveraging$', function () {
return Clazz.new_($I$(92,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingIsomorphous$', function () {
return Clazz.new_($I$(93,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMAD$', function () {
return Clazz.new_($I$(94,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADClust$', function () {
return Clazz.new_($I$(95,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADExpt$', function () {
return Clazz.new_($I$(96,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADRatio$', function () {
return Clazz.new_($I$(97,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADSet$', function () {
return Clazz.new_($I$(98,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIR$', function () {
return Clazz.new_($I$(99,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDer$', function () {
return Clazz.new_($I$(100,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerRefln$', function () {
return Clazz.new_($I$(101,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerShell$', function () {
return Clazz.new_($I$(102,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerSite$', function () {
return Clazz.new_($I$(103,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRShell$', function () {
return Clazz.new_($I$(104,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingSet$', function () {
return Clazz.new_($I$(105,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingSetRefln$', function () {
return Clazz.new_($I$(106,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPubl$', function () {
return Clazz.new_($I$(107,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublAuthor$', function () {
return Clazz.new_($I$(108,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublBody$', function () {
return Clazz.new_($I$(109,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublManuscriptIncl$', function () {
return Clazz.new_($I$(110,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefine$', function () {
return Clazz.new_($I$(111,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineAnalyze$', function () {
return Clazz.new_($I$(112,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineBIso$', function () {
return Clazz.new_($I$(113,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineFunctMinimized$', function () {
return Clazz.new_($I$(114,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineHist$', function () {
return Clazz.new_($I$(115,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestr$', function () {
return Clazz.new_($I$(116,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestrNcs$', function () {
return Clazz.new_($I$(117,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestrType$', function () {
return Clazz.new_($I$(118,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsShell$', function () {
return Clazz.new_($I$(119,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineOccupancy$', function () {
return Clazz.new_($I$(120,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefln$', function () {
return Clazz.new_($I$(121,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnSysAbs$', function () {
return Clazz.new_($I$(122,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflns$', function () {
return Clazz.new_($I$(123,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsScale$', function () {
return Clazz.new_($I$(124,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsShell$', function () {
return Clazz.new_($I$(125,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSoftware$', function () {
return Clazz.new_($I$(126,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStruct$', function () {
return Clazz.new_($I$(127,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructAsym$', function () {
return Clazz.new_($I$(128,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiol$', function () {
return Clazz.new_($I$(129,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolGen$', function () {
return Clazz.new_($I$(130,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolKeywords$', function () {
return Clazz.new_($I$(131,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolView$', function () {
return Clazz.new_($I$(132,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConf$', function () {
return Clazz.new_($I$(133,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConfType$', function () {
return Clazz.new_($I$(134,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConn$', function () {
return Clazz.new_($I$(135,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConnType$', function () {
return Clazz.new_($I$(136,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructKeywords$', function () {
return Clazz.new_($I$(137,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonDetails$', function () {
return Clazz.new_($I$(138,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonNucl$', function () {
return Clazz.new_($I$(139,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonProt$', function () {
return Clazz.new_($I$(140,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonProtCis$', function () {
return Clazz.new_($I$(141,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsDom$', function () {
return Clazz.new_($I$(142,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsDomLim$', function () {
return Clazz.new_($I$(143,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsEns$', function () {
return Clazz.new_($I$(144,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsEnsGen$', function () {
return Clazz.new_($I$(145,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsOper$', function () {
return Clazz.new_($I$(146,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRef$', function () {
return Clazz.new_($I$(147,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRefSeq$', function () {
return Clazz.new_($I$(148,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRefSeqDif$', function () {
return Clazz.new_($I$(149,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheet$', function () {
return Clazz.new_($I$(150,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetHbond$', function () {
return Clazz.new_($I$(151,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetOrder$', function () {
return Clazz.new_($I$(152,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetRange$', function () {
return Clazz.new_($I$(153,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetTopology$', function () {
return Clazz.new_($I$(154,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSite$', function () {
return Clazz.new_($I$(155,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteGen$', function () {
return Clazz.new_($I$(156,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteKeywords$', function () {
return Clazz.new_($I$(157,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteView$', function () {
return Clazz.new_($I$(158,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSymmetry$', function () {
return Clazz.new_($I$(159,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSymmetryEquiv$', function () {
return Clazz.new_($I$(160,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditLink$', function () {
return Clazz.new_($I$(161,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnReflnsClass$', function () {
return Clazz.new_($I$(162,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsClass$', function () {
return Clazz.new_($I$(163,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsClass$', function () {
return Clazz.new_($I$(164,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSpaceGroup$', function () {
return Clazz.new_($I$(165,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSpaceGroupSymop$', function () {
return Clazz.new_($I$(166,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterValenceParam$', function () {
return Clazz.new_($I$(167,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterValenceRef$', function () {
return Clazz.new_($I$(168,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAudit$', function () {
return Clazz.new_($I$(169,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVersion$', function () {
return Clazz.new_($I$(170,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditAuthor$', function () {
return Clazz.new_($I$(171,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseMessage$', function () {
return Clazz.new_($I$(172,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePDBObsSpr$', function () {
return Clazz.new_($I$(173,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseProc$', function () {
return Clazz.new_($I$(174,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseRemark$', function () {
return Clazz.new_($I$(175,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseStatus$', function () {
return Clazz.new_($I$(176,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityName$', function () {
return Clazz.new_($I$(177,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPrereleaseSeq$', function () {
return Clazz.new_($I$(178,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPolySeqScheme$', function () {
return Clazz.new_($I$(179,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNonpolyScheme$', function () {
return Clazz.new_($I$(180,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefine$', function () {
return Clazz.new_($I$(181,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructSheetHbond$', function () {
return Clazz.new_($I$(182,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxXplorFile$', function () {
return Clazz.new_($I$(183,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineAuxFile$', function () {
return Clazz.new_($I$(184,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseRelated$', function () {
return Clazz.new_($I$(185,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityAssembly$', function () {
return Clazz.new_($I$(186,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalGrowComp$', function () {
return Clazz.new_($I$(187,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalGrowSol$', function () {
return Clazz.new_($I$(188,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalCryoTreatment$', function () {
return Clazz.new_($I$(189,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineTls$', function () {
return Clazz.new_($I$(190,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineTlsGroup$', function () {
return Clazz.new_($I$(191,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxContactAuthor$', function () {
return Clazz.new_($I$(192,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSGProject$', function () {
return Clazz.new_($I$(193,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAtomSiteAnisoTls$', function () {
return Clazz.new_($I$(194,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrDetails$', function () {
return Clazz.new_($I$(195,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSampleDetails$', function () {
return Clazz.new_($I$(196,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptlSample$', function () {
return Clazz.new_($I$(197,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptlSampleConditions$', function () {
return Clazz.new_($I$(198,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectrometer$', function () {
return Clazz.new_($I$(199,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptl$', function () {
return Clazz.new_($I$(200,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSoftware$', function () {
return Clazz.new_($I$(201,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrConstraints$', function () {
return Clazz.new_($I$(202,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrEnsemble$', function () {
return Clazz.new_($I$(203,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrEnsembleRms$', function () {
return Clazz.new_($I$(204,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrRepresentative$', function () {
return Clazz.new_($I$(205,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrRefine$', function () {
return Clazz.new_($I$(206,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrForceConstants$', function () {
return Clazz.new_($I$(207,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructConfNa$', function () {
return Clazz.new_($I$(208,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructFeatureNa$', function () {
return Clazz.new_($I$(209,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructNaBasePair$', function () {
return Clazz.new_($I$(210,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructNaBasePairStep$', function () {
return Clazz.new_($I$(211,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbOriginalNdbCoordinates$', function () {
return Clazz.new_($I$(212,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNonpoly$', function () {
return Clazz.new_($I$(213,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingDm$', function () {
return Clazz.new_($I$(214,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingDmShell$', function () {
return Clazz.new_($I$(215,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADShell$', function () {
return Clazz.new_($I$(216,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSet$', function () {
return Clazz.new_($I$(217,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSetShell$', function () {
return Clazz.new_($I$(218,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSetSite$', function () {
return Clazz.new_($I$(219,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMR$', function () {
return Clazz.new_($I$(220,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineComponent$', function () {
return Clazz.new_($I$(221,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityProdProtocol$', function () {
return Clazz.new_($I$(222,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdOther$', function () {
return Clazz.new_($I$(223,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdOtherParameter$', function () {
return Clazz.new_($I$(224,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdPcr$', function () {
return Clazz.new_($I$(225,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdDigest$', function () {
return Clazz.new_($I$(226,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenClone$', function () {
return Clazz.new_($I$(227,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCloneLigation$', function () {
return Clazz.new_($I$(228,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCloneRecombination$', function () {
return Clazz.new_($I$(229,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenExpress$', function () {
return Clazz.new_($I$(230,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenExpressTimepoint$', function () {
return Clazz.new_($I$(231,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenLysis$', function () {
return Clazz.new_($I$(232,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenRefold$', function () {
return Clazz.new_($I$(233,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProteolysis$', function () {
return Clazz.new_($I$(234,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenChrom$', function () {
return Clazz.new_($I$(235,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenFract$', function () {
return Clazz.new_($I$(236,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenPure$', function () {
return Clazz.new_($I$(237,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCharacter$', function () {
return Clazz.new_($I$(238,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConstruct$', function () {
return Clazz.new_($I$(239,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConstructFeature$', function () {
return Clazz.new_($I$(240,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRobotSystem$', function () {
return Clazz.new_($I$(241,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBuffer$', function () {
return Clazz.new_($I$(242,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBufferComponents$', function () {
return Clazz.new_($I$(243,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDomain$', function () {
return Clazz.new_($I$(244,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDomainRange$', function () {
return Clazz.new_($I$(245,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequenceRange$', function () {
return Clazz.new_($I$(246,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureEntry$', function () {
return Clazz.new_($I$(247,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureDomain$', function () {
return Clazz.new_($I$(248,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureSequenceRange$', function () {
return Clazz.new_($I$(249,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureAssembly$', function () {
return Clazz.new_($I$(250,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureMonomer$', function () {
return Clazz.new_($I$(251,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlPd$', function () {
return Clazz.new_($I$(252,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReflnsTwin$', function () {
return Clazz.new_($I$(253,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructInfo$', function () {
return Clazz.new_($I$(254,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReRefinement$', function () {
return Clazz.new_($I$(255,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyProp$', function () {
return Clazz.new_($I$(256,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqFeature$', function () {
return Clazz.new_($I$(257,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqFeatureProp$', function () {
return Clazz.new_($I$(258,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructChemCompDiagnostics$', function () {
return Clazz.new_($I$(259,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompFeature$', function () {
return Clazz.new_($I$(260,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCoordinateModel$', function () {
return Clazz.new_($I$(261,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructChemCompFeature$', function () {
return Clazz.new_($I$(262,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDiffrnReflnsShell$', function () {
return Clazz.new_($I$(263,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBondDistanceLimits$', function () {
return Clazz.new_($I$(264,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolnScatter$', function () {
return Clazz.new_($I$(265,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolnScatterModel$', function () {
return Clazz.new_($I$(266,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompDescriptor$', function () {
return Clazz.new_($I$(267,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompIdentifier$', function () {
return Clazz.new_($I$(268,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompImport$', function () {
return Clazz.new_($I$(269,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomEdit$', function () {
return Clazz.new_($I$(270,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompBondEdit$', function () {
return Clazz.new_($I$(271,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAudit$', function () {
return Clazz.new_($I$(272,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateCloseContact$', function () {
return Clazz.new_($I$(273,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateSymmContact$', function () {
return Clazz.new_($I$(274,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateRmsdBond$', function () {
return Clazz.new_($I$(275,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateRmsdAngle$', function () {
return Clazz.new_($I$(276,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateTorsion$', function () {
return Clazz.new_($I$(277,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePeptideOmega$', function () {
return Clazz.new_($I$(278,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateChiral$', function () {
return Clazz.new_($I$(279,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePlanes$', function () {
return Clazz.new_($I$(280,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePlanesAtom$', function () {
return Clazz.new_($I$(281,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateMainChainPlane$', function () {
return Clazz.new_($I$(282,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructConnAngle$', function () {
return Clazz.new_($I$(283,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnobsOrZeroOccResidues$', function () {
return Clazz.new_($I$(284,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnobsOrZeroOccAtoms$', function () {
return Clazz.new_($I$(285,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntryDetails$', function () {
return Clazz.new_($I$(286,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructModResidue$', function () {
return Clazz.new_($I$(287,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqInsertion$', function () {
return Clazz.new_($I$(288,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDeletion$', function () {
return Clazz.new_($I$(289,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRemediationAtomSiteMapping$', function () {
return Clazz.new_($I$(290,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePolymerLinkage$', function () {
return Clazz.new_($I$(291,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHelicalSymmetry$', function () {
return Clazz.new_($I$(292,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPointSymmetry$', function () {
return Clazz.new_($I$(293,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructEntityInst$', function () {
return Clazz.new_($I$(294,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructOperList$', function () {
return Clazz.new_($I$(295,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssembly$', function () {
return Clazz.new_($I$(296,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyGen$', function () {
return Clazz.new_($I$(297,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAsymGen$', function () {
return Clazz.new_($I$(298,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructMsymGen$', function () {
return Clazz.new_($I$(299,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructLegacyOperList$', function () {
return Clazz.new_($I$(300,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomFeature$', function () {
return Clazz.new_($I$(301,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeFamily$', function () {
return Clazz.new_($I$(302,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeList$', function () {
return Clazz.new_($I$(303,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMolecule$', function () {
return Clazz.new_($I$(304,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityList$', function () {
return Clazz.new_($I$(305,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityNonpoly$', function () {
return Clazz.new_($I$(306,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityLink$', function () {
return Clazz.new_($I$(307,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPolyLink$', function () {
return Clazz.new_($I$(308,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPoly$', function () {
return Clazz.new_($I$(309,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPolySeq$', function () {
return Clazz.new_($I$(310,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySequence$', function () {
return Clazz.new_($I$(311,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySrcNat$', function () {
return Clazz.new_($I$(312,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeDetails$', function () {
return Clazz.new_($I$(313,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeSynonyms$', function () {
return Clazz.new_($I$(314,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySubcomponents$', function () {
return Clazz.new_($I$(315,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeAnnotation$', function () {
return Clazz.new_($I$(316,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeFeatures$', function () {
return Clazz.new_($I$(317,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeRelatedStructures$', function () {
return Clazz.new_($I$(318,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupList$', function () {
return Clazz.new_($I$(319,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupComponents$', function () {
return Clazz.new_($I$(320,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupComponentRange$', function () {
return Clazz.new_($I$(321,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPrdAudit$', function () {
return Clazz.new_($I$(322,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFamilyPrdAudit$', function () {
return Clazz.new_($I$(323,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMolecule$', function () {
return Clazz.new_($I$(324,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMoleculeFeatures$', function () {
return Clazz.new_($I$(325,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFamilyGroupIndex$', function () {
return Clazz.new_($I$(326,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDistantSolventAtoms$', function () {
return Clazz.new_($I$(327,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructSpecialSymmetry$', function () {
return Clazz.new_($I$(328,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferencePublicationList$', function () {
return Clazz.new_($I$(329,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrAssignedChemShiftList$', function () {
return Clazz.new_($I$(330,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftExperiment$', function () {
return Clazz.new_($I$(331,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftRef$', function () {
return Clazz.new_($I$(332,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftReference$', function () {
return Clazz.new_($I$(333,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftSoftware$', function () {
return Clazz.new_($I$(334,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrConstraintFile$', function () {
return Clazz.new_($I$(335,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSoftwareTask$', function () {
return Clazz.new_($I$(336,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralDim$', function () {
return Clazz.new_($I$(337,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralPeakList$', function () {
return Clazz.new_($I$(338,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralPeakSoftware$', function () {
return Clazz.new_($I$(339,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSystematicChemShiftOffset$', function () {
return Clazz.new_($I$(340,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrUpload$', function () {
return Clazz.new_($I$(341,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditSupport$', function () {
return Clazz.new_($I$(342,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSubcomponentStructConn$', function () {
return Clazz.new_($I$(343,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSubcomponentEntityList$', function () {
return Clazz.new_($I$(344,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntitySrcNat$', function () {
return Clazz.new_($I$(345,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntitySrcGen$', function () {
return Clazz.new_($I$(346,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcSyn$', function () {
return Clazz.new_($I$(347,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyCompLinkList$', function () {
return Clazz.new_($I$(348,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntity$', function () {
return Clazz.new_($I$(349,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityInstanceList$', function () {
return Clazz.new_($I$(350,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityList$', function () {
return Clazz.new_($I$(351,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityLinkList$', function () {
return Clazz.new_($I$(352,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityDescriptor$', function () {
return Clazz.new_($I$(353,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntity$', function () {
return Clazz.new_($I$(354,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityCompList$', function () {
return Clazz.new_($I$(355,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityCompLink$', function () {
return Clazz.new_($I$(356,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityLink$', function () {
return Clazz.new_($I$(357,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRelatedExpDataSet$', function () {
return Clazz.new_($I$(358,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseStatusHistory$', function () {
return Clazz.new_($I$(359,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAssembly$', function () {
return Clazz.new_($I$(360,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssembly$', function () {
return Clazz.new_($I$(361,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusEntity$', function () {
return Clazz.new_($I$(362,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSamplePreparation$', function () {
return Clazz.new_($I$(363,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSampleSupport$', function () {
return Clazz.new_($I$(364,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmBuffer$', function () {
return Clazz.new_($I$(365,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVitrification$', function () {
return Clazz.new_($I$(366,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImaging$', function () {
return Clazz.new_($I$(367,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDetector$', function () {
return Clazz.new_($I$(368,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageScans$', function () {
return Clazz.new_($I$(369,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm2dProjectionSelection$', function () {
return Clazz.new_($I$(370,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dReconstruction$', function () {
return Clazz.new_($I$(371,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dFitting$', function () {
return Clazz.new_($I$(372,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dFittingList$', function () {
return Clazz.new_($I$(373,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmHelicalEntity$', function () {
return Clazz.new_($I$(374,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmExperiment$', function () {
return Clazz.new_($I$(375,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSingleParticleEntity$', function () {
return Clazz.new_($I$(376,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAdmin$', function () {
return Clazz.new_($I$(377,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAuthorList$', function () {
return Clazz.new_($I$(378,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDbReference$', function () {
return Clazz.new_($I$(379,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDbReferenceAuxiliary$', function () {
return Clazz.new_($I$(380,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDepui$', function () {
return Clazz.new_($I$(381,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmObsolete$', function () {
return Clazz.new_($I$(382,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSupersede$', function () {
return Clazz.new_($I$(383,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyMolwt$', function () {
return Clazz.new_($I$(384,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyNaturalsource$', function () {
return Clazz.new_($I$(385,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyRecombinant$', function () {
return Clazz.new_($I$(386,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusNaturalHost$', function () {
return Clazz.new_($I$(387,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusShell$', function () {
return Clazz.new_($I$(388,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSpecimen$', function () {
return Clazz.new_($I$(389,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEmbedding$', function () {
return Clazz.new_($I$(390,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFiducialMarkers$', function () {
return Clazz.new_($I$(391,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFocusedIonBeam$', function () {
return Clazz.new_($I$(392,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmGridPretreatment$', function () {
return Clazz.new_($I$(393,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmUltramicrotomy$', function () {
return Clazz.new_($I$(394,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmHighPressureFreezing$', function () {
return Clazz.new_($I$(395,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmShadowing$', function () {
return Clazz.new_($I$(396,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmTomographySpecimen$', function () {
return Clazz.new_($I$(397,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmCrystalFormation$', function () {
return Clazz.new_($I$(398,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStaining$', function () {
return Clazz.new_($I$(399,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSupportFilm$', function () {
return Clazz.new_($I$(400,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmBufferComponent$', function () {
return Clazz.new_($I$(401,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffraction$', function () {
return Clazz.new_($I$(402,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffractionShell$', function () {
return Clazz.new_($I$(403,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffractionStats$', function () {
return Clazz.new_($I$(404,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmTomography$', function () {
return Clazz.new_($I$(405,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageRecording$', function () {
return Clazz.new_($I$(406,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImagingOptics$', function () {
return Clazz.new_($I$(407,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFinalClassification$', function () {
return Clazz.new_($I$(408,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStartModel$', function () {
return Clazz.new_($I$(409,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSoftware$', function () {
return Clazz.new_($I$(410,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEulerAngleAssignment$', function () {
return Clazz.new_($I$(411,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmCtfCorrection$', function () {
return Clazz.new_($I$(412,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVolumeSelection$', function () {
return Clazz.new_($I$(413,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dCrystalEntity$', function () {
return Clazz.new_($I$(414,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm2dCrystalEntity$', function () {
return Clazz.new_($I$(415,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageProcessing$', function () {
return Clazz.new_($I$(416,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmParticleSelection$', function () {
return Clazz.new_($I$(417,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMap$', function () {
return Clazz.new_($I$(418,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFscCurve$', function () {
return Clazz.new_($I$(419,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmInterpretFigure$', function () {
return Clazz.new_($I$(420,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmLayerLines$', function () {
return Clazz.new_($I$(421,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStructureFactors$', function () {
return Clazz.new_($I$(422,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDepositorInfo$', function () {
return Clazz.new_($I$(423,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMapDepositorInfo$', function () {
return Clazz.new_($I$(424,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMaskDepositorInfo$', function () {
return Clazz.new_($I$(425,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFigureDepositorInfo$', function () {
return Clazz.new_($I$(426,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmLayerLinesDepositorInfo$', function () {
return Clazz.new_($I$(427,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStructureFactorsDepositorInfo$', function () {
return Clazz.new_($I$(428,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSeqMapDepositorInfo$', function () {
return Clazz.new_($I$(429,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompDepositorInfo$', function () {
return Clazz.new_($I$(430,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDepositorInfo$', function () {
return Clazz.new_($I$(431,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDifDepositorInfo$', function () {
return Clazz.new_($I$(432,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyPropDepositorInfo$', function () {
return Clazz.new_($I$(433,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyDepositorInfo$', function () {
return Clazz.new_($I$(434,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyGenDepositorInfo$', function () {
return Clazz.new_($I$(435,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructOperListDepositorInfo$', function () {
return Clazz.new_($I$(436,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPointSymmetryDepositorInfo$', function () {
return Clazz.new_($I$(437,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHelicalSymmetryDepositorInfo$', function () {
return Clazz.new_($I$(438,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthEvidenceDepositorInfo$', function () {
return Clazz.new_($I$(439,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolventAtomSiteMapping$', function () {
return Clazz.new_($I$(440,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMoleculeFeaturesDepositorInfo$', function () {
return Clazz.new_($I$(441,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompInstanceDepositorInfo$', function () {
return Clazz.new_($I$(442,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiStatusFlags$', function () {
return Clazz.new_($I$(443,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiUpload$', function () {
return Clazz.new_($I$(444,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiValidationStatusFlags$', function () {
return Clazz.new_($I$(445,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompUploadDepositorInfo$', function () {
return Clazz.new_($I$(446,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntityStatusFlags$', function () {
return Clazz.new_($I$(447,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntityFeatures$', function () {
return Clazz.new_($I$(448,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositionMessageInfo$', function () {
return Clazz.new_($I$(449,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositionMessageFileReference$', function () {
return Clazz.new_($I$(450,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntryDetails$', function () {
return Clazz.new_($I$(451,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingStatus$', function () {
return Clazz.new_($I$(452,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityInstanceFeature$', function () {
return Clazz.new_($I$(453,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenDepositorInfo$', function () {
return Clazz.new_($I$(454,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModel$', function () {
return Clazz.new_($I$(455,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelAtom$', function () {
return Clazz.new_($I$(456,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelBond$', function () {
return Clazz.new_($I$(457,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelFeature$', function () {
return Clazz.new_($I$(458,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelDescriptor$', function () {
return Clazz.new_($I$(459,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelAudit$', function () {
return Clazz.new_($I$(460,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelReference$', function () {
return Clazz.new_($I$(461,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewCategoryGroup$', function () {
return Clazz.new_($I$(462,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewCategory$', function () {
return Clazz.new_($I$(463,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewItem$', function () {
return Clazz.new_($I$(464,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCoord$', function () {
return Clazz.new_($I$(465,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnect$', function () {
return Clazz.new_($I$(466,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectType$', function () {
return Clazz.new_($I$(467,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectModification$', function () {
return Clazz.new_($I$(468,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectAtom$', function () {
return Clazz.new_($I$(469,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePDBMaster$', function () {
return Clazz.new_($I$(470,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePdbOmit$', function () {
return Clazz.new_($I$(471,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDbref$', function () {
return Clazz.new_($I$(472,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDrugInfo$', function () {
return Clazz.new_($I$(473,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxInhibitorInfo$', function () {
return Clazz.new_($I$(474,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxIonInfo$', function () {
return Clazz.new_($I$(475,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHybrid$', function () {
return Clazz.new_($I$(476,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNaStrandInfo$', function () {
return Clazz.new_($I$(477,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNonstandardList$', function () {
return Clazz.new_($I$(478,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPdbCompnd$', function () {
return Clazz.new_($I$(479,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPdbSource$', function () {
return Clazz.new_($I$(480,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxProteinInfo$', function () {
return Clazz.new_($I$(481,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolventInfo$', function () {
return Clazz.new_($I$(482,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSource$', function () {
return Clazz.new_($I$(483,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructBiolFunc$', function () {
return Clazz.new_($I$(484,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructPackGen$', function () {
return Clazz.new_($I$(485,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxTrnaInfo$', function () {
return Clazz.new_($I$(486,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnpair$', function () {
return Clazz.new_($I$(487,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineLsRestrNcs$', function () {
return Clazz.new_($I$(488,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructNcsVirusGen$', function () {
return Clazz.new_($I$(489,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequenceAnnotation$', function () {
return Clazz.new_($I$(490,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPostProcessDetails$', function () {
return Clazz.new_($I$(491,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPostProcessStatus$', function () {
return Clazz.new_($I$(492,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructLink$', function () {
return Clazz.new_($I$(493,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingResidueList$', function () {
return Clazz.new_($I$(494,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingCell$', function () {
return Clazz.new_($I$(495,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingReflns$', function () {
return Clazz.new_($I$(496,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingDetector$', function () {
return Clazz.new_($I$(497,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompNonstandard$', function () {
return Clazz.new_($I$(498,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyProteinClass$', function () {
return Clazz.new_($I$(499,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameTaxonomyTree$', function () {
return Clazz.new_($I$(500,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameTaxonomy$', function () {
return Clazz.new_($I$(501,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameInstance$', function () {
return Clazz.new_($I$(502,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxTableinfo$', function () {
return Clazz.new_($I$(503,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxColumninfo$', function () {
return Clazz.new_($I$(504,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValAngle$', function () {
return Clazz.new_($I$(505,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValBond$', function () {
return Clazz.new_($I$(506,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValContact$', function () {
return Clazz.new_($I$(507,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValSymContact$', function () {
return Clazz.new_($I$(508,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmchOutlier$', function () {
return Clazz.new_($I$(509,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingAtomPoly$', function () {
return Clazz.new_($I$(510,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingAtomNonpoly$', function () {
return Clazz.new_($I$(511,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValChiral$', function () {
return Clazz.new_($I$(512,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAtlas$', function () {
return Clazz.new_($I$(513,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSummaryFlags$', function () {
return Clazz.new_($I$(514,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncBindMode$', function () {
return Clazz.new_($I$(515,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncEnzyme$', function () {
return Clazz.new_($I$(516,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncRegulatory$', function () {
return Clazz.new_($I$(517,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncStructural$', function () {
return Clazz.new_($I$(518,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncOther$', function () {
return Clazz.new_($I$(519,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyDomain$', function () {
return Clazz.new_($I$(520,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNaStructKeywds$', function () {
return Clazz.new_($I$(521,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyNaType$', function () {
return Clazz.new_($I$(522,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyNaNonstandard$', function () {
return Clazz.new_($I$(523,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualAngle$', function () {
return Clazz.new_($I$(524,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualBond$', function () {
return Clazz.new_($I$(525,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualTorsion$', function () {
return Clazz.new_($I$(526,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequencePattern$', function () {
return Clazz.new_($I$(527,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStereochemistry$', function () {
return Clazz.new_($I$(528,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmsDevsCovalent$', function () {
return Clazz.new_($I$(529,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmsDevsCovByMonomer$', function () {
return Clazz.new_($I$(530,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSugarPhosphateGeometry$', function () {
return Clazz.new_($I$(531,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrComputing$', function () {
return Clazz.new_($I$(532,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditConformExtension$', function () {
return Clazz.new_($I$(533,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccMapman$', function () {
return Clazz.new_($I$(534,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccRsccMapman$', function () {
return Clazz.new_($I$(535,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccRsccMapmanOverall$', function () {
return Clazz.new_($I$(536,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccDensity$', function () {
return Clazz.new_($I$(537,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccGeometry$', function () {
return Clazz.new_($I$(538,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccDensityCorr$', function () {
return Clazz.new_($I$(539,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccMap$', function () {
return Clazz.new_($I$(540,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositGroup$', function () {
return Clazz.new_($I$(541,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositGroupIndex$', function () {
return Clazz.new_($I$(542,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthEvidence$', function () {
return Clazz.new_($I$(543,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthClassification$', function () {
return Clazz.new_($I$(544,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCrystalAlignment$', function () {
return Clazz.new_($I$(545,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionHistory$', function () {
return Clazz.new_($I$(546,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionGroup$', function () {
return Clazz.new_($I$(547,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionCategory$', function () {
return Clazz.new_($I$(548,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionDetails$', function () {
return Clazz.new_($I$(549,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionItem$', function () {
return Clazz.new_($I$(550,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSupportingExpDataSet$', function () {
return Clazz.new_($I$(551,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographyMeasurement$', function () {
return Clazz.new_($I$(552,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDelivery$', function () {
return Clazz.new_($I$(553,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDeliveryInjection$', function () {
return Clazz.new_($I$(554,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDeliveryFixedTarget$', function () {
return Clazz.new_($I$(555,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographyDataReduction$', function () {
return Clazz.new_($I$(556,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSynonyms$', function () {
return Clazz.new_($I$(557,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompRelated$', function () {
return Clazz.new_($I$(558,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomRelated$', function () {
return Clazz.new_($I$(559,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranchList$', function () {
return Clazz.new_($I$(560,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranchLink$', function () {
return Clazz.new_($I$(561,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranch$', function () {
return Clazz.new_($I$(562,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBranchScheme$', function () {
return Clazz.new_($I$(563,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelDetails$', function () {
return Clazz.new_($I$(564,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingComparativeModels$', function () {
return Clazz.new_($I$(565,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingComputationalModels$', function () {
return Clazz.new_($I$(566,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelSeqDif$', function () {
return Clazz.new_($I$(567,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelRepresentation$', function () {
return Clazz.new_($I$(568,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssembly$', function () {
return Clazz.new_($I$(569,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyDetails$', function () {
return Clazz.new_($I$(570,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyClassList$', function () {
return Clazz.new_($I$(571,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyClass$', function () {
return Clazz.new_($I$(572,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelingProtocol$', function () {
return Clazz.new_($I$(573,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmMultiStateModeling$', function () {
return Clazz.new_($I$(574,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmOrderedEnsemble$', function () {
return Clazz.new_($I$(575,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelingPostProcess$', function () {
return Clazz.new_($I$(576,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmEnsembleInfo$', function () {
return Clazz.new_($I$(577,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelList$', function () {
return Clazz.new_($I$(578,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelRepresentative$', function () {
return Clazz.new_($I$(579,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetList$', function () {
return Clazz.new_($I$(580,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetGroup$', function () {
return Clazz.new_($I$(581,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmRelatedDatasets$', function () {
return Clazz.new_($I$(582,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetRelatedDbReference$', function () {
return Clazz.new_($I$(583,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmExternalReferenceInfo$', function () {
return Clazz.new_($I$(584,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmExternalFiles$', function () {
return Clazz.new_($I$(585,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetExternalReference$', function () {
return Clazz.new_($I$(586,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmLocalizationDensityFiles$', function () {
return Clazz.new_($I$(587,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPredictedContactRestraint$', function () {
return Clazz.new_($I$(588,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmHydroxylRadicalFpRestraint$', function () {
return Clazz.new_($I$(589,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkList$', function () {
return Clazz.new_($I$(590,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkRestraint$', function () {
return Clazz.new_($I$(591,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkResult$', function () {
return Clazz.new_($I$(592,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkResultParameters$', function () {
return Clazz.new_($I$(593,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm2demClassAverageRestraint$', function () {
return Clazz.new_($I$(594,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm2demClassAverageFitting$', function () {
return Clazz.new_($I$(595,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm3demRestraint$', function () {
return Clazz.new_($I$(596,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmSasRestraint$', function () {
return Clazz.new_($I$(597,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelCoord$', function () {
return Clazz.new_($I$(598,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmSphereObjSite$', function () {
return Clazz.new_($I$(599,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGaussianObjSite$', function () {
return Clazz.new_($I$(600,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGaussianObjEnsemble$', function () {
return Clazz.new_($I$(601,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmResiduesNotModeled$', function () {
return Clazz.new_($I$(602,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmFeatureList$', function () {
return Clazz.new_($I$(603,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPseudoSiteFeature$', function () {
return Clazz.new_($I$(604,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPolyAtomFeature$', function () {
return Clazz.new_($I$(605,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPolyResidueFeature$', function () {
return Clazz.new_($I$(606,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmNonPolyFeature$', function () {
return Clazz.new_($I$(607,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmInterfaceResidueFeature$', function () {
return Clazz.new_($I$(608,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDerivedDistanceRestraint$', function () {
return Clazz.new_($I$(609,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectList$', function () {
return Clazz.new_($I$(610,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectCenter$', function () {
return Clazz.new_($I$(611,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectTransformation$', function () {
return Clazz.new_($I$(612,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectSphere$', function () {
return Clazz.new_($I$(613,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectTorus$', function () {
return Clazz.new_($I$(614,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectHalfTorus$', function () {
return Clazz.new_($I$(615,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectAxis$', function () {
return Clazz.new_($I$(616,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectPlane$', function () {
return Clazz.new_($I$(617,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectDistanceRestraint$', function () {
return Clazz.new_($I$(618,1).c$$org_rcsb_cif_generic_BlockBuilder,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:28 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
