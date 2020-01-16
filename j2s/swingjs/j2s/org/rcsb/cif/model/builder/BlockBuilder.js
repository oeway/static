(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.builder"),I$=[[0,'org.rcsb.cif.api.BaseBlock','org.rcsb.cif.model.builder.CategoryBuilder',['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSiteAnisotropBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSitesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSitesAltBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSitesAltEnsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSitesAltGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomSitesFootnoteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AtomTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AuditAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AuditConformBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AuditContactAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CellMeasurementBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CellMeasurementReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompChirBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompChirAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompPlaneBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompPlaneAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompTorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemCompTorValueBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkChirBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkChirAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkPlaneBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkPlaneAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkTorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemLinkTorValueBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemicalBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemicalConnAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemicalConnBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ChemicalFormulaBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CitationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CitationAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.CitationEditorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ComputingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabaseBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Database2Builder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBCaveatBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBMatrixBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBRemarkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBRevBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBRevRecordBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DatabasePDBTvectBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnAttenuatorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnDetectorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnMeasurementBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnOrientMatrixBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnOrientReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnRadiationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnRadiationWavelengthBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnReflnsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnScaleGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnSourceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnStandardReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnStandardsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityKeywordsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityNameComBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityNameSysBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityPolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntityPolySeqBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntryLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ExptlBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ExptlCrystalBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ExptlCrystalFaceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ExptlCrystalGrowBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ExptlCrystalGrowCompBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomContactBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomHbondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.GeomTorsionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.JournalBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.JournalIndexBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingAveragingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingIsomorphousBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMADBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMADClustBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMADExptBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMADRatioBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMADSetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRDerBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRDerReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRDerShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRDerSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingMIRShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingSetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PhasingSetReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PublBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PublAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PublBodyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PublManuscriptInclBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineAnalyzeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineBIsoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineFunctMinimizedBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineHistBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineLsRestrBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineLsRestrNcsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineLsRestrTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineLsShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineOccupancyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnSysAbsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnsScaleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnsShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.SoftwareBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructAsymBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructBiolBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructBiolGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructBiolKeywordsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructBiolViewBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructConfBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructConfTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructConnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructConnTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructKeywordsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructMonDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructMonNuclBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructMonProtBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructMonProtCisBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructNcsDomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructNcsDomLimBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructNcsEnsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructNcsEnsGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructNcsOperBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructRefBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructRefSeqBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructRefSeqDifBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSheetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSheetHbondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSheetOrderBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSheetRangeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSheetTopologyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSiteGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSiteKeywordsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.StructSiteViewBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.SymmetryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.SymmetryEquivBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.AuditLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.DiffrnReflnsClassBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.RefineLsClassBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ReflnsClassBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.SpaceGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.SpaceGroupSymopBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ValenceParamBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.ValenceRefBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxVersionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseMessageBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabasePDBObsSprBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseProcBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseRemarkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseStatusBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityNameBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPrereleaseSeqBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPolySeqSchemeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNonpolySchemeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructSheetHbondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxXplorFileBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineAuxFileBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseRelatedBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxExptlCrystalGrowCompBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxExptlCrystalGrowSolBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxExptlCrystalCryoTreatmentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineTlsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineTlsGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxContactAuthorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSGProjectBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAtomSiteAnisoTlsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSampleDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrExptlSampleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrExptlSampleConditionsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSpectrometerBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrExptlBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSoftwareBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrConstraintsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrEnsembleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrEnsembleRmsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrRepresentativeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrRefineBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrForceConstantsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.NdbStructConfNaBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.NdbStructFeatureNaBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.NdbStructNaBasePairBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.NdbStructNaBasePairStepBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.NdbOriginalNdbCoordinatesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityNonpolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingDmBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingDmShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingMADShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingMADSetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingMADSetShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingMADSetSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPhasingMRBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineComponentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityProdProtocolBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenProdOtherBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenProdOtherParameterBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenProdPcrBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenProdDigestBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenCloneBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenCloneLigationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenCloneRecombinationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenExpressBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenExpressTimepointBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenLysisBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenRefoldBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenProteolysisBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenChromBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenFractBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenPureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenCharacterBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConstructBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConstructFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRobotSystemBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxBufferBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxBufferComponentsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDomainBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDomainRangeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSequenceRangeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFeatureEntryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFeatureDomainBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFeatureSequenceRangeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFeatureAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFeatureMonomerBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxExptlPdBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReflnsTwinBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReRefinementBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyPropBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqFeaturePropBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructChemCompDiagnosticsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxCoordinateModelBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructChemCompFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDiffrnReflnsShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxBondDistanceLimitsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSolnScatterBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSolnScatterModelBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompDescriptorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompIdentifierBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompImportBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompAtomEditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompBondEditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompAuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateCloseContactBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateSymmContactBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateRmsdBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateRmsdAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateTorsionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidatePeptideOmegaBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateChiralBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidatePlanesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidatePlanesAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidateMainChainPlaneBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructConnAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxUnobsOrZeroOccResiduesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxUnobsOrZeroOccAtomsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntryDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructModResidueBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqInsertionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqDeletionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRemediationAtomSiteMappingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValidatePolymerLinkageBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxHelicalSymmetryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPointSymmetryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructEntityInstBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructOperListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAsymGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructMsymGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructLegacyOperListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompAtomFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeFamilyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityNonpolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityPolyLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityPolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntityPolySeqBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntitySequenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntitySrcNatBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeSynonymsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceEntitySubcomponentsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeAnnotationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeFeaturesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceMoleculeRelatedStructuresBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructGroupListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructGroupComponentsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructGroupComponentRangeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPrdAuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFamilyPrdAuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMoleculeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMoleculeFeaturesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxFamilyGroupIndexBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDistantSolventAtomsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructSpecialSymmetryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferencePublicationListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrAssignedChemShiftListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrChemShiftExperimentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrChemShiftRefBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrChemShiftReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrChemShiftSoftwareBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrConstraintFileBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSoftwareTaskBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSpectralDimBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSpectralPeakListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSpectralPeakSoftwareBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrSystematicChemShiftOffsetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrUploadBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditSupportBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompSubcomponentStructConnBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompSubcomponentEntityListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntitySrcNatBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EntitySrcGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcSynBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityPolyCompLinkListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxLinkedEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxLinkedEntityInstanceListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxLinkedEntityListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxLinkedEntityLinkListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityDescriptorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceLinkedEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceLinkedEntityCompListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceLinkedEntityCompLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxReferenceLinkedEntityLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRelatedExpDataSetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabaseStatusHistoryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEntityAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmVirusEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSamplePreparationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSampleSupportBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmBufferBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmVitrificationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmImagingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDetectorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmImageScansBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em2dProjectionSelectionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em3dReconstructionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em3dFittingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em3dFittingListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmHelicalEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmExperimentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSingleParticleEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmAdminBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmAuthorListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDbReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDbReferenceAuxiliaryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDepuiBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmObsoleteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSupersedeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEntityAssemblyMolwtBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEntityAssemblyNaturalsourceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEntityAssemblyRecombinantBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmVirusNaturalHostBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmVirusShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSpecimenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEmbeddingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmFiducialMarkersBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmFocusedIonBeamBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmGridPretreatmentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmUltramicrotomyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmHighPressureFreezingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmShadowingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmTomographySpecimenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmCrystalFormationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmStainingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSupportFilmBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmBufferComponentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDiffractionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDiffractionShellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDiffractionStatsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmTomographyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmImageRecordingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmImagingOpticsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmFinalClassificationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmStartModelBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmSoftwareBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmEulerAngleAssignmentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmCtfCorrectionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmVolumeSelectionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em3dCrystalEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Em2dCrystalEntityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmImageProcessingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmParticleSelectionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmMapBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmFscCurveBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmInterpretFigureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmLayerLinesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmStructureFactorsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmMapDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmMaskDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmFigureDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmLayerLinesDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.EmStructureFactorsDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSeqMapDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructRefSeqDifDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyPropDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyGenDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructOperListDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPointSymmetryDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxHelicalSymmetryDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyAuthEvidenceDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSolventAtomSiteMappingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMoleculeFeaturesDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompInstanceDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiStatusFlagsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiUploadBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiValidationStatusFlagsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompUploadDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiEntityStatusFlagsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiEntityFeaturesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepositionMessageInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepositionMessageFileReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepuiEntryDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDataProcessingStatusBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityInstanceFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntitySrcGenDepositorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelDescriptorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelAuditBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompModelReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxViewCategoryGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxViewCategoryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxViewItemBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxCoordBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConnectBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConnectTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConnectModificationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxConnectAtomBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabasePDBMasterBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDatabasePdbOmitBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDbrefBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDrugInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxInhibitorInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxIonInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxHybridBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNaStrandInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNonstandardListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPdbCompndBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPdbSourceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxProteinInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSolventInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSourceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructBiolFuncBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructPackGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxTrnaInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxUnpairBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRefineLsRestrNcsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructNcsVirusGenBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSequenceAnnotationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPostProcessDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxPostProcessStatusBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMissingResidueListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDataProcessingCellBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDataProcessingReflnsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDataProcessingDetectorBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompNonstandardBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityPolyProteinClassBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityNameTaxonomyTreeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityNameTaxonomyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityNameInstanceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxTableinfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxColumninfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValContactBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValSymContactBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRmchOutlierBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMissingAtomPolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxMissingAtomNonpolyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxValChiralBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAtlasBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSummaryFlagsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityFuncBindModeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityFuncEnzymeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityFuncRegulatoryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityFuncStructuralBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityFuncOtherBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityPolyDomainBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNaStructKeywdsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityPolyNaTypeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityPolyNaNonstandardBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxVirtualAngleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxVirtualBondBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxVirtualTorsionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSequencePatternBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStereochemistryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRmsDevsCovalentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxRmsDevsCovByMonomerBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSugarPhosphateGeometryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxNmrComputingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditConformExtensionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccMapmanBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccRsccMapmanBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccRsccMapmanOverallBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccDensityBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccGeometryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccDensityCorrBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDccMapBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepositGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxDepositGroupIndexBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyAuthEvidenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxStructAssemblyAuthClassificationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxCrystalAlignmentBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditRevisionHistoryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditRevisionGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditRevisionCategoryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditRevisionDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxAuditRevisionItemBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSupportingExpDataSetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSerialCrystallographyMeasurementBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryInjectionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSerialCrystallographySampleDeliveryFixedTargetBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxSerialCrystallographyDataReductionBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompSynonymsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompRelatedBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxChemCompAtomRelatedBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityBranchListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityBranchLinkBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxEntityBranchBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.PdbxBranchSchemeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStartingModelDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStartingComparativeModelsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStartingComputationalModelsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStartingModelSeqDifBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmModelRepresentationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStructAssemblyBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStructAssemblyDetailsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStructAssemblyClassListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStructAssemblyClassBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmModelingProtocolBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmMultiStateModelingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmOrderedEnsembleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmModelingPostProcessBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmEnsembleInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmModelListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmModelRepresentativeBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmDatasetListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmDatasetGroupBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmRelatedDatasetsBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmDatasetRelatedDbReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmExternalReferenceInfoBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmExternalFilesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmDatasetExternalReferenceBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmLocalizationDensityFilesBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmPredictedContactRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmHydroxylRadicalFpRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmCrossLinkListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmCrossLinkRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmCrossLinkResultBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmCrossLinkResultParametersBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Ihm2demClassAverageRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Ihm2demClassAverageFittingBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.Ihm3demRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmSasRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmStartingModelCoordBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmSphereObjSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGaussianObjSiteBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGaussianObjEnsembleBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmResiduesNotModeledBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmFeatureListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmPseudoSiteFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmPolyAtomFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmPolyResidueFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmNonPolyFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmInterfaceResidueFeatureBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmDerivedDistanceRestraintBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectListBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectCenterBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectTransformationBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectSphereBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectTorusBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectHalfTorusBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectAxisBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectPlaneBuilder'],['org.rcsb.cif.model.builder.CategoryBuilder','.IhmGeometricObjectDistanceRestraintBuilder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockBuilder", null, ['org.rcsb.cif.model.Builder','.BlockBuilder']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$org_rcsb_cif_model_builder_CifBuilder', function (blockName, parent) {
;C$.superclazz.c$$S.apply(this, [blockName]);C$.$init$.apply(this);
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Map$S,[this.categories, "unknown"]);
});

Clazz.newMeth(C$, 'enterCategory$S', function (categoryName) {
return Clazz.new_($I$(2,1).c$$S$org_rcsb_cif_model_builder_BlockBuilder,[categoryName, this]);
});

Clazz.newMeth(C$, 'digest$org_rcsb_cif_model_builder_CategoryBuilder', function (categoryBuilder) {
var category;
this.categories.put$TK$TV(, category);
return this;
});

Clazz.newMeth(C$, 'leaveBlock$', function () {
if (this.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot leave block with undefined parent file"]);
}return this.parent.digest$org_rcsb_cif_model_builder_BlockBuilder(this);
});

Clazz.newMeth(C$, 'enterAtomSite$', function () {
return Clazz.new_($I$(3,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSiteAnisotrop$', function () {
return Clazz.new_($I$(4,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSites$', function () {
return Clazz.new_($I$(5,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAlt$', function () {
return Clazz.new_($I$(6,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAltEns$', function () {
return Clazz.new_($I$(7,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesAltGen$', function () {
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomSitesFootnote$', function () {
return Clazz.new_($I$(9,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAtomType$', function () {
return Clazz.new_($I$(10,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAudit$', function () {
return Clazz.new_($I$(11,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditAuthor$', function () {
return Clazz.new_($I$(12,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditConform$', function () {
return Clazz.new_($I$(13,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditContactAuthor$', function () {
return Clazz.new_($I$(14,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCell$', function () {
return Clazz.new_($I$(15,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCellMeasurement$', function () {
return Clazz.new_($I$(16,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCellMeasurementRefln$', function () {
return Clazz.new_($I$(17,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemComp$', function () {
return Clazz.new_($I$(18,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompAngle$', function () {
return Clazz.new_($I$(19,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompAtom$', function () {
return Clazz.new_($I$(20,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompBond$', function () {
return Clazz.new_($I$(21,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompChir$', function () {
return Clazz.new_($I$(22,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompChirAtom$', function () {
return Clazz.new_($I$(23,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompLink$', function () {
return Clazz.new_($I$(24,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompPlane$', function () {
return Clazz.new_($I$(25,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompPlaneAtom$', function () {
return Clazz.new_($I$(26,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompTor$', function () {
return Clazz.new_($I$(27,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemCompTorValue$', function () {
return Clazz.new_($I$(28,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLink$', function () {
return Clazz.new_($I$(29,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkAngle$', function () {
return Clazz.new_($I$(30,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkBond$', function () {
return Clazz.new_($I$(31,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkChir$', function () {
return Clazz.new_($I$(32,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkChirAtom$', function () {
return Clazz.new_($I$(33,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkPlane$', function () {
return Clazz.new_($I$(34,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkPlaneAtom$', function () {
return Clazz.new_($I$(35,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkTor$', function () {
return Clazz.new_($I$(36,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemLinkTorValue$', function () {
return Clazz.new_($I$(37,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemical$', function () {
return Clazz.new_($I$(38,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalConnAtom$', function () {
return Clazz.new_($I$(39,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalConnBond$', function () {
return Clazz.new_($I$(40,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterChemicalFormula$', function () {
return Clazz.new_($I$(41,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitation$', function () {
return Clazz.new_($I$(42,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitationAuthor$', function () {
return Clazz.new_($I$(43,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterCitationEditor$', function () {
return Clazz.new_($I$(44,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterComputing$', function () {
return Clazz.new_($I$(45,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabase$', function () {
return Clazz.new_($I$(46,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabase2$', function () {
return Clazz.new_($I$(47,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBCaveat$', function () {
return Clazz.new_($I$(48,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBMatrix$', function () {
return Clazz.new_($I$(49,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRemark$', function () {
return Clazz.new_($I$(50,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRev$', function () {
return Clazz.new_($I$(51,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBRevRecord$', function () {
return Clazz.new_($I$(52,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDatabasePDBTvect$', function () {
return Clazz.new_($I$(53,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrn$', function () {
return Clazz.new_($I$(54,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnAttenuator$', function () {
return Clazz.new_($I$(55,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnDetector$', function () {
return Clazz.new_($I$(56,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnMeasurement$', function () {
return Clazz.new_($I$(57,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnOrientMatrix$', function () {
return Clazz.new_($I$(58,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnOrientRefln$', function () {
return Clazz.new_($I$(59,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRadiation$', function () {
return Clazz.new_($I$(60,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRadiationWavelength$', function () {
return Clazz.new_($I$(61,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnRefln$', function () {
return Clazz.new_($I$(62,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnReflns$', function () {
return Clazz.new_($I$(63,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnScaleGroup$', function () {
return Clazz.new_($I$(64,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnSource$', function () {
return Clazz.new_($I$(65,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnStandardRefln$', function () {
return Clazz.new_($I$(66,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnStandards$', function () {
return Clazz.new_($I$(67,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntity$', function () {
return Clazz.new_($I$(68,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityKeywords$', function () {
return Clazz.new_($I$(69,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityLink$', function () {
return Clazz.new_($I$(70,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityNameCom$', function () {
return Clazz.new_($I$(71,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityNameSys$', function () {
return Clazz.new_($I$(72,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityPoly$', function () {
return Clazz.new_($I$(73,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntityPolySeq$', function () {
return Clazz.new_($I$(74,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntry$', function () {
return Clazz.new_($I$(75,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntryLink$', function () {
return Clazz.new_($I$(76,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptl$', function () {
return Clazz.new_($I$(77,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystal$', function () {
return Clazz.new_($I$(78,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalFace$', function () {
return Clazz.new_($I$(79,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalGrow$', function () {
return Clazz.new_($I$(80,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterExptlCrystalGrowComp$', function () {
return Clazz.new_($I$(81,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeom$', function () {
return Clazz.new_($I$(82,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomAngle$', function () {
return Clazz.new_($I$(83,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomBond$', function () {
return Clazz.new_($I$(84,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomContact$', function () {
return Clazz.new_($I$(85,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomHbond$', function () {
return Clazz.new_($I$(86,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterGeomTorsion$', function () {
return Clazz.new_($I$(87,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterJournal$', function () {
return Clazz.new_($I$(88,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterJournalIndex$', function () {
return Clazz.new_($I$(89,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasing$', function () {
return Clazz.new_($I$(90,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingAveraging$', function () {
return Clazz.new_($I$(91,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingIsomorphous$', function () {
return Clazz.new_($I$(92,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMAD$', function () {
return Clazz.new_($I$(93,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADClust$', function () {
return Clazz.new_($I$(94,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADExpt$', function () {
return Clazz.new_($I$(95,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADRatio$', function () {
return Clazz.new_($I$(96,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMADSet$', function () {
return Clazz.new_($I$(97,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIR$', function () {
return Clazz.new_($I$(98,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDer$', function () {
return Clazz.new_($I$(99,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerRefln$', function () {
return Clazz.new_($I$(100,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerShell$', function () {
return Clazz.new_($I$(101,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRDerSite$', function () {
return Clazz.new_($I$(102,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingMIRShell$', function () {
return Clazz.new_($I$(103,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingSet$', function () {
return Clazz.new_($I$(104,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPhasingSetRefln$', function () {
return Clazz.new_($I$(105,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPubl$', function () {
return Clazz.new_($I$(106,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublAuthor$', function () {
return Clazz.new_($I$(107,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublBody$', function () {
return Clazz.new_($I$(108,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPublManuscriptIncl$', function () {
return Clazz.new_($I$(109,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefine$', function () {
return Clazz.new_($I$(110,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineAnalyze$', function () {
return Clazz.new_($I$(111,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineBIso$', function () {
return Clazz.new_($I$(112,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineFunctMinimized$', function () {
return Clazz.new_($I$(113,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineHist$', function () {
return Clazz.new_($I$(114,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestr$', function () {
return Clazz.new_($I$(115,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestrNcs$', function () {
return Clazz.new_($I$(116,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsRestrType$', function () {
return Clazz.new_($I$(117,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsShell$', function () {
return Clazz.new_($I$(118,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineOccupancy$', function () {
return Clazz.new_($I$(119,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefln$', function () {
return Clazz.new_($I$(120,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnSysAbs$', function () {
return Clazz.new_($I$(121,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflns$', function () {
return Clazz.new_($I$(122,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsScale$', function () {
return Clazz.new_($I$(123,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsShell$', function () {
return Clazz.new_($I$(124,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSoftware$', function () {
return Clazz.new_($I$(125,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStruct$', function () {
return Clazz.new_($I$(126,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructAsym$', function () {
return Clazz.new_($I$(127,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiol$', function () {
return Clazz.new_($I$(128,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolGen$', function () {
return Clazz.new_($I$(129,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolKeywords$', function () {
return Clazz.new_($I$(130,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructBiolView$', function () {
return Clazz.new_($I$(131,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConf$', function () {
return Clazz.new_($I$(132,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConfType$', function () {
return Clazz.new_($I$(133,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConn$', function () {
return Clazz.new_($I$(134,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructConnType$', function () {
return Clazz.new_($I$(135,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructKeywords$', function () {
return Clazz.new_($I$(136,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonDetails$', function () {
return Clazz.new_($I$(137,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonNucl$', function () {
return Clazz.new_($I$(138,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonProt$', function () {
return Clazz.new_($I$(139,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructMonProtCis$', function () {
return Clazz.new_($I$(140,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsDom$', function () {
return Clazz.new_($I$(141,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsDomLim$', function () {
return Clazz.new_($I$(142,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsEns$', function () {
return Clazz.new_($I$(143,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsEnsGen$', function () {
return Clazz.new_($I$(144,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructNcsOper$', function () {
return Clazz.new_($I$(145,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRef$', function () {
return Clazz.new_($I$(146,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRefSeq$', function () {
return Clazz.new_($I$(147,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructRefSeqDif$', function () {
return Clazz.new_($I$(148,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheet$', function () {
return Clazz.new_($I$(149,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetHbond$', function () {
return Clazz.new_($I$(150,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetOrder$', function () {
return Clazz.new_($I$(151,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetRange$', function () {
return Clazz.new_($I$(152,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSheetTopology$', function () {
return Clazz.new_($I$(153,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSite$', function () {
return Clazz.new_($I$(154,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteGen$', function () {
return Clazz.new_($I$(155,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteKeywords$', function () {
return Clazz.new_($I$(156,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterStructSiteView$', function () {
return Clazz.new_($I$(157,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSymmetry$', function () {
return Clazz.new_($I$(158,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSymmetryEquiv$', function () {
return Clazz.new_($I$(159,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterAuditLink$', function () {
return Clazz.new_($I$(160,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterDiffrnReflnsClass$', function () {
return Clazz.new_($I$(161,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterRefineLsClass$', function () {
return Clazz.new_($I$(162,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterReflnsClass$', function () {
return Clazz.new_($I$(163,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSpaceGroup$', function () {
return Clazz.new_($I$(164,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterSpaceGroupSymop$', function () {
return Clazz.new_($I$(165,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterValenceParam$', function () {
return Clazz.new_($I$(166,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterValenceRef$', function () {
return Clazz.new_($I$(167,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAudit$', function () {
return Clazz.new_($I$(168,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVersion$', function () {
return Clazz.new_($I$(169,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditAuthor$', function () {
return Clazz.new_($I$(170,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseMessage$', function () {
return Clazz.new_($I$(171,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePDBObsSpr$', function () {
return Clazz.new_($I$(172,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseProc$', function () {
return Clazz.new_($I$(173,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseRemark$', function () {
return Clazz.new_($I$(174,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseStatus$', function () {
return Clazz.new_($I$(175,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityName$', function () {
return Clazz.new_($I$(176,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPrereleaseSeq$', function () {
return Clazz.new_($I$(177,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPolySeqScheme$', function () {
return Clazz.new_($I$(178,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNonpolyScheme$', function () {
return Clazz.new_($I$(179,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefine$', function () {
return Clazz.new_($I$(180,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructSheetHbond$', function () {
return Clazz.new_($I$(181,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxXplorFile$', function () {
return Clazz.new_($I$(182,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineAuxFile$', function () {
return Clazz.new_($I$(183,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseRelated$', function () {
return Clazz.new_($I$(184,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityAssembly$', function () {
return Clazz.new_($I$(185,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalGrowComp$', function () {
return Clazz.new_($I$(186,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalGrowSol$', function () {
return Clazz.new_($I$(187,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlCrystalCryoTreatment$', function () {
return Clazz.new_($I$(188,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineTls$', function () {
return Clazz.new_($I$(189,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineTlsGroup$', function () {
return Clazz.new_($I$(190,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxContactAuthor$', function () {
return Clazz.new_($I$(191,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSGProject$', function () {
return Clazz.new_($I$(192,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAtomSiteAnisoTls$', function () {
return Clazz.new_($I$(193,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrDetails$', function () {
return Clazz.new_($I$(194,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSampleDetails$', function () {
return Clazz.new_($I$(195,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptlSample$', function () {
return Clazz.new_($I$(196,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptlSampleConditions$', function () {
return Clazz.new_($I$(197,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectrometer$', function () {
return Clazz.new_($I$(198,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrExptl$', function () {
return Clazz.new_($I$(199,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSoftware$', function () {
return Clazz.new_($I$(200,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrConstraints$', function () {
return Clazz.new_($I$(201,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrEnsemble$', function () {
return Clazz.new_($I$(202,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrEnsembleRms$', function () {
return Clazz.new_($I$(203,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrRepresentative$', function () {
return Clazz.new_($I$(204,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrRefine$', function () {
return Clazz.new_($I$(205,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrForceConstants$', function () {
return Clazz.new_($I$(206,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructConfNa$', function () {
return Clazz.new_($I$(207,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructFeatureNa$', function () {
return Clazz.new_($I$(208,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructNaBasePair$', function () {
return Clazz.new_($I$(209,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbStructNaBasePairStep$', function () {
return Clazz.new_($I$(210,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterNdbOriginalNdbCoordinates$', function () {
return Clazz.new_($I$(211,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNonpoly$', function () {
return Clazz.new_($I$(212,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingDm$', function () {
return Clazz.new_($I$(213,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingDmShell$', function () {
return Clazz.new_($I$(214,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADShell$', function () {
return Clazz.new_($I$(215,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSet$', function () {
return Clazz.new_($I$(216,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSetShell$', function () {
return Clazz.new_($I$(217,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMADSetSite$', function () {
return Clazz.new_($I$(218,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPhasingMR$', function () {
return Clazz.new_($I$(219,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineComponent$', function () {
return Clazz.new_($I$(220,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityProdProtocol$', function () {
return Clazz.new_($I$(221,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdOther$', function () {
return Clazz.new_($I$(222,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdOtherParameter$', function () {
return Clazz.new_($I$(223,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdPcr$', function () {
return Clazz.new_($I$(224,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProdDigest$', function () {
return Clazz.new_($I$(225,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenClone$', function () {
return Clazz.new_($I$(226,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCloneLigation$', function () {
return Clazz.new_($I$(227,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCloneRecombination$', function () {
return Clazz.new_($I$(228,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenExpress$', function () {
return Clazz.new_($I$(229,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenExpressTimepoint$', function () {
return Clazz.new_($I$(230,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenLysis$', function () {
return Clazz.new_($I$(231,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenRefold$', function () {
return Clazz.new_($I$(232,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenProteolysis$', function () {
return Clazz.new_($I$(233,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenChrom$', function () {
return Clazz.new_($I$(234,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenFract$', function () {
return Clazz.new_($I$(235,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenPure$', function () {
return Clazz.new_($I$(236,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenCharacter$', function () {
return Clazz.new_($I$(237,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConstruct$', function () {
return Clazz.new_($I$(238,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConstructFeature$', function () {
return Clazz.new_($I$(239,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRobotSystem$', function () {
return Clazz.new_($I$(240,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBuffer$', function () {
return Clazz.new_($I$(241,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBufferComponents$', function () {
return Clazz.new_($I$(242,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDomain$', function () {
return Clazz.new_($I$(243,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDomainRange$', function () {
return Clazz.new_($I$(244,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequenceRange$', function () {
return Clazz.new_($I$(245,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureEntry$', function () {
return Clazz.new_($I$(246,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureDomain$', function () {
return Clazz.new_($I$(247,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureSequenceRange$', function () {
return Clazz.new_($I$(248,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureAssembly$', function () {
return Clazz.new_($I$(249,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFeatureMonomer$', function () {
return Clazz.new_($I$(250,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxExptlPd$', function () {
return Clazz.new_($I$(251,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReflnsTwin$', function () {
return Clazz.new_($I$(252,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructInfo$', function () {
return Clazz.new_($I$(253,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReRefinement$', function () {
return Clazz.new_($I$(254,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyProp$', function () {
return Clazz.new_($I$(255,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqFeature$', function () {
return Clazz.new_($I$(256,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqFeatureProp$', function () {
return Clazz.new_($I$(257,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructChemCompDiagnostics$', function () {
return Clazz.new_($I$(258,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompFeature$', function () {
return Clazz.new_($I$(259,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCoordinateModel$', function () {
return Clazz.new_($I$(260,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructChemCompFeature$', function () {
return Clazz.new_($I$(261,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDiffrnReflnsShell$', function () {
return Clazz.new_($I$(262,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBondDistanceLimits$', function () {
return Clazz.new_($I$(263,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolnScatter$', function () {
return Clazz.new_($I$(264,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolnScatterModel$', function () {
return Clazz.new_($I$(265,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompDescriptor$', function () {
return Clazz.new_($I$(266,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompIdentifier$', function () {
return Clazz.new_($I$(267,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompImport$', function () {
return Clazz.new_($I$(268,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomEdit$', function () {
return Clazz.new_($I$(269,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompBondEdit$', function () {
return Clazz.new_($I$(270,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAudit$', function () {
return Clazz.new_($I$(271,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateCloseContact$', function () {
return Clazz.new_($I$(272,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateSymmContact$', function () {
return Clazz.new_($I$(273,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateRmsdBond$', function () {
return Clazz.new_($I$(274,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateRmsdAngle$', function () {
return Clazz.new_($I$(275,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateTorsion$', function () {
return Clazz.new_($I$(276,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePeptideOmega$', function () {
return Clazz.new_($I$(277,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateChiral$', function () {
return Clazz.new_($I$(278,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePlanes$', function () {
return Clazz.new_($I$(279,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePlanesAtom$', function () {
return Clazz.new_($I$(280,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidateMainChainPlane$', function () {
return Clazz.new_($I$(281,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructConnAngle$', function () {
return Clazz.new_($I$(282,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnobsOrZeroOccResidues$', function () {
return Clazz.new_($I$(283,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnobsOrZeroOccAtoms$', function () {
return Clazz.new_($I$(284,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntryDetails$', function () {
return Clazz.new_($I$(285,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructModResidue$', function () {
return Clazz.new_($I$(286,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqInsertion$', function () {
return Clazz.new_($I$(287,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDeletion$', function () {
return Clazz.new_($I$(288,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRemediationAtomSiteMapping$', function () {
return Clazz.new_($I$(289,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValidatePolymerLinkage$', function () {
return Clazz.new_($I$(290,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHelicalSymmetry$', function () {
return Clazz.new_($I$(291,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPointSymmetry$', function () {
return Clazz.new_($I$(292,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructEntityInst$', function () {
return Clazz.new_($I$(293,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructOperList$', function () {
return Clazz.new_($I$(294,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssembly$', function () {
return Clazz.new_($I$(295,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyGen$', function () {
return Clazz.new_($I$(296,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAsymGen$', function () {
return Clazz.new_($I$(297,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructMsymGen$', function () {
return Clazz.new_($I$(298,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructLegacyOperList$', function () {
return Clazz.new_($I$(299,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomFeature$', function () {
return Clazz.new_($I$(300,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeFamily$', function () {
return Clazz.new_($I$(301,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeList$', function () {
return Clazz.new_($I$(302,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMolecule$', function () {
return Clazz.new_($I$(303,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityList$', function () {
return Clazz.new_($I$(304,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityNonpoly$', function () {
return Clazz.new_($I$(305,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityLink$', function () {
return Clazz.new_($I$(306,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPolyLink$', function () {
return Clazz.new_($I$(307,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPoly$', function () {
return Clazz.new_($I$(308,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntityPolySeq$', function () {
return Clazz.new_($I$(309,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySequence$', function () {
return Clazz.new_($I$(310,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySrcNat$', function () {
return Clazz.new_($I$(311,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeDetails$', function () {
return Clazz.new_($I$(312,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeSynonyms$', function () {
return Clazz.new_($I$(313,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceEntitySubcomponents$', function () {
return Clazz.new_($I$(314,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeAnnotation$', function () {
return Clazz.new_($I$(315,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeFeatures$', function () {
return Clazz.new_($I$(316,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceMoleculeRelatedStructures$', function () {
return Clazz.new_($I$(317,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupList$', function () {
return Clazz.new_($I$(318,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupComponents$', function () {
return Clazz.new_($I$(319,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructGroupComponentRange$', function () {
return Clazz.new_($I$(320,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPrdAudit$', function () {
return Clazz.new_($I$(321,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFamilyPrdAudit$', function () {
return Clazz.new_($I$(322,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMolecule$', function () {
return Clazz.new_($I$(323,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMoleculeFeatures$', function () {
return Clazz.new_($I$(324,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxFamilyGroupIndex$', function () {
return Clazz.new_($I$(325,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDistantSolventAtoms$', function () {
return Clazz.new_($I$(326,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructSpecialSymmetry$', function () {
return Clazz.new_($I$(327,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferencePublicationList$', function () {
return Clazz.new_($I$(328,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrAssignedChemShiftList$', function () {
return Clazz.new_($I$(329,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftExperiment$', function () {
return Clazz.new_($I$(330,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftRef$', function () {
return Clazz.new_($I$(331,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftReference$', function () {
return Clazz.new_($I$(332,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrChemShiftSoftware$', function () {
return Clazz.new_($I$(333,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrConstraintFile$', function () {
return Clazz.new_($I$(334,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSoftwareTask$', function () {
return Clazz.new_($I$(335,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralDim$', function () {
return Clazz.new_($I$(336,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralPeakList$', function () {
return Clazz.new_($I$(337,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSpectralPeakSoftware$', function () {
return Clazz.new_($I$(338,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrSystematicChemShiftOffset$', function () {
return Clazz.new_($I$(339,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrUpload$', function () {
return Clazz.new_($I$(340,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditSupport$', function () {
return Clazz.new_($I$(341,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSubcomponentStructConn$', function () {
return Clazz.new_($I$(342,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSubcomponentEntityList$', function () {
return Clazz.new_($I$(343,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntitySrcNat$', function () {
return Clazz.new_($I$(344,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEntitySrcGen$', function () {
return Clazz.new_($I$(345,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcSyn$', function () {
return Clazz.new_($I$(346,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyCompLinkList$', function () {
return Clazz.new_($I$(347,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntity$', function () {
return Clazz.new_($I$(348,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityInstanceList$', function () {
return Clazz.new_($I$(349,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityList$', function () {
return Clazz.new_($I$(350,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxLinkedEntityLinkList$', function () {
return Clazz.new_($I$(351,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityDescriptor$', function () {
return Clazz.new_($I$(352,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntity$', function () {
return Clazz.new_($I$(353,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityCompList$', function () {
return Clazz.new_($I$(354,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityCompLink$', function () {
return Clazz.new_($I$(355,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxReferenceLinkedEntityLink$', function () {
return Clazz.new_($I$(356,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRelatedExpDataSet$', function () {
return Clazz.new_($I$(357,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabaseStatusHistory$', function () {
return Clazz.new_($I$(358,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAssembly$', function () {
return Clazz.new_($I$(359,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssembly$', function () {
return Clazz.new_($I$(360,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusEntity$', function () {
return Clazz.new_($I$(361,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSamplePreparation$', function () {
return Clazz.new_($I$(362,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSampleSupport$', function () {
return Clazz.new_($I$(363,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmBuffer$', function () {
return Clazz.new_($I$(364,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVitrification$', function () {
return Clazz.new_($I$(365,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImaging$', function () {
return Clazz.new_($I$(366,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDetector$', function () {
return Clazz.new_($I$(367,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageScans$', function () {
return Clazz.new_($I$(368,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm2dProjectionSelection$', function () {
return Clazz.new_($I$(369,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dReconstruction$', function () {
return Clazz.new_($I$(370,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dFitting$', function () {
return Clazz.new_($I$(371,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dFittingList$', function () {
return Clazz.new_($I$(372,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmHelicalEntity$', function () {
return Clazz.new_($I$(373,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmExperiment$', function () {
return Clazz.new_($I$(374,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSingleParticleEntity$', function () {
return Clazz.new_($I$(375,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAdmin$', function () {
return Clazz.new_($I$(376,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmAuthorList$', function () {
return Clazz.new_($I$(377,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDbReference$', function () {
return Clazz.new_($I$(378,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDbReferenceAuxiliary$', function () {
return Clazz.new_($I$(379,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDepui$', function () {
return Clazz.new_($I$(380,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmObsolete$', function () {
return Clazz.new_($I$(381,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSupersede$', function () {
return Clazz.new_($I$(382,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyMolwt$', function () {
return Clazz.new_($I$(383,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyNaturalsource$', function () {
return Clazz.new_($I$(384,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEntityAssemblyRecombinant$', function () {
return Clazz.new_($I$(385,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusNaturalHost$', function () {
return Clazz.new_($I$(386,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVirusShell$', function () {
return Clazz.new_($I$(387,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSpecimen$', function () {
return Clazz.new_($I$(388,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEmbedding$', function () {
return Clazz.new_($I$(389,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFiducialMarkers$', function () {
return Clazz.new_($I$(390,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFocusedIonBeam$', function () {
return Clazz.new_($I$(391,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmGridPretreatment$', function () {
return Clazz.new_($I$(392,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmUltramicrotomy$', function () {
return Clazz.new_($I$(393,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmHighPressureFreezing$', function () {
return Clazz.new_($I$(394,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmShadowing$', function () {
return Clazz.new_($I$(395,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmTomographySpecimen$', function () {
return Clazz.new_($I$(396,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmCrystalFormation$', function () {
return Clazz.new_($I$(397,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStaining$', function () {
return Clazz.new_($I$(398,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSupportFilm$', function () {
return Clazz.new_($I$(399,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmBufferComponent$', function () {
return Clazz.new_($I$(400,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffraction$', function () {
return Clazz.new_($I$(401,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffractionShell$', function () {
return Clazz.new_($I$(402,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDiffractionStats$', function () {
return Clazz.new_($I$(403,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmTomography$', function () {
return Clazz.new_($I$(404,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageRecording$', function () {
return Clazz.new_($I$(405,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImagingOptics$', function () {
return Clazz.new_($I$(406,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFinalClassification$', function () {
return Clazz.new_($I$(407,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStartModel$', function () {
return Clazz.new_($I$(408,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmSoftware$', function () {
return Clazz.new_($I$(409,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmEulerAngleAssignment$', function () {
return Clazz.new_($I$(410,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmCtfCorrection$', function () {
return Clazz.new_($I$(411,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmVolumeSelection$', function () {
return Clazz.new_($I$(412,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm3dCrystalEntity$', function () {
return Clazz.new_($I$(413,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEm2dCrystalEntity$', function () {
return Clazz.new_($I$(414,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmImageProcessing$', function () {
return Clazz.new_($I$(415,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmParticleSelection$', function () {
return Clazz.new_($I$(416,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMap$', function () {
return Clazz.new_($I$(417,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFscCurve$', function () {
return Clazz.new_($I$(418,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmInterpretFigure$', function () {
return Clazz.new_($I$(419,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmLayerLines$', function () {
return Clazz.new_($I$(420,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStructureFactors$', function () {
return Clazz.new_($I$(421,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmDepositorInfo$', function () {
return Clazz.new_($I$(422,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMapDepositorInfo$', function () {
return Clazz.new_($I$(423,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmMaskDepositorInfo$', function () {
return Clazz.new_($I$(424,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmFigureDepositorInfo$', function () {
return Clazz.new_($I$(425,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmLayerLinesDepositorInfo$', function () {
return Clazz.new_($I$(426,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterEmStructureFactorsDepositorInfo$', function () {
return Clazz.new_($I$(427,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSeqMapDepositorInfo$', function () {
return Clazz.new_($I$(428,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompDepositorInfo$', function () {
return Clazz.new_($I$(429,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDepositorInfo$', function () {
return Clazz.new_($I$(430,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructRefSeqDifDepositorInfo$', function () {
return Clazz.new_($I$(431,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyPropDepositorInfo$', function () {
return Clazz.new_($I$(432,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyDepositorInfo$', function () {
return Clazz.new_($I$(433,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyGenDepositorInfo$', function () {
return Clazz.new_($I$(434,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructOperListDepositorInfo$', function () {
return Clazz.new_($I$(435,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPointSymmetryDepositorInfo$', function () {
return Clazz.new_($I$(436,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHelicalSymmetryDepositorInfo$', function () {
return Clazz.new_($I$(437,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthEvidenceDepositorInfo$', function () {
return Clazz.new_($I$(438,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolventAtomSiteMapping$', function () {
return Clazz.new_($I$(439,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMoleculeFeaturesDepositorInfo$', function () {
return Clazz.new_($I$(440,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompInstanceDepositorInfo$', function () {
return Clazz.new_($I$(441,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiStatusFlags$', function () {
return Clazz.new_($I$(442,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiUpload$', function () {
return Clazz.new_($I$(443,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiValidationStatusFlags$', function () {
return Clazz.new_($I$(444,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompUploadDepositorInfo$', function () {
return Clazz.new_($I$(445,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntityStatusFlags$', function () {
return Clazz.new_($I$(446,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntityFeatures$', function () {
return Clazz.new_($I$(447,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositionMessageInfo$', function () {
return Clazz.new_($I$(448,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositionMessageFileReference$', function () {
return Clazz.new_($I$(449,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepuiEntryDetails$', function () {
return Clazz.new_($I$(450,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingStatus$', function () {
return Clazz.new_($I$(451,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityInstanceFeature$', function () {
return Clazz.new_($I$(452,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntitySrcGenDepositorInfo$', function () {
return Clazz.new_($I$(453,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModel$', function () {
return Clazz.new_($I$(454,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelAtom$', function () {
return Clazz.new_($I$(455,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelBond$', function () {
return Clazz.new_($I$(456,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelFeature$', function () {
return Clazz.new_($I$(457,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelDescriptor$', function () {
return Clazz.new_($I$(458,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelAudit$', function () {
return Clazz.new_($I$(459,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompModelReference$', function () {
return Clazz.new_($I$(460,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewCategoryGroup$', function () {
return Clazz.new_($I$(461,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewCategory$', function () {
return Clazz.new_($I$(462,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxViewItem$', function () {
return Clazz.new_($I$(463,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCoord$', function () {
return Clazz.new_($I$(464,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnect$', function () {
return Clazz.new_($I$(465,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectType$', function () {
return Clazz.new_($I$(466,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectModification$', function () {
return Clazz.new_($I$(467,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxConnectAtom$', function () {
return Clazz.new_($I$(468,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePDBMaster$', function () {
return Clazz.new_($I$(469,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDatabasePdbOmit$', function () {
return Clazz.new_($I$(470,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDbref$', function () {
return Clazz.new_($I$(471,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDrugInfo$', function () {
return Clazz.new_($I$(472,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxInhibitorInfo$', function () {
return Clazz.new_($I$(473,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxIonInfo$', function () {
return Clazz.new_($I$(474,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxHybrid$', function () {
return Clazz.new_($I$(475,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNaStrandInfo$', function () {
return Clazz.new_($I$(476,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNonstandardList$', function () {
return Clazz.new_($I$(477,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPdbCompnd$', function () {
return Clazz.new_($I$(478,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPdbSource$', function () {
return Clazz.new_($I$(479,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxProteinInfo$', function () {
return Clazz.new_($I$(480,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSolventInfo$', function () {
return Clazz.new_($I$(481,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSource$', function () {
return Clazz.new_($I$(482,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructBiolFunc$', function () {
return Clazz.new_($I$(483,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructPackGen$', function () {
return Clazz.new_($I$(484,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxTrnaInfo$', function () {
return Clazz.new_($I$(485,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxUnpair$', function () {
return Clazz.new_($I$(486,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRefineLsRestrNcs$', function () {
return Clazz.new_($I$(487,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructNcsVirusGen$', function () {
return Clazz.new_($I$(488,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequenceAnnotation$', function () {
return Clazz.new_($I$(489,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPostProcessDetails$', function () {
return Clazz.new_($I$(490,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxPostProcessStatus$', function () {
return Clazz.new_($I$(491,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructLink$', function () {
return Clazz.new_($I$(492,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingResidueList$', function () {
return Clazz.new_($I$(493,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingCell$', function () {
return Clazz.new_($I$(494,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingReflns$', function () {
return Clazz.new_($I$(495,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDataProcessingDetector$', function () {
return Clazz.new_($I$(496,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompNonstandard$', function () {
return Clazz.new_($I$(497,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyProteinClass$', function () {
return Clazz.new_($I$(498,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameTaxonomyTree$', function () {
return Clazz.new_($I$(499,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameTaxonomy$', function () {
return Clazz.new_($I$(500,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityNameInstance$', function () {
return Clazz.new_($I$(501,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxTableinfo$', function () {
return Clazz.new_($I$(502,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxColumninfo$', function () {
return Clazz.new_($I$(503,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValAngle$', function () {
return Clazz.new_($I$(504,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValBond$', function () {
return Clazz.new_($I$(505,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValContact$', function () {
return Clazz.new_($I$(506,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValSymContact$', function () {
return Clazz.new_($I$(507,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmchOutlier$', function () {
return Clazz.new_($I$(508,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingAtomPoly$', function () {
return Clazz.new_($I$(509,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxMissingAtomNonpoly$', function () {
return Clazz.new_($I$(510,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxValChiral$', function () {
return Clazz.new_($I$(511,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAtlas$', function () {
return Clazz.new_($I$(512,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSummaryFlags$', function () {
return Clazz.new_($I$(513,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncBindMode$', function () {
return Clazz.new_($I$(514,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncEnzyme$', function () {
return Clazz.new_($I$(515,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncRegulatory$', function () {
return Clazz.new_($I$(516,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncStructural$', function () {
return Clazz.new_($I$(517,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityFuncOther$', function () {
return Clazz.new_($I$(518,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyDomain$', function () {
return Clazz.new_($I$(519,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNaStructKeywds$', function () {
return Clazz.new_($I$(520,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyNaType$', function () {
return Clazz.new_($I$(521,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityPolyNaNonstandard$', function () {
return Clazz.new_($I$(522,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualAngle$', function () {
return Clazz.new_($I$(523,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualBond$', function () {
return Clazz.new_($I$(524,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxVirtualTorsion$', function () {
return Clazz.new_($I$(525,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSequencePattern$', function () {
return Clazz.new_($I$(526,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStereochemistry$', function () {
return Clazz.new_($I$(527,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmsDevsCovalent$', function () {
return Clazz.new_($I$(528,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxRmsDevsCovByMonomer$', function () {
return Clazz.new_($I$(529,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSugarPhosphateGeometry$', function () {
return Clazz.new_($I$(530,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxNmrComputing$', function () {
return Clazz.new_($I$(531,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditConformExtension$', function () {
return Clazz.new_($I$(532,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccMapman$', function () {
return Clazz.new_($I$(533,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccRsccMapman$', function () {
return Clazz.new_($I$(534,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccRsccMapmanOverall$', function () {
return Clazz.new_($I$(535,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccDensity$', function () {
return Clazz.new_($I$(536,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccGeometry$', function () {
return Clazz.new_($I$(537,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccDensityCorr$', function () {
return Clazz.new_($I$(538,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDccMap$', function () {
return Clazz.new_($I$(539,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositGroup$', function () {
return Clazz.new_($I$(540,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxDepositGroupIndex$', function () {
return Clazz.new_($I$(541,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthEvidence$', function () {
return Clazz.new_($I$(542,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxStructAssemblyAuthClassification$', function () {
return Clazz.new_($I$(543,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxCrystalAlignment$', function () {
return Clazz.new_($I$(544,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionHistory$', function () {
return Clazz.new_($I$(545,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionGroup$', function () {
return Clazz.new_($I$(546,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionCategory$', function () {
return Clazz.new_($I$(547,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionDetails$', function () {
return Clazz.new_($I$(548,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxAuditRevisionItem$', function () {
return Clazz.new_($I$(549,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSupportingExpDataSet$', function () {
return Clazz.new_($I$(550,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographyMeasurement$', function () {
return Clazz.new_($I$(551,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDelivery$', function () {
return Clazz.new_($I$(552,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDeliveryInjection$', function () {
return Clazz.new_($I$(553,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographySampleDeliveryFixedTarget$', function () {
return Clazz.new_($I$(554,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxSerialCrystallographyDataReduction$', function () {
return Clazz.new_($I$(555,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompSynonyms$', function () {
return Clazz.new_($I$(556,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompRelated$', function () {
return Clazz.new_($I$(557,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxChemCompAtomRelated$', function () {
return Clazz.new_($I$(558,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranchList$', function () {
return Clazz.new_($I$(559,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranchLink$', function () {
return Clazz.new_($I$(560,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxEntityBranch$', function () {
return Clazz.new_($I$(561,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterPdbxBranchScheme$', function () {
return Clazz.new_($I$(562,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelDetails$', function () {
return Clazz.new_($I$(563,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingComparativeModels$', function () {
return Clazz.new_($I$(564,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingComputationalModels$', function () {
return Clazz.new_($I$(565,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelSeqDif$', function () {
return Clazz.new_($I$(566,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelRepresentation$', function () {
return Clazz.new_($I$(567,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssembly$', function () {
return Clazz.new_($I$(568,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyDetails$', function () {
return Clazz.new_($I$(569,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyClassList$', function () {
return Clazz.new_($I$(570,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStructAssemblyClass$', function () {
return Clazz.new_($I$(571,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelingProtocol$', function () {
return Clazz.new_($I$(572,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmMultiStateModeling$', function () {
return Clazz.new_($I$(573,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmOrderedEnsemble$', function () {
return Clazz.new_($I$(574,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelingPostProcess$', function () {
return Clazz.new_($I$(575,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmEnsembleInfo$', function () {
return Clazz.new_($I$(576,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelList$', function () {
return Clazz.new_($I$(577,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmModelRepresentative$', function () {
return Clazz.new_($I$(578,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetList$', function () {
return Clazz.new_($I$(579,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetGroup$', function () {
return Clazz.new_($I$(580,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmRelatedDatasets$', function () {
return Clazz.new_($I$(581,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetRelatedDbReference$', function () {
return Clazz.new_($I$(582,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmExternalReferenceInfo$', function () {
return Clazz.new_($I$(583,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmExternalFiles$', function () {
return Clazz.new_($I$(584,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDatasetExternalReference$', function () {
return Clazz.new_($I$(585,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmLocalizationDensityFiles$', function () {
return Clazz.new_($I$(586,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPredictedContactRestraint$', function () {
return Clazz.new_($I$(587,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmHydroxylRadicalFpRestraint$', function () {
return Clazz.new_($I$(588,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkList$', function () {
return Clazz.new_($I$(589,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkRestraint$', function () {
return Clazz.new_($I$(590,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkResult$', function () {
return Clazz.new_($I$(591,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmCrossLinkResultParameters$', function () {
return Clazz.new_($I$(592,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm2demClassAverageRestraint$', function () {
return Clazz.new_($I$(593,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm2demClassAverageFitting$', function () {
return Clazz.new_($I$(594,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhm3demRestraint$', function () {
return Clazz.new_($I$(595,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmSasRestraint$', function () {
return Clazz.new_($I$(596,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmStartingModelCoord$', function () {
return Clazz.new_($I$(597,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmSphereObjSite$', function () {
return Clazz.new_($I$(598,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGaussianObjSite$', function () {
return Clazz.new_($I$(599,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGaussianObjEnsemble$', function () {
return Clazz.new_($I$(600,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmResiduesNotModeled$', function () {
return Clazz.new_($I$(601,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmFeatureList$', function () {
return Clazz.new_($I$(602,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPseudoSiteFeature$', function () {
return Clazz.new_($I$(603,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPolyAtomFeature$', function () {
return Clazz.new_($I$(604,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmPolyResidueFeature$', function () {
return Clazz.new_($I$(605,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmNonPolyFeature$', function () {
return Clazz.new_($I$(606,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmInterfaceResidueFeature$', function () {
return Clazz.new_($I$(607,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmDerivedDistanceRestraint$', function () {
return Clazz.new_($I$(608,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectList$', function () {
return Clazz.new_($I$(609,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectCenter$', function () {
return Clazz.new_($I$(610,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectTransformation$', function () {
return Clazz.new_($I$(611,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectSphere$', function () {
return Clazz.new_($I$(612,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectTorus$', function () {
return Clazz.new_($I$(613,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectHalfTorus$', function () {
return Clazz.new_($I$(614,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectAxis$', function () {
return Clazz.new_($I$(615,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectPlane$', function () {
return Clazz.new_($I$(616,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$, 'enterIhmGeometricObjectDistanceRestraint$', function () {
return Clazz.new_($I$(617,1).c$$org_rcsb_cif_model_builder_BlockBuilder,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
