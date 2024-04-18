import { create} from "zustand";

type ToolsStoreType = {
    selectedTool: number;
    setSelectedTool: (id: number) => void;
    };

export const useToolsStore = create<ToolsStoreType>((set) => ({
  selectedTool: 1,
  setSelectedTool: (id: number) => set({ selectedTool: id }),
}));