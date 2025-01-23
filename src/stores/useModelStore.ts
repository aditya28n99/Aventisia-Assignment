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

  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

export const useModelStore = create<ModelStore>((set, get) => ({
  data: initialData,
  searchText: "",
  sortOrder: "asc",
  setSortOrder: (order) => set({ sortOrder: order }),
  startDate: new Date("01/01/2022"),
  endDate: new Date(),
  setDateRange: (start, end) => set(() => ({ startDate: start, endDate: end })),
  setSearchText: (text: any) => set({ searchText: text }),

  currentPage: 0,
  itemsPerPage: 10,
  setCurrentPage: (page: any) => set({ currentPage: page }),
}));
