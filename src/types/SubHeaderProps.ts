export interface SubHeaderProps {
    activeTab: "home" | "cart";
    setActiveTab: (tab: "home" | "cart") => void;
  }