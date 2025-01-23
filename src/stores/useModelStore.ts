import {create} from "zustand";
import {initialData} from '../Database/data';

interface Model {
    id: string;
    modelName: string;
    modelType: string;
    description: string;
    createdOn: string;
    lastTrainedOn: string;
    status: string;
}

interface ModelStore {
  // data: Model[];
  data: typeof initialData;
  searchText: string;
  setSearchText: (text: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: (start: Date | null, end: Date | null) => void;

  setData: (data: typeof initialData) => void;
  filterData: () => void;
  filteredData: any[];
}

export const useModelStore = create<ModelStore>((set, get) => ({
  data: initialData,
  searchText: "",
  sortOrder: "asc",
  setSortOrder: (order) => set({ sortOrder: order }),
  startDate: new Date("01/01/2022"),
  endDate: new Date(),
  setDateRange: (start, end) => set(() => ({ startDate: start, endDate: end })),
  setData: (data) => set({ data }),
  filteredData: [],
  setSearchText: (text: any) => set({ searchText: text }),
  filterData: () => {
    const { data, searchText } = get();
    const filtered = data.filter((item: { modelName: string; createdOn: string | number | Date; }) => {
      const matchesSearch = item.modelName.toLowerCase().includes(searchText.toLowerCase());
      return matchesSearch;
    });
    set({ filteredData: filtered });
  },
}));
