// --- Type Definitions ---
export interface BmcItem {
  id: string;
  text: string;
}

export interface BmcData {
  keyPartners: BmcItem[];
  keyActivities: BmcItem[];
  valuePropositions: BmcItem[];
  customerRelationships: BmcItem[];
  channels: BmcItem[];
  customerSegments: BmcItem[];
  costStructure: BmcItem[];
  revenueStreams: BmcItem[];
  keyResources: BmcItem[];
}

export const DEFAULT_BMC: BmcData = {
  keyPartners: [],
  keyActivities: [],
  valuePropositions: [],
  customerRelationships: [],
  channels: [],
  customerSegments: [],
  costStructure: [],
  revenueStreams: [],
  keyResources: [],
};


export type BmcSection = keyof BmcData;